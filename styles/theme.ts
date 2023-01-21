import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const fonts = {
  body: `Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Roboto, Arial, sans-serif`,
  code: "monospace",
};

const overrides = {
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  colors: { brand: { primary: "#f652a0", secondary: "#00ffff" } },
  fonts,
  styles: {
    global: () => ({
      ".mdx-prose": {
        h1: {
          fontSize: "xl",
          mb: "50",
        },
        p: {
          fontSize: "sm",
          lineHeight: "1.4",
        },
      },
    }),
  },
};

export const theme = extendTheme(overrides);
