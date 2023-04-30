import {$springHost} from "../index";

export const fetchPets = async () => {
    const {data} = await $springHost.get('api/pet/list')
    return data
}


export const getPetById = async (id) => {
    const {data} = await $springHost.get(`api/pet/${id}`)
    return data
}
