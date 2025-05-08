function editVisualCard() {
    const cardData = getCardData()
    const card = document.getElementById("card")
    card.textContent = ``
    card.className = `${cardData.bank}Card`
    const elements = [
        createElement("p", { id: "cardText" }, "Credit Card"),
        createElement("img", {
            id: cardData.bank,
            src: `images/banks/${cardData.bank}.svg`,
            alt: cardData.bank,
            width: 80,
            height: 30
        }),
        createElement("img", {
            id: "chip",
            src: `images/chip.png`,
            alt: "",
            width: 30,
            height: 30
        }),
        createElement("p", { id: "cardNumber" }, cardData.number),
        createElement("p", { id: "cardOwner" }, cardData.owner),
        createElement("p", { id: "date" }, cardData.date),
        createElement("img", {
            id: cardData.paymentSystem,
            src: `images/payment-systems/${cardData.paymentSystem}.svg`,
            alt: cardData.paymentSystem,
            width: 90,
            height: 90
        })
    ]

    elements.forEach(element => {
        card.appendChild(element)
    })
}

function editTable() {
    const cardData = getCardData()
    const table = document.getElementById("cardsTable")
    const cards = []
    cards.push(cardData)
    if (cardData.bank === "defaut") {
        cardData.bank = "Другое"
    }
    if (cardData.paymentSystem === "defaut") {
        cardData.paymentSystem = "Другое"
    }
    cards.forEach(element => {
        const tr = document.createElement("tr")
        tr.innerHTML = `
            <td data-label="Номер карты">${element.number}</td>
            <td data-label="Владелец карты">${element.owner}</td>
            <td data-label="Срок действия карты">${element.date}</td>
            <td data-label="Банк">${element.bank}</td>
            <td data-label="Платежная система">${element.paymentSystem}</td>
        `
        table.appendChild(tr)
    })

    table.style.visibility = "visible"
}

function createElement(tag, attributes = {}, textContent = "") {
    const element = document.createElement(tag)
    for (const [key, value] of Object.entries(attributes)) {
        element.setAttribute(key, value)
    }
    if (textContent) {
        element.textContent = textContent
    }
    return element
}

function getCardData() {
    const cardData = {
        bank: document.getElementById("inputBank").value.trim() || "default",
        paymentSystem: document.getElementById("inputPaymentSystem").value.trim() || "default",
        number: formatCardNumber() || "XXXX XXXX XXXX XXXX",
        owner: document.getElementById("inputCardOwner").value.trim() || "Даниил Байков",
        date: document.getElementById("inputCardDate").value || "08/26"
    }
    return cardData
}

function formatCardNumber() {
    const cardNumberInput = document.getElementById("inputCardNumber")
    let cardNumberFormated = ""
    let value = cardNumberInput.value.split("").filter(char => char >= "0" && char <= "9").join("")
    for (let i = 0; i < value.length; i++) {
        if (i > 0 && i % 4 === 0) {
            cardNumberFormated += " "
        }
        cardNumberFormated += value[i]
    }
    cardNumberInput.value = cardNumberFormated
    return cardNumberFormated
}

export { editVisualCard, editTable }