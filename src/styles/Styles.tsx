import { StyleSheet, Text, View, StatusBar } from "react-native";
import { Provider as PaperProvider, Button } from "react-native-paper";


export const styles = StyleSheet.create({
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
  