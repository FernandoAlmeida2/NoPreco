import { StyleSheet, View, Text } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  PaytoneOne_400Regular
} from '@expo-google-fonts/paytone-one';

const Header = () => {
  const [fontsLoaded] = useFonts({
    PaytoneOne_400Regular
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return <View style={styles.container}>
    <Text style={styles.logo}>NoPreço</Text>
    <Text style={styles.mode}>Visitante</Text>
  </View>;
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 20,
    height: 100,
    backgroundColor: '#45c43e'
  },
  logo: {
    fontFamily: "PaytoneOne_400Regular",
    fontSize: 32,
    color: "#fff"
  },
  mode: {
    fontFamily: "NotoSansJP_700Bold",
    fontSize: 16,
    color: "#fff",
    lineHeight: 32
  }
});

export default Header;
