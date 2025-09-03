import {
  Box,
  Img,
  Link,
  Stack,
  Text,
  keyframes,
  useColorModeValue,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

import { useIntersectionObserver } from "@/hooks";
import { useTranslation } from "@/hooks/useTranslation";

type CompanyProps = {
  name: string;
  role: string;
  image: string;
  data: string;
  description: string;
  stack: string;
  link?: string;
};

export default function Company({
  name,
  role,
  image,
  data,
  description,
  stack,
  link,
}: CompanyProps) {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;
  const defaultSrc = `/images/companies/${image}`;
  const mediaHeroSrc = useColorModeValue(
    "/images/companies/media-hero-black.svg",
    "/images/companies/media-hero.svg"
  );
  const logoSrc = image.includes("media-hero") ? mediaHeroSrc : defaultSrc;

  const animationKeyframes = keyframes`
  0% {transform: translateX(-50%); opacity: 0; }
  100% { transform: translateX(0%); opacity: 100%;}
  `;
  const animation = `${animationKeyframes} 600ms ease-in-out`;
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setHasBeenVisible(true);
      }, 800);
    }
  }, [isVisible]);

  return (
    <>
      <Stack
        ref={ref}
        animation={isVisible && !hasBeenVisible ? animation : undefined}
        direction="row"
        p={8}
        align="center"
      >
        {image && (
          <Box
            w="84px"
            h="84px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexShrink={0}
          >
            <Img
              src={logoSrc}
              alt={name}
              h="75px"
              maxW="100%"
              objectFit="contain"
            />
          </Box>
        )}
        <Stack direction="column" pl={4}>
          {link ? (
            <Link href={link} isExternal>
              <Text
                fontWeight={"bold"}
                fontSize="xl"
                marginBottom={"-2"}
                color="brand.primary"
                _hover={{ textDecoration: "underline" }}
              >
                {name}
              </Text>
            </Link>
          ) : (
            <Text fontWeight={"bold"} fontSize="xl" marginBottom={"-2"}>
              {name}
            </Text>
          )}
          <Text>{role}</Text>
          <Text fontStyle={"italic"} fontSize={"2xs"}>
            {data}
          </Text>
          <Text fontSize={"xs"}>{description}</Text>
          <Text fontSize={"xs"}>
            {t("work.workedWith")} {stack}
          </Text>
        </Stack>
      </Stack>
    </>
  );
}
