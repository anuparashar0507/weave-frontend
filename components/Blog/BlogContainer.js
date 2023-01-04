import React, { useEffect, useState } from "react";
import { Box, Flex, Text, SimpleGrid, Button, chakra } from "@chakra-ui/react";
import BlogPostCard from "./BlogPostCard";
import { createRandomblogs } from "../../api/generateBlogPost";
const BlogContainer = () => {
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
      //   top={24}
      //   bg="#edf3f8"
      //   _dark={{
      //     bg: "#3e3e3e",
      //   }}
      px={2}
      //   py={8}
      w="container.lg"
      justifyContent="center"
      alignItems="center"
      pos="fixed"
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
              <BlogPostCard
                image={blog.image}
                title={blog.title}
                description={blog.article}
              />
            </Box>
          );
        })}
        {/* <BlogPostCard /> <BlogPostCard /> <BlogPostCard /> <BlogPostCard />{" "}
        <BlogPostCard /> <BlogPostCard /> <BlogPostCard /> <BlogPostCard />{" "}
        <BlogPostCard /> <BlogPostCard /> <BlogPostCard /> <BlogPostCard />{" "}
        <BlogPostCard /> <BlogPostCard /> */}
      </Box>
    </Flex>
  );
};

export default BlogContainer;
