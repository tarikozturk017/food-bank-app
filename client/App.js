import React, { useEffect, useState } from "react";
import { PaperProvider, Avatar, Card, IconButton } from "react-native-paper";
import { StatusBar } from "expo-status-bar";

const logo = require("./assets/adaptive-icon.png");

import {
  StyleSheet,
  Platform,
  Text,
  ScrollView,
  Image,
  ImageBackground,
  View,
  Button,
  TextInput,
  Alert,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import { AppRegistry } from "react-native";

import Constants from "expo-constants";

export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [foodbankData, setFoodbankData] = useState([]);

  const getFoodbanks = async () => {
    try {
      const response = await fetch("http://192.168.2.132:5000/foodbanks");
      const json = await response.json();
      setFoodbankData(json);
      // console.log(json[0].title);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getFoodbanks();
  }, []);

  const FoodbankItem = (props) => (
    <Card.Title
      title={props.foodbank.title}
      subtitle={props.foodbank.description}
      left={(props) => <Avatar.Icon {...props} icon="map-marker" />}
      right={(props) => (
        <IconButton {...props} icon="dots-vertical" onPress={() => {}} />
      )}
    />
  );

  return (
    <PaperProvider>
      <SafeAreaView style={styles.AndroidSafeArea}>
        <ScrollView>
          <Text>Welcome to Foodbank Finder!</Text>
          <Text>Test</Text>
          <Text>{foodbankData[0]?.title}</Text>
          <Button
            title="Press"
            onPress={() => console.log("Button pressed")}
          ></Button>
          {/* <Image source={logo} style={{ width: 300, height: 300 }}></Image> */}

          {/* <ImageBackground source={logo}>
          <Text style={{ flex: 1 }}>Test Image text background</Text>
        </ImageBackground> */}

          {/* <TextInput style={styles.input} />
        {isLoading ? (
          <ActivityIndicator />
          ) : foodbankData.length === 0 ? (
            <Text>No data available.</Text>
            ) : (
              <Card style={styles.card}>
              {foodbankData.map((item) => (
                <FoodbankItem key={item.foodbank_id} foodbank={item} />
                ))}
                </Card>
                )}
                
                <StatusBar style="auto" />
              <Button title="Start" onPress={() => Alert.alert("Button pressed")} /> */}
        </ScrollView>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  AndroidSafeArea: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
  },
  input: {
    height: 40,
    width: 200,
    borderWidth: 1,
    padding: 10,
    borderColor: "gray",
  },
  card: {
    width: "90%",
    margin: 12,
  },
});

AppRegistry.registerComponent(App);
