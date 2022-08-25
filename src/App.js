import { ChakraProvider } from "@chakra-ui/react";
import RoutesProvider from "./routes";



const App = () => {
  return (
      <ChakraProvider>
        <RoutesProvider />  
      </ChakraProvider>
  );
}

export default App;