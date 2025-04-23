import axios from "axios";

const API_URL = "http://localhost:5000/api/blogs";

export const getBlogs = async () => {
  const response = await axios.get(API_URL);
  console.log(response.data);
  return response.data;
};

export const createBlog = async (data: {
  title: string;
  content: string;
  author: string;
}) => {
  const response = await axios.post(API_URL, data);
  return response.data;
};

export const deleteBlog = async (id: string) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response;
};
