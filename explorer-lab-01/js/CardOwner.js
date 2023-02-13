
import { CardsData } from "./CardsData";

export function CardOwner() {
    const cardowner = document.querySelector('#inputCardOwner');
    
    cardowner.addEventListener('input', ()=> {
        const cardName = document.querySelector('.name');

        cardName.innerText = cardowner.value.length === 0 ? CardsData[0].name : cardowner.value
    });
}