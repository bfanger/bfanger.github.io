/**
 * Typed api wrapper with injectable fetch for SSR
 */
import type { PortfolioDto, ProjectDto } from "./api-types";
import buildUrl from "./buildUrl";

const responseSymbol = Symbol("response");

type GetResponse = {
  "portfolio.json": PortfolioDto;
  "projects/[project].json": ProjectDto;
};
export type Fetch = (
  info: RequestInfo,
  init?: RequestInit
) => Promise<Response>;

type Config = RequestInit & {
  params?: Record<string, string>;
  fetch?: Fetch;
  ssrCache?: number;
};
type Augmented = Partial<{ [responseSymbol]: Response }>;

async function wrapped(
  method: RequestInit["method"],
  path: string,
  config: Config
): Promise<any> {
  // eslint-disable-next-line prefer-const
  let { ssrCache, fetch, params, ...init } = config;
  params = params || {};
  if (!fetch) {
    if (typeof window === "undefined") {
      throw new Error("Missing config.fetch");
    }
    fetch = window.fetch;
  }
  if (ssrCache && typeof window === "undefined") {
    init.headers = new Headers(init.headers);
    init.headers.append("Svelte-Cache", `${ssrCache}`);
  }
  init.method = method;
  const url = `/${buildUrl(path, params)}`;
  const response = await fetch(url, init);
  if (!response.ok) {
    const error: Error & Augmented = new Error(
      `${method} ${url} failed: ${response.status} ${response.statusText}`
    );
    error[responseSymbol] = response;
    throw error;
  }
  const data = await response.json();
  data[responseSymbol] = response;
  return data;
}
const api = {
  get<T extends keyof GetResponse>(
    path: T,
    config?: Config
  ): Promise<GetResponse[T] & Augmented> {
    return wrapped("GET", path, config || {});
  },
};
export default api;

function getResponse(dataOrError: Augmented | unknown): Response | undefined {
  if (typeof dataOrError === "object" && dataOrError !== null) {
    return (dataOrError as any)[responseSymbol];
  }
  return undefined;
}

export function getStatus(
  dataOrError: Augmented | unknown
): number | undefined {
  const response = getResponse(dataOrError);
  if (response) {
    return response.status;
  }
  return undefined;
}

export function getStatusText(
  dataOrError: Augmented | unknown
): string | undefined {
  const response = getResponse(dataOrError);
  if (response) {
    return response.statusText;
  }
  return undefined;
}

export function getHeader(
  dataOrError: Augmented | unknown,
  name: string
): string | undefined {
  const response = getResponse(dataOrError);
  if (response) {
    const value = response.headers.get(name);
    if (value !== null) {
      return value;
    }
  }
  return undefined;
}

export function getMaxAge(response: Augmented): number | undefined {
  const cacheControl = getHeader(response, "Cache-Control");
  const match = cacheControl && cacheControl.match(/^max-age=([0-9]+)/);
  if (match) {
    return parseInt(match[1], 10);
  }
  return undefined;
}
