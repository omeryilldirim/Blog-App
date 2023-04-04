import { useDispatch } from "react-redux";
import { fetchFail, getBlogsSuccess, getCategoriesSuccess, fetchStart} from "../features/blogSlice";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import useAxios from "./useAxios";
import axios from "axios";

const useBlogCall = () => {
  const dispatch = useDispatch();
  const {axiosWithToken} = useAxios()

  const getBlogs = async () => {
    dispatch(fetchStart());
    try {
      const {data} = await axios.get(`http://32253.fullstack.clarusway.com/api/blogs/`)
      dispatch(getBlogsSuccess(data));
    } catch (error) {
      toastErrorNotify(`Data can not be fetched!`)
      dispatch(fetchFail());
    }
  };
  const getCategories = async () => {
    dispatch(fetchStart());
    try {
      const {data} = await axiosWithToken.get(`http://32253.fullstack.clarusway.com/api/categories/`)
      dispatch(getCategoriesSuccess(data));
    } catch (error) {
      toastErrorNotify(`Data can not be fetched!`)
      dispatch(fetchFail());
    }
  };
  const postBlog = async (blog) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post(`http://32253.fullstack.clarusway.com/api/blogs/`, blog)
      toastSuccessNotify(`Blog created successfully!`)
      getBlogs()
    } catch (error) {
      toastErrorNotify(`Blog can not be created!`)
      dispatch(fetchFail());
    }
  };

  return { getBlogs, getCategories, postBlog };
};

export default useBlogCall;