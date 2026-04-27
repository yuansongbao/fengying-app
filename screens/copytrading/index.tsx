import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';

export default function CopyTrading() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      {/* 头部 */}
      <View style={styles.header}>
        <Text style={styles.title}>实盘跟单</Text>
        <TouchableOpacity style={styles.filterBtn}>
          <FontAwesome6 name="sliders" size={20} color="#FFC107" />
        </TouchableOpacity>
      </View>

      {/* 跟单概览 */}
      <View style={styles.section}>
        <View style={styles.statsCard}>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>跟单收益</Text>
            <Text style={[styles.statValue, { color: '#00FF88' }]}>+12,345</Text>
          </View>
          <View style={styles.divider}></View>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>跟单人数</Text>
            <Text style={styles.statValue}>128</Text>
          </View>
          <View style={styles.divider}></View>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>胜率</Text>
            <Text style={[styles.statValue, { color: '#00FF88' }]}>78.5%</Text>
          </View>
        </View>
      </View>

      {/* 推荐交易员 */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>推荐交易员</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>查看全部</Text>
          </TouchableOpacity>
        </View>

        {[
          { name: '量化大师', profit: '+45.6%', followers: 1234, winRate: '85%', level: 'VIP' },
          { name: '稳健收益', profit: '+23.4%', followers: 856, winRate: '82%', level: 'PRO' },
          { name: '短线高手', profit: '+67.8%', followers: 2345, winRate: '76%', level: 'VIP' },
        ].map((item, index) => (
          <TouchableOpacity key={index} style={styles.traderCard}>
            <View style={styles.traderHeader}>
              <View style={styles.traderInfo}>
                <View style={styles.avatar}>
                  <Text style={styles.avatarText}>{item.name[0]}</Text>
                </View>
                <View style={styles.traderText}>
                  <Text style={styles.traderName}>{item.name}</Text>
                  <View style={styles.badge}>
                    <Text style={styles.badgeText}>{item.level}</Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity style={styles.followBtn}>
                <Text style={styles.followBtnText}>跟单</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.traderStats}>
              <View style={styles.traderStat}>
                <Text style={styles.traderStatLabel}>收益率</Text>
                <Text style={[styles.traderStatValue, { color: '#00FF88' }]}>{item.profit}</Text>
              </View>
              <View style={styles.traderStat}>
                <Text style={styles.traderStatLabel}>跟随者</Text>
                <Text scd C:\Users\HUAWEI\fengying-app

# 创建跟单页面内容
@'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';

export default function CopyTrading() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      {/* 头部 */}
      <View style={styles.header}>
        <Text style={styles.title}>实盘跟单</Text>
        <TouchableOpacity style={styles.filterBtn}>
          <FontAwesome6 name="sliders" size={20} color="#FFC107" />
        </TouchableOpacity>
      </View>

      {/* 跟单概览 */}
      <View style={styles.section}>
        <View style={styles.statsCard}>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>跟单收益</Text>
            <Text style={[styles.statValue, { color: '#00FF88' }]}>+12,345</Text>
          </View>
          <View style={styles.divider}></View>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>跟单人数</Text>
            <Text style={styles.statValue}>128</Text>
          </View>
          <View style={styles.divider}></View>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>胜率</Text>
            <Text style={[styles.statValue, { color: '#00FF88' }]}>78.5%</Text>
          </View>
        </View>
      </View>

      {/* 推荐交易员 */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>推荐交易员</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>查看全部</Text>
          </TouchableOpacity>
        </View>

        {[
          { name: '量化大师', profit: '+45.6%', followers: 1234, winRate: '85%', level: 'VIP' },
          { name: '稳健收益', profit: '+23.4%', followers: 856, winRate: '82%', level: 'PRO' },
          { name: '短线高手', profit: '+67.8%', followers: 2345, winRate: '76%', level: 'VIP' },
        ].map((item, index) => (
          <TouchableOpacity key={index} style={styles.traderCard}>
            <View style={styles.traderHeader}>
              <View style={styles.traderInfo}>
                <View style={styles.avatar}>
                  <Text style={styles.avatarText}>{item.name[0]}</Text>
                </View>
                <View style={styles.traderText}>
                  <Text style={styles.traderName}>{item.name}</Text>
                  <View style={styles.badge}>
                    <Text style={styles.badgeText}>{item.level}</Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity style={styles.followBtn}>
                <Text style={styles.followBtnText}>跟单</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.traderStats}>
              <View style={styles.traderStat}>
                <Text style={styles.traderStatLabel}>收益率</Text>
                <Text style={[styles.traderStatValue, { color: '#00FF88' }]}>{item.profit}</Text>
              </View>
              <View style={styles.traderStat}>
                <Text style={styles.traderStatLabel}>跟随者</Text>
                <Text style={styles.traderStatValue}>{item.followers}</Text>
              </View>
              <View style={styles.traderStat}>
                <Text style={styles.traderStatLabel}>胜率</Text>
                <Text style={styles.traderStatValue}>{item.winRate}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* 快捷入口 */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>快捷入口</Text>
        <View style={styles.quickActions}>
          <TouchableOpacity style={styles.quickAction}>
            <View style={styles.quickIconContainer}>
              <FontAwesome6 name="trophy" size={24} color="#FFC107" />
            </View>
            <Text style={styles.quickLabel}>榜单</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickAction}>
            <View style={styles.quickIconContainer}>
              <FontAwesome6 name="chart-line" size={24} color="#FFC107" />
            </View>
            <Text style={styles.quickLabel}>分析</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickAction}>
            <View style={styles.quickIconContainer}>
              <FontAwesome6 name="clock" size={24} color="#FFC107" />
            </View>
            <Text style={styles.quickLabel}>历史</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickAction}>
            <View style={styles.quickIconContainer}>
              <FontAwesome6 name="gear" size={24} color="#FFC107" />
            </View>
            <Text style={styles.quickLabel}>设置</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A0F',
  },
  scrollContent: {
    paddingBottom: 100,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  filterBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255, 193, 7, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  viewAll: {
    fontSize: 14,
    color: '#FFC107',
  },
  statsCard: {
    flexDirection: 'row',
    backgroundColor: '#1A1A24',
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 193, 7, 0.2)',
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statLabel: {
    fontSize: 12,
    color: '#A0A0B0',
    marginBottom: 8,
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  divider: {
    width: 1,
    backgroundColor: 'rgba(255, 193, 7, 0.2)',
    marginHorizontal: 12,
  },
  traderCard: {
    backgroundColor: '#1A1A24',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 193, 7, 0.2)',
  },
  traderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  traderInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(255, 193, 7, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFC107',
  },
  traderText: {
    flex: 1,
  },
  traderName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  badge: {
    backgroundColor: '#FFC107',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  badgeText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#0A0A0F',
  },
  followBtn: {
    backgroundColor: '#FFC107',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 8,
  },
  followBtnText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#0A0A0F',
  },
  traderStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 193, 7, 0.2)',
  },
  traderStat: {
    flex: 1,
    alignItems: 'center',
  },
  traderStatLabel: {
    fontSize: 12,
    color: '#A0A0B0',
    marginBottom: 4,
  },
  traderStatValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  quickAction: {
    alignItems: 'center',
  },
  quickIconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: 'rgba(255, 193, 7, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  quickLabel: {
    fontSize: 12,
    color: '#FFFFFF',
  },
});
