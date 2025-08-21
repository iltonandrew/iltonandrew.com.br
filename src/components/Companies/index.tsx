import { Stack, Container, Divider, Heading } from "@chakra-ui/react";
import CompanyListItem from "./CompanyListItem";
import DownloadButton from "./DownloadButton";
import useTranslation from "next-translate/useTranslation";

export default function Companies() {
  const { t } = useTranslation("common");
  return (
    <Container maxW={"8xl"} p="8" id="work">
      <Heading size="lg" mb={4} ml={8} color={"brand.primary"}>
        {t("companies.title")}
      </Heading>
      <Stack direction="column" p={4} id="companies">
        <CompanyListItem
          name={t("companies.mediaHero.name")}
          role={t("companies.mediaHero.role")}
          data={t("companies.mediaHero.date")}
          image="media-hero.svg"
          description={t("companies.mediaHero.description")}
          stack={t("companies.mediaHero.stack")}
        />
        <Divider />
        <CompanyListItem
          name={t("companies.xp_treasury.name")}
          role={t("companies.xp_treasury.role")}
          data={t("companies.xp_treasury.date")}
          image="xp.png"
          description={t("companies.xp_treasury.description")}
          stack={t("companies.xp_treasury.stack")}
        />
        <Divider />
        <CompanyListItem
          name={t("companies.pipefy.name")}
          role={t("companies.pipefy.role")}
          data={t("companies.pipefy.date")}
          image="pipefy.png"
          description={t("companies.pipefy.description")}
          stack={t("companies.pipefy.stack")}
        />
        <Divider />
        <CompanyListItem
          name={t("companies.xp_intern.name")}
          role={t("companies.xp_intern.role")}
          data={t("companies.xp_intern.date")}
          image="xp.png"
          description={t("companies.xp_intern.description")}
          stack={t("companies.xp_intern.stack")}
        />
        <Divider />
        <CompanyListItem
          name={t("companies.adp.name")}
          role={t("companies.adp.role")}
          data={t("companies.adp.date")}
          image="adp.jpg"
          description={t("companies.adp.description")}
          stack={t("companies.adp.stack")}
        />
        <Divider />
        <CompanyListItem
          name={t("companies.poli.name")}
          role={t("companies.poli.role")}
          data={t("companies.poli.date")}
          image="poli-junior.png"
          description={t("companies.poli.description")}
          stack={t("companies.poli.stack")}
        />
        <Divider />
      </Stack>
      <DownloadButton />
    </Container>
  );
}
