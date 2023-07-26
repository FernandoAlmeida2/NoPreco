import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductType } from '../src/services/productApi';

type ProductState = {
  product: ProductType | null;
};

const initialState: ProductState = {
  product: null
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    changeProduct(
      state,
      action: PayloadAction<ProductType>
    ) {
      return { ...state, product: action.payload };
    }
  }
});

export const { changeProduct } = productSlice.actions;
