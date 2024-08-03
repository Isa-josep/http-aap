import { renderAddButtons } from "./presentation/render-buttons-add/render-add-buttons";
import { renderButtons } from "./presentation/render-buttons/render-buttons";
import { renderModal } from "./presentation/render-modal/render-modal";
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
    renderAddButtons(element);
    renderModal(element);
}