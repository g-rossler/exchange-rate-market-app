import { useEffect, useState } from 'react';
import flagUSD from '../assets/usd.svg';
import flagAUD from '../assets/aud.svg';
import flagCAD from '../assets/cad.svg';
import flagEUR from '../assets/eur.svg';
import flagGBP from '../assets/gbp.svg';
import swapImg from '../assets/swap.svg';
import {
  HStack,
  Image,
  Heading,
  Button,
  Stack,
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  InputLeftAddon,
  InputGroup,
  FormErrorMessage,
  VStack,
  Select,
  Text,
  Box,
  Spinner,
} from '@chakra-ui/react';
import apiExchangeRate from '../api';

function CurrencyCalculator() {
  const [inputUser, setInputUser] = useState({
    amount: '1',
    baseCurrency: 'USD',
    futureCurrency: 'AUD',
  });
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const inputError = /[^0-9.]/g.test(inputUser.amount);
  const [sendInputUser, setSendInputUser] = useState({
    amount: '1',
    baseCurrency: 'USD',
    futureCurrency: 'AUD',
  });

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
    if (!inputError) {
      setLoading(true);
      setError(null);
      setData(null);
      try {
        const resource = await apiExchangeRate.getExchange(
          inputUser.baseCurrency,
          inputUser.futureCurrency,
          inputUser.amount
        );
        setData(resource);
        setSendInputUser(inputUser)
      } catch (error) {
        setError('Something went wrong, try again later. Sorry.');
      }
      setLoading(false);
    }
  };

  return (
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
          <FormControl isInvalid={inputError}>
            <FormLabel textAlign="center">Amount:</FormLabel>
            <InputGroup>
              <InputLeftAddon children="$" minH="50px" />
              <Input
                type="text"
                onChange={e => handleInputChange(e)}
                value={inputUser.amount}
                minH="50px"
                name="amount"
              />
            </InputGroup>
            {inputError && (
              <FormErrorMessage>
                Only numbers and . (Example: 32.10)
              </FormErrorMessage>
            )}
          </FormControl>
        </VStack>

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
            <Image src={flagUSD} boxSize="20px" />
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
            <Image src={flagAUD} boxSize="20px" />
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
          Convert Now!
        </Button>
      </Stack>
      {loading && (
        <Spinner size="xl" color="red.500" thickness="4px" speed="0.7s" />
      )}
      {data && <Stack>
        
        <Text>{sendInputUser.amount} {sendInputUser.baseCurrency} =</Text>
        <Text>{Object.values(data.rates)[0]} {sendInputUser.futureCurrency}</Text>
        
        
        </Stack>}
      {error && <Text>{error}</Text>}
    </Stack>
  );
}

export default CurrencyCalculator;
