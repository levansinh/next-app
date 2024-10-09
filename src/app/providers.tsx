import {ReactNode} from "react";

import NextUiProvider from "@/providers/next-ui-provider";
import QueryClientProviders from "@/providers/query-client-provider";
import ToastifyProvider from "@/providers/toastify-provider";

function AppProviders({children}: {children: ReactNode}) {
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
