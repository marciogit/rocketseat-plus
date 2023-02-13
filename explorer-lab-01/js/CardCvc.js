import { CardsData } from "./CardsData";

const cardCvc = document.querySelector('#inputCardCvc');
const cardCvcPattern = {
    mask: '000'
}
const cardCvcMasked = IMask(cardCvc, cardCvcPattern);

cardCvcMasked.on("accept", ()=> {
    CardCvc(cardCvcMasked.value)
});

export function CardCvc(code) {
    const cvccode = document.querySelector(".cvc");

    cvccode.innerText = code.length === 0 ? CardsData[0].cvc : code;
}