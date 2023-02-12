import "../css/style.css";
import IMask from 'imask';

const gradient1 = document.querySelector('svg linearGradient stop:nth-child(1)')
const gradient2 = document.querySelector('svg linearGradient stop:nth-child(2)')
const LogoCard = document.querySelector('.card .logo');

function updateCardProps(type) {
    const colors = {
        default:    ['#000', '#444'],
        visa:       ['#000', '#069'],
        mastercard: ['#000', '#99c'],
        american:   ['#000', '#0f9'],
        cielo:      ['#000', '#118'],
    }

    gradient1.setAttribute('stop-color', colors[type][0])
    gradient2.setAttribute('stop-color', colors[type][1])
    LogoCard.setAttribute('src', `images/${type}.svg`)
}

updateCardProps('default')


// Card Number Mask
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

// Update Card Number
cardNumberMasked.on("accept", ()=> {
    const updateCardType = cardNumberMasked.masked.currentMask.cardtype;
    updateCardProps(updateCardType)
    updateCardNumber(cardNumberMasked.value)
})

function updateCardNumber(number) {
    const cardnumber = document.querySelector('.number');

    cardnumber.innerText = number.length === 0 ? "0000 0000 0000 0000" : number
}



// Card Expiry Mask
const cardExpiry = document.querySelector('#cardExpiry');
const currentYear = String(new Date().getFullYear()).slice(2);
const maxYear = String(new Date().getFullYear() + 10).slice(2)
const cardExpiryPattern = {
    mask: "MM{/}YY",
    blocks: {
        MM: {
            mask: IMask.MaskedRange,
            from: 1,
            to: 12
        },
        YY: {
            mask: IMask.MaskedRange,
            from: currentYear,
            to: maxYear
        }
    }
}

const cardExpiryMasked = IMask(cardExpiry, cardExpiryPattern)

// Card Cvc Mask
const cardCvc = document.querySelector('#inputCardCvc');
const cardCvcPattern = {
    mask: '000'
}
const cardCvcMasked = IMask(cardCvc, cardCvcPattern);


// Form
document.querySelector('form').addEventListener('submit', (e)=> { e.preventDefault() })

// Add Card
const addButton = document.querySelector('#addCard');
addButton.addEventListener('click', () => {
    alert()
});



// Update Card Name
const cardOwner = document.querySelector('#inputCardOwner');
cardOwner.addEventListener('input', ()=> {
    const cardName = document.querySelector('.name');

    cardName.innerText = cardOwner.value.length === 0 ? 'Card Owner' : cardOwner.value
});

// Update Card Expiry
cardExpiryMasked.on("accept", ()=> {
    updateExpiry(cardExpiryMasked.value)
})

function updateExpiry(date) {
    const cardexpiry = document.querySelector(".expiry");

    cardexpiry.innerHTML = date.length === 0 ? '00/00' : date;
}

// Update Card Cvc
cardCvcMasked.on("accept", ()=> {
    updateCvc(cardCvcMasked.value)
});

function updateCvc(code) {
    const cvccode = document.querySelector(".cvc");

    cvccode.innerText = code.length === 0 ? '000' : code;
}

