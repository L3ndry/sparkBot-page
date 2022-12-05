const label = document.querySelector('#offerChoose');
const offer1 = document.querySelector('.offersBlock1');
const offer2 = document.querySelector('.offersBlock2');

window.onload = changeOffer();

function changeOffer() {
    let selected = label.options[label.selectedIndex].text;
    if (selected === "Plano 1") {
        label.style.background = "#414141";
        offer2.style.display = "none";
        offer1.classList.remove("d-none")
        offer1.classList.add("d-flex flex-column")
    } else if (selected === "Plano 2") {
        label.style.background = "#E9BD21";
        offer1.classList.add("d-none")
        offer2.style.display = "flex";
        offer2.style.flexDirection = "column";
    }
}
