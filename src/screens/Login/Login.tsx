import { View } from "react-native";
import AuthForm from "../../components/AuthForm";
import Logo from "../../components/Logo";
import { styles } from "./styles";

export default function Login() {
  return (
    <View style={styles.container}>
      <Logo />
      <AuthForm />
    </View>
  );
}