interface IRequest {
    get(url: string): Promise<any>;
    delete(url: string): Promise<Response>;
    post(url: string, payload: string): Promise<Response>;
    put(url: string, payload: string): Promise<Response>;
  }


class ApiRequest implements IRequest{

    async get (url: string) {
        const result: any = await fetch(url);
        return result.json();
    }
    delete(url: string) {
        return fetch(url, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
        })
    }

    post(url: string, payload: string) {
        return fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        })
    }

    put(url: string, payload: string) {
        return fetch(url, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        })
    }

}
export default ApiRequest