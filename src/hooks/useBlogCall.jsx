import { useDispatch } from "react-redux";
import {
  fetchFail,
  getBlogsSuccess,
  getCategoriesSuccess,
  fetchStart,
} from "../features/blogSlice";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import useAxios from "./useAxios";
import axios from "axios";

const useBlogCall = () => {
  const dispatch = useDispatch();
  const { axiosWithToken } = useAxios();
  const BASE_URL = "http://32253.fullstack.clarusway.com/api";

  const getBlogs = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.get(`${BASE_URL}/blogs/`);
      dispatch(getBlogsSuccess(data));
    } catch (error) {
      toastErrorNotify(`Data can not be fetched!`);
      dispatch(fetchFail());
    }
  };

  const getCategories = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.get(`${BASE_URL}/categories/`);
      dispatch(getCategoriesSuccess(data));
    } catch (error) {
      toastErrorNotify(`Data can not be fetched!`);
      dispatch(fetchFail());
    }
  };

  const postBlog = async (blog) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post(`${BASE_URL}/blogs/`, blog);
      toastSuccessNotify(`Blog created successfully!`);
      getBlogs();
    } catch (error) {
      toastErrorNotify(`Blog can not be created!`);
      dispatch(fetchFail());
    }
  };

  const postComment = async (postId, comment) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post(`${BASE_URL}/comments/${postId}/`, comment);
      toastSuccessNotify(`Comment posted successfully!`);
      getBlogs();
    } catch (error) {
      toastErrorNotify(`Comment can not be posted!`);
      dispatch(fetchFail());
    }
  };


  return { getBlogs, getCategories, postBlog, postComment };
};

export default useBlogCall;
