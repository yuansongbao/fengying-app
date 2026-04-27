import { Tabs } from 'expo-router';
import { Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FontAwesome6 } from '@expo/vector-icons';

export default function TabLayout() {
  const insets = useSafeAreaInsets();

  const tabBarStyle = {
    backgroundColor: '#0A0A0F',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 193, 7, 0.1)',
    paddingBottom: Platform.OS === 'ios' ? insets.bottom : 0,
    height: Platform.OS === 'web' ? 'auto' : 60 + insets.bottom,
  };

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle,
        tabBarActiveTintColor: '#FFC107',
        tabBarInactiveTintColor: '#555570',
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: '600',
          marginTop: 4,
        },
        tabBarItemStyle: {
          paddingVertical: 8,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: '首页',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="house" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="market"
        options={{
          title: '行情',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="chart-line" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="copytrading"
        options={{
          title: '跟单',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="users" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: '我的',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="user" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
