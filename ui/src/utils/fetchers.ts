const headers = {
  "Content-Type": "application/json",
};
const ToJson = async (response: Response) => {
  try {
    return await response.json();
  } catch (e) {
    console.error("Error parsing json:", e);
  }
};

export const PostFetcher = async (url: string, { args }: { args: unknown }) => {
  const response = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(args),
  });
  if (!response.ok) {
    throw new Error(`Error fetching data from ${url}: ${response.statusText}`);
  }
  return ToJson(response);
};

export const PutFetcher = async (url: string, { args }: { args: unknown }) => {
  const response = await fetch(url, {
    method: "PUT",
    headers,
    body: JSON.stringify(args),
  });
  if (!response.ok) {
    throw new Error(`Error fetching data from ${url}: ${response.statusText}`);
  }
  return ToJson(response);
};

export const DeleteFetcher = async (url: string) => {
  const response = await fetch(url, { method: "DELETE" });
  if (!response.ok) {
    throw new Error(`Error fetching data from ${url}: ${response.statusText}`);
  }
  return ToJson(response);
};

export const GetFetcher = async (url: string) => {
  const response = await fetch(url, { method: "GET" });
  if (!response.ok) {
    throw new Error(`Error fetching data from ${url}: ${response.statusText}`);
  }
  return ToJson(response);
};
