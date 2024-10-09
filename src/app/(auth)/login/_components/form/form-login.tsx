"use client";

import {redirect, useRouter} from "next/navigation";
import {FormProvider, useForm} from "react-hook-form";
import {toast} from "react-toastify";

import CButton from "@/components/button/button";
import InputValidation from "@/components/input/input-validation";

function FormLogin() {
  const form = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const router = useRouter();

  const {handleSubmit} = form;

  const submitHandler = handleSubmit((values) => {
    console.log(values);
    toast.success("Login successfully");
    router.push("/");
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
