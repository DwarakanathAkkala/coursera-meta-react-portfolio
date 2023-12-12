import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Dwaraka!";
const bio1 = "A Frontend Developer";
const bio2 = "Specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={4}>
      <Heading as='h1' >{greeting}</Heading>
      <Avatar name='Dwarakanath Akkala' src='https://dwarakanath-akkala.netlify.app/assets/img/perfil.webp' size='2xl' />
      <Heading as='h2'>{bio1}</Heading>
      <Heading as='h3'>{bio2}</Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
