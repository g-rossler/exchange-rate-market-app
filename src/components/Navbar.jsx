import { HStack, Image, Heading, Button } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

function Navbar() {
  return (
    <HStack>
      <HStack>
        <Image />
        <Heading>Exchange Center</Heading>
      </HStack>
      <HStack>
        <Button>Current Exchange Rate</Button>
        <Button>Historical Exchange Rate</Button>
      </HStack>
      <ColorModeSwitcher justifySelf="flex-end" />
    </HStack>
  );
}

export default Navbar;
