import {$springHost} from "../index"


export const fetchPets = async () => {
    const {data} = await $springHost.get('api/brand/list')
    return data
}

export const fetchItems = async (petId, productTypeId, sortId) => {
    console.log(123)
    const {data} = await $springHost.get('/api/user/products', {params:{
            petId
        }
    })
    // const {data} = await $springHost.get('/api/user/products')
    console.log(data)
    console.log(data.data)
    console.log(data.rows)
    console.log(typeof(data))
    return data
}

export const fetchItemTypes = async () => {
    const {data} = await $springHost.get('api/item_type/list')
    return data
}

export const getItem = async (id) => {
    const {data} = await $springHost.get('api/item/' + id)
    return data
}