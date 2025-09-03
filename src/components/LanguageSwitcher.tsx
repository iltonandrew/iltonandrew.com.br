import { useEffect, useState } from "react";

import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";

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

  const flagSrc =
    currentLocale === "pt-BR" ? "/images/flags/us.png" : "/images/flags/br.png";
  const ariaLabel =
    currentLocale === "pt-BR" ? "Switch to English" : "Mudar para Português";

  const iconEl = (
    <Box
      w="20px"
      h="20px"
      borderRadius="4px"
      bgImage={`url(${flagSrc})`}
      bgSize="cover"
      bgPos="center"
    />
  );

  return (
    <button
      onClick={toggleLanguage}
      aria-label={ariaLabel}
      style={{
        width: 40,
        height: 40,
        minWidth: 40,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 0,
        border: "none",
        background: "transparent",
        borderRadius: 8,
        cursor: "pointer",
      }}
      onMouseOver={(e) => {
        (e.currentTarget as HTMLButtonElement).style.background =
          "rgba(255,255,255,0.12)";
      }}
      onMouseOut={(e) => {
        (e.currentTarget as HTMLButtonElement).style.background = "transparent";
      }}
    >
      {iconEl}
    </button>
  );
}
