import axios from "axios";

const FIRST_API_URL = "https://jsonplaceholder.typicode.com";
const SECOND_API_URL = "https://fakerapi.it/api/v1";

axios.defaults.baseURL = FIRST_API_URL;
axios.defaults.headers.common = {
  Authorization: `Bearer ${localStorage.getItem("token")}`,
};
axios.defaults.withCredentials = true;

export const getPosts = async () => {
  try {
    const res = await axios.get(`/posts`, {
      params: { offset: 0, limit: 10 },

      onDownloadProgress: function (progressEvent) {
        console.log("progressEvent", progressEvent);
      },
    });

    return res;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.log("error", err.response?.data.errText);
      console.log("error", err.message);
    } else if (err instanceof Error) {
      console.log(err.message);
    }
  }
};

export const createPost = async (post: any) => {
  try {
    const res = await axios.post(`/posts`, post, {
      params: {
        offset: 0,
      },
    });

    return res;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.log("err.response?.data.errText", err.response?.data.errText);
      console.log("err.message", err.message);
    } else if (err instanceof Error) {
      console.log("err.message", err.message);
    }
  }
};
