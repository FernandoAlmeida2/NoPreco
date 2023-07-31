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
  category: string;
  updatedAt: string;
};

export type ProductBody = Omit<ProductType, 'id' | 'updatedAt'>;

export async function getProducts() {
  const response = await axios.get<ServiceResponse<ProductType[]>>(
    `${BASE_URL}/product/getAll`
  );

  return response.data;
}

export async function saveProduct(
  body: ProductBody,
  token: string
) {
  const response = await axios.post<ServiceResponse<number>>(
    `${BASE_URL}/product`,
    body,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

  return response.data;
}


export async function updateProduct(
  body: ProductBody,
  id: number,
  token: string
) {
  const response = await axios.put<ServiceResponse<string>>(
    `${BASE_URL}/product/${id}`,
    body,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

  return response.data;
}

export async function deleteProduct(id: number, token: string) {
  const response = await axios.delete<ServiceResponse<string>>(
    `${BASE_URL}/product/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

  return response.data;
}
