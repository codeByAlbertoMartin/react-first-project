interface BaseUser {
    id: number;
    age: number;
}

export interface ExternalUser  extends BaseUser {
    nombre: string;
}

export interface InternalUser extends BaseUser {
    name: string;
}



