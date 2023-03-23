import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import RoutesProvider from "./routes";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { userLogin, userLogout } from "./redux/slice/authSlice";
import { auth } from "./firebase/userauth/auth";
import { useEffect } from "react";

const colors = {
  brand: {
    900: "#5fc028",
    800: "rgb(25, 130, 109)"
  }
}

const theme = extendTheme({ colors })

const App = () => {
  const dispatch = useDispatch()


  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
        if(userAuth) {
            dispatch(userLogin({
                email: userAuth.email,
                uid: userAuth.uid,
                displayName: userAuth.displayName
            }))
        }
        else {
            dispatch(userLogout())
        }
    })
  }, [dispatch])

  return (
      <ChakraProvider theme={theme}>
        <RoutesProvider />  
      </ChakraProvider>
  );
}

export default App;