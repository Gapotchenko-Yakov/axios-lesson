import axios from "axios";

export const getPostsController = new AbortController();

const FIRST_API_URL = "https://jsonplaceholder.typicode.com";
const SECOND_API_URL = "https://fakerapi.it/api/v1";

const firstApiAxios = axios.create({
  baseURL: FIRST_API_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
  withCredentials: true,
});

const secondApiAxios = axios.create({
  baseURL: SECOND_API_URL,
  headers: {
    Authorization: `ASD asd ASD`,
  },
  withCredentials: true,
});

export const getPosts = async () => {
  const res = await firstApiAxios.get("/posts", {
    params: { offset: 0, limit: 10 },
    signal: getPostsController.signal,
  });

  return res;
};

export const createPost = async (post: any) => {
  const res = await firstApiAxios.post("/posts", post, {
    params: {
      offset: 0,
    },
  });

  return res;
};

export const getImages = async () => {
  try {
    const res = await secondApiAxios.get("/images");

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

firstApiAxios.interceptors.response.use(
  (res) => {
    console.log(res.status, "int res");
    return res;
  },
  (err) => {
    if (axios.isAxiosError(err)) {
      console.log("error", err.response?.data.errText);
      console.log("error", err.message);
    } else if (err instanceof Error) {
      console.log(err.message);
    }
  }
);

firstApiAxios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {}
);
