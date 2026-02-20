import { loadMfe } from "../mfe/loadMfe"

export async function loadRuntimeUIHelpers() {
    const configUrl = process.env.UI_COMPONENTS_URL || "/mfe-ui.config.json";
    const res = await fetch(configUrl);
    const mfeUIHelpers = await res.json() as any
    await loadMfe(mfeUIHelpers.scope, mfeUIHelpers.module, mfeUIHelpers.url)
}