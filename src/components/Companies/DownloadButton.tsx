import { Button, Stack, Link, useColorModeValue } from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";

export default function DownloadButton() {
  const router = useRouter();
  const { t } = useTranslation("common");
  const isPT = (router.locale || "pt-BR") === "pt-BR";
  const accentColor = useColorModeValue("cyan.500", "brand.secondary");
  return (
    <Stack display={"flex"} alignItems="center" mt="4">
      <Link
        href={isPT ? "/resumes/Ilton_Andrew-CV-PT-BR.pdf" : "/resumes/Ilton_Andrew-CV-EN.pdf"}
        target={"_blank"}
      >
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
      {!isPT && (
        <Link href="/resumes/Ilton_Andrew-CV-PT-BR.pdf" target={"_blank"} color={accentColor}>
          {t("resume.portugueseVersion")}
        </Link>
      )}
      {isPT && (
        <Link href="/resumes/Ilton_Andrew-CV-EN.pdf" target={"_blank"} color={accentColor}>
          {t("resume.englishVersion")}
        </Link>
      )}
    </Stack>
  );
}
