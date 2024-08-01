import UserStore from '../../store/users-store';
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
}