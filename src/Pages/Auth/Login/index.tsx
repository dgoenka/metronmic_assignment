import React, { ChangeEventHandler, useState } from "react";
import { useStore } from "effector-react";
import { $me, LoginRequest, logMeIn } from "../../../Store/Auth.ts";
import { Navigate } from "react-router-dom";
import { Typography } from "antd";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useLocalStorage } from "@uidotdev/usehooks";

const Title = Typography.Title;

type LoginProps = {
  aProp?: string;
};

const Login: React.FC<LoginProps> = () => {
  const [username, setUsername] = useLocalStorage<string>("username", "");
  const [password, setPassword] = useLocalStorage<string>("password", "");

  const [rememberMe, setRememberMe] = useState<boolean>(
    Boolean(username || password),
  );
  const user = useStore($me);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginRequest>({ defaultValues: { username, password } });

  if (user.id) {
    return <Navigate to={"/"} replace />;
  }

  const handleRememberPreferenceChange: ChangeEventHandler<HTMLInputElement> = (
    e,
  ) => {
    console.log("e.target.value is: " + e.target.value);
    setRememberMe(e.target.value === "on");
  };

  const onSubmit: SubmitHandler<LoginRequest> = async (data: FieldValues) => {
    console.log(JSON.stringify(data, null, 2));
    if (rememberMe) {
      setUsername(data.username);
      setPassword(data.password);
    } else {
      setUsername("");
      setPassword("");
    }
    logMeIn(data as unknown as LoginRequest);
  };

  return (
    <>
      <div
        className="flex-fill d-flex align-items-center justify-content-center"
        style={{
          boxSizing: "border-box",
        }}
      >
        <div
          className="row d-flex row justify-content-center m-0"
          style={{
            minWidth: "200px",
            maxWidth: "60%",
            boxSizing: "border-box",
          }}
        >
          <Title>Login</Title>
          <form className="needs-validation" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Enter username"
                {...register("username", {
                  required: "Please enter a valid username",
                })}
              />
              <div className="invalid-feedback">
                {`${errors?.username?.message || ""}`}
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter password"
                {...register("password", { required: true })}
              />
              <div className="invalid-feedback">
                {`${errors?.password?.message || ""}`}
              </div>
            </div>
            <div className="mb-3">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="rememberMe"
                  onChange={handleRememberPreferenceChange}
                  checked={rememberMe}
                />
                <label className="form-check-label" htmlFor="rememberMe">
                  Remember me
                </label>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
