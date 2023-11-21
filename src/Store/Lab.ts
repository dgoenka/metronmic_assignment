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

import { createEffect } from "effector";

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
