const pets = [ 
    {"name": "Buddy", "type": "Dog", "age": 3, "img": "img/dogs/dog01.jpg"}, 
    {"name": "Buddy", "type": "Dog", "age": 3, "img": "img/dogs/dog02.jpg"}, 
    {"name": "Whiskers", "type": "Cat", "age": 2, "img": "img/cats/cat01.jpg"}, 
    {"name": "Mittens", "type": "Cat", "age": 2, "img": "img/cats/cat02.jpg"},
];

function adoptPet() {
    alert("Thank you for your interest in adopting! Our team will contact you soon.");
}

function loadPets() {
    console.log('Loading pets...');
    const petList = document.getElementById('pet-list');
    
    // Only load pets if we're on the pets page
    if (petList) {
        pets.forEach(pet => {
            const petItem = document.createElement('div');
            petItem.className = 'pet';
            petItem.innerHTML = `
                <img src="${pet.img}" alt="${pet.name}">
                <div class="pet-info">
                    <h3>${pet.name}</h3>
                    <p>Type: ${pet.type}</p>
                    <p>Age: ${pet.age} years</p>
                    <button onclick="adoptPet()">Adopt Now</button>
                </div>
            `;
            petList.appendChild(petItem);
        });
    }
}

document.addEventListener('DOMContentLoaded', loadPets);
console.log('Script loaded successfully.'); 