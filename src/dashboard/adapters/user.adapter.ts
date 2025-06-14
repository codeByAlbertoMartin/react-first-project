import type {InternalUser, ExternalUser} from "../../models/user.model"

// Function overloading para que el adaptador principal sepa de que tipo es el usuario que recibe
export function userAdapter(user: InternalUser) : ExternalUser
export function userAdapter(user: ExternalUser) : InternalUser
export function userAdapter(user: InternalUser | ExternalUser){
    if ("name" in user){
        return {
            id: user.id,
            nombre: user.name
        }
    }
    return {
        id: user.id,
        name: user.nombre
    }
}