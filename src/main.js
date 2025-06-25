"use strict";

const itemData = {
    item1: {
        name: 'Finalista 01',
        image: 'https://picsum.photos/seed/animal/250/200',
        photographer: 'John Doe',
        description: ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        score: 42
    },
    item2: {
        name: 'Finalista 2',
        image: 'https://picsum.photos/seed/beach/250/200',
        photographer: 'Jane Smith',
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        score: 84
    },
    item3: {
        name: 'Finalista 3',
        image: 'https://picsum.photos/seed/mountain/250/200',
        photographer: 'Alice Johnson',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        score: 36
    }
};

let currentItemName = null;

async function addArraySelectOptions() {
    const itemsSelector = document.getElementById("items");

    Object.values(itemData).forEach((item) => {
        const option = new Option(item.name, item.name);
        itemsSelector.appendChild(option);
    })
}

async function displayItemDetails(itemName) {
    const item = Object.values(itemData).find(obj => obj.name === itemName);
    if (!item) return;

    currentItemName = itemName;

    const itemImageElement = document.getElementById("displayImage");
    const photographerElement = document.getElementById("photographer");
    const descriptionElement = document.getElementById("description");
    const scoreElement = document.getElementById("score");

    itemImageElement.src = item.image;
    itemImageElement.alt = item.name;
    photographerElement.value = item.photographer;
    descriptionElement.value = item.description;
    scoreElement.value = item.score;
}

document.addEventListener("DOMContentLoaded", async () => {
    await addArraySelectOptions();
    const itemsSelector = document.getElementById("items");
    itemsSelector.addEventListener("change", async (event) => {
        await displayItemDetails(event.target.value);
    });

    document.getElementById("increaseScore").addEventListener("click", () => {
        if (!currentItemName) return;
        const item = Object.values(itemData).find(obj => obj.name === currentItemName);
        if (item) {
            item.score += 1;
            document.getElementById("score").value = item.score;
        }
    });

    document.getElementById("decreaseScore").addEventListener("click", () => {
        if (!currentItemName) return;
        const item = Object.values(itemData).find(obj => obj.name === currentItemName);
        if (item) {
            item.score -= 1;
            document.getElementById("score").value = item.score;
        }
    });
});