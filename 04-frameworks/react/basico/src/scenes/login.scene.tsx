import React from "react";
import { AuthLayout } from "@/layout/auth.layout";
import { LoginContainer } from "@/pods/login";

export const LoginScene = () => {
 
  return (
    <AuthLayout>
      <LoginContainer />
    </AuthLayout>
  );
};
