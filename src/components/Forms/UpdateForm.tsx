import { useState } from 'react';
import { TextInput, Pressable, View, Text, Alert } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-native';
import { RootState } from '../../../redux/store';
import { ProductType, updateProduct } from '../../services/productApi';
import { styles } from './styles';

type Props = {
  product: ProductType;
};

export default function UpdateProductForm({ product }: Props) {
  const intialBodyState = {
    name: product.name,
    description: product.description,
    imageUrl: product.imageUrl,
    price: (product.price / 100).toFixed(2).replace('.', ','),
    category: product.category
  };
  const [bodyForm, setBodyForm] = useState(intialBodyState);

  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { token } = useSelector((state: RootState) => state.user);

  async function submitForm() {
    setLoading(true);

    try {
      await updateProduct(
        {
          ...bodyForm,
          price: Math.round(Number(bodyForm.price.replace(',', '.')) * 100)
        },
        product.id,
        token
      );

      navigate('/');
    } catch (error) {
      Alert.alert(`Unable to update the product`);
      console.log(error);
    } finally {
      setLoading(false);
      setBodyForm(intialBodyState);
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

      <Pressable
        style={styles(isLoading).button}
        disabled={isLoading}
        onPress={submitForm}
      >
        <Text style={styles(isLoading).text}>
          Atualizar produto
        </Text>
      </Pressable>

      <Spinner
        visible={isLoading}
        textContent={'Carregando...'}
        textStyle={{ color: '#FFF' }}
      />
    </View>
  );
}
