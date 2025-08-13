"use client";
import { GetFetcher } from "@/utils/fetchers";
import { Text } from "@chakra-ui/react";
import useSWR from "swr";

export default function APIHello() {
  const { data: envelope, isValidating } = useSWR<{ message: string }>(
    "/api/hello",
    GetFetcher
  );

  return isValidating ? (
    <Text>Loading...</Text>
  ) : (
    <Text fontSize="xl" color="blue.500">
      {envelope?.message}
    </Text>
  );
}
