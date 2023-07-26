import {
  useFonts,
  NotoSansJP_400Regular,
  NotoSansJP_700Bold
} from '@expo-google-fonts/noto-sans-jp';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { NativeRouter, Route, Routes } from 'react-router-native';
import { store } from './redux/store';
import Home from './src/screens/Home/Home';
import Login from './src/screens/Login/Login';
import UpdateProduct from './src/screens/UpdateProduct/UpdateProduct';

export default function App() {
  const [fontsLoaded] = useFonts({
    NotoSansJP_400Regular,
    NotoSansJP_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
      <NativeRouter>
        <View style={styles.container}>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/login" Component={Login} />
            <Route path="/product/update" Component={UpdateProduct} />
          </Routes>
          <StatusBar style="auto" />
        </View>
      </NativeRouter>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: '100%',
    backgroundColor: '#f4f4f4'
  }
});
