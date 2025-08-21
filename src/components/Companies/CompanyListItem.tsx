import { Stack, Text, Img, keyframes } from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";

import { useState, useRef, useEffect } from "react";

import { useIntersectionObserver } from "@/hooks";

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
  const { t } = useTranslation("work");
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;

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
      >
        <Img src={`/images/companies/${image}`} alt={name} maxH="75px" />
        <Stack direction="column" pl={4}>
          <Text fontWeight={"bold"} fontSize="xl" marginBottom={"-2"}>
            {name}
          </Text>
          <Text>{role}</Text>
          <Text fontStyle={"italic"} fontSize={"2xs"}>
            {data}
          </Text>
          <Text fontSize={"xs"}>{description}</Text>
          <Text fontSize={"xs"}>{t("workedWith")}: {stack}</Text>
        </Stack>
      </Stack>
    </>
  );
}
