import { useState } from 'react';
import { TextInput, Pressable, View, Text, Alert } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-native';
import { RootState } from '../../../redux/store';
import { ProductType, saveProduct } from '../../services/productApi';
import { styles } from './styles';

type Props = {
  product: ProductType;
};

export default function NewProductForm({ product }: Props) {
  const intialBodyState = {
    name: '',
    description: '',
    imageUrl: '',
    price: '',
    category: ''
  };
  const [bodyForm, setBodyForm] = useState(intialBodyState);

  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { token } = useSelector((state: RootState) => state.user);

  async function submitForm() {
    setLoading(true);

    try {
      await saveProduct(
        {
          ...bodyForm,
          price: Math.round(Number(bodyForm.price.replace(',', '.')) * 100)
        },
        token
      );

      navigate('/');
    } catch (error) {
      Alert.alert(`Unable to save the product`);
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles(isLoading).view}>
      <TextInput
        placeholder="Nome"
        value={bodyForm.name}
        onChangeText={(text) => setBodyForm({ ...bodyForm, name: text })}
        style={styles(isLoading).input}
        editable={!isLoading}
        selectTextOnFocus={!isLoading}
      />
      <TextInput
        placeholder="Descrição"
        value={bodyForm.description}
        onChangeText={(text) => setBodyForm({ ...bodyForm, description: text })}
        style={styles(isLoading).input}
        editable={!isLoading}
        selectTextOnFocus={!isLoading}
      />
      <TextInput
        placeholder="Imagem (link)"
        value={bodyForm.imageUrl}
        onChangeText={(text) => setBodyForm({ ...bodyForm, imageUrl: text })}
        style={styles(isLoading).input}
        editable={!isLoading}
        selectTextOnFocus={!isLoading}
      />

      <TextInput
        placeholder="Preço"
        value={bodyForm.price}
        onChangeText={(text) => setBodyForm({ ...bodyForm, price: text })}
        style={styles(isLoading).input}
        editable={!isLoading}
        selectTextOnFocus={!isLoading}
      />

      <TextInput
        placeholder="Categoria"
        value={bodyForm.category}
        onChangeText={(text) => setBodyForm({ ...bodyForm, category: text })}
        style={styles(isLoading).input}
        editable={!isLoading}
        selectTextOnFocus={!isLoading}
      />

      <Pressable
        style={styles(isLoading).button}
        disabled={isLoading}
        onPress={submitForm}
      >
        <Text style={styles(isLoading).text}>Registrar produto</Text>
      </Pressable>

      <Spinner
        visible={isLoading}
        textContent={'Carregando...'}
        textStyle={{ color: '#FFF' }}
      />
    </View>
  );
}
