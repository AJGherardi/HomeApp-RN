import React from "react";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import { Provider as PaperProvider, Button } from "react-native-paper";

export default function App() {
  return (
    <PaperProvider>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      <View style={styles.container}>
        <View style={styles.titleView}>
          <Text style={styles.homeText}>Home</Text>
          <Text style={styles.byText}>by</Text>
          <Text style={styles.nameText}>alexander gherardi</Text>
        </View>
        <View style={styles.nextView}>
          <Button contentStyle={styles.nextButton} color="white" mode="contained" onPress={() => {}}>continue</Button>
        </View>
      </View>
    </PaperProvider>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#121212",
  },
  nextView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titleView: {
    flex: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  homeText: {
    color: "white",
    fontSize: 72,
    fontFamily: "Roboto-Black",
  },
  byText: {
    color: "white",
    fontSize: 30,
    marginBottom: 8,
  },
  nameText: {
    color: "white",
    fontSize: 36,
    fontFamily: "OleoScript-Regular",
  },
  nextButton: {
    width: 312,
    height: 42,
  },
});
