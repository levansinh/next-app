"use client";

import {ReactNode, useState} from "react";

import NextUiProvider from "@/providers/next-ui-provider";
import QueryClientProviders from "@/providers/query-client-provider";
import ToastifyProvider from "@/providers/toastify-provider";
import {sessionToken} from "@/utils/https";

function AppProviders({
  children,
  initCookiesClient,
}: {
  initCookiesClient?: string;
  children: ReactNode;
}) {
  useState(() => (sessionToken.value = initCookiesClient || ""));
  return (
    <>
      <QueryClientProviders>
        <NextUiProvider>
          <ToastifyProvider>{children}</ToastifyProvider>
        </NextUiProvider>
      </QueryClientProviders>
    </>
  );
}

export default AppProviders;
