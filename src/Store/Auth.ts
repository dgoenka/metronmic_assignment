import { createEvent, createStore, createEffect, sample } from "effector";

type MeResponse = {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
  requestStatus: "PENDING" | undefined;
};

type LogoutResponse = {
  result: string;
};

export type LoginRequest = {
  username: string;
  password: string;
};

type MeRequest = Record<string, never>;

type LogoutRequest = Record<string, never>;

export const fetchMe = createEvent<MeRequest>();
export const logMeIn = createEvent<LoginRequest>();
export const logMeOut = createEvent<LogoutRequest>();

const getMeFx = createEffect<MeRequest, MeResponse, Error>(
  async (meRequest) => {
    const req = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        // username: "kminchelle",
        // password: "0lelplR",
        ...meRequest,
      }),
    });
    return req.json();
  },
);

const login = createEffect<LoginRequest, MeResponse, Error>(
  async (loginRequest) => {
    const req = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginRequest),
    });
    return req.json();
  },
);

const logout = createEffect<LogoutRequest, LogoutResponse, Error>(
  async (logoutRequest) => {
    const req = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(logoutRequest),
    });
    return req.json();
  },
);

export const $me = createStore<Partial<MeResponse>>({
  requestStatus: "PENDING",
})
  .on(getMeFx.doneData, (_, meResponse) => ({
    ...meResponse,
    requestStatus: undefined,
  }))
  .on(getMeFx.pending, (state, pending) => ({
    ...state,
    requestStatus: pending ? "PENDING" : undefined,
  }))
  .on(login.pending, (state, pending) => ({
    ...state,
    requestStatus: pending ? "PENDING" : undefined,
  }))
  .on(login.doneData, (_, meResponse) => ({
    ...meResponse,
    requestStatus: undefined,
  }))
  .on(logout.doneData, () => ({}));

sample({
  clock: fetchMe,
  target: getMeFx,
});

sample({
  clock: logMeIn,
  target: login,
});

sample({
  clock: logMeOut,
  target: logout,
});

fetchMe({});
