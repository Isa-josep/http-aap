import usersStore from '../../store/users-store';
import UserStore from '../../store/users-store';
import { RenderTable } from '../render-table/render-table';
import './render-buttons.css';
export const renderButtons=(element)=>{
    const nextButton=document.createElement('button');
    nextButton.textContent=' Next >';

    const previousButton=document.createElement('button');
    previousButton.textContent='< Previous';

    const currentPage=document.createElement('span');
    currentPage.id='current-page';
    currentPage.innerHTML=UserStore.getCurrentPage();
    element.append(previousButton,currentPage,nextButton);

    nextButton.addEventListener('click',async ()=>{
        await UserStore.loadNexPague();
        currentPage.innerText=usersStore.getCurrentPage();
        RenderTable(element);
    });

    previousButton.addEventListener('click',async ()=>{
        await UserStore.loadPreviousPage();
        currentPage.innerText=usersStore.getCurrentPage();
        RenderTable(element);
    })
}