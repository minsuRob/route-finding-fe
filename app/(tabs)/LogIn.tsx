import { gql, useMutation } from "@apollo/client";
import React, { useRef } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import AuthButton from "@/components/auth/AuthButton";
import AuthLayout from "@/components/auth/AuthLayout";
import { TextInput } from "@/components/auth/AuthShared";
import {
  loginMutation,
  loginMutationVariables,
} from "../__generated__/loginMutation";

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
  const passwordRef = useRef();
  // const { register, getValues, errors, handleSubmit, formState } =
  //   useForm<ILoginForm>({
  //     mode: "onChange",
  //   });

  const onCompleted = (data: loginMutation) => {
    const {
      login: { ok, token },
    } = data;
    if (ok && token) {
      // localStorage.setItem(LOCALSTORAGE_TOKEN, token);
      // authTokenVar(token);
      // isLoggedInVar(true);
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

  return (
    <AuthLayout>
      <TextInput
        value={watch("email")}
        placeholder="Username"
        returnKeyType="next"
        autoCapitalize="none"
        placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
        // onSubmitEditing={() => onNext(passwordRef)}
        onChangeText={(text) => setValue("email", text)}
      />
      <TextInput
        value={watch("password")}
        // ref={passwordRef}
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
