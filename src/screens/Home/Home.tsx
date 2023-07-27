import { useEffect, useState } from 'react';
import { Alert, Text, View, ScrollView, TextInput } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import Header from '../../components/Header';
import Product from '../../components/Product';
import { categoryList } from '../../constants/product';
import { getProducts, ProductType } from '../../services/productApi';
import { styles } from './styles';

export default function Home() {
  const [productSearched, setProductSearched] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [refreshSwitch, setRefreshSwitch] = useState(false);
  const initialProductList: ProductType[] = [];
  const [productList, setProductList] = useState(initialProductList);
  const { token } = useSelector((state: RootState) => state.user);
  const isAdmin = token !== '';

  function refreshProducts() {
    setRefreshSwitch(!refreshSwitch);
  }

  useEffect(() => {
    setLoading(true);

    getProducts()
      .then((res) => setProductList(res.data!))
      .catch((err) => {
        Alert.alert(`Unable to get the products`);
        console.log(err);
      })
      .finally(() => setLoading(false));
  }, [refreshSwitch]);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Header admin={token !== ''} />
        <Spinner
          visible={true}
          textContent={'Carregando...'}
          textStyle={{ color: '#525659' }}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header admin={isAdmin} />
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Pesquisar produto"
          value={productSearched}
          onChangeText={(text) => setProductSearched(text)}
          style={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>
      <ScrollView contentContainerStyle={styles.contentArea}>
        {productSearched.length < 3
          ? categoryList.map((c) => (
              <View key={c} style={styles.productRow}>
                <Text style={styles.categoryTitle}>{c}</Text>
                <ScrollView
                  contentContainerStyle={styles.productList}
                  horizontal={true}
                >
                  {productList
                    .filter((p) => p.category === c)
                    .map((p) => (
                      <Product
                        key={p.id}
                        product={p}
                        refreshProducts={refreshProducts}
                      />
                    ))}
                </ScrollView>
              </View>
            ))
          : productList
              .filter(
                (p) =>
                  p.category.toLowerCase().includes(productSearched) ||
                  p.name.toLowerCase().includes(productSearched)
              )
              .map((p) => (
                <Product
                  key={p.id}
                  product={p}
                  refreshProducts={refreshProducts}
                />
              ))}
      </ScrollView>
    </View>
  );
}
