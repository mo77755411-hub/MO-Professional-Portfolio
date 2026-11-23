
import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View
} from "react-native";

const stats = [
  { value: "195", label: "Certificates" },
  { value: "4", label: "Memberships" },
  { value: "250+", label: "CME Hours" }
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.brand}>MO • PROFESSIONAL PORTFOLIO</Text>
        <Text style={styles.heading}>
          Your journey,{"\n"}beautifully documented.
        </Text>

        <View style={styles.hero}>
          <Text style={styles.label}>PROFESSIONAL OVERVIEW</Text>
          <Text style={styles.name}>Mohamed Fathy Amr</Text>
          <Text style={styles.role}>Medical Laboratory Specialist</Text>
          <View style={styles.line} />
          <Text style={styles.archive}>44 MB CERTIFICATE ARCHIVE</Text>
          <Text style={styles.motto}>✦ LIFELONG LEARNER</Text>
        </View>

        <Text style={styles.section}>Your Portfolio</Text>
        <View style={styles.stats}>
          {stats.map(item => (
            <View style={styles.card} key={item.label}>
              <Text style={styles.number}>{item.value}</Text>
              <Text style={styles.cardLabel}>{item.label}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.section}>Explore</Text>
        {["Certificate Library", "Professional Memberships",
          "CME Tracker", "Achievements"].map((item, index) => (
          <View style={styles.menu} key={item}>
            <Text style={styles.menuText}>
              {["▤", "✦", "◷", "🏆"][index]}   {item}
            </Text>
            <Text style={styles.arrow}>›</Text>
          </View>
        ))}

        <Text style={styles.footer}>
          Document the journey. Demonstrate the growth.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0B1020" },
  content: { padding: 22, paddingTop: 35 },
  brand: { color: "#91A7C8", fontSize: 10, letterSpacing: 2 },
  heading: { color: "white", fontSize: 28, fontWeight: "bold", marginVertical: 25 },
  hero: { backgroundColor: "#172744", padding: 23, borderRadius: 22, marginBottom: 30 },
  label: { color: "#9FB7D9", fontSize: 10, letterSpacing: 2 },
  name: { color: "white", fontSize: 22, fontWeight: "bold", marginTop: 20 },
  role: { color: "#B7C6DD", marginTop: 7 },
  line: { height: 1, backgroundColor: "#385071", marginVertical: 20 },
  archive: { color: "white", fontWeight: "bold" },
  motto: { color: "#AFC6EB", marginTop: 14, fontSize: 11 },
  section: { color: "white", fontSize: 19, fontWeight: "bold", marginBottom: 15 },
  stats: { flexDirection: "row", gap: 9, marginBottom: 30 },
  card: { flex: 1, backgroundColor: "#121C30", padding: 12, borderRadius: 15 },
  number: { color: "#D8E5FF", fontSize: 21, fontWeight: "bold" },
  cardLabel: { color: "#B7C6DD", fontSize: 10, marginTop: 8 },
  menu: { backgroundColor: "#121C30", padding: 19, borderRadius: 14, marginBottom: 10, flexDirection: "row", justifyContent: "space-between" },
  menuText: { color: "white", fontSize: 13 },
  arrow: { color: "#AFC6EB", fontSize: 20 },
  footer: { color: "#91A7C8", textAlign: "center", marginTop: 30, marginBottom: 25 }
});
