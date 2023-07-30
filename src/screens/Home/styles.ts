import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 900
  },
  contentArea: {
    paddingLeft: 20,
    paddingRight: 20
  },
  inputContainer: {
    width: '100%',
    height: 100,
    backgroundColor: '#45c43e',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 20
  },
  input: {
    textDecorationColor: '#000000',
    width: 350,
    height: 50,
    borderRadius: 5,
    backgroundColor: '#fff',
    paddingLeft: 16,
    fontSize: 16,
    fontFamily: 'NotoSansJP_400Regular'
  },
  addContainer: {
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingLeft: 20
  },
  addProduct: {
    fontFamily: 'NotoSansJP_700Bold',
    fontSize: 16,
    color: '#525659'
  },
  productRow: {
    height: 480,
    justifyContent: 'center',
    marginTop: 20,
    gap: 10
  },
  categoryTitle: {
    fontFamily: 'NotoSansJP_700Bold',
    fontSize: 24,
    color: '#525659'
  },
  productList: {
    height: 350,
    flexDirection: 'row',
    gap: 16
  }
});
