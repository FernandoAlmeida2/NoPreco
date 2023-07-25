import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductType } from '../src/services/productApi';

type ProductState = {
  product: Omit<ProductType, 'updatedAt'> | null;
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
      action: PayloadAction<Omit<ProductType, 'updatedAt'>>
    ) {
      return { ...state, product: action.payload };
    }
  }
});

export const { changeProduct } = productSlice.actions;
