import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Alert,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";

export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getFoodbanks = async () => {
    try {
      const response = await fetch("http://192.168.2.132:5000/foodbanks");
      const json = await response.json();
      setData(json);
      console.log(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getFoodbanks();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Welcome to Foodbank Finder!</Text>
      <TextInput style={styles.input} />
      {isLoading ? (
        <ActivityIndicator />
      ) : data.length === 0 ? (
        <Text>No data available.</Text>
      ) : (
        <View>
          {data.map((item) => (
            <View key={item.foodbank_id}>
              <Text>
                {item.foodbank_id} {item.title}
              </Text>
            </View>
          ))}
        </View>
      )}

      <StatusBar style="auto" />
      <Button title="Start" onPress={() => Alert.alert("Button pressed")} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    width: 200,
    borderWidth: 1,
    padding: 10,
    borderColor: "gray",
  },
});
