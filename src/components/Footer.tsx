import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  Link,
  Flex,
  Img,
} from "@chakra-ui/react";
import {
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaDiscord,
  FaLinkedin,
} from "react-icons/fa";
import { ReactNode } from "react";
import { useTranslation } from "@/hooks/useTranslation";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const Logo = (props: any) => {
  return (
    <Img
      src="/fullname.svg"
      alt="Ilton Andrew"
      width="100px"
      height="auto"
      {...props}
    />
  );
};

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer>
      <Box
        color={useColorModeValue("gray.700", "gray.200")}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Box minW="100%">
          <Flex
            align={"center"}
            _before={{
              content: '""',
              borderBottom: "1px solid",
              borderColor: useColorModeValue("gray.200", "gray.700"),
              flexGrow: 1,
              mr: 8,
            }}
            _after={{
              content: '""',
              borderBottom: "1px solid",
              borderColor: useColorModeValue("gray.200", "gray.700"),
              flexGrow: 1,
              ml: 8,
            }}
          >
            <Logo />
          </Flex>
        </Box>
        <Stack direction={"row"} spacing={4} py={4} mt="-24px">
          <SocialButton label={"Twitter"} href={"#"}>
            <FaTwitter />
          </SocialButton>
          <SocialButton label={"YouTube"} href={"#"}>
            <FaYoutube />
          </SocialButton>
          <SocialButton
            label={"Instagram"}
            href={"https://www.instagram.com/ilton.andrew/"}
          >
            <FaInstagram />
          </SocialButton>
          <SocialButton
            label={"Discord"}
            href={"https://discord.com/users/522183614490869761"}
          >
            <FaDiscord />
          </SocialButton>
          <SocialButton
            label={"LinkedIn"}
            href={"https://www.linkedin.com/in/ilton-andrew/"}
          >
            <FaLinkedin />
          </SocialButton>
        </Stack>
      </Box>
    </footer>
  );
}
