import { Alert, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { deleteProduct, ProductType } from '../services/productApi';
import { FontAwesome } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useState } from 'react';

type Props = {
  product: ProductType;
  refreshProducts: Function;
};

const Product = ({ product, refreshProducts }: Props) => {
  const { token } = useSelector((state: RootState) => state.user);
  const isAdmin = token !== '';

  async function onPressDelete() {
    try {
      await deleteProduct(product.id, token);
      refreshProducts();
    } catch (error) {
      Alert.alert(`Unable to delete the product`);
      console.log(error);
    }
  }
  return (
    <View style={[styles.container, isAdmin ? styles.admin : styles.visitor]}>
      {isAdmin && (
        <View style={styles.icons}>
          <FontAwesome name="edit" size={24} color="#525659" />
          <Pressable onPress={onPressDelete}>
            <FontAwesome name="close" size={24} color="#525659" />
          </Pressable>
        </View>
      )}
      <Image
        style={styles.image}
        defaultSource={require('../../assets/defaultImage.png')}
        source={{ uri: product.imageUrl }}
      />
      <Text style={styles.textInfo}>{product.name}</Text>
      <Text style={styles.textPrice}>
        R$ {(product.price / 100).toFixed(2).replace('.', ',')}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 10,
    width: 220,
    height: 340,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderColor: '#000',
    alignItems: 'center'
  },
  visitor: {
    gap: 50
  },
  admin: {
    gap: 30
  },
  image: {
    width: 105,
    height: 150
  },
  textInfo: {
    fontFamily: 'NotoSansJP_400Regular',
    color: '#525659',
    fontSize: 16,
    lineHeight: 16
  },
  textPrice: {
    color: '#525659',
    fontFamily: 'NotoSansJP_700Bold',
    fontSize: 20,
    lineHeight: 20
  },
  icons: {
    width: 200,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  modal: {
    flex: 1,
    justifyContent: 'center'
  }
});

export default Product;
