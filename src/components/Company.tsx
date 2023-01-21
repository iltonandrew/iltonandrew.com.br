import { Divider, Stack, Text, Img } from "@chakra-ui/react";

type CompanyProps = {
  name: string;
  role: string;
  image: string;
  data: string;
  description: string;
  stack: string;
};

export default function Company({
  name,
  role,
  image,
  data,
  description,
  stack,
}: CompanyProps) {
  return (
    <>
      <Stack direction="row" p={8}>
        <Img src={`"../../images/companies/${image}`} alt={name} maxH="75px" />
        <Stack direction="column" pl={4}>
          <Text fontWeight={"bold"} fontSize="xl" marginBottom={"-2"}>
            {name}
          </Text>
          <Text>{role}</Text>
          <Text fontStyle={"italic"} fontSize={"2xs"}>
            {data}
          </Text>
          <Text fontSize={"xs"}>{description}</Text>
          <Text fontSize={"xs"}>Trabalhei com: {stack}</Text>
        </Stack>
      </Stack>
    </>
  );
}
