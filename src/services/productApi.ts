import axios from 'axios';
import { BASE_URL } from '../constants/urls';
import { ServiceResponse } from './serviceResponse';

type CategoryType =
  | 'Despensa'
  | 'Geladeira'
  | 'Bebida'
  | 'Limpeza'
  | 'Higiene'
  | 'Utilidade';

export type ProductType = {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  category: CategoryType;
  updatedAt: string;
};

export async function getProducts() {
  const response = await axios.get<ServiceResponse<ProductType[]>>(
    `${BASE_URL}/product/getAll`
  );

  return response.data;
}
