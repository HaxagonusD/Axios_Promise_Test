import axios from "axios";

export const search = async (searchTerm: string) => {
  const url = `${process.env.API_BASE_URL}?s=${searchTerm}&apikey=${process.env.API_KEY}`;
  console.log(url);

  const response = await axios.get(url);
  return response.data;
};
