import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
const Navbar = () => {
  return (
    <HStack>
      {/* <Image src="https://via.placeholder.com/150" alt="Logo" /> */}
      {/* <Image
        src="https://bit.ly/dan-abramov"
        alt="Dan Abramov"
        boxSize="60px"
        objectFit="cover"
      /> */}

      <Image src={logo} boxSize="60px" objectFit="cover" />
      <Text> Nav</Text>
    </HStack>
  );
};

export default Navbar;
