import {
  Badge,
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const JobProfileCard = ({
  name,
  skills,
  experience,
  score,
  skillsummary,
  profilesummary,
}) => {
  return (
    <Center py={6}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        // w={{ sm: "100%", md: "400px" }}
        w={"100%"}
        height={{ sm: "476px", md: "14rem" }}
        direction={{ base: "column", md: "row" }}
        bg={"white"}
        boxShadow={"2xl"}
        padding={4}
      >
        <Flex alignItems="flex-start">
          <Image
            mx={4}
            w={16}
            h={16}
            rounded="full"
            fit="cover"
            display={{
              base: "none",
              sm: "block",
            }}
            src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=40&q=80"
            alt="avatar"
          />
        </Flex>
        <Stack
          flex={1}
          flexDirection="column"
          // justifyContent="left"
          // alignItems="center"
          p={1}
          pt={2}
        >
          <Heading fontSize={"xl"} fontFamily={"body"} px={3}>
            {name}
          </Heading>
          <Text textAlign={"left"} color={"gray.700"} px={3}>
            Experience : {experience}
          </Text>
          <Stack align={"center"} justify={"left"} direction={"row"} mt={6}>
            {skills.length > 0 &&
              skills.map((skill, i) => {
                return (
                  <Badge
                    key={i}
                    px={2}
                    py={1}
                    bg={"gray.50"}
                    fontWeight={"400"}
                  >
                    #{skill}
                  </Badge>
                );
              })}
          </Stack>
          <Text textAlign={"left"} color={"gray.700"} px={3}>
            Matching Score : {score}
          </Text>

          {/* <Stack
            width={"100%"}
            mt={"2rem"}
            direction={"row"}
            padding={2}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Button
              flex={1}
              fontSize={"sm"}
              rounded={"full"}
              _focus={{
                bg: "gray.200",
              }}
            >
              Select
            </Button>
            <Button
              flex={1}
              fontSize={"sm"}
              rounded={"full"}
              bg={"blue.400"}
              color={"white"}
              boxShadow={
                "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
              }
              _hover={{
                bg: "blue.500",
              }}
              _focus={{
                bg: "blue.500",
              }}
            >
              Discard
            </Button>
          </Stack> */}
        </Stack>
        <Stack
          flex={1}
          flexDirection="column"
          // justifyContent="left"
          // alignItems="center"
          p={1}
          spacing={1}
          pt={2}
        >
          <Heading fontSize={"xl"} fontFamily={"body"} px={3}>
            Profile Summary
          </Heading>
          <Divider />
          <Text noOfLines={4} textAlign={"left"} color={"gray.700"} px={3}>
            {profilesummary}
          </Text>
        </Stack>
      </Stack>
    </Center>
  );
};
export default JobProfileCard;
