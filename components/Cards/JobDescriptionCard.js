import { Box, chakra, Flex, Link, HStack } from "@chakra-ui/react";
const JobDescriptionCard = () => {
  return (
    <Flex
      bg="#edf3f8"
      _dark={{
        bg: "#3e3e3e",
      }}
      p={16}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        mx="auto"
        px={8}
        py={4}
        rounded="lg"
        shadow="lg"
        bg="white"
        _dark={{
          bg: "gray.800",
        }}
        // maxW="2xl"
      >
        <HStack spacing={4} alignItems="center">
          {" "}
          <chakra.p
            color="gray.600"
            _dark={{
              color: "gray.300",
            }}
            fontWeight={700}
            minW={"10%"}
          >
            Title :
          </chakra.p>
          <HStack minW={"90%"} justify={"space-between"}>
            <Flex
              fontSize="2xl"
              color="gray.700"
              _dark={{
                color: "white",
              }}
              fontWeight="700"
              _hover={{
                color: "gray.600",
                _dark: {
                  color: "gray.200",
                },
              }}
            >
              Front End Developer
            </Flex>
            <chakra.span
              fontSize="sm"
              color="gray.600"
              _dark={{
                color: "gray.400",
              }}
            >
              Feb 15, 2023
            </chakra.span>
          </HStack>
        </HStack>

        <HStack spacing={4} mt={4} align={"flex-start"}>
          <chakra.p
            color="gray.600"
            _dark={{
              color: "gray.300",
            }}
            fontWeight={700}
          >
            Description :
          </chakra.p>
          <chakra.p
            color="gray.600"
            _dark={{
              color: "gray.300",
            }}
            maxW={"70%"}
          >
            Design, develop, test, deploy and maintain software. Delivering
            high-quality and well-structured code. Manage individual project
            priorities and deadlines. Participate in enhancing tools and
            processes. Participate in production observance and technical
            incident management. Ability to quickly learn and adapt to keep up
            in a fast-paced environment. Experience in UI development using
            React JS. In-depth knowledge of JavaScript, CSS, HTML, and front-end
            languages. Excellent front-end coding skills, and a good
            understanding of progressive applications. Strong knowledge of UI
            design principles, patterns, and best practices. Experience working
            with JavaScript and Typescript, React, Redux, RxJS, and Yarn.
            Experience in test-driven development using modern source control
            and continuous integration.
          </chakra.p>
        </HStack>

        <Flex justifyContent="space-between" alignItems="center" mt={4}>
          <Link
            color="brand.600"
            _dark={{
              color: "brand.400",
            }}
            _hover={{
              textDecor: "underline",
            }}
          >
            Read more
          </Link>
        </Flex>
      </Box>
    </Flex>
  );
};

export default JobDescriptionCard;
