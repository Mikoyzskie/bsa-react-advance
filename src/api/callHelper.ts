export const apiCall = async (
  endpoint: string,
  method: string,
  body?: BodyInit
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

    return result;
  } catch (error) {
    throw new Error(`Error: ${error}`);
  }
};
