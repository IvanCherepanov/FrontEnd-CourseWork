import {$authHost, $host, $springHost} from "../index";
import jwt_decode from "jwt-decode"

export const createBrand = async (brand) => {
    const {data} = await $authHost.post('api/brand', brand)
    return data
}

export const fetchBrands = async () => {
    const {data} = await $springHost.get('api/brand?sort=id')
    return data
}

export const getBrandById = async (id) => {
    const {data} = await $springHost.get(`api/brand/${id}`)
    return data
}

export const updateBrand = async (params) => {
    const {id, brand} = params;
    console.log("w", id, brand)
    const {data} = await $springHost.put(`api/brand/${id}`, brand)
    return data
}

export const deleteBrand = async (id) => {
    const {data} = await $springHost.delete(`api/brand/${id}`)
    return data
}


