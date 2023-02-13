import "../css/style.css";

import IMask from 'imask';
import { CartType }     from './CardType';
import { CardOwner }    from "./CardOwner";
import { CardCvc }      from "./CardCvc";
import { CardNumber }   from "./CardNumber";
import { CardExpiry }   from './CardExpiry';

CartType('default');

// FORM
document.querySelector('form').addEventListener('submit', (e)=> { e.preventDefault(); })

// ADD CARD - SUBMIT
const addButton = document.querySelector('#addCard');

addButton.addEventListener('click', () => {
    const cardNumber = document.querySelector('#inputCardNumber');
    const cardName = document.querySelector('#inputCardOwner');
    const cardExpiry = document.querySelector('#inputCardExpiry');
    const cardCvc = document.querySelector('#inputCardCvc');

    const cardNumberValue = cardNumber.value;
    const cardNameValue = cardName.value;
    const cardExpiryValue = cardExpiry.value;
    const cardCvcValue = cardCvc.value;

    alert(cardNameValue)
});

CardOwner();
