import {
  Badge,
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  HStack,
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
  profilesummary,
}) => {
  return (
    <Center py={6}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={"100%"}
        direction={{ base: "column", md: "column" }}
        bg={"white"}
        boxShadow={"2xl"}
        padding={4}
      >
        <HStack>
          {" "}
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
          </Stack>
        </HStack>
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
