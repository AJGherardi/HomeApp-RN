import { BleManager, Device, BleError, Subscription } from 'react-native-ble-plx';
import { channel, put, take } from '@paybase/csp';
import {
    setProvider,
    genKeyPair,
    addBase64,
    dropBase64,
    genSharedSecret,
    calculateCMAC,
    encryptCCM,
    genSecureRandom,
} from 'alexander-gherardi-mesh-crypto';

// service uuids
const mpService = '00001827-0000-1000-8000-00805f9b34fb';
const mpIn = '00002adb-0000-1000-8000-00805f9b34fb';
const mpOut = '00002adc-0000-1000-8000-00805f9b34fb';
// mesh constants
const SALT_KEY = 'AAAAAAAAAAAAAAAAAAAAAA==';
const NO_OOB = 'AAAAAAAAAAAAAAAAAAAAAA==';
const PRCK = 'cHJjaw==';
const PRSN = 'cHJzbg==';
const PRSK = 'cHJzaw==';
const PRDK = 'cHJkaw==';

const provisioningMessages = channel<string>();

var manager: BleManager
var subscription: Subscription

export function findDevices(callback: (error: BleError | null, scannedDevice: Device | null) => void) {
    manager = new BleManager();
    subscription = manager.onStateChange(async state => {
        if (state === 'PoweredOn') {
            console.log("on")
            manager.startDeviceScan([mpService], null, callback)
        }
        // if (state === 'PoweredOff') {
        //   await this.manager.enable();
        //   this.scanAndConnect();
        //   subscription.remove();
        // }
    }, true);
}

export function stopDeviceScan() {
    manager.stopDeviceScan();
    subscription.remove();
}

export async function provisionDevice(
    device: Device,
    networkKey: string,
    keyIndex: string,
    flags: string,
    ivIndex: string,
    unicastAddress: string
): Promise<string> {
    await device.connect();
    await device.discoverAllServicesAndCharacteristics();
    await device.requestMTU(128);

    device.monitorCharacteristicForService(
        mpService,
        mpOut,
        async (error, characteristic) => {
            if (characteristic?.value != null) {
                put(provisioningMessages, characteristic.value);
            }
        },
    );
    // Send invite
    await device.writeCharacteristicWithoutResponseForService(
        mpService,
        mpIn,
        'AwAA',
    );
    // recive capabilities
    var msg = await take(provisioningMessages);
    var capabilities = await dropBase64(msg, 2);
    // send start msg
    await device.writeCharacteristicWithoutResponseForService(
        mpService,
        mpIn,
        'AwIAAAAAAA==',
    );
    // generate keys
    await setProvider();
    var publicProvisionerKey = await genKeyPair();
    var publickeyPdu = await addBase64('AwM=', publicProvisionerKey);
    // send public key
    await device.writeCharacteristicWithoutResponseForService(
        mpService,
        mpIn,
        publickeyPdu,
    );
    // get secret and get confirmation pdu
    msg = await take(provisioningMessages);
    var publicDeviceKey = await dropBase64(msg, 2);
    var secret = await genSharedSecret(publicDeviceKey);
    var inputs = await getImputs(
        capabilities,
        publicProvisionerKey,
        publicDeviceKey,
    );
    var confirmationSalt = await calculateCMAC(inputs, SALT_KEY);
    var confirmationKey = await calculateK1(PRCK, secret, confirmationSalt);
    var provisionerRandom = await genSecureRandom(16);
    var confirmationData = await addBase64(provisionerRandom, NO_OOB);
    var confirmation = await calculateCMAC(confirmationData, confirmationKey);
    var confirmationPdu = await addBase64('AwU=', confirmation);
    // send confirmation
    await device.writeCharacteristicWithoutResponseForService(
        mpService,
        mpIn,
        confirmationPdu,
    );
    // get device confirmation
    msg = await take(provisioningMessages);
    var deviceConfirmation = await dropBase64(msg, 2);
    // send random
    var randomPdu = await addBase64('AwY=', provisionerRandom);
    await device.writeCharacteristicWithoutResponseForService(
        mpService,
        mpIn,
        randomPdu,
    );
    // get device random
    msg = await take(provisioningMessages);
    var deviceRandom = await dropBase64(msg, 2);
    // gen and send prov data
    var provSalt = await genProvSalt(
        confirmationSalt,
        provisionerRandom,
        deviceRandom,
    );
    var sessionKey = await calculateK1(PRSK, secret, provSalt);
    var sessionNonce = await getSessionNonce(secret, provSalt);
    var deviceKey = await calculateK1(PRDK, secret, provSalt);
    var provData = await genProvData(
        networkKey,
        keyIndex,
        flags,
        ivIndex,
        unicastAddress,
        sessionKey,
        sessionNonce,
    );
    var provDataPdu = await addBase64('Awc=', provData);
    await device.writeCharacteristicWithoutResponseForService(
        mpService,
        mpIn,
        provDataPdu,
    );
    device.cancelConnection()
    return deviceKey
}


async function getImputs(caps: string, provisionerKey: string, deviceKey: string) {
    var base64 = await addBase64Array([
        'AA==',
        caps,
        'AAAAAAA=',
        provisionerKey,
        deviceKey,
    ]);
    return base64;
}

async function genProvSalt(confirmationSalt: string, provisionerRandom: string, deviceRandom: string) {
    var saltData = await addBase64Array([
        confirmationSalt,
        provisionerRandom,
        deviceRandom,
    ]);
    var base64 = await calculateCMAC(saltData, SALT_KEY);
    return base64;
}

async function getSessionNonce(secret: string, provSalt: string) {
    var nonce = await calculateK1(PRSN, secret, provSalt);
    var base64 = await dropBase64(nonce, 3);
    return base64;
}

async function genProvData(
    networkKey: string,
    keyIndex: string,
    flags: string,
    ivIndex: string,
    unicastAddress: string,
    sessionKey: string,
    sessionNonce: string,
) {
    var data = await addBase64Array([
        networkKey,
        keyIndex,
        flags,
        ivIndex,
        unicastAddress,
    ]);
    var base64 = await encryptCCM(data, sessionKey, sessionNonce, 8);
    return base64;
}

async function addBase64Array(array: string | any[]) {
    var base64 = '';
    for (let index = 0; index < array.length; index++) {
        if (base64 == '') {
            base64 = array[index];
        } else {
            base64 = await addBase64(base64, array[index]);
        }
    }
    return base64;
}

async function calculateK1(p: string, n: string, salt: string) {
    var t = await calculateCMAC(n, salt);
    var k1 = await calculateCMAC(p, t);
    return k1;
}