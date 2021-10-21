const BASE_URL = 'http://127.0.0.1:5000'
const RESOURCE_URL = `${BASE_URL}/user`

const baseRequest = async({ urlPath = "", method = "GET", body = null }) => {

    try {
        const requestParam = {
            method,
            headers: {
                'Content-Type': 'application/json'
            }
        }

        if (body) {
            requestParam.body = JSON.stringify(body)
        }

        return await fetch(`${RESOURCE_URL}${urlPath}`, requestParam)
    } catch (error) {

    }
}

export const getAllPlanes = async() => {
    const rawRes = await baseRequest({ method: "GET" })

    return rawRes.json()
}

export const postPlanes = (body) => baseRequest({ method: "POST", body })

export const updatePlanes = (id, body) =>
    baseRequest({ urlPath: `/${id}`, method: "PUT", body });

export const deletePlanes = (id) =>
    baseRequest({ urlPath: `/${id}`, method: "DELETE" });