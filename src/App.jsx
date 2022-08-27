import React from 'react';
import { ChakraProvider, theme, Stack } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import CurrencyCalculator from './components/CurrencyCalculator';
import HistoricCurrency from './components/HistoricCurrency';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Stack p={2} align="center" justify="center">
        <Navbar />
        <Routes>
          <Route path="/" element={<CurrencyCalculator />} />
          <Route path="/historic" element={<HistoricCurrency />} />
        </Routes>
      </Stack>
    </ChakraProvider>
  );
}

export default App;
