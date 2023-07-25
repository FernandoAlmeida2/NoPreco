import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { ServiceResponse } from "./serviceResponse";

export type LoginData = {
  email: string;
  password: string;
};

type LoginResponse = {
  name: string;
  token: string;
}

export async function signIn(data: LoginData) {
  const response = await axios.post<ServiceResponse<LoginResponse>>(`${BASE_URL}/auth/signin`, data);
  return response.data;   
}