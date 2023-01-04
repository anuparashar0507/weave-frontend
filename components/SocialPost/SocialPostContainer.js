import React, { useEffect, useState } from "react";
import { Box, Flex, Text, SimpleGrid, Button, chakra } from "@chakra-ui/react";
// import BlogPostCard from "./BlogPostCard";
import SocialPostCard from "./SocialPostCard";
import { createRandomblogs } from "../../api/generateBlogPost";
const SocialPostContainer = () => {
  const [latestBlogs, setLatestBlogs] = useState([]);
  useEffect(() => {
    let newBlogs = [];
    for (let i = 0; i < 10; i++) {
      const blogs = createRandomblogs();
      newBlogs.push(blogs);
    }
    setLatestBlogs([...newBlogs]);
  }, []);
  console.log("Blogs :  ", latestBlogs);
  return (
    <Flex
      px={2}
      w="container.lg"
      //   justifyContent="flex-start"
      //   alignItems="flex-start"
      //   pos="fixed"
      overflow={"scroll"}
      maxH={"100%"}
    >
      <Box
        shadow="xl"
        bg="white"
        _dark={{
          bg: "gray.800",
        }}
        px={8}
        py={20}
        mx="auto"
      >
        {latestBlogs.map((blog) => {
          return (
            <Box key={blog._id}>
              <SocialPostCard
                image={blog.image}
                name={blog.firstName}
                avatar={blog.avatar}
              />
            </Box>
          );
        })}
      </Box>
    </Flex>
  );
};

export default SocialPostContainer;
