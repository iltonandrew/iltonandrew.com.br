import { Button, Stack, Link, useColorModeValue } from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";
import useTranslation from "next-translate/useTranslation";

export default function DownloadButton() {
  const { t } = useTranslation("common");
  return (
    <Stack display={"flex"} alignItems="center" mt="4">
      <Link href="/resumes/Ilton_Andrew-CV-PT-BR.pdf" target={"_blank"}>
        <Button
          leftIcon={<DownloadIcon />}
          color={"white"}
          bg={"brand.primary"}
          _hover={{
            bg: "brand.primary",
          }}
          variant="solid"
          borderRadius={"3xl"}
          maxW="md"
        >
          {t("resume.download")}
        </Button>
      </Link>
      <Link
        href="/resumes/Ilton_Andrew-CV-EN.pdf"
        target={"_blank"}
        color={useColorModeValue("cyan.500", "brand.secondary")}
      >
        {t("resume.englishVersion")}
      </Link>
    </Stack>
  );
}
