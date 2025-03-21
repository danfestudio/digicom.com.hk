import axios from "axios";
import { toast } from "react-hot-toast";

let token: any;

if (typeof window !== "undefined") {
  // Perform localStorage action
  token = localStorage.getItem("_kh_token_");
}

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
  headers: {
    Authorization: "Bearer " + token,
  },
});

const generateRefreshToken = async () => {
  let refreshToken: any =
    typeof window !== "undefined"
      ? localStorage.getItem("_refreshToken_-t_")
      : "";
  try {
    let result = await api.post(`/user/refresh-token`, {
      refreshToken: refreshToken.replaceAll('"', ""),
    });
    if (result.data.success) {
      typeof window !== "undefined"
        ? localStorage.setItem("_kh_token_", result.data.data.accessToken)
        : "";
      token = result.data.data.accessToken;
      typeof window !== "undefined"
        ? localStorage.setItem("_refreshToken_", result.data.data.refreshToken)
        : "";
      // toast.error("Token Has Expired. Please Wait....");
      // window.location.reload();
    } else {
      typeof window !== "undefined" ? localStorage.clear() : "";
      typeof window !== "undefined" &&
        window.location.replace("/login?key=ap-7879");
    }
  } catch (error) {
    typeof window !== "undefined" ? localStorage.clear() : "";
    typeof window !== "undefined" &&
      window.location.replace("/login?key=ap-7879");
  }
};

api.interceptors.request.use(
  (request) => {
    request.headers.Authorization = `Bearer ${token}`;
    // if (!token) {
    //   typeof window !== 'undefined' ? localStorage.clear() : "";
    //   window.location.replace("/login?key=ap-7879");
    // }
    // console.log('request', request)
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (token) {
      if (error.response.status === 422) {
        console.log("error.response", error.response);
        generateRefreshToken();
        return api.request(error.config);
      } else if (error.response.status === 401) {
        toast.error("You Are Not Authorized!");
        setTimeout(() => {
          typeof window !== "undefined" ? localStorage.clear() : "";
          typeof window !== "undefined" &&
            window.location.replace("/login?key=ap-7879");
        }, 400);
        // return api.request(error.config);
      } else return Promise.reject(error);
    }
  }
);

export default api;
