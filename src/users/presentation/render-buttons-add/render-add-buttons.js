import { showModal } from '../render-modal/render-modal';
import './render-add-buttons.css';
export const  renderAddButtons=(element)=>{
    const fabButton= document.createElement('button');
    fabButton.innerHTML='Add';
    fabButton.classList.add('fab-button');
    element.append(fabButton);
    fabButton.addEventListener('click',()=>{
        showModal();
    });
}