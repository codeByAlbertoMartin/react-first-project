import type { InternalUser, ExternalUser } from "../../models/user.model";
import { userAdapter}  from "../adapters/user.adapter";

//Comunicacion con la capa externa
export async function getUsers(){
    return fetch('/users')
        .then(response =>  response.json())
        .then((data : ExternalUser) => userAdapter(data));
}

//Comuinicación con la capa interna
export async function editUser(id:number, name: string ){
    const typedUser = {id, name} as InternalUser;
    const adaptedUser = userAdapter(typedUser);
    return fetch(`/users/${id}`, {
        method: 'PUT',
        body: JSON.stringify(adaptedUser),
    })
    .then(response => response.json())
    .then(data => userAdapter(data));
}