import {
  useFonts,
  NotoSansJP_400Regular,
  NotoSansJP_700Bold
} from '@expo-google-fonts/noto-sans-jp';
import AppLoading from "expo-app-loading";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NativeRouter, Route, Routes } from 'react-router-native';
import Home from './src/screens/Home/Home';

export default function App() {
  const [fontsLoaded] = useFonts({
    NotoSansJP_400Regular,
    NotoSansJP_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NativeRouter>
      <View style={styles.container}>
        <Routes>
          <Route path="/" Component={Home} />
        </Routes>
        <StatusBar style="auto" />
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: "100%",
    backgroundColor: '#f4f4f4'
  }
});
