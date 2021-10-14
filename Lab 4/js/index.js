import {
    addItemsToPage,
    updateItemsOnPage,
    clearInputs,
    renderItemsList,
    getInputValues,
    itemsContainer,
    countValues,
    sortItems,
    nameInput
} from "./dom.js"


const submitButton = document.getElementById("submit_button")
const findButton = document.getElementById("find_button")
const cancelFindButton = document.getElementById("cancel_find_button")
const findInput = document.getElementById("find_input")
const totalValueSelector = document.getElementById("propertyForTotalValue")
const sortPropertySelector = document.getElementById("propertyForSorting")
const sortOrderSelector = document.getElementById("orderSelector")

let planes = []
let editMode = false
let editLiGlobal = ""

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

const updateItem = ({ name, fuel, passengers }) => {
    for (let plane of planes) {
        if (plane.id === editLiGlobal) {
            plane.name = name
            plane.fuel = fuel
            plane.passengers = passengers
            console.log(plane)
        }
    }
    updateItemsOnPage({ id: editLiGlobal, name, fuel, passengers })
}

export const onEditItem = (event) => {
    console.log(event.target)

    let editButton = event.target
    let editLI = editButton.parentNode.parentNode.id
    editLiGlobal = editLI

    console.log(editLI)

    if (!editMode) {
        editButton.innerHTML = "Cancel"
        submitButton.innerHTML = "Save changes"
        nameInput.focus()
        editMode = true
    } else {
        editButton.innerHTML = "Edit"
        submitButton.innerHTML = "Add plane"
        editMode = false
    }
}

const inputIsValid = ({ name, fuel, passengers }) => {
    let alertMesege = ""

    if (name == "" || !name.replace(/\s/g, '').length) {
        alertMesege += "Name is not valid\n"
    }
    if (isNaN(fuel) || fuel < 0 || fuel == "" || !fuel.replace(/\s/g, '').length) {
        alertMesege += "Fuel is not valid\n"
    }
    if (isNaN(passengers) || passengers < 0 || passengers == "" || !passengers.replace(/\s/g, '').length) {
        alertMesege += "Passengers are not valid\n"
    }

    if (alertMesege !== "") {
        alert(alertMesege)
        return false
    } else {
        return true
    }
}

submitButton.addEventListener("click", (event) => {
    event.preventDefault()

    const { name, fuel, passengers } = getInputValues();

    clearInputs()

    if (inputIsValid({ name, fuel, passengers })) {
        if (!editMode) {
            addItem({
                name,
                fuel,
                passengers
            })
        } else {
            updateItem({
                name,
                fuel,
                passengers
            })
            submitButton.innerHTML = "Add plane"
            editMode = false
        }
    }
    countValues({ planes, property: totalValueSelector.value })
    sortItems({ planes, property: sortPropertySelector.value, order: sortOrderSelector.value })
})

findButton.addEventListener("click", (event) => {
    event.preventDefault()

    if (findInput.value != "") {
        const sortedPlanes = planes.filter(plane => plane.name.search(findInput.value) !== -1)

        clearInputs()

        itemsContainer.innerHTML = ""

        // countValues({ sortedPlanes, property: totalValueSelector.value })
        // sortItems({ sortedPlanes, property: sortPropertySelector.value, order: sortOrderSelector.value })

        renderItemsList(sortedPlanes)
    } else {
        alert("Write something for search!")
    }
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

countValues({ planes, property: totalValueSelector.value })

sortItems({ planes, property: sortPropertySelector.value, order: sortOrderSelector.value })