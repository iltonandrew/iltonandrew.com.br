import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  ButtonGroup,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  Img,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { ToggleColorMode } from "./ToggleColorMode";

import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();
  const router = useRouter();
  const { t } = useTranslation("common");

  const navItems: Array<NavItem> = [
    {
      label: t("nav.about"),
      href: "/#about",
    },
    {
      label: t("nav.work"),
      href: "/#work",
      children: [
        {
          label: t("nav.whereWorked"),
          subLabel: t("nav.whereWorkedSub"),
          href: "/#work",
        },
        {
          label: t("nav.projects"),
          subLabel: t("nav.projectsSub"),
        },
      ],
    },
    {
      label: t("nav.contact"),
      href: "mailto:iltonandrew+contato@gmail.com",
    },
  ];

  const currentLocale = router.locale || "pt-BR";
  const switchLocale = (locale: string) => {
    if (locale === currentLocale) return;
    router.push(router.asPath, router.asPath, { locale });
  };

  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        maxH={"100px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
        justify={"space-between"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex
          flex={{ base: 1 }}
          justify={{ base: "center", md: "start" }}
          align={{ base: "center" }}
        >
          <Link href={"/"}>
            <Img
              boxSize="150px"
              src={"/fullname.svg"}
              paddingRight={4}
              alt="Logo"
            />
          </Link>
          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav items={navItems} />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <ToggleColorMode />
          <ButtonGroup isAttached size="sm" variant="outline">
            <Button
              onClick={() => switchLocale("pt-BR")}
              colorScheme={currentLocale === "pt-BR" ? "pink" : undefined}
              borderColor={useColorModeValue("gray.300", "gray.600")}
            >
              PT
            </Button>
            <Button
              onClick={() => switchLocale("en")}
              colorScheme={currentLocale === "en" ? "pink" : undefined}
              borderColor={useColorModeValue("gray.300", "gray.600")}
            >
              EN
            </Button>
          </ButtonGroup>
          <Button
            textAlign={"center"}
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg={"brand.primary"}
            _hover={{
              bg: "pink.300",
              boxShadow: "0 0 16px rgba(246, 82, 160, 0.6)",
            }}
            as="a"
            href={router.pathname === "/blog" ? "/" : "/blog"}
          >
            {router.pathname === "/blog" ? t("nav.home") : t("nav.blog")}
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav items={navItems} />
      </Collapse>
    </Box>
  );
}

const DesktopNav = ({ items }: { items: Array<NavItem> }) => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  // const linkHoverColor = useColorModeValue("brand.primary", "brand.primary");
  const popoverContentBgColor = useColorModeValue("white", "gray.900");

  return (
    <Stack direction={"row"} spacing={4}>
      {items.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"xl"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: "brand.primary",
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                shadow={"xl"}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = ({ items }: { items: Array<NavItem> }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {items.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

// NAV items are generated from translations in the component
