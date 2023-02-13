
export const CardsData = [
    {
        'number': '0000 1111 2222 3333',
        'name': 'Card holder',
        'expiry': '00/00',
        'cvc': '123'
    }
]

// Initial Card
const initialCardNumber = document.querySelector('.number');
const initialCardName = document.querySelector('.name');
const initialCardExpiry = document.querySelector('.expiry');
const initialcvccode = document.querySelector(".cvc");

initialCardNumber.innerText = CardsData[0].number;
initialCardName.innerText = CardsData[0].name;
initialCardExpiry.innerText = CardsData[0].expiry;
initialcvccode.innerText = CardsData[0].cvc;