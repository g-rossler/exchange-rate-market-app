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

function CurrencyCalculator() {
  const [input, setInput] = useState('');
  const handleInputChange = e => setInput(e.target.value);
  const isErrorAmountInput = input === '3';

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
          <FormControl isInvalid={isErrorAmountInput}>
            <FormLabel textAlign="center">Amount:</FormLabel>
            <InputGroup>
              <InputLeftAddon children="$" minH="50px" />
              <Input
                type="text"
                onChange={handleInputChange}
                value={input}
                minH="50px"
              />
            </InputGroup>
            {!isErrorAmountInput ? (
              <FormHelperText>Enter an amount greater than 0.</FormHelperText>
            ) : (
              <FormErrorMessage>Enter a valid number.</FormErrorMessage>
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
            <Select variant="unstyled">
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
            <Select variant="unstyled">
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
        <Button maxW={48}>Convert Now!</Button>
      </Stack>
    </Stack>
  );
}

export default CurrencyCalculator;
