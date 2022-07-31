import { useState } from 'react';
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
} from '@chakra-ui/react';
import useFetchData from '../hooks/useFetchData';

function CurrencyCalculator() {
  const [inputUser, setInputUser] = useState({
    amount: "",
    baseCurrency: "USD",
    futureCurrency: "AUD"
  })
  //const isErrorAmountInput = input === '3';

  function handleInputChange(e) {
    const {name, value} = e.target
      setInputUser(prevInputUser => {
        return {
          ...prevInputUser,
          [name]: value
        }
      })
  }

  function fetchData(){
    useFetchData(inputUser)
  }

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
          <FormControl>
            <FormLabel textAlign="center">Amount:</FormLabel>
            <InputGroup>
              <InputLeftAddon children="$" minH="50px" />
              <Input
                type="text"
                onChange={(e) => handleInputChange(e)}
                value={inputUser.amount}
                minH="50px"
                name='amount'
              />
            </InputGroup>
           
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
            <Select variant="unstyled" name='baseCurrency' onChange={(e) => handleInputChange(e)}>
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
            <Image src={flagAUD} boxSize="20px"/>
            <Select variant="unstyled" name='futureCurrency' onChange={(e) => handleInputChange(e)}>
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
        <Button maxW={48} onClick={() => fetchData()}>Convert Now!</Button>
      </Stack>
    </Stack>
  );
}

export default CurrencyCalculator;
