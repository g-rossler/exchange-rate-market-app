import { useState } from 'react';
import getDate from '../utils';
import apiExchangeRate from '../api';
import {
  HStack,
  Image,
  Button,
  Stack,
  VStack,
  Select,
  Text,
  Spinner,
} from '@chakra-ui/react';
import swapImg from '../assets/swap.svg';
import dataJSON from '../data';
import Chart from '../components/Chart';

function HistoricalRate() {
  const flalgsURL = {
    flagUSD: './assets/usd.svg',
    flagAUD: './assets/aud.svg',
    flagCAD: './assets/cad.svg',
    flagEUR: './assets/eur.svg',
    flagGBP: './assets/gbp.svg',
  };
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [inputUser, setInputUser] = useState({
    amount: '1',
    baseCurrency: 'USD',
    futureCurrency: 'AUD',
  });
  const baseFlag = `flag${inputUser.baseCurrency}`;
  const futureFlag = `flag${inputUser.futureCurrency}`;

  function handleInputChange(e) {
    const { name, value } = e.target;
    setInputUser(prevInputUser => {
      return {
        ...prevInputUser,
        [name]: value,
      };
    });
  }

  const handleClickButton = async () => {
    const dates = getDate();

    setLoading(true);
    setError(null);
    setData(null);
    try {
      /*
      const resource = await apiExchangeRate.getHistoricalRate(
        inputUser.baseCurrency,
        inputUser.futureCurrency,
        dates[0],
        dates[1]
      );
      */
      const resource = dataJSON;
      const dateArray = Object.keys(resource.rates);
      console.log(dateArray);

      const prices = [];
      for (let price of Object.values(resource.rates)) {
        prices.push(price[inputUser.futureCurrency]);
      }
      console.log(prices);
      const datosCotizacion = dateArray.map((elem, i) => {
        return { fecha: elem, Price: prices[i] };
      });
      console.log(datosCotizacion);

      setData(datosCotizacion);
    } catch (error) {
      setError('Something went wrong, try again later. Sorry.');
    }
    setLoading(false);
  };

  return (
    <VStack>
      <Stack
        border="1px solid"
        p={10}
        m={10}
        borderRadius="md"
        borderColor="gray.200"
        align="center"
        justify="center"
        w="max-content"
        spacing={10}
        boxShadow="rgba(35, 55, 80, 0.3) 0px 6px 12px;"
      >
        <Stack
          direction={['column', 'row']}
          align="center"
          justify="center"
          w="max-content"
          spacing={10}
        >
          <VStack minH="110px">
            <Text>From:</Text>
            <HStack
              border="1px solid"
              py={3}
              pl={3}
              borderRadius="md"
              borderColor="gray.200"
              minW="290px"
            >
              <Image
                src={process.env.PUBLIC_URL + flalgsURL[baseFlag]}
                boxSize="20px"
              />
              <Select
                variant="unstyled"
                name="baseCurrency"
                onChange={e => handleInputChange(e)}
              >
                <option value="USD">USD - US Dollar</option>
                <option value="AUD">AUD - Australian Dollar</option>
                <option value="CAD">CAD - Canadian Dollar</option>
                <option value="EUR">EUR - Euro</option>
                <option value="GBP">GBP - British Pound</option>
              </Select>
            </HStack>
          </VStack>

          <Stack
            border="1px solid"
            borderRadius={20}
            align="center"
            justify="center"
          >
            <Button variant="ghost" borderRadius={20} p={1}>
              <Image src={swapImg} boxSize="20px" />
            </Button>
          </Stack>

          <VStack minH="110px">
            <Text>To:</Text>
            <HStack
              border="1px solid"
              py={3}
              pl={3}
              borderRadius="md"
              borderColor="gray.200"
              minW="290px"
            >
              <Image
                src={process.env.PUBLIC_URL + flalgsURL[futureFlag]}
                boxSize="20px"
              />
              <Select
                variant="unstyled"
                name="futureCurrency"
                onChange={e => handleInputChange(e)}
              >
                <option value="AUD">AUD - Australian Dollar</option>
                <option value="USD">USD - US Dollar</option>
                <option value="CAD">CAD - Canadian Dollar</option>
                <option value="EUR">EUR - Euro</option>
                <option value="GBP">GBP - British Pound</option>
              </Select>
            </HStack>
          </VStack>
        </Stack>

        <Stack align="center" justify="center">
          <Button maxW={48} onClick={() => handleClickButton()}>
            See historical rate
          </Button>
        </Stack>
        {loading && (
          <Spinner size="xl" color="red.500" thickness="4px" speed="0.7s" />
        )}
        {data && (
          <Stack m='auto' maxWidth='1000px' maxHeight='1000px' h='90vh' w='90vw'>
            <Chart data={data} futureCurrency={inputUser.futureCurrency} />
          </Stack>
        )}
        {error && <Text>{error}</Text>}
      </Stack>
    </VStack>
  );
}

export default HistoricalRate;
