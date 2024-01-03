import React from "react";
import { useFormik, Formik, Field } from "formik";

import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext"

const LandingSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      type: '',
      comment: ''
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('Required'),
      type: Yup.string().required('Required'),
      email: Yup.string().required('Required')
    }),
  });

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start"   >
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <Formik initialValues={formik.initialValues} validationSchema={formik.validationSchema}
          >
            <form onSubmit={formik.handleSubmit}>
              <VStack spacing={4} >
                <FormControl isInvalid={formik.errors.firstName && formik.touched.firstName}>
                  <FormLabel htmlFor="firstName">Name</FormLabel>
                  <Field as={Input}
                    id="firstName"
                    name="firstName"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                    onBlur={formik.handleBlur}
                  />
                  <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={formik.errors.email && formik.touched.email}>
                  <FormLabel htmlFor="email">Email Address</FormLabel>
                  <Field as={Input}
                    id="email"
                    name="email"
                    type="email"
                    {...formik.getFieldProps("email")}
                  />
                  <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                </FormControl>

                <FormControl>
                  <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                  <Select id="type" name="type">
                    <option value="hireMe">Freelance project proposal</option>
                    <option value="openSource">
                      Open source consultancy session
                    </option>
                    <option value="other">Other</option>
                  </Select>
                </FormControl>

                <FormControl isInvalid={false}>
                  <FormLabel htmlFor="comment">Your message</FormLabel>
                  <Textarea
                    id="comment"
                    name="comment"
                    height={250}
                  />
                </FormControl>

                <Button type="submit" colorScheme="purple" width="full">
                  Submit
                </Button>
              </VStack>
            </form>
          </Formik>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
