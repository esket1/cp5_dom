const cardNumberInput = document.getElementById("inputCardNumber")
const submitButton = document.getElementById("submit")

let cardNumberFormated = ""
cardNumberInput.addEventListener("input", () => {
    let value = cardNumberInput.value.split("").filter(char => char >= "0" && char <= "9").join("")
    cardNumberFormated = ""
    for (let i = 0; i < value.length; i++) {
        if (i > 0 && i % 4 === 0) {
            cardNumberFormated += " "
        }
        cardNumberFormated += value[i]
    }

    cardNumberInput.value = cardNumberFormated
})

submitButton.addEventListener("click", (e) => {
    e.preventDefault()
    const bankInput = document.getElementById("inputBank")
    const paymentSystemInput = document.getElementById("inputPaymentSystem")
    const cardOwnerInput = document.getElementById("inputCardOwner")
    const container = document.getElementById("container")
    if(!bankInput.value || !paymentSystemInput.value || !cardOwnerInput.value) {
        return alert("Заполните все поля!")
    }

    container.insertAdjacentHTML("beforeend", `
        <div id="card" class="${bankInput.value}Card">
            <p id="cardText">Credit Card</p>
            <img id="${bankInput.value}" src="cards/images/banks/${bankInput.value}.svg" alt="${bankInput.value}" width="80" height="30">
            <img id="chip" src="cards/images/chip.png" alt="" width="30" height="30">
            <p id="cardNumber">${cardNumberFormated}</p>
            <p id="cardOwner">${cardOwnerInput.value}</p>
            <p id="date">03/23</p>
            <img id="${paymentSystemInput.value}" src="cards/images/payment-systems/${paymentSystemInput.value}.svg" alt="${paymentSystemInput.value}" width="90" height="90">
        </div>
    `)
})
