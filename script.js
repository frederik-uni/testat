/**
 * Anzahl der Sekunden bis sich das Sonderangebot ändert
 */
const UPDATE_SPECIAL_OFFER = 3600 * 1000;
let offer_count = true;
let expanded = false;

const CARS = [
    {
        "name": "Citroen Ami Coupe",
        "url": "https://www.lingscars.com/personal-car-leasing/citroen/ami-coupe/4454733-6.3-6kW-kWh-Ami-6.3kWh-(8bhp)-Coupe-2dr-Electric-Automatic",
        "detail": "6.3 6kW kWh Ami 6.3kWh (8bhp) Coupe 2dr Electric Automatic",
        "img": "https://images.lingscars.com/car_images/citroen_ami/transparent.png",
        "price": 173,
        "duration": 36
    },
    {
        "img": "https://images.lingscars.com/car_images/seat_ibiza/transparent.png",
        "name": "Seat Ibiza",
        "url": "https://www.lingscars.com/personal-car-leasing/seat/ibiza/4410361-1.0-TSI-FR-(95bhp)-Hatchback-5dr-Petrol-Manual",
        "detail": "1.0 TSI FR (95bhp) Hatchback 5dr Petrol Manual",
        "price": 248,
        "duration": 36
    },
    {
        "img": "https://images.lingscars.com/car_images/vw_golf_2024/transparent.png",
        "name": "VW Golf",
        "url": "https://www.lingscars.com/personal-car-leasing/vw/golf/4442346-1.5-TSI-Match-(115bhp)-Hatchback-5dr-Petrol-Manual",
        "detail": "1.5 TSI Match (115bhp) Hatchback 5dr Petrol Manual",
        "price": 263,
        "duration": 24
    },
    {
        "img": "https://images.lingscars.com/car_images/nissan_leaf/transparent.png",
        "name": "Nissan Leaf",
        "url": "https://www.lingscars.com/personal-car-leasing/nissan/leaf/4455440-110kW-Tekna-39kWh-(150bhp)-Hatchback-5dr-Electric-Automatic",
        "detail": "110kW Tekna 39kWh (150bhp) Hatchback 5dr Electric Automatic",
        "price": 270,
        "duration": 36
    },
    {
        "img": "https://images.lingscars.com/car_images/vw_golf_2024/transparent.png",
        "name": "VW Golf",
        "url": "#",
        "detail": "1.5 TSI Match (115bhp) Hatchback 5dr Petrol Manual",
        "price": 263,
        "duration": 24
    },
    {
        "img": "https://images.lingscars.com/car_images/cupra_born/transparent.png",
        "name": "Cupra Born",
        "url": "https://www.lingscars.com/personal-car-leasing/cupra/born/4468152-150kW-V1-58kWh-Hatchback-5dr-Electric-Automatic",
        "detail": "150kW V1 58kWh Hatchback 5dr Electric Automatic",
        "price": 351,
        "duration": 36
    },
    {
        "img": "https://images.lingscars.com/car_images/mg_mg3/transparent.png",
        "name": "Mg MG3",
        "url": "https://www.lingscars.com/personal-car-leasing/mg/mg3/4455223-1.5-Hybrid-SE-Hatchback-5dr-Petrol-electric-Automatic",
        "detail": "1.5 Hybrid SE Hatchback 5dr Petrol/electric Automatic",
        "price": 305,
        "duration": 24
    },
    {
        "img": "https://images.lingscars.com/car_images/nissan_qashqai_new/transparent.png",
        "name": "Nissan Qashqai",
        "url": "https://www.lingscars.com/personal-car-leasing/nissan/qashqai/4457102-1.5-E-Power-N-Connecta-[Glass-Roof]-(190bhp)-Hatchback-5dr-Petrol-electric-Hybrid-Automatic",
        "detail": "1.5 E-Power N-Connecta [Glass Roof] (190bhp) Hatchback 5dr Petrol/electric Hybrid Automatic",
        "price": 322,
        "duration": 36
    }
];

window.onload = () => {
    setSpecialOffer(+offer_count);
    setFav();
    setLastDelivered([2, 6, 2]);
    const button = document.querySelector(".more");
    button.onclick = () => {
        if (expanded) {
            button.innerText = "More";
            undoFavExpand()
        } else {
            button.innerText = "Less";
            setFavExpand()
        }
        expanded = !expanded;
    };
    setInterval(() => {
        offer_count = !offer_count;
        setSpecialOffer(+offer_count);
    }, UPDATE_SPECIAL_OFFER)
}

function setSpecialOffer(index) {
    let car = generateCar(CARS[index]);
    let node = document.querySelector(".offer");
    node.innerHTML = "";
    node.appendChild(car);
}

function generateCar(car) {
    let carContainer = document.createElement("a");
    carContainer.href = car.url;
    carContainer.className = "car-item";
    let img = document.createElement("img");
    img.src = car.img;
    let name = document.createElement("p");
    name.innerText = car.name;
    let detail = document.createElement("p");
    detail.innerText = car.detail;
    let price = document.createElement("p");
    price.innerText = car.price + "£ over " + car.duration + "month";
    carContainer.appendChild(img)
    carContainer.appendChild(name);
    carContainer.appendChild(detail);
    carContainer.appendChild(price);
    return carContainer;
}

function setFav() {
    let node = document.querySelector(".fav");
    node.innerHTML = "";
    CARS.slice(0, 4).forEach(item => node.appendChild(generateCar(item)))
}

function setFavExpand() {
    let node = document.querySelector(".fav");
    CARS.slice(4).forEach(item => node.appendChild(generateCar(item)))
}

function undoFavExpand() {
    let node = document.querySelector(".fav");
    for ([index, node] of Array.from(node.children).entries()) {
        if (index > 3) {
            node.remove();
        }
    }
}

function setLastDelivered(items) {
    let node = document.querySelector(".last_delivered");
    node.innerHTML = "";
    items.forEach(item => node.appendChild(generateCar(CARS[item])))
}