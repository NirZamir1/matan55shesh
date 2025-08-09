import { Box, Button } from "@chakra-ui/react";
import React from "react";
const sidebarWidth = 10;
const topBarHeight = 10;
function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Box
        position={"fixed"}
        top={0}
        width={"100%"}
        bg="#e6ba5dff"
        color="white"
        h={topBarHeight}
      >
        Top Bar
      </Box>

      <Box
        position={"fixed"}
        top={10}
        left={0}
        width={sidebarWidth}
        height={`calc(100vh - ${topBarHeight}px)`}
        bg="blue.500"
        color="white"
        p={4}
        zIndex={0}
      >
        Sidebar
      </Box>

      <Box ml={sidebarWidth} mt={topBarHeight}>
        {children}
        <Button>NIRR</Button>
      </Box>
    </>
  );
}

export default DashboardLayout;
