import {useDispatch, useSelector} from "react-redux";
import {setAllAppKeys, useMutateMutation} from "../../config";
import {useCallback} from "react";
import {endpoints} from "../../store/endpoints";
import {useNavigate} from "react-router-dom";
import {routePath, time} from "../../utils/constants";
import {setCookie, setLocalStorage, userInfoToLowerCase,} from "../../store/storage";
import {message} from "antd";

const useLogin = () => {
  const state = useSelector((state) => {
    return state.app;
  });
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [mutate, result] = useMutateMutation();

  const onLogin = useCallback(async() => {
    try {
      const response = await mutate({
        ...state,
        postUrl: endpoints.auth.login,
        formMethod: "POST",
        request: {
          username: state.request?.email,
          password: state.request?.password,
        },
      });

      console.log("login response", response);

      if(!response.error) {
        setLocalStorage(
          "**",
          JSON.stringify(userInfoToLowerCase(response?.data?.data))
        );
        setCookie(
          "***",
          `${response?.data?.data?.type} ${response?.data?.data?.token}`,
          time.auth["token-time"]
        );
        setCookie(
          "****",
          response.data?.data?.refreshToken,
          time.auth["refresh-token"]
        );

        dispatch(
          setAllAppKeys({
            ...state,
            isLoggedIn: `${response?.data?.data?.loggedIn}`,
          })
        );

        setTimeout(() => {
          return navigate(routePath.landpage, {
            replace: true,
          });
        }, 2000);
      }else {
        message.error("Error fetching data, please check your connection")
      }

    }catch(error) {
      console.log("Something went rong");
    }
  }, [dispatch, mutate, navigate, state]);
  return {onLogin, result};
};

export default useLogin;