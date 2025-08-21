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
import useTranslation from "next-translate/useTranslation";

import Typewriter from "typewriter-effect";

export default function Hero() {
  const { t } = useTranslation("common");
  
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
              {t("hero.name")}
            </Text>
            <br />{" "}
            <Text color={"brand.primary"} as={"span"}>
              <Typewriter
                options={{
                  cursor: "_",
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString(t("hero.typewriter.engineer"))
                    .pauseFor(1000)
                    .deleteChars(t("hero.typewriter.engineer").length)
                    .typeString(t("hero.typewriter.developer"))
                    .pauseFor(1000)
                    .deleteChars(t("hero.typewriter.developer").length)
                    .typeString(t("hero.typewriter.builder"))
                    .start();
                }}
              />
            </Text>{" "}
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            {t("hero.description")}
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
                {t("hero.buttons.work")}
              </Button>
            </Link>

            <Link href="mailto:iltonandrew+contato@gmail.com">
              <Button rounded={"full"}>{t("hero.buttons.contact")}</Button>
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
