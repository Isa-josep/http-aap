import { localhostUserToModel } from "../mappers/localhost-user.mapper";

export const loadUsersByPage = async (page = 1) => {
    const url = `${import.meta.env.VITE_BASE_URL}/users?_page=${page}`;
    const res = await fetch(url);
    const json = await res.json();
    const data = json.data;

    // Verifica si data es un array antes de mapear
    if (!Array.isArray(data)) {
        throw new Error('Expected data to be an array');
    }

    const users = data.map(userLike => localhostUserToModel(userLike));
    console.log(users);
    return users;
};
