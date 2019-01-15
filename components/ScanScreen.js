import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  StatusBar,
  TouchableOpacity
} from "react-native";
// import tabBarIcon from './utils/tabBarIcon'
// import { SearchBar } from "react-native-elements";
import { TextInput } from "react-native-gesture-handler";
import { Button } from "native-base";
export default class SCanSCreen extends Component {
  //   state = {};
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    let tabBarIcon = () => (
      <Image
        source={require("../images/ic_qrcode.png")}
        style={{ width: 20, height: 20 }}
      />
    );
    return { tabBarIcon };
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar />
        {/* toolbar */}
        <View style={[styles.toolbar, { backgroundColor: "#0368d0" }]}>
          <Image
            style={{
              marginLeft: 10,
              width: 20,
              height: 20
            }}
            source={require("../images/ic_menu.png")}
          />
          <Text style={[styles.titleToolbar]}>Quét QR code</Text>
        </View>
        {/* <Text
          style={{
            color: "#000"
          }}
        >
          TAFAFDFS
        </Text> */}
        {/* <SearchBar
          lightTheme
          showLoading
          platform="android"
          cancelIcon={{ type: "font-awesome", name: "chevron-left" }}
          placeholder="Search"
          backgroundColor="blue"
        /> */}
        <View style={[styles.searchView, { backgroundColor: "#0368d0" }]}>
          <Image
            style={{
              marginLeft: 10,
              width: 20,
              height: 20
            }}
            source={require("../images/ic_search.png")}
          />
          <TextInput
            style={{
              height: 40,
              color: "white",
              paddingHorizontal: 10,
              marginLeft: 20
            }}
            marginLeft
            placeholder="Tài khoản"
            placeholderTextColor="white"
            autoCorrect={false}
          />
        </View>
        <View style={styles.viewLine}/>
        <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Quét QR</Text>
          </TouchableOpacity>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0368d0",
    flexDirection: "column"
  },
  buttonContainer: {
    width: 300,
    marginTop: 30,
    backgroundColor: "#00a219",
    paddingVertical: 15,
    alignSelf: "center",
    justifyContent: "center"
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontWeight: "normal",
    fontSize: 18
  },
  toolbar: {
    width: "100%",
    height: 70,
    flexDirection: "row",
    alignItems: "center"
  },
  searchView: {
    width: "100%",
    height: 40,
    flexDirection: "row",
    alignItems: "center"
  },
  titleToolbar: {
    marginLeft: 16,
    color: "white",
    fontWeight: "normal",
    fontSize: 18
  },
  viewLine: {
    height: 0.5,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "#FFFFFF"
  }
});
