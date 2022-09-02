import React from 'react';
import {
  ChakraProvider,
  theme,
  Stack,
} from '@chakra-ui/react';
import Navbar from './components/Navbar';
import CurrencyCalculator from './components/CurrencyCalculator';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Stack p={2} align='center' justify='center'>
        <Navbar />
        <CurrencyCalculator />
      </Stack>
    </ChakraProvider>
  );
}

export default App;
