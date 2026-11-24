
import React, { useMemo, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable
} from "react-native";

const certificates = [
  {
    id: "1",
    title: "Advanced Hematology Workshop",
    provider: "Medical Education Center",
    category: "Hematology",
    date: "2026"
  },
  {
    id: "2",
    title: "Quality Management in Medical Laboratories",
    provider: "Professional Training Institute",
    category: "Quality",
    date: "2026"
  },
  {
    id: "3",
    title: "Clinical Chemistry Fundamentals",
    provider: "Clinical Education Academy",
    category: "Clinical Chemistry",
    date: "2025"
  },
  {
    id: "4",
    title: "Molecular Diagnostics Essentials",
    provider: "Medical Science Academy",
    category: "Molecular Biology",
    date: "2025"
  },
  {
    id: "5",
    title: "Blood Transfusion Practice",
    provider: "Laboratory Training Center",
    category: "Hematology",
    date: "2026"
  }
];

const categories = [
  "All",
  "Hematology",
  "Quality",
  "Clinical Chemistry",
  "Molecular Biology",
  "Microbiology"
];

export default function App() {
  const [screen, setScreen] = useState("home");
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(() => {
    return certificates.filter(item => {
      const matchesCategory =
        category === "All" || item.category === category;

      const matchesSearch =
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.provider.toLowerCase().includes(query.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [query, category]);

  const openCertificate = item => {
    setSelected(item);
    setScreen("details");
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.brand}>MO • PROFESSIONAL PORTFOLIO</Text>

        {screen === "home" && (
          <>
            <Text style={styles.heading}>
              Your journey,{"\n"}beautifully documented.
            </Text>

            <View style={styles.hero}>
              <Text style={styles.label}>PROFESSIONAL OVERVIEW</Text>
              <Text style={styles.name}>Mohamed Fathy Amr</Text>
              <Text style={styles.role}>
                Medical Laboratory Specialist
              </Text>
              <View style={styles.line} />
              <Text style={styles.archive}>44 MB CERTIFICATE ARCHIVE</Text>
              <Text style={styles.motto}>✦ LIFELONG LEARNER</Text>
            </View>

            <Text style={styles.section}>Your Portfolio</Text>

            <View style={styles.stats}>
              {[
                ["195", "Certificates"],
                ["4", "Memberships"],
                ["250+", "CME Hours"]
              ].map(item => (
                <View style={styles.statCard} key={item[1]}>
                  <Text style={styles.number}>{item[0]}</Text>
                  <Text style={styles.statLabel}>{item[1]}</Text>
                </View>
              ))}
            </View>

            <Text style={styles.section}>Explore</Text>

            <Pressable
              style={styles.menu}
              onPress={() => setScreen("library")}
            >
              <Text style={styles.menuText}>
                ▤   Certificate Library
              </Text>
              <Text style={styles.arrow}>›</Text>
            </Pressable>

            {[
              "✦   Professional Memberships",
              "◷   CME Tracker",
              "🏆   Achievements"
            ].map(item => (
              <View style={styles.menu} key={item}>
                <Text style={styles.menuText}>{item}</Text>
                <Text style={styles.arrow}>›</Text>
              </View>
            ))}

            <Text style={styles.footer}>
              Document the journey. Demonstrate the growth.
            </Text>
          </>
        )}

        {screen === "library" && (
          <>
            <Pressable onPress={() => setScreen("home")}>
              <Text style={styles.back}>‹  Back to Dashboard</Text>
            </Pressable>

            <Text style={styles.heading}>Certificate{"\n"}Library</Text>

            <View style={styles.libraryHero}>
              <Text style={styles.number}>195</Text>
              <Text style={styles.role}>Professional Certificates</Text>
              <Text style={styles.label}>
                YOUR PROFESSIONAL LEARNING ARCHIVE
              </Text>
            </View>

            <TextInput
              style={styles.search}
              placeholder="Search certificates or providers..."
              placeholderTextColor="#8290A8"
              value={query}
              onChangeText={setQuery}
            />

            <Text style={styles.section}>Categories</Text>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.filters}
            >
              {categories.map(item => (
                <Pressable
                  key={item}
                  onPress={() => setCategory(item)}
                  style={[
                    styles.filter,
                    category === item && styles.activeFilter
                  ]}
                >
                  <Text
                    style={[
                      styles.filterText,
                      category === item && styles.activeFilterText
                    ]}
                  >
                    {item}
                  </Text>
                </Pressable>
              ))}
            </ScrollView>

            <View style={styles.resultRow}>
              <Text style={styles.section}>Certificates</Text>
              <Text style={styles.resultCount}>
                {filtered.length} results
              </Text>
            </View>

            <Text style={styles.notice}>
              Preview records – sample data for testing.
            </Text>

            {filtered.map(item => (
              <Pressable
                key={item.id}
                style={styles.certificate}
                onPress={() => openCertificate(item)}
              >
                <View style={styles.certificateIcon}>
                  <Text style={styles.certificateIconText}>▤</Text>
                </View>

                <View style={styles.certificateInfo}>
                  <Text style={styles.certificateTitle}>
                    {item.title}
                  </Text>
                  <Text style={styles.provider}>{item.provider}</Text>
                  <Text style={styles.categoryTag}>
                    {item.category}  •  {item.date}
                  </Text>
                </View>

                <Text style={styles.arrow}>›</Text>
              </Pressable>
            ))}

            {filtered.length === 0 && (
              <Text style={styles.empty}>
                No certificates found.
              </Text>
            )}
          </>
        )}

        {screen === "details" && selected && (
          <>
            <Pressable onPress={() => setScreen("library")}>
              <Text style={styles.back}>‹  Back to Library</Text>
            </Pressable>

            <Text style={styles.heading}>Certificate{"\n"}Details</Text>

            <View style={styles.hero}>
              <Text style={styles.label}>CERTIFICATE INFORMATION</Text>
              <Text style={styles.name}>{selected.title}</Text>
              <View style={styles.line} />
              <Text style={styles.role}>Issuing organization</Text>
              <Text style={styles.menuText}>{selected.provider}</Text>
              <View style={styles.line} />
              <Text style={styles.role}>Specialty</Text>
              <Text style={styles.menuText}>{selected.category}</Text>
              <View style={styles.line} />
              <Text style={styles.role}>Year</Text>
              <Text style={styles.menuText}>{selected.date}</Text>
            </View>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0B1020" },
  content: { padding: 22, paddingTop: 30 },
  brand: { color: "#91A7C8", fontSize: 10, letterSpacing: 2 },
  heading: { color: "white", fontSize: 29, fontWeight: "bold", marginVertical: 25 },
  hero: { backgroundColor: "#172744", padding: 23, borderRadius: 22, marginBottom: 30 },
  label: { color: "#9FB7D9", fontSize: 10, letterSpacing: 2, marginTop: 10 },
  name: { color: "white", fontSize: 22, fontWeight: "bold", marginTop: 20 },
  role: { color: "#B7C6DD", marginTop: 8 },
  line: { height: 1, backgroundColor: "#385071", marginVertical: 18 },
  archive: { color: "white", fontWeight: "bold" },
  motto: { color: "#AFC6EB", marginTop: 14, fontSize: 11 },
  section: { color: "white", fontSize: 19, fontWeight: "bold", marginBottom: 15 },
  stats: { flexDirection: "row", gap: 9, marginBottom: 30 },
  statCard: { flex: 1, backgroundColor: "#121C30", padding: 14, borderRadius: 15 },
  number: { color: "#D8E5FF", fontSize: 24, fontWeight: "bold" },
  statLabel: { color: "#B7C6DD", fontSize: 10, marginTop: 8 },
  menu: { backgroundColor: "#121C30", padding: 19, borderRadius: 14, marginBottom: 10, flexDirection: "row", justifyContent: "space-between" },
  menuText: { color: "white", fontSize: 13 },
  arrow: { color: "#AFC6EB", fontSize: 20 },
  footer: { color: "#91A7C8", textAlign: "center", marginTop: 30, marginBottom: 25 },
  back: { color: "#AFC6EB", fontSize: 14, marginTop: 25 },
  libraryHero: { backgroundColor: "#172744", padding: 20, borderRadius: 20, marginBottom: 20 },
  search: { backgroundColor: "#121C30", borderWidth: 1, borderColor: "#31496D", color: "white", padding: 15, borderRadius: 13, marginBottom: 25 },
  filters: { marginBottom: 25, flexGrow: 0 },
  filter: { backgroundColor: "#172744", paddingVertical: 10, paddingHorizontal: 14, borderRadius: 20, marginRight: 8 },
  activeFilter: { backgroundColor: "#B5D0F7" },
  filterText: { color: "#B7C6DD", fontSize: 11 },
  activeFilterText: { color: "#0B1020", fontWeight: "bold" },
  resultRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  resultCount: { color: "#91A7C8", fontSize: 11 },
  notice: { color: "#91A7C8", fontSize: 10, marginBottom: 14 },
  certificate: { backgroundColor: "#121C30", borderWidth: 1, borderColor: "#24344F", padding: 14, borderRadius: 16, flexDirection: "row", alignItems: "center", marginBottom: 12 },
  certificateIcon: { width: 42, height: 42, borderRadius: 12, backgroundColor: "#263D5D", alignItems: "center", justifyContent: "center", marginRight: 12 },
  certificateIconText: { color: "#D8E5FF", fontSize: 20 },
  certificateInfo: { flex: 1 },
  certificateTitle: { color: "white", fontWeight: "bold", fontSize: 12, marginBottom: 6 },
  provider: { color: "#91A7C8", fontSize: 10, marginBottom: 7 },
  categoryTag: { color: "#B5D0F7", fontSize: 9 },
  empty: { color: "#91A7C8", textAlign: "center", marginTop: 30 }
});
