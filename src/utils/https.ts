import camelcaseKeys from "camelcase-keys";
import snakecaseKeys from "snakecase-keys";

type CustomOptions = Omit<RequestInit, "method"> & {
  baseUrl?: string | undefined;
  body?: Record<string, any> | FormData;
};

export const isClient = () => typeof window !== "undefined";

class SessionClient {
  private token = "";

  get value() {
    return this.token;
  }
  set value(token: string) {
    this.token = token;
  }
}

export const sessionToken = new SessionClient();

const request = async <Response>(
  method: "GET" | "POST" | "PUT" | "DELETE",
  url: string,
  options?: CustomOptions | undefined,
) => {
  let body: FormData | string | undefined = undefined;
  if (options?.body instanceof FormData) {
    body = options.body;
  } else if (options?.body) {
    body = JSON.stringify(snakecaseKeys(options.body));
  }
  const baseHeaders: {
    [key: string]: string;
  } =
    body instanceof FormData
      ? {}
      : {
          "Content-Type": "application/json",
        };

  if (isClient()) {
    const sessionTokens = sessionToken.value;

    if (sessionToken) {
      baseHeaders.Authorization = `Token ${sessionTokens}`;
    }
  }

  const baseUrl =
    options?.baseUrl === undefined ? process.env.NEXT_PUBLIC_APP_API_URL : options.baseUrl;

  const fullUrl = url.startsWith("/") ? `${baseUrl}${url}` : `${baseUrl}/${url}`;

  const res = await fetch(fullUrl, {
    ...options,
    headers: {
      ...baseHeaders,
      ...options?.headers,
    } as any,
    body,
    method,
  });
  const data = await res.json();

  return camelcaseKeys(data, {
    deep: true,
  });
};

const http = {
  get<Response>(url: string, options?: Omit<CustomOptions, "body"> | undefined) {
    return request<Response>("GET", url, options);
  },
  post<Response>(url: string, body: any, options?: Omit<CustomOptions, "body"> | undefined) {
    return request<Response>("POST", url, {...options, body});
  },
  put<Response>(url: string, body: any, options?: Omit<CustomOptions, "body"> | undefined) {
    return request<Response>("PUT", url, {...options, body});
  },
  delete<Response>(url: string, options?: Omit<CustomOptions, "body"> | undefined) {
    return request<Response>("DELETE", url, {...options});
  },
};

export default http;
