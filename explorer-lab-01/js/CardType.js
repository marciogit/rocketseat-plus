
const gradient1 = document.querySelector('svg linearGradient stop:nth-child(1)')
const gradient2 = document.querySelector('svg linearGradient stop:nth-child(2)')
const LogoCard = document.querySelector('.card .logo');

export function CartType(type) {
    const colors = {
        default:    ['#000', '#444'],
        visa:       ['#000', '#069'],
        mastercard: ['#000', '#99c'],
        american:   ['#000', '#0f9'],
        cielo:      ['#000', '#118'],
    }

    gradient1.setAttribute('stop-color', colors[type][0])
    gradient2.setAttribute('stop-color', colors[type][1])
    LogoCard.setAttribute('src', `./images/${type}.svg`)
}