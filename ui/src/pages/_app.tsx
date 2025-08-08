import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, createSystem, defaultConfig } from "@chakra-ui/react";
import DashboardLayout from "@/components/DashboardLayout";

const defaultTheme = createSystem(defaultConfig);
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider value={defaultTheme}>
      <DashboardLayout>
        <Component {...pageProps} />
      </DashboardLayout>
    </ChakraProvider>
  );
}
