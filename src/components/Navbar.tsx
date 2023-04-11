import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
const Navbar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      {/* <Image src="https://via.placeholder.com/150" alt="Logo" /> */}
      {/* <Image
        src="https://bit.ly/dan-abramov"
        alt="Dan Abramov"
        boxSize="60px"
        objectFit="cover"
      /> */}

      <Image src={logo} boxSize="60px" objectFit="cover" />
      {/* <Text> Nav</Text> */}
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
