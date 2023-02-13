import { CardsData } from "./CardsData";

const cardExpiry = document.querySelector('#inputCardExpiry');
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

cardExpiryMasked.on("accept", ()=> {
    CardExpiry(cardExpiryMasked.value)
})

export function CardExpiry(date) {
    const cardexpiry = document.querySelector(".expiry");

    cardexpiry.innerHTML = date.length === 0 ? CardsData[0].expiry : date;
}
