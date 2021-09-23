// import { onDragNDrop } from "./drag_n_drop.js";

export const EDIT_BUTTON_PREFIX = 'edit-button-';

const nameInput = document.getElementById("name_input")
const passengersInput = document.getElementById("passengers_input")
const fuelInput = document.getElementById("fuel_input")
const totalValueLabel = document.getElementById("totalValue")
export const itemsContainer = document.getElementById("items_container")


const getItemId = (id) => `item-${id}`

const itemTemplate = ({ id, name, passengers, fuel }) => `
<li id="${id}" class="card mb-3 item-card" draggable="true">
    <img src="./images/boeing-777-300er.jpg" class="item-container__image card-img-top" alt="card">
    <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <h3 class="card-text">passengers: ${passengers}</h3>
        <h3 class="card-text">fuel: ${fuel}</h3>
        <button id="${EDIT_BUTTON_PREFIX}${id}" type="button" class="btn btn-info">
            Edit
        </button>
    </div>
</li>`

export const clearInputs = () => {
    nameInput.value = ""
    passengersInput.value = ""
    fuelInput.value = ""
}

export const addItemsToPage = ({ id, name, passengers, fuel }) => {
    itemsContainer.insertAdjacentHTML(
        "afterbegin",
        itemTemplate({ id, name, passengers, fuel })
    )

    const element = document.getElementById(getItemId(id))

    // element.onmousedown = onDragNDrop(element)
}

export const renderItemsList = (planes) => {
    for (const plane of planes) {
        addItemsToPage(plane)
    }
}

export const getInputValues = () => {
    return {
        name: nameInput.value,
        fuel: fuelInput.value,
        passengers: passengersInput.value,
    }
}

export const countValues = ({ planes, property }) => {

    totalValueLabel.innerHTML = ""

    const totalValue = planes.reduce((sum, current) => {
        if (property === "fuel") {
            return parseInt(sum, 10) + parseInt(current.fuel, 10)
        }
        if (property === "passengers") {
            return parseInt(sum, 10) + parseInt(current.passengers, 10)
        }
    }, 0)

    totalValueLabel.innerHTML = totalValue
}

export const sortItems = ({ planes, property, order }) => {
    function compareByName(a, b) {
        if (a.name < b.name) {
            return 1;
        }
        if (a.name > b.name) {
            return -1;
        }
        return 0;
    }

    function compareByFuel(a, b) {
        if (a.fuel < b.fuel) {
            return 1;
        }
        if (a.fuel > b.fuel) {
            return -1;
        }
        return 0;
    }

    function compareByPassengers(a, b) {
        if (a.passengers < b.passengers) {
            return 1;
        }
        if (a.passengers > b.passengers) {
            return -1;
        }
        return 0;
    }

    if (property === "name") {
        planes.sort(compareByName)
    } else if (property === "fuel") {
        planes.sort(compareByFuel)
    } else {
        planes.sort(compareByPassengers)
    }

    if (order === "DESC") {
        planes.reverse()
    }
    itemsContainer.innerHTML = ""
    renderItemsList(planes)
}