// import { toast } from "react-toastify";

import { redirect } from "react-router-dom";

export const apiCall = async (
  endpoint: string,
  method: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body?: any
) => {
  const token = localStorage.getItem("TOKEN");
  const apiUrl = `https://travel-app-api.up.railway.app/api/v1/${endpoint}`;
  try {
    const response = await fetch(apiUrl, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: body,
    });

    const result = await response.json();

    if (!response.ok) {
      console.log(response.status);
      redirect("/sign-in");
    }

    return result;
  } catch (error) {
    throw new Error(`Error: ${error}`);
  }
};
