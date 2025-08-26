import { Button, HStack, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function LanguageSwitcher() {
  const router = useRouter();
  const [currentLocale, setCurrentLocale] = useState(router.locale || "pt-BR");

  useEffect(() => {
    setCurrentLocale(router.locale || "pt-BR");
  }, [router.locale]);

  const toggleLanguage = () => {
    const newLocale = currentLocale === "pt-BR" ? "en" : "pt-BR";
    router.push(router.asPath, router.asPath, { locale: newLocale });
  };

  return (
    <Button
      onClick={toggleLanguage}
      variant="outline"
      size="sm"
      colorScheme="brand"
      _hover={{
        bg: "brand.primary",
        color: "white",
      }}
    >
      <HStack spacing={1}>
        <Text fontSize="sm" fontWeight="medium">
          {currentLocale === "pt-BR" ? "EN" : "PT"}
        </Text>
      </HStack>
    </Button>
  );
}