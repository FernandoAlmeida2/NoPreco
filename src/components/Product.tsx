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
      <Text style={styles.textInfo}>{product.name}</Text>
      <Text style={styles.textPrice}>R$ {(product.price / 100).toFixed(2).replace('.', ',')}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 10,
    width: 200,
    height: 300,
    padding: 15,
    gap: 30,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderColor: "#000",
    alignItems: "center"
  },
  image: {
    width: 105,
    height: 150,
  },
  textInfo: {
    fontFamily: "NotoSansJP_400Regular",
    color: "#525659", 
    fontSize: 16,
    lineHeight: 16,
  },
  textPrice: {
    color: "#525659",
    fontFamily: "NotoSansJP_700Bold",
    fontSize: 20,
    lineHeight: 20,
  }
});

export default Product;
