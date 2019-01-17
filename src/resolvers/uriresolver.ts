import Debug from "debug";
import { SubResolver } from ".";

const debug = Debug("resolverengine:uriresolver");
export function UriResolver(): SubResolver {
  return async (uri: string): Promise<string | null> => {
    debug("Resolving %s", uri);
    try {
      return new URL(uri).href;
    } catch {
      return null;
    }
  };
}