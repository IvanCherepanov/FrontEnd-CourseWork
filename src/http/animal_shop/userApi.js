import {$springAuthHost, $springHost} from "../index";

export const getUserByUsername = async (name) => {
    const {data} = await $springAuthHost.get('api/user/username', {
        params: {
            userName: name
        }
    })
    console.log(data)
    return data
}

export const getUserList = async () => {
    const {data} = await $springHost.get('api/user/list')
    return data
}
