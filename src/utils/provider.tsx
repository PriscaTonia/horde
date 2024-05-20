"use client";

import { QueryClient, QueryClientProvider } from "react-query";
import { useState } from "react";
import { ReactQueryDevtools } from "react-query/devtools";
import { HeadlessMantineProvider, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

export const Provider = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      {/* <HeadlessMantineProvider>{children}</HeadlessMantineProvider> */}
      <MantineProvider>{children}</MantineProvider>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-left" />
    </QueryClientProvider>
  );
};
