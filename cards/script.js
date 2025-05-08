const container = document.getElementById("container")

function createCard(bank, payment_system) {
    container.insertAdjacentHTML("beforeend", `
        <div id="card" class="${bank}-card">
            <p id="card-text">Credit Card</p>
            <img id="${bank}" src="images/banks/${bank}.svg" alt="${bank}" width="80" height="30">
            <img id="chip" src="images/chip.png" alt="" width="30" height="30">
            <p id="card-number">5555 1133 6413 5213</p>
            <p id="card-owner">Байков Даниил</p>
            <p id="date">03/23</p>
            <img id="${payment_system}" src="images/payment-systems/${payment_system}.svg" alt="${payment_system}" width="90" height="90">
        </div>
    `)
}

const banks = ["alfa", "sber", "tbank", "vtb"]
const paymentSystems = ["mir", "visa", "mastercard"]
banks.forEach(bank => {
    paymentSystems.forEach(paymentSystem => {
        createCard(bank, paymentSystem)
    })
})