import url from "../constants/url";

const initialState = {
  reqStatus: {
    status: "initial",
    isError: false,
    isSuccess: false,
    isLoading: false,
    hasData: true,
  },
  products: {
    byId: {},
    categories: [],
  },
};
