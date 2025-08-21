import { useRouter } from "next/router";
import { Button, Menu, MenuButton, MenuList, MenuItem, useColorModeValue } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

export default function LanguageSwitcher() {
  const router = useRouter();
  const { locale, locales, pathname, query, asPath } = router;

  const handleLanguageChange = (newLocale: string) => {
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  const currentLanguage = locale === "pt-BR" ? "PT" : "EN";
  const menuBg = useColorModeValue("white", "gray.800");
  const menuBorder = useColorModeValue("gray.200", "gray.600");

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon />}
        variant="ghost"
        size="sm"
        fontWeight="bold"
        color="brand.primary"
        _hover={{
          bg: "brand.primary",
          color: "white",
        }}
        _active={{
          bg: "brand.secondary",
          color: "white",
        }}
      >
        {currentLanguage}
      </MenuButton>
      <MenuList
        bg={menuBg}
        borderColor={menuBorder}
        boxShadow="lg"
      >
        {locales?.map((loc) => (
          <MenuItem
            key={loc}
            onClick={() => handleLanguageChange(loc)}
            fontWeight={loc === locale ? "bold" : "normal"}
            color={loc === locale ? "brand.primary" : "inherit"}
            _hover={{
              bg: "brand.primary",
              color: "white",
            }}
          >
            {loc === "pt-BR" ? "Português" : "English"}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}