import { renderButtons } from "./presentation/render-buttons/render-buttons";
import { RenderTable } from "./presentation/render-table/render-table";
import usersStore from "./store/users-store";

export const UsersApp= async(element)=>{
    element.innerHTML=`
        loading...
    `;
    await usersStore.loadNexPague();
    element.innerHTML=`
    `;
    RenderTable(element);
    renderButtons(element);
}