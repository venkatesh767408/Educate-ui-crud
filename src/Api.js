import axios from "axios";

const API_URL = "http://3.109.166.113:5050";

const apiRequest = async ({ url, method, data }) => {
  const config = {
    method: method,
    url: `${API_URL}/${url}`,
    data: data,
  };

  if (data instanceof FormData) {
    config.headers = { "Content-Type": "multipart/form-data" };
  }

  try {
    const response = await axios(config);
    return response;
  } catch (error) {
    console.error("API request error:", error?.response?.status, error?.response?.statusText, error?.response?.data);
    throw error;
  }
};

export const createCourse = (data) => apiRequest({
  url: "api/course/create",
  data,
  method: "POST",
});
