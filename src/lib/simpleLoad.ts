import type { Load, LoadInput, LoadOutput } from "@sveltejs/kit";

function interpolate(path: string, params: Record<string, string>) {
  let url = path;
  Object.entries(params).forEach(([key, value]) => {
    url = url.replace(`{${key}}`, value);
  });
  return url;
}

export default function simpleLoad<T, Props>(
  path: string,
  reponseToProps: (response: T) => Props
): Load<LoadInput, LoadOutput<Props>> {
  const load: Load = async ({ page, fetch }: LoadInput) => {
    const url = interpolate(path, page.params);
    const response = await fetch(url);
    if (!response.ok) {
      let message = response.statusText
        ? `${response.status} ${response.statusText}`
        : `HTTP ERROR: ${response.status}`;
      try {
        const json = await response.json();
        if (json.message) {
          message = json.message;
        }
      } catch {
        // not a json response with an error field, keep the original message
      }
      return {
        status: response.status,
        error: new Error(message),
      };
    }
    const json = await response.json();
    return {
      props: reponseToProps(json),
    };
  };
  return load as any as Load<LoadInput, LoadOutput<Props>>;
}
