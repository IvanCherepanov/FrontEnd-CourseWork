import {$springHost} from "../index";
import pet from "../../pages/admin/Pet";

export const fetchPets = async () => {
    const {data} = await $springHost.get('api/pet/list')
    return data
}


export const getPetById = async (id) => {
    const {data} = await $springHost.get(`api/pet/${id}`)
    return data
}

export const createPet = async (pet) => {
    const {data} = await $springHost.post('api/pet/create', pet)
    return data
}
export const deletePet = async (id) => {
    const {data} = await $springHost.delete(`api/pet/${id}`)
    return data
}

export const updatePet = async (params) => {
    const {id, pet} = params;
    const {data} = await $springHost.put(`api/pet/${id}`, pet)
    return data
}
