import {
  HStack,
  Image,
  Heading,
  Button,
  Stack,
  Container,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <Stack align="center" width="100vw" p={2}>
      <Container maxW="container.xl">
        <HStack justify="space-between">
          <HStack>
            <Image />
            <Heading>Exchange Center</Heading>
          </HStack>
          <HStack spacing={10}>
            <Button variant="link">
              <Link to="/">Current Exchange Rate</Link>
            </Button>
            <Button variant="link">
              <Link to="/historical">Historical Exchange Rate</Link>
            </Button>
          </HStack>
          <ColorModeSwitcher justifySelf="flex-end" />
        </HStack>
      </Container>
    </Stack>
  );
}

export default Navbar;
