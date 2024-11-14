"use client";

import {FormProvider, useForm} from "react-hook-form";
import {toast} from "react-toastify";

import CButton from "@/components/button/button";
import InputValidation from "@/components/input/input-validation";
import {authApiRequest} from "@/apis/auth.api";
import {sessionToken} from "@/utils/https";
import {useState} from "react";
import {useRouter} from "next/navigation";
import {Spinner} from "@nextui-org/react";

function FormLogin() {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const {handleSubmit} = form;

  const router = useRouter();

  async function onSubmit(values: {username: string; password: string}) {
    if (isLoading) return;
    setIsLoading(true);
    try {
      const result = await authApiRequest.login(values);
      await authApiRequest.auth({
        sessionToken: result.data.authToken,
      });
      if (result.isFlag) {
        console.log(result.data.authToken, "result");
        toast.success("thanh cong");
        sessionToken.value = result.data.authToken;
        router.push("/");
        router.refresh();
      }
    } catch (error: any) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="w-full h-full flex items-center justify-center mt-4">
      <div className="flex items-center w-[500px] bg-black p-5 rounded-lg">
        <FormProvider {...form}>
          <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
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
