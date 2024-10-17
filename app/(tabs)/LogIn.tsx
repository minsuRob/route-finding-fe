import { gql, useMutation } from "@apollo/client";
import React, { useRef } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import AuthButton from "@/components/auth/AuthButton";
import AuthLayout from "@/components/auth/AuthLayout";
import {
  loginMutation,
  loginMutationVariables,
} from "../__generated__/loginMutation";
import { logUserIn } from "@/constants/apollo/apollo";
import { TextInput } from "react-native";
import styled from "styled-components/native";
import { Input } from "@/components/auth/AuthShared";

const LOGIN_MUTATION = gql`
  mutation loginMutation($loginInput: LoginInput!) {
    login(input: $loginInput) {
      ok
      token
      error
    }
  }
`;
interface ILoginForm {
  email: string;
  password: string;
}

//{ route: { params } }: any
export default function Login() {
  const { getValues, register, handleSubmit, setValue, watch } =
    useForm<ILoginForm>({
      defaultValues: {
        // password: params?.password,
        // username: params?.username,
      },
    });

  const onCompleted = async (data: loginMutation) => {
    const {
      login: { ok, token },
    } = data;
    if (ok && token) {
      await logUserIn(token);
    }
  };

  const [loginMutation, { data: loginMutationResult, loading }] = useMutation<
    loginMutation,
    loginMutationVariables
  >(LOGIN_MUTATION, {
    onCompleted,
  });
  const onSubmit = () => {
    if (!loading) {
      const { email, password } = getValues();
      loginMutation({
        variables: {
          loginInput: {
            email,
            password,
          },
        },
      });
    }
  };

  useEffect(() => {
    register("email", { required: true });
    register("password", { required: true });
  }, [register]);

  const onNext = (nextOne: React.MutableRefObject<TextInput | null>) => {
    nextOne?.current?.focus();
  };

  const passwordRef = React.useRef<TextInput | null>(null);

  return (
    <AuthLayout>
      <Input
        value={watch("email")}
        placeholder="Username"
        returnKeyType="next"
        autoCapitalize="none"
        placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
        onSubmitEditing={() => onNext(passwordRef)}
        onChangeText={(text) => setValue("email", text)}
      />
      <Input
        value={watch("password")}
        // ref={passwordRef} // just.. work..
        // ref={(ref: any) => (passwordRef.current = ref)}
        placeholder="Password"
        secureTextEntry
        returnKeyType="done"
        // lastOne={true}
        placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
        onSubmitEditing={handleSubmit(onSubmit)}
        onChangeText={(text) => setValue("password", text)}
      />
      <AuthButton
        text="Log In"
        loading={loading}
        disabled={!watch("email") || !watch("password")}
        onPress={handleSubmit(onSubmit)}
      />
    </AuthLayout>
  );
}
