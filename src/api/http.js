import instance from "./index";

export function get(url, params) {
  const config = {
    method: "get",
    url,
  };
  if (params) {
    config.params = params;
  }
  return instance(config);
}

export function post(url, data) {
  const config = {
    method: "post",
    url,
  };
  if (data) {
    config.data = data;
  }
  return instance(config);
}
