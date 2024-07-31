import { loadUsersByPage } from "../use-cases/load-users-by-page";

const state={
    currentPage: 0,
    users: [],
};

const loadNexPague=async()=>{
    const users =await loadUsersByPage(state.currentPage+1);
    if(users.length===0) return 
    state.currentPage+=1;
    state.users=users;
}

const loadPreviousPage=async()=>{
    throw new Error('Not implemented');
};
//Todo: Implementar la función
const onUserChange=async()=>{
    throw new Error('Not implemented');
};

const reloadPage = async()=>{
    throw new Error('Not implemented');
}

export default {
    loadNexPague,
    loadPreviousPage,
    onUserChange,
    reloadPage,
    getUsers:()=>[...state.users],
    getCurrentPage:()=>state.currentPage,
}