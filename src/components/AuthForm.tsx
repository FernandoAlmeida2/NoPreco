import { useState } from "react";
import { TextInput, Pressable, View, Text, Alert, StyleSheet } from "react-native";
import Spinner from "react-native-loading-spinner-overlay/lib";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-native";
import { changeToken } from "../../redux/userSlice";
import { signIn } from "../services/authApi";


export default function AuthForm() {
  const intialBodyState = {
    email: "",
    password: "",
  };
  const [bodyForm, setBodyForm] = useState(intialBodyState);

  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function submitForm() {
    setLoading(true);

    try {
        const response = await signIn(bodyForm);
        dispatch(changeToken(response.data!.token));
        navigate("/");
    } catch (error) {
      Alert.alert("Unable to login");
      console.log(error);
    } finally {
      setLoading(false);
      setBodyForm(intialBodyState);
    }
  }

  return (
    <View style={styles(isLoading).view}>
      <TextInput
        placeholder="E-mail"
        value={bodyForm.email}
        onChangeText={(text) => setBodyForm({ ...bodyForm, email: text })}
        style={styles(isLoading).input}
        editable={!isLoading}
        selectTextOnFocus={!isLoading}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TextInput
        placeholder="Senha"
        value={bodyForm.password}
        onChangeText={(text) => setBodyForm({ ...bodyForm, password: text })}
        style={styles(isLoading).input}
        editable={!isLoading}
        selectTextOnFocus={!isLoading}
        secureTextEntry={true}
      />

      <Pressable
        style={styles(isLoading).button}
        disabled={isLoading}
        onPress={submitForm}
      >
        <Text style={styles(isLoading).text}>
          Entrar
        </Text>
      </Pressable>

      <Spinner
        visible={isLoading}
        textContent={"Carregando..."}
        textStyle={{color: "#FFF"}}
      />
    </View>
  );
}

const styles = (isLoading: boolean) => {
  return StyleSheet.create({
    view: {
      alignItems: "center",
      justifyContent: "center",
      gap: 15,
    },
    input: {
      opacity: isLoading ? 0.7 : 1,
      textDecorationColor: "#000000",
      width: 350,
      height: 62.5,
      borderRadius: 5,
      backgroundColor: "#fff",
      paddingLeft: 16,
      fontSize: 20,
      fontFamily: "NotoSansJP_400Regular",
    },
    button: {
      width: 350,
      height: 62.5,
      borderRadius: 5,
      backgroundColor: "#1ad61a",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "NotoSansJP_700Bold",
    },
    text: {
      fontFamily: "NotoSansJP_700Bold",
      color: "#fff",
      fontSize: 20,
    },
  });
};