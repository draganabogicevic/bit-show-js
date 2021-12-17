import Main from './Main'
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';


import { ChakraProvider } from "@chakra-ui/react";


const App = () => {

  return (
  <ErrorBoundary>
    <ChakraProvider>
      <Navbar />
      <Main />
      <Footer />
    </ChakraProvider>
  </ErrorBoundary>   
  );
}

export default App;
