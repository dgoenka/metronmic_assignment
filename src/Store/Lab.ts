export type Lab = {
  labName: string;
  providerGroup: string;
  providerUnit: string;
  address: string;
  state: string;
  city: string;
  zipCode: string;
  mobileNumber: string;
  officePhone: string;
  mobile: string;
  email: string;
  timezone: string;
};

import { createStore, createEvent, createEffect, sample } from "effector";

export const fetchProviderGroup = createEvent<string[]>();
export const fetchProviderUnit = createEvent<string[]>();

export const providerGroup = createStore<string[]>([]);
export const providerUnit = createStore<string[]>([]);

export const saveLab = createEffect<Lab, Lab, Error>(async (lab) => {
  const req = await fetch(`${import.meta.env.VITE_BASE_API_URL}/lab/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...lab,
    }),
  });
  return req.json();
});

export const fetchProviderGroupFx = createEffect<void, string[], Error>(
  async () => {
    const req = await fetch(
      `${
        import.meta.env.VITE_BASE_API_URL
      }/healthcareproviders/listProviderGroup`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      },
    );
    return req.json();
  },
);
export const fetchProviderUnitFx = createEffect<void, string[], Error>(
  async () => {
    const req = await fetch(
      `${
        import.meta.env.VITE_BASE_API_URL
      }/healthcareproviders/listProviderUnit`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      },
    );
    return req.json();
  },
);

providerGroup.on(fetchProviderGroupFx.doneData, (_, data) => data);
providerUnit.on(fetchProviderUnitFx.doneData, (_, data) => data);

sample({
  clock: fetchProviderGroup,
  target: fetchProviderGroupFx,
});
sample({
  clock: fetchProviderUnit,
  target: fetchProviderUnitFx,
});
