/**
 * Lazy Supabase client — the @supabase/supabase-js SDK (~172 KB) is loaded
 * only when getSupabase() is first called, keeping it off the critical path
 * for public visitors who never interact with auth or the lead-gate form.
 */

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

let _client = null;
let _promise = null;

export function getSupabase() {
  if (_client) return Promise.resolve(_client);
  if (_promise) return _promise;
  _promise = import("@supabase/supabase-js").then(({ createClient }) => {
    _client = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    return _client;
  });
  return _promise;
}

// Synchronous accessor — returns null until the SDK has loaded.
// Components that need the client at render time (AuthContext) should
// call getSupabase() in an effect and store the result in state.
export function getSupabaseSync() {
  return _client;
}

// Proxy for backward compatibility with legacy `import { supabase } from ...`
// This will throw a helpful error if accessed before getSupabase() starts loading,
// but works seamlessly once the client is initialized (e.g. after AuthProvider mounts).
export const supabase = new Proxy({}, {
  get(target, prop) {
    if (!_client) {
      // Trigger load in background just in case
      getSupabase();
      throw new Error(`Attempted to access supabase.${prop.toString()} before the client was initialized. Use getSupabase() instead.`);
    }
    const val = _client[prop];
    if (typeof val === "function") {
      return val.bind(_client);
    }
    return val;
  }
});