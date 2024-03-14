async function request(method, url, body) {
    const headers = {
        'Content-Type': 'application/json'
    };
    const options = {
        method: method
    };
    if (body) {
        options.headers = headers;
        options.body = JSON.stringify(body);
    }

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            const error = await response.json();
            throw error;
        }


        const data = await response.json();
        return data;

    } catch (error) {
        alert(`Error: ${error.message}`);
        throw error;
    }
}


export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const del = request.bind(null, 'DELETE');