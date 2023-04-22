import {$authHost, $host, $springHost} from "../index"

export const addItemToBasket = async (userId, itemId, amount) => {
    console.log(userId, itemId, amount)
    const {data} = await $springHost.post('api/shopping_basket/addPurchase',{
        userId: userId,
        id: itemId,
        count: amount
    })
    return data
}

export const getPurchase = async (userId) => {
    const {data} = await $springHost.get('api/shopping_basket/get', {
        params: {
                userId: userId
            }
    })
    return data
}
