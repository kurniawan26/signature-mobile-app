import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const api = (() => {
  const BASE_URL = "https://belaundry-api.sebaris.link/platform";

  async function _fetchWithAuth(url, options = {}) {
    return fetch(url, {
      ...options,
      headers: {
        ...options.headers,

        token: await getAccessToken(),
      },
    });
  }

  async function putAccessToken(token) {
    try {
      await AsyncStorage.setItem("accessToken", token);
    } catch (e) {
      // saving error
      console.log(e);
    }
  }

  async function getAccessToken() {
    try {
      const value = await AsyncStorage.getItem("accessToken");

      if (value !== null) {
        return value;
      }
    } catch (e) {
      // error reading value
      console.log(e);
    }
  }

  async function register({ email, name, password, phone }) {
    const response = await axios.post(`${BASE_URL}/user/sign-up`, {
      email,
      name,
      password,
      phone,
    });

    const { status, message } = response.data;

    if (status !== "true") {
      throw new Error(message);
    }

    const { response: token } = response.data;

    return token;
  }

  async function login({ email, password }) {
    const response = await axios.post(`${BASE_URL}/user/sign-in`, {
      email,
      password,
    });

    const { response: token } = response.data;

    return token;
  }

  async function getOwnProfile() {
    const response = await _fetchWithAuth(`${BASE_URL}/user/info`);

    const responseJson = await response.json();

    return responseJson;
  }

  async function getAllUsers() {
    const response = await fetch(`${BASE_URL}/users`);

    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== "success") {
      throw new Error(message);
    }

    const {
      data: { users },
    } = responseJson;

    return users;
  }

  async function seeAllProducts() {
    const response = await _fetchWithAuth(`${BASE_URL}/product`);

    const responseJson = await response.json();

    const { response: result } = responseJson;

    return result;
  }

  async function seeDetailProduct(id) {
    const response = await _fetchWithAuth(`${BASE_URL}/product/${id}`);

    const responseJson = await response.json();

    const { response: result } = responseJson;

    console.log(result);
    return result;
  }

  async function createThread({ title, body, category }) {
    const response = await _fetchWithAuth(`${BASE_URL}/threads`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        body,
        category,
      }),
    });

    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== "success") {
      throw new Error(message);
    }

    const {
      data: { thread },
    } = responseJson;

    return thread;
  }

  async function createComment({ content, threadId }) {
    console.log(content, threadId);
    const response = await _fetchWithAuth(
      `${BASE_URL}/threads/${threadId}/comments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content,
        }),
      }
    );

    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== "success") {
      throw new Error(message);
    }

    const {
      data: { comment },
    } = responseJson;

    return comment;
  }

  return {
    seeAllProducts,
    seeDetailProduct,
    login,
    register,
    putAccessToken,
    getOwnProfile,
  };
})();

export default api;
