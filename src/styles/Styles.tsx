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
    color: "black",
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
    backgroundColor: "#FFEE58",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  listView: {
    flex: 1,
    alignSelf: "flex-start",
  },
  listItem: {
    flex: 1,
    width: '90%',
    backgroundColor: "#252525",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    borderRadius: 8
  },
  listItemText: {
    color: "white",
    fontSize: 30,
    margin: 8,
    fontFamily: "Roboto-Black",
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
  appBar: {
    backgroundColor: "#252525"
  },
  homeTouchables: {
    flex: 1,
    width: '88%',
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    margin: 23,
    backgroundColor: "#ffffff",
    borderRadius: 8
  },
  homeItem: {
    flexDirection: "row",
  },
  homeItemText: {
    color: "#D32F2F",
    fontSize: 56,
    fontFamily: "OleoScript-Regular",
    marginRight: "10%"
  },
  item: {
    backgroundColor: "#ffffff",
    margin: 15,
    borderRadius: 8
  },
  itemView: {
    alignItems: "center",
    justifyContent: "center",
    margin: 30,
  },
  itemText: {
    alignSelf: "center",
    color: "black",
    fontSize: 24,
    marginBottom: 8,
    fontFamily: "Roboto-Black",
  },
  listContent: {
    alignItems: "center",
    justifyContent: "center",
  },
  deviceText: {
    color: "white",
    fontSize: 48,
    fontFamily: "Roboto-Black",
  },
  deviceSubtext: {
    color: "white",
    fontSize: 24,
    marginBottom: 8,
    fontFamily: "Roboto-Black",
  },
  deviceTextView: {
    alignItems: "flex-end"
  },
  deviceUpperView: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  },
  deviceLowerView: {
    flex: 2
  },
  deviceProps: {
    flex: 1,
    width: '88%',
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    margin: 23,
    backgroundColor: "#ffffff",
    borderRadius: 8
  },
});
