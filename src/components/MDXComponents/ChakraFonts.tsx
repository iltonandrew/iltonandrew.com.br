import { chakra } from "@chakra-ui/react";

export const ChakraFonts = {
  h1: (props: any) => <chakra.h1 fontSize="4xl" {...props} />,
  h2: (props: any) => <chakra.h2 fontSize="3xl" {...props} />,
  h3: (props: any) => <chakra.h3 fontSize="2xl" {...props} />,
  h4: (props: any) => <chakra.h4 fontSize="xl" {...props} />,
  h5: (props: any) => <chakra.h5 fontSize="lg" {...props} />,
  h6: (props: any) => <chakra.h6 fontSize="md" {...props} />,
  p: (props: any) => <chakra.p fontSize="md" {...props} />,
};
