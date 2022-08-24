import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  VStack,
  Stack,
} from '@chakra-ui/react';

function ResultTable(props) {
  const BASE_AMOUNT = Number(props.result) / Number(props.userInput.amount);

  return (
    <Stack direction={['column', 'row']} m={3}>
      <VStack>
        <TableContainer>
          <Table variant="striped" colorScheme="cyan">
            <Thead>
              <Tr>
                <Th textAlign="center">{props.userInput.baseCurrency}</Th>
                <Th textAlign="center">{props.userInput.futureCurrency}</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td textAlign="center">1 {props.userInput.baseCurrency}</Td>
                <Td textAlign="center">
                  {BASE_AMOUNT.toFixed(2).toString()}{' '}
                  {props.userInput.futureCurrency}
                </Td>
              </Tr>
              <Tr>
                <Td textAlign="center">5 {props.userInput.baseCurrency}</Td>
                <Td textAlign="center">
                  {(BASE_AMOUNT * 5).toFixed(2).toString()}{' '}
                  {props.userInput.futureCurrency}
                </Td>
              </Tr>
              <Tr>
                <Td textAlign="center">10 {props.userInput.baseCurrency}</Td>
                <Td textAlign="center">
                  {(BASE_AMOUNT * 10).toFixed(2).toString()}{' '}
                  {props.userInput.futureCurrency}
                </Td>
              </Tr>
              <Tr>
                <Td textAlign="center">25 {props.userInput.baseCurrency}</Td>
                <Td textAlign="center">
                  {(BASE_AMOUNT * 25).toFixed(2).toString()}{' '}
                  {props.userInput.futureCurrency}
                </Td>
              </Tr>
              <Tr>
                <Td textAlign="center">50 {props.userInput.baseCurrency}</Td>
                <Td textAlign="center">
                  {(BASE_AMOUNT * 50).toFixed(2).toString()}{' '}
                  {props.userInput.futureCurrency}
                </Td>
              </Tr>
              <Tr>
                <Td textAlign="center">100 {props.userInput.baseCurrency}</Td>
                <Td textAlign="center">
                  {(BASE_AMOUNT * 100).toFixed(2).toString()}{' '}
                  {props.userInput.futureCurrency}
                </Td>
              </Tr>
              <Tr>
                <Td textAlign="center">500 {props.userInput.baseCurrency}</Td>
                <Td textAlign="center">
                  {(BASE_AMOUNT * 500).toFixed(2).toString()}{' '}
                  {props.userInput.futureCurrency}
                </Td>
              </Tr>
              <Tr>
                <Td textAlign="center">1000 {props.userInput.baseCurrency}</Td>
                <Td textAlign="center">
                  {(BASE_AMOUNT * 1000).toFixed(2).toString()}{' '}
                  {props.userInput.futureCurrency}
                </Td>
              </Tr>
              <Tr>
                <Td textAlign="center">5000 {props.userInput.baseCurrency}</Td>
                <Td textAlign="center">
                  {(BASE_AMOUNT * 5000).toFixed(2).toString()}{' '}
                  {props.userInput.futureCurrency}
                </Td>
              </Tr>
              <Tr>
                <Td textAlign="center">10000 {props.userInput.baseCurrency}</Td>
                <Td textAlign="center">
                  {(BASE_AMOUNT * 10000).toFixed(2).toString()}{' '}
                  {props.userInput.futureCurrency}
                </Td>
              </Tr>
              <Tr>
                <Td textAlign="center">50000 {props.userInput.baseCurrency}</Td>
                <Td textAlign="center">
                  {(BASE_AMOUNT * 50000).toFixed(2).toString()}{' '}
                  {props.userInput.futureCurrency}
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </VStack>

      <VStack>
        <TableContainer>
          <Table variant="striped" colorScheme="cyan">
            <Thead>
              <Tr>
                <Th textAlign="center">{props.userInput.futureCurrency}</Th>
                <Th textAlign="center">{props.userInput.baseCurrency}</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td textAlign="center">1 {props.userInput.futureCurrency}</Td>
                <Td textAlign="center">
                  {(1 / BASE_AMOUNT).toFixed(2).toString()}{' '}
                  {props.userInput.baseCurrency}
                </Td>
              </Tr>
              <Tr>
                <Td textAlign="center">5 {props.userInput.futureCurrency}</Td>
                <Td textAlign="center">
                  {(5 / BASE_AMOUNT).toFixed(2).toString()}{' '}
                  {props.userInput.baseCurrency}
                </Td>
              </Tr>
              <Tr>
                <Td textAlign="center">10 {props.userInput.futureCurrency}</Td>
                <Td textAlign="center">
                  {(10 / BASE_AMOUNT).toFixed(2).toString()}{' '}
                  {props.userInput.baseCurrency}
                </Td>
              </Tr>
              <Tr>
                <Td textAlign="center">25 {props.userInput.futureCurrency}</Td>
                <Td textAlign="center">
                  {(25 / BASE_AMOUNT).toFixed(2).toString()}{' '}
                  {props.userInput.baseCurrency}
                </Td>
              </Tr>
              <Tr>
                <Td textAlign="center">50 {props.userInput.futureCurrency}</Td>
                <Td textAlign="center">
                  {(50 / BASE_AMOUNT).toFixed(2).toString()}{' '}
                  {props.userInput.baseCurrency}
                </Td>
              </Tr>
              <Tr>
                <Td textAlign="center">100 {props.userInput.futureCurrency}</Td>
                <Td textAlign="center">
                  {(100 / BASE_AMOUNT).toFixed(2).toString()}{' '}
                  {props.userInput.baseCurrency}
                </Td>
              </Tr>
              <Tr>
                <Td textAlign="center">500 {props.userInput.futureCurrency}</Td>
                <Td textAlign="center">
                  {(500 / BASE_AMOUNT).toFixed(2).toString()}{' '}
                  {props.userInput.baseCurrency}
                </Td>
              </Tr>
              <Tr>
                <Td textAlign="center">
                  1000 {props.userInput.futureCurrency}
                </Td>
                <Td textAlign="center">
                  {(1000 / BASE_AMOUNT).toFixed(2).toString()}{' '}
                  {props.userInput.baseCurrency}
                </Td>
              </Tr>
              <Tr>
                <Td textAlign="center">
                  5000 {props.userInput.futureCurrency}
                </Td>
                <Td textAlign="center">
                  {(5000 / BASE_AMOUNT).toFixed(2).toString()}{' '}
                  {props.userInput.baseCurrency}
                </Td>
              </Tr>
              <Tr>
                <Td textAlign="center">
                  10000 {props.userInput.futureCurrency}
                </Td>
                <Td textAlign="center">
                  {(10000 / BASE_AMOUNT).toFixed(2).toString()}{' '}
                  {props.userInput.baseCurrency}
                </Td>
              </Tr>
              <Tr>
                <Td textAlign="center">
                  50000 {props.userInput.futureCurrency}
                </Td>
                <Td textAlign="center">
                  {(50000 / BASE_AMOUNT).toFixed(2).toString()}{' '}
                  {props.userInput.baseCurrency}
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </VStack>
    </Stack>
  );
}

export default ResultTable;
