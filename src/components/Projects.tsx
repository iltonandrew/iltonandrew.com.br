import { Box, Container, Heading, Link, SimpleGrid, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";

export default function Projects() {
  const { t } = useTranslation("projects");
  const items = t("items", {}, { returnObjects: true }) as Array<{
    name: string;
    description: string;
    link: string;
  }>;
  const cardBg = useColorModeValue("white", "gray.800");
  const cardBorder = useColorModeValue("rgba(255,0,170,0.3)", "rgba(0,229,255,0.3)");
  const textColor = useColorModeValue("gray.600", "gray.300");

  return (
    <Container maxW={"8xl"} p="8" id="projects">
      <Heading size="lg" mb={6} ml={8} color={"brand.primary"}>
        {t("heading")}
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
        {items.map((p) => (
          <Link key={p.name} href={p.link} isExternal _hover={{ textDecoration: "none" }}>
            <Box
              borderRadius="2xl"
              bg={cardBg}
              p={6}
              borderWidth="1px"
              borderColor={cardBorder}
              boxShadow="0 0 0 1px rgba(255,255,255,0.02), 0 10px 30px rgba(0,0,0,0.2)"
              transition="transform 200ms ease, box-shadow 200ms ease"
              _hover={{ transform: "translateY(-4px)", boxShadow: "0 0 0 1px rgba(255,255,255,0.06), 0 18px 40px rgba(0,0,0,0.35)" }}
            >
              <Stack spacing={2}>
                <Heading size="md">{p.name}</Heading>
                <Text color={textColor} fontSize="sm">
                  {p.description}
                </Text>
                <Text fontSize="xs" color="brand.secondary">{p.link}</Text>
              </Stack>
            </Box>
          </Link>
        ))}
      </SimpleGrid>
    </Container>
  );
}
