// function to get JSON to display on the page from an API
export async function fetchJSON(url, options = {}) {
  const headers = { Accept: "application/json", ...options.headers };
  const r = await fetch(url, { ...options, headers });
  if (r.ok) {
    return r.json();
  }
  throw new Error("Server error", { reason: r });
}
