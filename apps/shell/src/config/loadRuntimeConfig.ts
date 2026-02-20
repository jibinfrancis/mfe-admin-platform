export async function loadRuntimeConfig() {
  const configUrl = process.env.RUNTIME_CONFIG_URL || "/mfe.config.json";
  const res = await fetch(configUrl);
  return res.json();
}
