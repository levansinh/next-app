import {NextUIProvider} from "@nextui-org/react";
import {ReactNode} from "react";

function NextUiProvider({children}: {children: ReactNode}) {
  return <NextUIProvider>{children}</NextUIProvider>;
}

export default NextUiProvider;
