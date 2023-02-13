
import { CardsData } from './CardsData';
import { CartType } from './CardType';

const cardNumber = document.querySelector('#inputCardNumber');
const cardNumberPattern = {
    mask: [
        {
            mask: "0000 0000 0000 0000",
            regex: /^4\d{0,15}/,
            cardtype: "visa"
        },
        {
            mask: "0000 0000 0000 0000",
            regex: /^5[1-5]\d{0,2}|^22[2-9]\d|^2[3-7]\d{0,2}\d{0,12}/,
            cardtype: 'mastercard'
        },
        {
            mask: "0000 0000 0000 0000",
            cardtype: "default"
        }
    ],
    dispatch: function(appended, dynamicMasked) {
        const number = (dynamicMasked.value + appended).replace(/\D/g, "");
        const masked = dynamicMasked.compiledMasks.find(({regex})=> number.match(regex));
        // const number = (dynamicMasked.value + appended).replace(/\D/g, "")
        // const foundedMask = dynamicMasked.compiledMasks.find(function(item) {
        //     return number.match(item.regex)
        // });
        return masked;
    }
}

const cardNumberMasked = IMask(cardNumber, cardNumberPattern);

cardNumberMasked.on("accept", ()=> {
    const updateCardType = cardNumberMasked.masked.currentMask.cardtype;
    CartType(updateCardType)
    CardNumber(cardNumberMasked.value)
})

export function CardNumber(number) {
    const cardnumber = document.querySelector('.number');

    cardnumber.innerText = number.length === 0 ? CardsData[0].number : number
}
