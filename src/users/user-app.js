import usersStore from "./store/users-store";

export const UsersApp= async(element)=>{
    element.innerHTML=`
        loading...
    `;
    await usersStore.loadNexPague();
}