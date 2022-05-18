import { tokenType } from "./token.type";

export const storeToken = (accessToken) =>({
    type: tokenType.JWT_TOKEN,
    payload: accessToken
})