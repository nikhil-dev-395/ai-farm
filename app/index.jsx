import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Platform,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function Index() {
  let router = useRouter();
  const [selectedImage, setSelectedImage] = useState(null);
  let login = () => {
    router.replace("/(auth)/signin");
  };
  const pickImage = async () => {
    // Request permissions first
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Ionicons name="leaf" size={32} color="#fff" />
          <Text style={styles.headerText}>Agri vista</Text>
          <Text style={{ flex: 1 }}>AI Farm Assistant</Text>
        </View>

        <TouchableOpacity style={styles.uploadButton} onPress={login}>
          <Text style={styles.login}>login</Text>
        </TouchableOpacity>

        <View style={styles.card}>
          <Text style={styles.title}>Plant Analysis</Text>

          <TouchableOpacity style={styles.uploadButton} onPress={pickImage}>
            <Ionicons name="camera" size={24} color="#fff" />
            <Text style={styles.buttonText}>upload Image</Text>
          </TouchableOpacity>

          {selectedImage && (
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: selectedImage }}
                style={styles.selectedImage}
              />
              <TouchableOpacity style={styles.analyzeButton}>
                <Text style={styles.buttonText}>Analyze Plant</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>

        <View style={styles.weatherContainer}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGxhbnR8ZW58MHx8MHx8fDA%3D",
            }}
            style={styles.weatherBackground}
            blurRadius={2}
          />
          <View style={styles.weatherContent}>
            <Text style={styles.weatherTitle}>Weather Forecast</Text>
            <Text style={styles.temperature}>28°C</Text>
            <Text style={styles.condition}>Sunny</Text>
            <View style={styles.detailsContainer}>
              <Text style={styles.detailText}>Humidity: 65%</Text>
              <Text style={styles.detailText}>Wind: 12 km/h</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  login: {
    fontSize: 30,
  },
  weatherContainer: {
    borderRadius: 16,
    overflow: "hidden",
    margin: 16,
    height: 200,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  weatherBackground: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  weatherContent: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  weatherTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
  },
  temperature: {
    color: "white",
    fontSize: 48,
    fontWeight: "bold",
  },
  condition: {
    color: "white",
    fontSize: 20,
    marginBottom: 16,
  },
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  detailText: {
    color: "white",
    fontSize: 14,
  },
  scrollView: {
    marginTop: 70,
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2ecc71",
    padding: 16,
    borderRadius: 8,
    marginBottom: 20,
  },

  weather: {
    backgroundColor: "#0ff",
    width: "200px",
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginLeft: 10,
    padding: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
  uploadButton: {
    backgroundColor: "#2ecc71",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 8,
  },
  imageContainer: {
    alignItems: "center",
    marginTop: 10,
  },
  selectedImage: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  analyzeButton: {
    backgroundColor: "#3498db",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignSelf: "center",
  },
  featuresContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  featureCard: {
    backgroundColor: "#fff",
    width: "48%",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  featureText: {
    marginTop: 8,
    fontWeight: "500",
    color: "#333",
  },
});
