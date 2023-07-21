import { Image, StyleSheet, Text, View } from 'react-native';
import { ProductType } from '../services/productApi';

type Props = {
  product: ProductType;
};

const Product = ({ product }: Props) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        defaultSource={require('../../assets/defaultImage.png')}
        source={{ uri: product.imageUrl }}
      />
      <Text>{product.name}</Text>
      <Text>R$ {(product.price / 100).toFixed(2).replace('.', ',')}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    width: 150,
    height: 200,
    backgroundColor: "red",
    borderRadius: 20,
    borderColor: "#000",
    justifyContent: "space-around",
    alignItems: "center"
  },
  image: {
    width: 70,
    height: 100
  },
  text: {
    fontFamily: "NotoSansJP_400Regular",
    fontSize: 20,
  }
});

export default Product;
