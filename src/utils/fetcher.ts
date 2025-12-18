export const fetcher = async (input: RequestInfo, init?: RequestInit) => {
  const res = await fetch(input, init);
  if (!res.ok) throw new Error('Network response was not ok');
  return res.json();
};
