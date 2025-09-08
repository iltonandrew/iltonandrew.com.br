import { Container, Divider, Heading, Stack } from "@chakra-ui/react";

import CompanyListItem from "./CompanyListItem";
import DownloadButton from "./DownloadButton";
import { useTranslation } from "@/hooks/useTranslation";

export default function Companies() {
  const { t } = useTranslation();
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
          data="2025"
          image="converter-gege-codes.svg"
          description={t("work.sideProjects.converter.description")}
          stack="NextJS, TypeScript, Tailwind CSS"
          link={t("work.sideProjects.converter.link")}
        />
        <CompanyListItem
          name={t("work.sideProjects.zoroscopo.name")}
          role={t("work.sideProjects.personalProject")}
          data="2025"
          image="zoroscopo.svg"
          description={t("work.sideProjects.zoroscopo.description")}
          stack="NextJS, TypeScript, AI, OpenAI"
          link={t("work.sideProjects.zoroscopo.link")}
        />
      </Stack>

      <DownloadButton />
    </Container>
  );
}
