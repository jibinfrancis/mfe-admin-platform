import { loadMfe } from "../mfe/loadMfe"

export async function loadRuntimeUIHelpers() {
    const res = await fetch("/mfe-ui.config.json")
    const mfeUIHelpers = await res.json() as any
    await loadMfe(mfeUIHelpers.scope, mfeUIHelpers.module, mfeUIHelpers.url)
}