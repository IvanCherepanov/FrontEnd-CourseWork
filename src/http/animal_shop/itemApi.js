import {$springHost} from "../index"


export const fetchPets = async () => {
    const {data} = await $springHost.get('api/pet/list')
    return data
}

export const fetchItems = async (petId, productTypeId, brandId, sortId) => {
    try {
        const response = await $springHost.get('/api/user/products', {
            params: {
                pId:petId,
                pTId:productTypeId,
                bId: brandId,
                sId:sortId
            }
        });
        const data = response.data;
        console.log(data);
        // Обработка данных
        return data;
    } catch (error) {
        // Обработка ошибок
        console.error(error);
        throw error;
    }
}

export const fetchItemTypes = async () => {
    const {data} = await $springHost.get('api/item_type/list')
    return data
}

export const getItem = async (id) => {
    const {data} = await $springHost.get('api/item/' + id)
    return data
}

export const getItemByName = async (name) => {
    const {data} = await $springHost.get('api/item/name', {
        params: {
            itemName: name
        }
    })
    return data
}

