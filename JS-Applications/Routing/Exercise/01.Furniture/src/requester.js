async function requester(method, url, data) {
  const option = {
    method,
  };

  if (data) {
    option["Content-Type"] = "application/json";
    option.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(url, option);
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }

    if (response.status === 204) {
      return response;
    }
    return await response.json();
  } catch (error) {
    alert(error);
  }
}

async function get(url){
    return await requester("GET", url);
}

async function post(url, data){
    return await requester("POST", url, data);
}

async function put(url, data){
    return await requester("PUT", url, data);
}

async function del(url){
    return await requester("DELETE", url);
}

export const api = {
    get,
    post,
    put,
    del
}
