import {
    addItemsToPage,
    clearInputs,
    renderItemsList,
    getInputValues,
    itemsContainer,
    countValues,
    sortItems
} from "./dom.js"


const submitButton = document.getElementById("submit_button")
const findButton = document.getElementById("find_button")
const cancelFindButton = document.getElementById("cancel_find_button")
const findInput = document.getElementById("find_input")
const totalValueSelector = document.getElementById("propertyForTotalValue")
const sortPropertySelector = document.getElementById("propertyForSorting")
const sortOrderSelector = document.getElementById("orderSelector")

let planes = []

const addItem = ({ name, fuel, passengers }) => {
    const generatedId = uuid.v1()

    const newItem = {
        id: generatedId,
        name,
        fuel,
        passengers
    }

    planes.push(newItem)

    addItemsToPage(newItem)
}

submitButton.addEventListener("click", (event) => {
    event.preventDefault()

    const { name, fuel, passengers } = getInputValues();

    clearInputs()

    addItem({
        name,
        fuel,
        passengers
    })

    countValues({ planes, property: "fuel" })
})

findButton.addEventListener("click", (event) => {
    event.preventDefault()

    const sortedPlanes = planes.filter(plane => plane.name.search(findInput.value) !== -1)

    clearInputs()

    itemsContainer.innerHTML = ""

    renderItemsList(sortedPlanes)
})

cancelFindButton.addEventListener("click", () => {
    itemsContainer.innerHTML = ""

    renderItemsList(planes)
})

totalValueSelector.addEventListener("change", () => {
    console.log(totalValueSelector.value)
    countValues({ planes, property: totalValueSelector.value })
})

sortPropertySelector.addEventListener("change", () => {
    sortItems({ planes, property: sortPropertySelector.value, order: sortOrderSelector.value })
})

sortOrderSelector.addEventListener("change", () => {
    sortItems({ planes, property: sortPropertySelector.value, order: sortOrderSelector.value })
})

renderItemsList(planes)

countValues({ planes, property: "fuel" })