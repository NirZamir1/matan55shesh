"use client";

import { ChakraProvider, createSystem, defaultConfig } from "@chakra-ui/react";

const defaultTheme = createSystem(defaultConfig);
export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider value={defaultTheme}>{children}</ChakraProvider>;
}
