import { Stack, Container, Divider, Heading } from "@chakra-ui/react";
import CompanyListItem from "./CompanyListItem";
import DownloadButton from "./DownloadButton";
import useTranslation from "next-translate/useTranslation";

export default function Companies() {
  const { t } = useTranslation("common");
  return (
    <Container maxW={"8xl"} p="8" id="work">
      <Heading size="lg" mb={4} ml={8} color={"brand.primary"}>
        {t("work.title")}
      </Heading>
      <Stack direction="column" p={4} id="companies">
        <CompanyListItem
          name={t("work.companies.mediaHero.name")}
          role={t("work.companies.mediaHero.role")}
          data={t("work.companies.mediaHero.period")}
          image="media-hero.svg"
          description={t("work.companies.mediaHero.description")}
          stack="NextJS, TRPC, Terraform, DevOps"
        />
        <Divider />
        <CompanyListItem
          name={t("work.companies.xp.name")}
          role={t("work.companies.xp.role")}
          data={t("work.companies.xp.period")}
          image="xp.png"
          description={t("work.companies.xp.description")}
          stack="Python, Go, SQL, Real-time Data"
        />
        <Divider />
        <CompanyListItem
          name={t("work.companies.pipefy.name")}
          role={t("work.companies.pipefy.role")}
          data={t("work.companies.pipefy.period")}
          image="pipefy.png"
          description={t("work.companies.pipefy.description")}
          stack="TypeScript, React, GraphQL, Ruby on Rails, Elixir"
        />
        <Divider />
        <CompanyListItem
          name={t("work.companies.xpIntern.name")}
          role={t("work.companies.xpIntern.role")}
          data={t("work.companies.xpIntern.period")}
          image="xp.png"
          description={t("work.companies.xpIntern.description")}
          stack="Python, Django, Power BI, SQL"
        />
        <Divider />
        <CompanyListItem
          name={t("work.companies.adp.name")}
          role={t("work.companies.adp.role")}
          data={t("work.companies.adp.period")}
          image="adp.jpg"
          description={t("work.companies.adp.description")}
          stack="Angular, React, Gatsby, CMS"
        />
        <Divider />
        <CompanyListItem
          name={t("work.companies.poliJunior.name")}
          role={t("work.companies.poliJunior.role")}
          data={t("work.companies.poliJunior.period")}
          image="poli-junior.png"
          description={t("work.companies.poliJunior.description")}
          stack="Python, Django, NodeJS, React, React Native"
        />
        <Divider />
      </Stack>
      
      {/* Side Projects Section */}
      <Heading size="lg" mb={4} ml={8} mt={8} color={"brand.primary"}>
        {t("work.sideProjects.title")}
      </Heading>
      <Stack direction="column" p={4}>
        <CompanyListItem
          name={t("work.sideProjects.converter.name")}
          role={t("work.sideProjects.personalProject")}
          data="2023"
          image=""
          description={t("work.sideProjects.converter.description")}
          stack="NextJS, TypeScript, Tailwind CSS"
          link={t("work.sideProjects.converter.link")}
        />
      </Stack>
      
      <DownloadButton />
    </Container>
  );
}
