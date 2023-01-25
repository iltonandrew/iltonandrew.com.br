import {
  Button,
  Flex,
  Heading,
  Img,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Link from "next/link";

import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      height={useBreakpointValue({ base: "auto", md: "100vh" })}
      p={16}
      id="#about"
    >
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: useBreakpointValue({ base: "20%", md: "30%" }),
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "brand.primary",
                zIndex: -1,
              }}
            >
              Ilton Andrew
            </Text>
            <br />{" "}
            <Text color={"brand.primary"} as={"span"}>
              <Typewriter
                options={{
                  cursor: "_",
                }}
                onInit={(typewriter) => {
                  typewriter

                    .typeString("Eu sou um Engenheiro.")
                    .pauseFor(1000)
                    .deleteChars(11)
                    .typeString("Desenvolvedor.")
                    .pauseFor(1000)
                    .deleteChars(21)
                    .typeString("construo coisas para a web.")
                    .start();
                }}
              />
            </Text>{" "}
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            Formado em Engenharia Elétrica e de Computação pela Escola
            Politécnica da Universidade de São Paulo, atualmente se aventurando
            no mundo da Engenharia de Software.
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Link href="#work" scroll={false}>
              <Button
                rounded={"full"}
                bg={"brand.primary"}
                color={"white"}
                _hover={{
                  bg: "brand.secondary",
                }}
              >
                Onde trabalhei
              </Button>
            </Link>

            <Link href="mailto:iltonandrew+contato@gmail.com">
              <Button rounded={"full"}>Entre em contato</Button>
            </Link>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1} align={"center"} justify={"center"}>
        <Img
          borderRadius={"full"}
          objectFit={"cover"}
          alt={"My photo"}
          src={"/images/profile_photo.jpg"}
        />
      </Flex>
    </Stack>
  );
}
