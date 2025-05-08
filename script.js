import { editVisualCard, editTable } from "./visual.js"
const inputIds = [
    "inputBank", "inputPaymentSystem", "inputCardNumber", "inputCardOwner", "inputCardDate"]

inputIds.forEach(id => {
    document.getElementById(id).addEventListener("input", editVisualCard)
});
document.getElementById("bankForm").addEventListener("submit", function (e) {
    e.preventDefault()
    if (document.getElementById("inputCardNumber").value.replace(/\s+/g, "").length < 16) {
        alert("Введите корректный номер карты")
        return
    }
    editTable()
    this.reset()
    editVisualCard()
});

editVisualCard()