import React from 'react';
import { ChakraProvider, Stack } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import CurrencyCalculator from './pages/CurrencyCalculator';
import HistoricalRate from './pages/HistoricalRate';
import { Routes, Route } from 'react-router-dom';
import theme from './theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Stack>
        <Navbar />
        <Routes>
          <Route path="/" element={<CurrencyCalculator />} />
          <Route path="/historical" element={<HistoricalRate />} />
        </Routes>
      </Stack>
    </ChakraProvider>
  );
}

export default App;
