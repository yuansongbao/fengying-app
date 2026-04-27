import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';

export default function Profile() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      {/* 用户信息 */}
      <View style={styles.userSection}>
        <View style={styles.avatar}>
          <FontAwesome6 name="user" size={32} color="#FFC107" />
        </View>
        <Text style={styles.userName}>量化交易者</Text>
        <Text style={styles.userLevel}>VIP会员</Text>
      </View>

      {/* 资产卡片 */}
      <View style={styles.assetSection}>
        <Text style={styles.assetLabel}>总资产</Text>
        <Text style={styles.assetValue}>1,234,567</Text>
        <View style={styles.assetStats}>
          <View style={styles.assetStat}>
            <Text style={styles.assetStatLabel}>今日收益</Text>
            <Text style={[styles.assetStatValue, { color: '#00FF88' }]}>+2,345</Text>
          </View>
          <View style={styles.assetStat}>
            <Text style={styles.assetStatLabel}>累计收益</Text>
            <Text style={[styles.assetStatValue, { color: '#00FF88' }]}>+56,789</Text>
          </View>
        </View>
      </View>

      {/* 功能列表 */}
      <View style={styles.menuSection}>
        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuLeft}>
            <View style={[styles.menuIcon, { backgroundColor: 'rgba(255, 193, 7, 0.1)' }]}>
              <FontAwesome6 name="wallet" size={20} color="#FFC107" />
            </View>
            <Text style={styles.menuText}>我的钱包</Text>
          </View>
          <FontAwesome6 name="chevron-right" size={16} color="#A0A0B0" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuLeft}>
            <View style={[styles.menuIcon, { backgroundColor: 'rgba(255, 193, 7, 0.1)' }]}>
              <FontAwesome6 name="clock-rotate-left" size={20} color="#FFC107" />
            </View>
            <Text style={styles.menuText}>交易记录</Text>
          </View>
          <FontAwesome6 name="chevron-right" size={16} color="#A0A0B0" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuLeft}>
            <View style={[styles.menuIcon, { backgroundColor: 'rgba(255, 193, 7, 0.1)' }]}>
              <FontAwesome6 name="star" size={20} color="#FFC107" />
            </View>
            <Text style={styles.menuText}>我的收藏</Text>
          </View>
          <FontAwesome6 name="chevron-right" size={16} color="#A0A0B0" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuLeft}>
            <View style={[styles.menuIcon, { backgroundColor: 'rgba(255, 193, 7, 0.1)' }]}>
              <FontAwesome6 name="bell" size={20} color="#FFC107" />
            </View>
            <Text style={styles.menuText}>消息通知</Text>
          </View>
          <FontAwesome6 name="chevron-right" size={16} color="#A0A0B0" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuLeft}>
            <View style={[styles.menuIcon, { backgroundColor: 'rgba(255, 193, 7, 0.1)' }]}>
              <FontAwesome6 name="shield-halved" size={20} color="#FFC107" />
            </View>
            <Text style={styles.menuText}>安全设置</Text>
          </View>
          <FontAwesome6 name="chevron-right" size={16} color="#A0A0B0" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuLeft}>
            <View style={[styles.menuIcon, { backgroundColor: 'rgba(255, 193, 7, 0.1)' }]}>
              <FontAwesome6 name="headset" size={20} color="#FFC107" />
            </View>
            <Text style={styles.menuText}>客服帮助</Text>
          </View>
          <FontAwesome6 name="chevron-right" size={16} color="#A0A0B0" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuLeft}>
            <View style={[styles.menuIcon, { backgroundColor: 'rgba(255, 193, 7, 0.1)' }]}>
              <FontAwesome6 name="circle-info" size={20} color="#FFC107" />
            </View>
            <Text style={styles.menuText}>关于我们</Text>
          </View>
          <FontAwesome6 name="chevron-right" size={16} color="#A0A0B0" />
        </TouchableOpacity>
      </View>

      {/* 退出登录 */}
      <TouchableOpacity style={styles.logoutBtn}>
        <Text style={styles.logoutText}>退出登录</Text>
      </TouchableOpacity>
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
  userSection: {
    alignItems: 'center',
    paddingVertical: 32,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255, 193, 7, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  userLevel: {
    fontSize: 14,
    color: '#FFC107',
  },
  assetSection: {
    backgroundColor: '#1A1A24',
    borderRadius: 16,
    marginHorizontal: 20,
    padding: 24,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: 'rgba(255, 193, 7, 0.2)',
  },
  assetLabel: {
    fontSize: 14,
    color: '#A0A0B0',
    marginBottom: 8,
  },
  assetValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 16,
  },
  assetStats: {
    flexDirection: 'row',
    gap: 32,
  },
  assetStat: {
    flex: 1,
  },
  assetStatLabel: {
    fontSize: 12,
    color: '#A0A0B0',
    marginBottom: 4,
  },
  assetStatValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  menuSection: {
    backgroundColor: '#1A1A24',
    borderRadius: 16,
    marginHorizontal: 20,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: 'rgba(255, 193, 7, 0.2)',
    overflow: 'hidden',
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 193, 7, 0.1)',
  },
  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  menuIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  menuText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  logoutBtn: {
    backgroundColor: 'rgba(255, 107, 107, 0.1)',
    marginHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 107, 107, 0.3)',
    marginBottom: 24,
  },
  logoutText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF6B6B',
  },
});
