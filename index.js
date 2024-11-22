function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
}

async function loadCars() {
    try {
        const response = await fetch('data.json');
        const cars = await response.json();

        const cardContainer = document.getElementById('card-container');
        cars.forEach(car => {
            const cardHTML = `
            <div class="card">
                <img src="${car.image}" class="card-img-top" alt="Image of Car">
                <div class="card-body">
                    <h5 class="card-title">${car.title}</h5>
                    <p class="card-text">${car.description}</p>
                    <div>
                        <span class="price">R$ ${car.price}</span>
                        <span class="time-left">Ano: ${car.year}</span>
                    </div>
                    <div class="creator">
                        <img src="${car.creatorImage}" alt="Avatar do criador">
                        <span>Criado por <a href="#">${car.creator}</a></span>
                    </div>
                </div>
            </div>
            `;
            cardContainer.insertAdjacentHTML('beforeend', cardHTML);
        });
    } catch (error) {
        console.error('Error loading data:', error);
    }
}

document.addEventListener('DOMContentLoaded', loadCars);
