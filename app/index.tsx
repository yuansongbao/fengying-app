import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome6 } from "@expo/vector-icons";

const screenWidth = Dimensions.get("window").width;

export default function Home() {
  const handleAction = (action: string) => {
    console.log("点击了:", action);
    Alert.alert("提示", `点击了：${action}`);
  };

  return (
    <ScrollView 
      style={styles.container} 
      contentContainerStyle={styles.scrollContent}
      keyboardShouldPersistTaps="handled"
    >
      {/* Header */}
      <LinearGradient colors={["#0F172A", "#1E293B"]} style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.title}>蜂赢跟单</Text>
          <Text style={styles.subtitle}>智能跟单  稳健收益</Text>
        </View>
      </LinearGradient>

      {/* Stats Cards */}
      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <FontAwesome6 name="chart-line" size={24} color="#10B981" />
          <Text style={styles.statValue}>+156.8%</Text>
          <Text style={styles.statLabel}>月收益</Text>
        </View>
        <View style={styles.statCard}>
          <FontAwesome6 name="users" size={24} color="#3B82F6" />
          <Text style={styles.statValue}>1,286</Text>
          <Text style={styles.statLabel}>跟单人数</Text>
        </View>
        <View style={styles.statCard}>
          <FontAwesome6 name="trophy" size={24} color="#F59E0B" />
          <Text style={styles.statValue}>78.5%</Text>
          <Text style={styles.statLabel}>胜率</Text>
        </View>
      </View>

      {/* Top Traders */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>顶级交易员</Text>
        <View style={styles.traderCard}>
          <FontAwesome6 name="user-circle" size={48} color="#3B82F6" />
          <View style={styles.traderInfo}>
            <Text style={styles.traderName}>CryptoKing</Text>
            <Text style={styles.traderStats}>+156.8%  1,286人跟单</Text>
          </View>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>TOP 1</Text>
          </View>
        </View>
        <View style={styles.traderCard}>
          <FontAwesome6 name="user-circle" size={48} color="#10B981" />
          <View style={styles.traderInfo}>
            <Text style={styles.traderName}>BTCMaster</Text>
            <Text style={styles.traderStats}>+89.2%  856人跟单</Text>
          </View>
        </View>
      </View>

      {/* Quick Actions */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>快捷操作</Text>
        <View style={styles.actionsGrid}>
          <TouchableOpacity 
            style={styles.actionButton} 
            onPress={() => handleAction("发现交易员")}
            activeOpacity={0.7}
          >
            <View style={styles.actionIconContainer}>
              <FontAwesome6 name="compass" size={28} color="#8B5CF6" />
            </View>
            <Text style={styles.actionLabel}>发现交易员</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.actionButton} 
            onPress={() => handleAction("我的资产")}
            activeOpacity={0.7}
          >
            <View style={styles.actionIconContainer}>
              <FontAwesome6 name="wallet" size={28} color="#EC4899" />
            </View>
            <Text style={styles.actionLabel}>我的资产</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.actionButton} 
            onPress={() => handleAction("跟单记录")}
            activeOpacity={0.7}
          >
            <View style={styles.actionIconContainer}>
              <FontAwesome6 name="history" size={28} color="#F59E0B" />
            </View>
            <Text style={styles.actionLabel}>跟单记录</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.actionButton} 
            onPress={() => handleAction("收益分析")}
            activeOpacity={0.7}
          >
            <View style={styles.actionIconContainer}>
              <FontAwesome6 name="chart-pie" size={28} color="#10B981" />
            </View>
            <Text style={styles.actionLabel}>收益分析</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      <View style={styles.footer} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F5F9",
  },
  scrollContent: {
    paddingBottom: 40,
  },
  header: {
    padding: 40,
    paddingTop: 60,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerContent: {
    alignItems: "center",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#94A3B8",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: -30,
    marginHorizontal: 20,
    marginBottom: 30,
  },
  statCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    width: 100,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  statValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1E293B",
    marginTop: 12,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: "#64748B",
  },
  section: {
    marginHorizontal: 20,
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1E293B",
    marginBottom: 16,
  },
  traderCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 3,
  },
  traderInfo: {
    flex: 1,
    marginLeft: 16,
  },
  traderName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1E293B",
    marginBottom: 4,
  },
  traderStats: {
    fontSize: 14,
    color: "#64748B",
  },
  badge: {
    backgroundColor: "#F59E0B",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  badgeText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "bold",
  },
  actionsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  actionButton: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 24,
    width: (screenWidth - 60) / 2,
    alignItems: "center",
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 3,
    zIndex: 10,
  },
  actionIconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#F1F5F9",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  actionLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1E293B",
  },
  footer: {
    height: 40,
  },
});
