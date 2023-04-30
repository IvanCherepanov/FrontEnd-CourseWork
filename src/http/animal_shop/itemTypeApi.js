import {$springHost} from "../index";

export const fetchItemTypes = async () => {
    const {data} = await $springHost.get('api/item_type/list')
    return data
}

export const getItemTypeById = async (id) => {
    const {data} = await $springHost.get(`api/item_type/${id}`)
    return data
}