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
import useTranslation from "next-translate/useTranslation";

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
              Ilton Andrew
            </Text>
            <br />{" "}
            <Text color={"brand.primary"} as={"span"} textShadow="0 0 12px rgba(246, 82, 160, 0.45)">
              <Typewriter
                options={{
                  cursor: "_",
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString(t("hero.type.engineer"))
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString(t("hero.type.developer"))
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString(t("hero.type.buildWeb"))
                    .start();
                }}
              />
            </Text>{" "}
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            {t("hero.subtitle")}
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
                {t("hero.ctaWork")}
              </Button>
            </Link>

            <Link href="mailto:iltonandrew+contato@gmail.com">
              <Button rounded={"full"}>{t("hero.ctaContact")}</Button>
            </Link>
            <Link href="https://converter.gege.codes/" target="_blank">
              <Button rounded={"full"} variant="outline" colorScheme="pink">
                {t("hero.ctaConverter")}
              </Button>
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
