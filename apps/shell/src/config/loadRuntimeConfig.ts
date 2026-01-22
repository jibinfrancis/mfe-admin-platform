export async function loadRuntimeConfig() {
    const res = await fetch("/mfe.config.json");
    return res.json();
  }
  