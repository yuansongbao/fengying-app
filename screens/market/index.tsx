import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';

export default function Market() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      {/* 头部 */}
      <View style={styles.header}>
        <Text style={styles.title}>行情</Text>
        <TouchableOpacity style={styles.searchBtn}>
          <FontAwesome6 name="magnifying-glass" size={20} color="#FFC107" />
        </TouchableOpacity>
      </View>

      {/* 市场概览 */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>市场概览</Text>
        <View style={styles.marketCard}>
          <View style={styles.marketItem}>
            <Text style={styles.marketLabel}>总市值</Text>
            <Text style={styles.marketValue}>2.45万亿</Text>
            <Text style={[styles.marketChange, { color: '#00FF88' }]}>+2.34%</Text>
          </View>
          <View style={styles.divider}></View>
          <View style={styles.marketItem}>
            <Text style={styles.marketLabel}>24h成交</Text>
            <Text style={styles.marketValue}>1,234亿</Text>
            <Text style={[styles.marketChange, { color: '#FF6B6B' }]}>-1.23%</Text>
          </View>
        </View>
      </View>

      {/* 热门榜单 */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>热门榜单</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>查看全部</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.list}>
          {[
            { name: 'BTC', change: '+5.23%', price: '567,890', up: true },
            { name: 'ETH', change: '+3.45%', price: '34,567', up: true },
            { name: 'BNB', change: '-1.23%', price: '4,567', up: false },
          ].map((item, index) => (
            <TouchableOpacity key={index} style={styles.listItem}>
              <View style={styles.listLeft}>
                <Text style={styles.listName}>{item.name}</Text>
                <Text style={styles.listPrice}>{item.price}</Text>
              </View>
              <View style={[styles.listRight, { backgroundColor: item.up ? 'rgba(0, 255, 136, 0.1)' : 'rgba(255, 107, 107, 0.1)' }]}>
                <Text style={[styles.listChange, { color: item.up ? '#00FF88' : '#FF6B6B' }]}>{item.change}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
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
              <FontAwesome6 name="shield-halved" size={24} color="#FFC107" />
            </View>
            <Text style={styles.quickLabel}>风控</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickAction}>
            <View style={styles.quickIconContainer}>
              <FontAwesome6 name="graduation-cap" size={24} color="#FFC107" />
            </View>
            <Text style={styles.quickLabel}>学院</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickAction}>
            <View style={styles.quickIconContainer}>
              <FontAwesome6 name="clock-rotate-left" size={24} color="#FFC107" />
            </View>
            <Text style={styles.quickLabel}>历史</Text>
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
  searchBtn: {
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
  marketCard: {
    flexDirection: 'row',
    backgroundColor: '#1A1A24',
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 193, 7, 0.2)',
  },
  marketItem: {
    flex: 1,
  },
  marketLabel: {
    fontSize: 12,
    color: '#A0A0B0',
    marginBottom: 8,
  },
  marketValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  marketChange: {
    fontSize: 14,
    fontWeight: '600',
  },
  divider: {
    width: 1,
    backgroundColor: '




@'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';

export default function Market() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      {/* 头部 */}
      <View style={styles.header}>
        <Text style={styles.title}>行情</Text>
        <TouchableOpacity style={styles.searchBtn}>
          <FontAwesome6 name="magnifying-glass" size={20} color="#FFC107" />
        </TouchableOpacity>
      </View>

      {/* 市场概览 */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>市场概览</Text>
        <View style={styles.marketCard}>
          <View style={styles.marketItem}>
            <Text style={styles.marketLabel}>总市值</Text>
            <Text style={styles.marketValue}>2.45万亿</Text>
            <Text style={[styles.marketChange, { color: '#00FF88' }]}>+2.34%</Text>
          </View>
          <View style={styles.divider}></View>
          <View style={styles.marketItem}>
            <Text style={styles.marketLabel}>24h成交</Text>
            <Text style={styles.marketValue}>1,234亿</Text>
            <Text style={[styles.marketChange, { color: '#FF6B6B' }]}>-1.23%</Text>
          </View>
        </View>
      </View>

      {/* 热门榜单 */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>热门榜单</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>查看全部</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.list}>
          {[
            { name: 'BTC', change: '+5.23%', price: '567,890', up: true },
            { name: 'ETH', change: '+3.45%', price: '34,567', up: true },
            { name: 'BNB', change: '-1.23%', price: '4,567', up: false },
          ].map((item, index) => (
            <TouchableOpacity key={index} style={styles.listItem}>
              <View style={styles.listLeft}>
                <Text style={styles.listName}>{item.name}</Text>
                <Text style={styles.listPrice}>{item.price}</Text>
              </View>
              <View style={[styles.listRight, { backgroundColor: item.up ? 'rgba(0, 255, 136, 0.1)' : 'rgba(255, 107, 107, 0.1)' }]}>
                <Text style={[styles.listChange, { color: item.up ? '#00FF88' : '#FF6B6B' }]}>{item.change}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
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
              <FontAwesome6 name="shield-halved" size={24} color="#FFC107" />
            </View>
            <Text style={styles.quickLabel}>风控</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickAction}>
            <View style={styles.quickIconContainer}>
              <FontAwesome6 name="graduation-cap" size={24} color="#FFC107" />
            </View>
            <Text style={styles.quickLabel}>学院</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickAction}>
            <View style={styles.quickIconContainer}>
              <FontAwesome6 name="clock-rotate-left" size={24} color="#FFC107" />
            </View>
            <Text style={styles.quickLabel}>历史</Text>
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
  searchBtn: {
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
  marketCard: {
    flexDirection: 'row',
    backgroundColor: '#1A1A24',
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 193, 7, 0.2)',
  },
  marketItem: {
    flex: 1,
  },
  marketLabel: {
    fontSize: 12,
    color: '#A0A0B0',
    marginBottom: 8,
  },
  marketValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  marketChange: {
    fontSize: 14,
    fontWeight: '600',
  },
  divider: {
    width: 1,
    backgroundColor: 'rgba(255, 193, 7, 0.2)',
    marginHorizontal: 20,
  },
  list: {
    gap: 12,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1A1A24',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 193, 7, 0.2)',
  },
  listLeft: {
    flex: 1,
  },
  listName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  listPrice: {
    fontSize: 14,
    color: '#A0A0B0',
  },
  listRight: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  listChange: {
    fontSize: 14,
    fontWeight: '600',
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
