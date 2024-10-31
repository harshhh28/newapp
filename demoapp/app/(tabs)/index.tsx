import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import FlatCards from "../../components/FlatCards";
import ElevatedCards from "../../components/ElevatedCards";
import FancyCard from "../../components/FancyCard";
import Contacts from "../../components/Contacts";

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatedCards />
        <FancyCard />
        <Contacts />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
