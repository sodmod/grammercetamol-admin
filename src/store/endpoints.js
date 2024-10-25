const auth = "auth/";
const courses = "courses";
const transaction = "transactions/";
const price = "price";

export const endpoints = {
  auth: {
    login: `${auth}login`,
    register: `${auth}register`,
    "refresh-token": `${auth}refresh-token/`,
    verify: "auth/token",
  },
  courses: {
    courses,
    view: {
      details: "",
    },
    registered: `/${courses}/registered`,
    whitelisted: `/${courses}/whitelisted`,
    price: {
      price: `${courses}/${price}`,
      currency: `${price}/currency`
    },
  },
  transaction: {
    paystack: {
      initiate: `${transaction}make-payment`,
      verify: `${transaction}verify-payment`,
    }
  }
};
