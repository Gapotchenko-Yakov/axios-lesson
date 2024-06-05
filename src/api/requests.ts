import axios from "axios";

const FIRST_API_URL = "https://jsonplaceholder.typicode.com";
const SECOND_API_URL = "https://fakerapi.it/api/v1";

export const getPosts = async () => {
  try {
    const res = await axios({
      url: `${FIRST_API_URL}/posts`,
      method: "GET",
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
