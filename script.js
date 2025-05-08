const cardNumberInput = document.getElementById("card-number")
const submitButton = document.getElementById("submit")


cardNumberInput.addEventListener("input", () => {
    let value = cardNumberInput.value.split("").filter(char => char >= "0" && char <= "9").join("")
    
    let cardNumberFormated = ""
    
    for (let i = 0; i < value.length; i++) {
        if (i > 0 && i % 4 === 0) {
            cardNumberFormated += " "
        }
        cardNumberFormated += value[i]
    }

    cardNumberInput.value = cardNumberFormated
})


// submitButton.addEventListener("click", () => {
//     const bankInput = document.getElementById("bank")
//     const paymentSystemInput = document.getElementById("payment-system")
//     const cardOwnerInput = document.getElementById("card-owner")
//     const container = document.getElementById("container")

//     container.insertAdjacentHTML("beforeend", `
//         <div id="card" class="${bank}-card">
//             <p id="card-text">Credit Card</p>
//             <img id="${bankInput.value}" src="cards/images/banks/${bankInput.value}.svg" alt="${bankInput.value}" width="80" height="30">
//             <img id="chip" src="cards/images/chip.png" alt="" width="30" height="30">
//             <p id="card-number">${formattedValue}</p>
//             <p id="card-owner">${cardOwnerInput.value}</p>
//             <p id="date">03/23</p>
//             <img id="${paymentSystemInput.value}" src="cards/images/payment-systems/${paymentSystemInput.value}.svg" alt="${paymentSystemInput.value}" width="90" height="90">
//         </div>
//     `)
// })
