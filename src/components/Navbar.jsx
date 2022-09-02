import { HStack, Image, Heading, Button } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <HStack>
      <HStack>
        <Image />
        <Heading>Exchange Center</Heading>
      </HStack>
      <HStack>
        <Button>
          <Link to="/">Current Exchange Rate</Link>
        </Button>
        <Button>
          <Link to="/historic">Historical Exchange Rate</Link>
        </Button>
      </HStack>
      <ColorModeSwitcher justifySelf="flex-end" />
    </HStack>
  );
}

export default Navbar;
