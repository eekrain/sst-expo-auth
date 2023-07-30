import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const [tes, setTes] = useState<string>("Coba");

  useEffect(() => {
    setTimeout(
      () =>
        fetch("https://iqe6vss8sc.execute-api.ap-southeast-1.amazonaws.com")
          .then((response) => response.text())
          .then((data) => {
            console.log("🚀 ~ file: App.tsx:12 ~ useEffect ~ data:", data);
            setTes(data);
          }),
      1000
    );
  }, []);
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Text>{tes}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
