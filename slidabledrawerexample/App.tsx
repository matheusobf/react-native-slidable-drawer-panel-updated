import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import SlidableDrawer from "react-native-slidable-drawer-panel";

export default function App() {
  const [showDrawer, setShowDrawer] = useState(false)
  const [event, setEvent] = useState("none")
  function closeDrawer() {
    setShowDrawer(false)
  }
  function openDrawer() {
    setShowDrawer(true)
  }
  function onSlideEnd() {
    setShowDrawer(false)
    setEvent("none")
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Button title="Open Drawer" onPress={openDrawer} />
      {showDrawer && (
        <SlidableDrawer
          onSlideEnd={onSlideEnd}
          drawerOpenSpeed={3}
        >
          <Button title="Close Drawer" onPress={closeDrawer} />
        </SlidableDrawer>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
