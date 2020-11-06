const API_URL = process.env.REACT_APP_API_URL;

export default async function client(endpoint) {
  const res = await fetch(`${API_URL}/${endpoint}`);
  const data = await res.json();
  return data;
}
