import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <>
      <VStack bg="white" color='black' borderRadius='lg' pb='3' >
        <Image src={imageSrc} alt={title} borderRadius='lg' />
        <Text alignSelf='flex-start' as='b' px='8px' >{title}</Text>
        <Text px='8px' color='blackAlpha.600'>{description}</Text>
        <HStack alignSelf='flex-start' px='8px'>
          <Text>See more </Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack >
    </>
  );
};

export default Card;
