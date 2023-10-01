import { api } from "./api";

export async function getFakeStore(prod){
    try {
        const resultado = await api.get(`products/${prod}`)
        return resultado
    } catch (error) {
        console.log(error)
        return {}
    }
}