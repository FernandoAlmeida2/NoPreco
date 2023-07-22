import { useEffect, useState } from 'react';
import { Alert, Text, View, ScrollView } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import Header from '../../components/Header';
import Product from '../../components/Product';
import { categoryList } from '../../constants/product';
import { getProducts, ProductType } from '../../services/productApi';
import { styles } from './styles';

export default function Home() {
  const initialProductList: ProductType[] = [];
  const [isLoading, setLoading] = useState(true);
  const [productList, setProductList] = useState(initialProductList);

  useEffect(() => {
    getProducts()
      .then((res) => setProductList(res.data!))
      .catch((err) => {
        Alert.alert(`Unable to get the records`);
        console.log(err);
      })
      .finally(() => setLoading(false));
  }, []);
  return (
    <View>
      <Header />
      <ScrollView contentContainerStyle={styles.container}>
        {categoryList.map((c) => (
          <ScrollView key={c} style={styles.productList}>
            <Text style={styles.categoryTitle}>{c}</Text>
            {productList
              .filter((p) => p.category === c)
              .map((p) => (
                <Product key={p.id} product={p} />
              ))}
          </ScrollView>
        ))}
      </ScrollView>
      <Spinner
        visible={isLoading}
        textContent={'Carregando...'}
        textStyle={{ color: '#000' }}
      />
    </View>
  );
}
