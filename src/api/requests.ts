import axios from "axios";

const FIRST_API_URL = "https://jsonplaceholder.typicode.com";
const SECOND_API_URL = "https://fakerapi.it/api/v1";

export const getPosts = async () => {
  try {
    const res = await axios.get(`${FIRST_API_URL}/posts`, {
      params: { offset: 0, limit: 10 },
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
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
    const res = await axios.post(`${FIRST_API_URL}/posts`, post, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
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
