import { Box, Heading, Text, Button } from "@chakra-ui/react";

export default function NotFound() {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgGradient="linear(77deg, brand.primary, brand.secondary)"
        backgroundClip="text"
      >
        404
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        Página não encontrada 🤔
      </Text>
      <Text color={"gray.500"} mb={6}>
        A página procurada ainda não existe
      </Text>

      <Button
        as={"a"}
        bgGradient="linear(77deg, brand.secondary,  brand.primary)"
        color="white"
        variant="solid"
        _hover={{
          bgGradient: "linear(90deg, brand.secondary,  brand.primary)",
        }}
        href="/"
      >
        Voltar para a Home
      </Button>
    </Box>
  );
}
