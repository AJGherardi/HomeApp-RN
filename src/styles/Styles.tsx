import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#121212",
  },
  titleView: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1.2,
  },
  nextView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  photoView: {
    flex: 3.8,
    alignItems: "center",
    justifyContent: "center",
  },
  centerView: {
    flex: 3.8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  rangeView: {
    flex: 8,
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "center",
    marginHorizontal: 35,
  },
  rangeText: {
    color: "white",
    fontSize: 36,
    fontFamily: "Roboto-Black",
    textAlign: "center",
  },
  upperRangeView: {
    flex: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  lowerRangeView: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3D5AFE",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  deviceListView: {
    flex: 3.8,
    alignItems: "center",
    justifyContent: "center",
  },
  homeView: {
    flex: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  homeText: {
    color: "white",
    fontSize: 72,
    fontFamily: "Roboto-Black",
  },
  titleText: {
    color: "white",
    fontSize: 52,
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
  addButtonText: {
    color: "white"
  }
});
