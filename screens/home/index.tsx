
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome6 } from "@expo/vector-icons";

const screenWidth = Dimensions.get("window").width;

export default function Home() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <LinearGradient colors={["#FFC107", "#FFB300"]} start={{x:0, y:0}} end={{x:1, y:0}} style={styles.heroBar} />
      
      <View style={styles.headerSection}>
        <View style={styles.titleRow}>
          <FontAwesome6 name="hexagon-nodes" size={32} color="#FFC107" />
          <View style={styles.titleText}>
            <Text style={styles.brandTitle}>蜂赢量化</Text>
            <Text style={styles.brandSubtitle}>智能跟单 · 稳健收益</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.notificationBtn}>
          <FontAwesome6 name="bell" size={20} color="#FFC107" />
        </TouchableOpacity>
      </View>

      <View style={styles.dashboardSection}>
        <View style={styles.sectionHeader}>
          <FontAwesome6 name="chart-simple" size={16} color="#FFC107" />
          <Text style={styles.sectionTitle}>蜂巢数据看板</Text>
        </View>
        
        <View style={styles.statsGrid}>
          <View style={styles.statCard}>
            <View style={[styles.statIconContainer, { backgroundColor: 'rgba(255, 193, 7, 0.1)' }]}>
              <FontAwesome6 name="coins" size={24} color="#FFC107" />
            </View>
            <Text style={styles.statLabel}>蜂巢总资产</Text>
            <Text style={styles.statValue}>¥128,456,789</Text>
            <Text style={styles.statChange}>+12.3%</Text>
          </View>
          
          <View style={styles.statCard}>
            <View style={[styles.statIconContainer, { backgroundColor: 'rgba(255, 193, 7, 0.1)' }]}>
              <FontAwesome6 name="users" size={24} color="#FFC107" />
            </View>
            <Text style={styles.statLabel}>活跃工蜂</Text>
            <Text style={styles.statValue}>12,456</Text>
            <Text style={styles.statChange}>+856 今日</Text>
          </View>
          
          <View style={styles.statCard}>
            <View style={[styles.statIconContainer, { backgroundColor: 'rgba(255, 193, 7, 0.1)' }]}>
              <FontAwesome6 name="drop" size={24} color="#FFC107" />
            </View>
            <Text style={styles.statLabel}>今日蜜源</Text>
            <Text style={styles.statValue}>¥2,345,678</Text>
            <Text style={styles.statChange}>+5.8%</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <FontAwesome6 name="fire" size={16} color="#FFC107" />
          <Text style={styles.sectionTitle}>热门策略</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>查看全部</Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.strategyCarousel}>
          <TouchableOpacity style={styles.strategyCard}>
            <View style={styles.strategyHeader}>
              <FontAwesome6 name="bolt" size={20} color="#FFC107" />
              <Text style={styles.strategyName}>BTC套利策略</Text>
            </View>
            <View style={styles.strategyStats}>
              <View style={styles.statItem}>
                <Text style={styles.statItemLabel}>年化收益</Text>
                <Text style={[styles.statItemValue, { color: '#00FF88' }]}>+156.8%</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statItemLabel}>夏普比率</Text>
                <Text style={[styles.statItemValue, { color: '#FFC107' }]}>2.34</Text>
              </View>
            </View>
            <View style={styles.strategyFooter}>
              <Text style={styles.strategyFollowers}>1,286人跟单</Text>
              <View style={styles.strategyBadge}>
                <Text style={styles.strategyBadgeText}>TOP 1</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.strategyCard}>
            <View style={styles.strategyHeader}>
              <FontAwesome6 name="rocket" size={20} color="#FFC107" />
              <Text style={styles.strategyName}>ETH趋势跟踪</Text>
            </View>
            <View style={styles.strategyStats}>
              <View style={styles.statItem}>
                <Text style={styles.statItemLabel}>年化收益</Text>
                <Text style={[styles.statItemValue, { color: '#00FF88' }]}>+89.2%</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statItemLabel}>夏普比率</Text>
                <Text style={[styles.statItemValue, { color: '#FFC107' }]}>1.87</Text>
              </View>
            </View>
            <View style={styles.strategyFooter}>
              <Text style={styles.strategyFollowers}>856人跟单</Text>
              <View style={[styles.strategyBadge, { backgroundColor: '#C0C0C0' }]}>
                <Text style={styles.strategyBadgeText}>TOP 2</Text>
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <FontAwesome6 name="grid-2" size={16} color="#FFC107" />
          <Text style={styles.sectionTitle}>快捷操作</Text>
        </View>

        <View style={styles.quickActionsGrid}>
          <TouchableOpacity style={styles.quickActionCard}>
            <View style={styles.quickActionIconContainer}>
              <FontAwesome6 name="compass" size={28} color="#FFC107" />
            </View>
            <Text style={styles.quickActionLabel}>发现交易员</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickActionCard}>
            <View style={styles.quickActionIconContainer}>
              <FontAwesome6 name="wallet" size={28} color="#FFC107" />
            </View>
            <Text style={styles.quickActionLabel}>我的资产</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickActionCard}>
            <View style={styles.quickActionIconContainer}>
              <FontAwesome6 name="history" size={28} color="#FFC107" />
            </View>
            <Text style={styles.quickActionLabel}>跟单记录</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickActionCard}>
            <View style={styles.quickActionIconContainer}>
              <FontAwesome6 name="chart-pie" size={28} color="#FFC107" />
            </View>
            <Text style={styles.quickActionLabel}>收益分析</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0A0A0F" },
  scrollContent: { paddingBottom: 100 },
  heroBar: { height: 3 },
  headerSection: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 20, paddingVertical: 16 },
  titleRow: { flexDirection: "row", alignItems: "center" },
  titleText: { marginLeft: 12 },
  brandTitle: { fontSize: 24, fontWeight: "bold", color: "#FFFFFF", letterSpacing: 1 },
  brandSubtitle: { fontSize: 12, color: "#A0A0B0", marginTop: 4 },
  notificationBtn: { width: 44, height: 44, borderRadius: 22, backgroundColor: "rgba(255, 193, 7, 0.1)", justifyContent: "center", alignItems: "center" },
  dashboardSection: { paddingHorizontal: 20, marginBottom: 24 },
  sectionHeader: { flexDirection: "row", alignItems: "center", marginBottom: 16 },
  sectionTitle: { fontSize: 18, fontWeight: "bold", color: "#FFFFFF", marginLeft: 8 },
  viewAll: { fontSize: 14, color: "#FFC107", marginLeft: "auto" },
  statsGrid: { flexDirection: "row", justifyContent: "space-between" },
  statCard: { width: (screenWidth - 52) / 3, backgroundColor: "#1A1A24", borderRadius: 12, padding: 16, alignItems: "center", borderWidth: 1, borderColor: "rgba(255, 193, 7, 0.2)" },
  statIconContainer: { width: 48, height: 48, borderRadius: 24, justifyContent: "center", alignItems: "center", marginBottom: 12 },
  statLabel: { fontSize: 11, color: "#A0A0B0", marginBottom: 8, textAlign: "center" },
  statValue: { fontSize: 16, fontWeight: "bold", color: "#FFFFFF", marginBottom: 4 },
  statChange: { fontSize: 12, color: "#00FF88", fontWeight: "600" },
  section: { paddingHorizontal: 20, marginBottom: 24 },
  strategyCarousel: { flexDirection: "row" },
  strategyCard: { width: screenWidth - 80, backgroundColor: "#1A1A24", borderRadius: 16, padding: 20, marginRight: 16, borderWidth: 1, borderColor: "rgba(255, 193, 7, 0.2)" },
  strategyHeader: { flexDirection: "row", alignItems: "center", marginBottom: 16 },
  strategyName: { fontSize: 18, fontWeight: "bold", color: "#FFFFFF", marginLeft: 12 },
  strategyStats: { flexDirection: "row", justifyContent: "space-between", marginBottom: 16 },
  statItem: { flex: 1 },
  statItemLabel: { fontSize: 12, color: "#A0A0B0", marginBottom: 4 },
  statItemValue: { fontSize: 20, fontWeight: "bold" },
  strategyFooter: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  strategyFollowers: { fontSize: 12, color: "#A0A0B0" },
  strategyBadge: { backgroundColor: "#FFC107", paddingHorizontal: 12, paddingVertical: 4, borderRadius: 8 },
  strategyBadgeText: { fontSize: 11, fontWeight: "bold", color: "#0A0A0F" },
  quickActionsGrid: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" },
  quickActionCard: { width: (screenWidth - 52) / 2, backgroundColor: "#1A1A24", borderRadius: 16, padding: 24, alignItems: "center", marginBottom: 16, borderWidth: 1, borderColor: "rgba(255, 193, 7, 0.2)" },
  quickActionIconContainer: { width: 64, height: 64, borderRadius: 32, backgroundColor: "rgba(255, 193, 7, 0.1)", justifyContent: "center", alignItems: "center", marginBottom: 12 },
  quickActionLabel: { fontSize: 14, fontWeight: "600", color: "#FFFFFF" },
});