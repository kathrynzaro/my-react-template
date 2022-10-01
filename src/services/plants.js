export const search = async (searchObj) => {
  const query = Array.from(Object.entries(searchObj))
    .map(([k, v]) => `${k}=${encodeURIComponent(v)}`)
    .join('&');
  const res = await fetch(process.env.SUPABASE_URL + '?' + query);
  if (res.status >= 400) {
    throw res;
  } else {
    const body = await res.json();
    return body;
  }
};
