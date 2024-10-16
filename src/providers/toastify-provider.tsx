import {ReactNode} from "react";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ToastifyProvider({children}: {children: ReactNode}) {
  return (
    <>
      {children}
      <ToastContainer
        theme="light"
        toastClassName="px-3 py-3 d-flex align-items-center min-w-[460px]"
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
      />
    </>
  );
}

export default ToastifyProvider;
