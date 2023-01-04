import { Box, Flex, Heading, Text, Image, Button } from "@chakra-ui/react";
// import { createAvatar } from "@dicebear/avatars";
// import * as style from "@dicebear/avatars-male-sprites";
const PostCard = () => {
  //   let svg = createAvatar(style, {
  //     seed: "custom-seed",
  //     // ... and other options
  //   });

  return (
    <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden">
      <Flex px="6" py="4" align="center">
        {/* <Image src={svg} size="50px" rounded="full" /> */}
        <Box ml="4">
          <Heading as="h4" size="md" fontWeight="bold">
            John Smith
          </Heading>
          <Text fontSize="sm" color="gray.600">
            Jan 1, 2021
          </Text>
        </Box>
      </Flex>
      <Box px="6" py="4">
        <Text fontSize="lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
      </Box>
      <Box px="6" py="4">
        <Image src="post-image.jpg" />
      </Box>
      <Flex px="6" py="4" align="center">
        <Button variant="outline" size="sm" mr="2">
          Like
        </Button>
        <Button variant="outline" size="sm" mr="2">
          Comment
        </Button>
        <Button variant="outline" size="sm">
          Share
        </Button>
      </Flex>
    </Box>
  );
};

export default PostCard;
