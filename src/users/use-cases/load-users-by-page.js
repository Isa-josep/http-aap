import { localhostUserToModel } from "../mappers/localhost-user.mapper";

export const loadUsersByPage = async(page =1)=>{
    const url=`${import.meta.env.VITE_BASE_URL}/users?_page=${page}`;
    const res=await fetch(url);
    const data=await res.json();
    console.log(data);
    console.log("data finished");
    const dataArray = Array.isArray(data) ? data : [data];

    const users = [];
    dataArray.forEach(userLike => {
        const user = localhostUserToModel(userLike);
        users.push(user);
    });
    
    console.log(users);
    return users;
}