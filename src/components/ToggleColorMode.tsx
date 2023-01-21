import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { FaSun, FaMoon } from "react-icons/fa";

export const ToggleColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <IconButton
      aria-label="Toggle color mode"
      icon={isDark ? <FaSun /> : <FaMoon />}
      onClick={toggleColorMode}
    />
  );
};
