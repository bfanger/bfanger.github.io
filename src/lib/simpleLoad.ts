import type { Load } from "@sveltejs/kit";
import type { Rec } from "@sveltejs/kit/types/helper";

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
): Load<{ context?: Record<string, any> }, { props: Props }> {
  const load: Load = async ({ page, fetch }) => {
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
        //
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
  return load as Load<{ context?: Rec }, { props: Props }>;
}
