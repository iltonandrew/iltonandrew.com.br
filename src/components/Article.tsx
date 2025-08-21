import React from "react";
import {
  Box,
  Heading,
  Link as ChakraLink,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  SpaceProps,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
interface IBlogTags {
  tags: Array<string>;
  marginTop?: SpaceProps["marginTop"];
}
import { PostMeta } from "@/types";

const BlogTags: React.FC<IBlogTags> = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={"md"} variant="solid" colorScheme="cyan" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};
export default function Article(props: { post: PostMeta; key: string }) {
  return (
    <Box
      marginTop={{ base: "1", sm: "5" }}
      display="flex"
      flexDirection={{ base: "column", sm: "row" }}
      justifyContent="space-between"
      height={{ base: "200px", sm: "200px" }}
      width="100%"
    >
      <Box
        display="flex"
        flex="1"
        marginRight="3"
        position="relative"
        // alignItems="center"
        maxW={{ base: "100%", sm: "25%" }}
      >
        <Box
          display={"flex"}
          width={{ base: "100%", sm: "85%" }}
          zIndex="2"
          marginLeft={{ base: "0", sm: "8%" }}
          // marginTop="5%"
          alignItems="center"
          justifyContent="center"
        >
          <Link href={`/blog/${props.post.slug}`} passHref>
            <ChakraLink textDecoration="none" _hover={{ textDecoration: "none" }}>
              <Image
                borderRadius="lg"
                src={props.post.image}
                alt="some good alt text"
                maxH={"100%"}
                maxW={"100%"}
                p={2}
              />
            </ChakraLink>
          </Link>
        </Box>
        <Box zIndex="1" width="100%" position="absolute" height="100%">
          <Box
            bgGradient={"radial(brand.primary 3px, transparent 3px)"}
            backgroundSize="20px 20px"
            opacity="0.4"
            height="100%"
          />
        </Box>
      </Box>
      <Box
        display="flex"
        flex="1"
        flexDirection="column"
        justifyContent="center"
        marginTop={{ base: "3", sm: "0" }}
      >
        <BlogTags tags={props.post.tags} />
        <Heading marginTop="1">
          <Link href={`/blog/${props.post.slug}`} passHref>
            <ChakraLink textDecoration="none" _hover={{ textDecoration: "none" }}>
              {props.post.title}
            </ChakraLink>
          </Link>
        </Heading>
        <Text
          as="p"
          marginTop="2"
          color={useColorModeValue("gray.700", "gray.200")}
          fontSize="lg"
        >
          {props.post.summary}
        </Text>
      </Box>
    </Box>
  );
}
