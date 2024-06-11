/**
 * Anzahl der Sekunden bis sich das Sonderangebot ändert
 */
const UPDATE_SPECIAL_OFFER = 3600*1000;
let offer_count = true;

const CARS = [
    {
        "name": "Citroen Ami Coupe",
        "detail": "6.3 6kW kWh Ami 6.3kWh (8bhp) Coupe 2dr Electric Automatic",
        "img": "https://images.lingscars.com/car_images/citroen_ami/transparent.png",
        "price": 173,
        "duration": 36
    },
    {
        "img": "https://images.lingscars.com/car_images/seat_ibiza/transparent.png",
        "name": "Seat Ibiza",
        "detail": "1.0 TSI FR (95bhp) Hatchback 5dr Petrol Manual",
        "price": 744,
        "duration":36
    },
    {
        "img": "https://images.lingscars.com/car_images/vw_golf_2024/transparent.png",
        "name": "VW Golf",
        "detail": "1.5 TSI Match (115bhp) Hatchback 5dr Petrol Manual",
        "price": 1578,
        "duration":24
    },
    {
        "img": "https://images.lingscars.com/car_images/nissan_leaf/transparent.png",
        "name": "Nissan Leaf",
        "detail": "110kW Tekna 39kWh (150bhp) Hatchback 5dr Electric Automatic",
        "price": 810,
        "duration":36
    },
    {
        "img": "https://images.lingscars.com/car_images/mg_mg3/transparent.png",
        "name": "Mg MG3",
        "detail": "1.5 Hybrid SE Hatchback 5dr Petrol/electric Automatic",
        "price": 915,
        "duration":24
    },
    {
        "img": "https://images.lingscars.com/car_images/nissan_qashqai_new/transparent.png",
        "name": "Nissan Qashqai",
        "detail": "1.5 E-Power N-Connecta [Glass Roof] (190bhp) Hatchback 5dr Petrol/electric Hybrid Automatic",
        "price": 1932,
        "duration":36
    }
];

window.onload = () => {
    setSpecialOffer(0);
    setInterval(() => {
        setSpecialOffer(+offer_count);
        offer_count = !offer_count;
    }, UPDATE_SPECIAL_OFFER)
}

function setSpecialOffer(index) {
    let car = generateCar(CARS[index]);
    let node = document.querySelector(".offer");
    node.innerHTML = "";
    node.appendChild(car);
}

function generateCar(car) {
    let carContainer = document.createElement("div");
    carContainer.className = "car-item";
    let img = document.createElement("img");
    img.src = car.img;
    let name = document.createElement("p");
    name.innerText = car.name;
    let detail = document.createElement("p");
    detail.innerText = car.detail;
    let price = document.createElement("p");
    price.innerText = car.price +"£ over "+ car.duration +"month";
    carContainer.appendChild(img)
    carContainer.appendChild(name);
    carContainer.appendChild(detail);
    carContainer.appendChild(price);
    return carContainer;
}