import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  //   Link,
  Stack,
  Image,
  HStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [route, setRoute] = useState("employee");

  const handleClick = (role) => {
    if (role === "hr") {
      setRoute("hr");
      setUserName("hr@company.com");
      setPassword("passssssss");
    } else if (role === "manager") {
      setRoute("manager");
      setUserName("manager@company.com");
      setPassword("passssssss");
    } else {
      setRoute("employee");
      setUserName("employee@company.com");
      setPassword("passssssss");
    }
  };
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Heading
            mb={8}
            textAlign={"center"}
            fontSize={"64px"}
            // fontFamily={"head"}
            color={"blue.700"}
          >
            Zenroll
          </Heading>
          <Heading fontSize={"2xl"}>Sign in to your account</Heading>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              type="email"
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: "column", sm: "row" }}
              align={"start"}
              justify={"space-between"}
            >
              <Checkbox>Remember me</Checkbox>
              <Link color={"blue.500"} href={"#"}>
                Forgot password?
              </Link>
            </Stack>
            <HStack>
              <Button
                colorScheme={"blue"}
                variant={"solid"}
                onClick={() => handleClick("hr")}
              >
                HR
              </Button>{" "}
              <Button
                colorScheme={"blue"}
                variant={"solid"}
                onClick={() => handleClick("manager")}
              >
                Manager
              </Button>{" "}
              <Button
                colorScheme={"blue"}
                variant={"solid"}
                onClick={() => handleClick("employee")}
              >
                Employee
              </Button>
            </HStack>
            <Button
              as={Link}
              href={"/" + route}
              colorScheme={"blue"}
              variant={"solid"}
            >
              Sign in
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={
            "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
          }
        />
      </Flex>
    </Stack>
  );
}
