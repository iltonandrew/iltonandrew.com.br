import { Button, Link, Stack } from "@chakra-ui/react";

import { DownloadIcon } from "@chakra-ui/icons";
import { useTranslation } from "@/hooks/useTranslation";

export default function DownloadButton() {
  const { t, locale } = useTranslation();
  const resumeHref = "/resumes/Ilton_Andrew_CV.pdf";
  return (
    <Stack display={"flex"} alignItems="center" mt="4">
      <Link href={resumeHref} target={"_blank"}>
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
    </Stack>
  );
}
