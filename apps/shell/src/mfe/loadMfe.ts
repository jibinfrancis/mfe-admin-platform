import { loadRemoteScript } from "./loadRemote";

export async function loadMfe(scope: string, module: string, url: string) {
  await loadRemoteScript(url);

  // @ts-ignore
  await __webpack_init_sharing__("default");

  const container = (window as any)[scope];

  if (!container) {
    throw new Error(`❌ MFE scope "${scope}" not found on window`);
  }

  // @ts-ignore
  await container.init(__webpack_share_scopes__.default);

  const factory = await container.get(module);
  return factory();
}
