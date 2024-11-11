"use client";

import {FormProvider, useForm} from "react-hook-form";
import {toast} from "react-toastify";
import nookies from "nookies";

import CButton from "@/components/button/button";
import InputValidation from "@/components/input/input-validation";
import {useMutateLogin} from "@/apis/auth.api";

function FormLogin() {
  const form = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const {handleSubmit} = form;

  const {mutate, status} = useMutateLogin();

  const submitHandler = handleSubmit((values) => {
    console.log(status);
    mutate(values, {
      onSuccess: (dataRef) => {
        console.log(dataRef.authToken);
        toast.success("Login successfully");

        nookies.set(null, "sessionToken", dataRef.authToken, {
          maxAge: 30 * 24 * 60 * 60, // 30 ngày
          path: "/",
          httpOnly: true,
          sameSite: "strict",
        });
      },
    });
  });

  return (
    <div className="w-full h-full flex items-center justify-center mt-4">
      <div className="flex items-center w-[500px] bg-black p-5 rounded-lg">
        <FormProvider {...form}>
          <form className="w-full" onSubmit={submitHandler}>
            <h1 className="text-center text-white pb-5">Login</h1>
            <div className="flex flex-col gap-3">
              <InputValidation name="username" id="username" placeholder="emsinh" />
              <InputValidation name="password" id="password" type="password" placeholder="******" />
              <CButton color="primary" className="text-white" type="submit">
                Submit
              </CButton>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}

export default FormLogin;
