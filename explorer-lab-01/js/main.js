import "../css/style.css";
import IMask from 'imask';

const Color1Card = document.querySelector('#cardBg defs linearGradient stop:nth-child(1)')
const Color2Card = document.querySelector('svg linearGradient stop:nth-child(2)')
const LogoCard = document.querySelector('.card .logo');

function setColor(type) {
    const colors = {
        visa:       ['#000', '#069'],
        american:   ['#000', '#0f9'],
        cielo:      ['#000', '#118'],
        mastercard: ['#000', '#99c'],
    }

    Color1Card.setAttribute('stop-color', colors[type][0])
    Color2Card.setAttribute('stop-color', colors[type][1])
    LogoCard.setAttribute('src', `images/${type}.svg`)
}

setColor('american')


// Form

function formSubmit(e) {
    e.preventDefault();
}

const formNumber = document.querySelector('#cardnumber');
const formNumberPattern = {
    mask: '0000000000000000'
}
const formNumberMasked = IMask(formNumber, formNumberPattern);

const formExpiry = document.querySelector('#cardExpiry');
const currentYear = String(new Date().getFullYear()).slice(2);
const maxYear = String(new Date().getFullYear() + 10).slice(2)
const formExpiryPattern = {
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
const formExpiryMasked = IMask(formExpiry, formExpiryPattern)

const formCvc = document.querySelector('#cardCvc');
const formCvcPattern = {
    mask: '000'
}
const formCvcMasked = IMask(formCvc, formCvcPattern);