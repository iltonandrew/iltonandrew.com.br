import { Stack, Container, Divider, Heading } from "@chakra-ui/react";
import CompanyListItem from "./CompanyListItem";
import DownloadButton from "./DownloadButton";
import useTranslation from "next-translate/useTranslation";

export default function Companies() {
  const { t } = useTranslation("work");
  const companies = t("items", {}, { returnObjects: true }) as Array<{
    name: string;
    role: string;
    data: string;
    image: string;
    description: string;
    stack: string;
  }>;
  return (
    <Container maxW={"8xl"} p="8" id="work">
      <Heading size="lg" mb={4} ml={8} color={"brand.primary"}>
        {t("heading")}
      </Heading>
      <Stack direction="column" p={4} id="companies">
        {companies.map((c) => (
          <>
            <CompanyListItem
              key={`${c.name}-${c.data}`}
              name={c.name}
              role={c.role}
              data={c.data}
              image={c.image}
              description={c.description}
              stack={c.stack}
            />
            <Divider />
          </>
        ))}
      </Stack>
      <DownloadButton />
    </Container>
  );
}
