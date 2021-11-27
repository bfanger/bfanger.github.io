/**
 * Typed api wrapper with injectable fetch for SSR
 */
import type { PortfolioDto, ProjectDto } from "./api-types";

const ENDPOINT = "/";

type GetResponse = {
  "portfolio.json": PortfolioDto;
  "projects/[project].json": ProjectDto;
};
/**
 * Inject the params into the url and add the remaining params as search/query params and prefix the  endpoint.
 */
function buildUrl(path: string, params: Record<string, string>) {
  const query = { ...params };
  let interpolatedPath = path;
  for (const [param, value] of Object.entries(params)) {
    const replaced = interpolatedPath.replace(`[${param}]`, value as string);
    if (replaced !== interpolatedPath) {
      interpolatedPath = replaced;
      delete query[param];
    }
  }
  const search = new URLSearchParams(query).toString();
  return `${ENDPOINT}${interpolatedPath}${search ? `?${search}` : ""}`;
}

export type Fetch = (
  info: RequestInfo,
  init?: RequestInit
) => Promise<Response>;

type Config = RequestInit & {
  params?: Record<string, string>;
  fetch?: Fetch;
};
async function wrapped(
  method: RequestInit["method"],
  path: string,
  config: Config
): Promise<any> {
  const init = { ...config };
  const params = init.params || {};
  delete init.params;
  let { fetch } = init;
  if (!fetch) {
    if (typeof window === "undefined") {
      throw new Error("Missing config.fetch");
    }
    fetch = window.fetch;
  }
  init.method = method;
  const url = buildUrl(path, params);
  const response = await fetch(url, init);
  if (!response.ok) {
    throw new Error(
      `${method} ${url} failed: ${response.status} ${response.statusText}`
    );
  }
  return response.json();
}
const api = {
  get<T extends keyof GetResponse>(
    path: T,
    config?: Config
  ): Promise<GetResponse[T]> {
    return wrapped("GET", path, config || {});
  },
};
export default api;
