// bicycles data
var bicycles = [
  {
    model: "Model XYZ 1",
    brand: "XYZ Bikes",
    type: "MMX",
    price: 209.99,
    discount_amount: 20.99,
    image:
      "https://emsiemhong.github.io/learning-resources/selling-bicycles/images/bmx-209-99$.webp",
    discount: true,
    condition: "new",
    location: "Kampot",
    new_arrival: true,
  },
  {
    model: "Model XYZ 2",
    brand: "XYZ Bikes",
    type: "MMX",
    price: 269,
    discount_amount: 0,
    discount_percentage: 0,
    image:
      "https://emsiemhong.github.io/learning-resources/selling-bicycles/images/bmx-269$.jpg",
    discount: false,
    condition: "new",
    location: "Battambang",
    new_arrival: true,
  },
  {
    model: "Model ABC 1",
    brand: "ABC Cycles",
    type: "Electric",
    price: 599,
    discount_amount: 0,
    discount_percentage: 0,
    image:
      "https://emsiemhong.github.io/learning-resources/selling-bicycles/images/elect-599$.jpg",
    discount: false,
    condition: "new",
    location: "Phnom Penh",
    new_arrival: true,
  },
  {
    model: "Model ABC 2",
    brand: "ABC Cycles",
    type: "Electric",
    price: 1399,
    discount_amount: 279.8,
    discount_percentage: 20,
    image:
      "https://emsiemhong.github.io/learning-resources/selling-bicycles/images/elect-1399$.jpg",
    discount: true,
    free_delivery: true,
    condition: "used",
    location: "Siemreap",
    new_arrival: true,
  },
  {
    model: "Model ABC 3",
    brand: "ABC Cycles",
    type: "Electric",
    price: 1399,
    discount_amount: 559.6,
    discount_percentage: 40,
    image:
      "https://emsiemhong.github.io/learning-resources/selling-bicycles/images/elect-1399$.webp",
    discount: true,
    free_delivery: true,
    condition: "used",
    location: "Kep",
    new_arrival: false,
  },
  {
    model: "Model PQR 1",
    brand: "PQR Bikes",
    type: "Mountain",
    price: 27,
    discount_amount: 2.7,
    image:
      "https://emsiemhong.github.io/learning-resources/selling-bicycles/images/mountain-27$.jpg",
    discount: true,
    free_delivery: true,
    condition: "used",
    location: "Phnom Penh",
    new_arrival: false,
  },
  {
    model: "Model PQR 1",
    brand: "PQR Bikes",
    type: "Mountain",
    price: 27,
    discount_amount: 13.5,
    discount_percentage: 50,
    image:
      "https://emsiemhong.github.io/learning-resources/selling-bicycles/images/mountain-27$.jpg",
    discount: true,
    condition: "used",
    location: "Phnom Penh",
    new_arrival: false,
  },
  {
    model: "Model PQR 2",
    brand: "PQR Bikes",
    type: "Mountain",
    price: 160.98,
    discount_amount: 0,
    discount_percentage: 0,
    image:
      "https://emsiemhong.github.io/learning-resources/selling-bicycles/images/mountain-160-98$.jpg",
    discount: false,
    free_delivery: true,
    condition: "used",
    location: "Phnom Penh",
    new_arrival: false,
  },
  {
    model: "Model PQR 3",
    brand: "PQR Bikes",
    type: "Mountain",
    price: 309,
    discount_amount: 0,
    discount_percentage: 0,
    image:
      "https://emsiemhong.github.io/learning-resources/selling-bicycles/images/mountain-309$.jpg",
    discount: false,
    condition: "used",
    location: "Phnom Penh",
    new_arrival: false,
  },
  {
    model: "Model PQR 4",
    brand: "PQR Bikes",
    type: "Mountain",
    price: 27,
    discount_amount: 2.7,
    image:
      "https://emsiemhong.github.io/learning-resources/selling-bicycles/images/mountain-2-27$.webp",
    discount: true,
    free_delivery: true,
    condition: "used",
    location: "Phnom Penh",
    new_arrival: false,
  },
  {
    model: "Model PQR 5",
    brand: "PQR Bikes",
    type: "Mountain",
    price: 375,
    discount_amount: 37.5,
    image:
      "https://emsiemhong.github.io/learning-resources/selling-bicycles/images/mountain-375$.jpg",
    discount: true,
    free_delivery: true,
    condition: "used",
    location: "Phnom Penh",
    new_arrival: false,
  },
  {
    model: "Model MNO 5",
    brand: "MNO Bikes",
    type: "Road",
    price: 599.99,
    discount_amount: 29.99,
    discount_percentage: 5,
    image:
      "https://emsiemhong.github.io/learning-resources/selling-bicycles/images/road-599.99$.webp",
    discount: true,
    free_delivery: true,
    condition: "used",
    location: "Phnom Penh",
    new_arrival: false,
  },
  {
    model: "Model MNO 5",
    brand: "MNO Bikes",
    type: "Road",
    price: 599,
    discount_amount: 59.9,
    image:
      "https://emsiemhong.github.io/learning-resources/selling-bicycles/images/road-599$.webp",
    discount: true,
    free_delivery: true,
    condition: "used",
    location: "Phnom Penh",
    new_arrival: false,
  },
  {
    model: "Model MNO 5",
    brand: "MNO Bikes",
    type: "Road",
    price: 799.99,
    discount_amount: 0,
    discount_percentage: 0,
    image:
      "https://emsiemhong.github.io/learning-resources/selling-bicycles/images/road-799-99$.webp",
    discount: false,
    free_delivery: true,
    condition: "used",
    location: "Siemreap",
    new_arrival: false,
  },
  {
    model: "Model MNO 5",
    brand: "MNO Bikes",
    type: "Road",
    price: 749.99,
    discount_amount: 0,
    discount_percentage: 0,
    image:
      "https://emsiemhong.github.io/learning-resources/selling-bicycles/images/road-749-99$.jpg",
    discount: false,
    free_delivery: true,
    condition: "new",
    location: "Phnom Penh",
    new_arrival: false,
  },
];

function getBicyclesByType(bicycleType) {
  let results = [];
  for (let i = 0; i < bicycles.length; i++) {
    if (bicycles[i].type === bicycleType) {
      results.push(bicycles[i]);
    }
  }
  return results;
}

function display3Bicycles(elementId, data) {
  let listIndex = 0;
  for (let index = 1; index <= 3; index++) {
    document.getElementById(elementId).innerHTML += createBicycleCardHTML(
      data[listIndex]
    );
    listIndex++;
  }
}

function createBicycleCardHTML(bicycle) {
  return `
    <div style="border: 1px solid #ddd; padding: 16px;">
        
        <h2>${bicycle.model}</h2>
        <img src="${bicycle.image}" />
        <h3>${bicycle.brand}</h3>
        <div>
            <p>Price: $${bicycle.price} </p>
        </div>
    </div>
    `;
}

let roadList = getBicyclesByType("Road");
let mountainList = getBicyclesByType("Mountain");
let electricList = getBicyclesByType("Electric");

display3Bicycles("roadContainer", roadList);
display3Bicycles("mountainContainer", mountainList);
display3Bicycles("electricContainer", electricList);


const types = ["Select Type", "Road", "Mountain", "MMX",];
        const classs = ["Select Class", "WMAD", "HR", "SALE" , "FILM"];

const typeSelect = document.getElementById("type");
for (let i = 0; i < types.length; i++) {
  typeSelect.innerHTML += `<option value="${types[i]}">${types[i]}</option>`;
}


const classSelect = document.getElementById("class");
for (let i = 0; i < classs.length; i++) {
  classSelect.innerHTML += `<option value="${classs[i]}">${classs[i]}</option>`;
}

typeSelect.addEventListener("change", filterType);
classSelect.addEventListener("change", filterClass);

function filterType(event) {
  let filterBicycles = [];
  for (let i = 0; i < bicycles.length; i++) {
    if (bicycles[i].type.toUpperCase() === typeSelect.value.toUpperCase()) {
      filterBicycles.push(bicycles[i]);
    }
  }

  const studentList = document.getElementById("student-list");
  var contentHTML = "";
  for (let i = 0; i < filterBicycles.length; i++) {
    contentHTML += `
      <div class="student-card">
        ${filterBicycles[i].bicycle}
      </div>
    `;
  }
  studentList.innerHTML = `
    <div>Number of ${typeSelect.value}: ${filterBicycles.length}</div>
    ${contentHTML}
  `;
}




// const types = ["Select Type",  "Model ABC 3",  "Model PQR 1" , "FILM"];

// const typeSelect = document.getElementById("type");
// for (let i = 0; i < types.length; i++) {
//   typeSelect.innerHTML += `<option value="${types[i]}">${types[i]}</option>`;
// }

// typeSelect.addEventListener("change", filterType);

// function filterType(event) {
//   let filterBicycles = [];
//   for (let i = 0; i < bicycles.length; i++) {
//     if (bicycles[i].type.toUpperCase() === typeSelect.value.toUpperCase()) {
//       filterBicycles.push(bicycles[i]);
//     }
//   }

//   const produtsList = document.getElementById("products-list");
//   var contentHTML = "";
//   for (let i = 0; i < filterBicycles.length; i++) {
//     contentHTML += `
//       <div class="student-card">
//         ${filterBicycles[i].bicycles}
//       </div>
//     `;
//   }
//   produtsList.innerHTML = `
//     <div>Number of ${typeSelect.value}: ${filterBicycles.length}</div>
//     ${contentHTML}
//   `;
// }
