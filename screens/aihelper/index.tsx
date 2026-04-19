import { View, Text, StyleSheet } from 'react-native';

export default function AIHelper() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>AI蜂助</Text>
      <Text style={styles.subtitle}>正在开发中...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A0F',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#A0A0B0',
  },
});
