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

const types=["Type", "Mountain","Road","Electric","MMX"];
const texts = [
  { value: "MOUNTAIN BIKE", text: "Web And Mobile Development" },
  { value: "ROAD BIKE", text: "Human Resource" },
  { value: "ELECTRIC BIKE", text: "Human Resource" },
  { value: "MMX BIKE", text: "Human Resource" },

];
const typeSelect = document.getElementById("type");
for (let i = 0; i < types.length; i++) {
  typeSelect.innerHTML += `<option value="${types[i]}">${types[i]}</option>`;
}

typeSelect.addEventListener("change", filterType);

function filterType(event) {
  let bicycleType = typeSelect.value;
  // let filterBicycles = [];
  // for (let i = 0; i < filterBicycles.length; i++) {
  //   if (bicycles[i].type.toUpperCase() === typeSelect.value.toUpperCase()) {
  //     filterBicycles.push(bicycles[i]);
  //   }
  // }
  
  // const bicycles = document.getElementById("[product");
  // var contentHTML = "";
  // for (let i = 0; i < filterBicycles.length; i++) {
    //   contentHTML += `
    //     <div class="product-card">
    
     
    //     </div>
    //   `;
    // }
    // filterBicycles.innerHTML = `
    //   <div> ${typeSelect.value}: ${filterBicycles.length}</div>
    //   ${contentHTML}
    // `;
    
    
    //   let roadList = getBicyclesByType("Road");
    // console.log("road list", roadList);
    // let mountainList = getBicyclesByType("Mountain");
    // let electricList = getBicyclesByType("Electric");
    let bicycleFiltered = getBicyclesByType(bicycleType);
    console.log("Selected Type...", bicycleFiltered);

display3Bicycles("bike-list", bicycleFiltered);
// display3Bicycles("mountainContainer", mountainList);
// display3Bicycles("electricContainer", electricList);

}


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
  let container1 = document.getElementById(elementId);
  // clear the previous data
  container1.innerHTML = "";

  for (let index = 1; index <= data.length; index++) {
    container1.innerHTML += createBicycleCardHTML(
      data[listIndex]
    );
    listIndex++;
  }
}

function createBicycleCardHTML(bicycle) {
  return `
    <div class="product-card">
         <h2>${bicycle.model}</h2>
         <img src="${bicycle.image}" />
        <div class="type-a">
         <div class="price">
         <p> ${bicycle.model} </p>
         <h5> ${bicycle.brand}</h5>
            <p style="text-decoration: line-through;">$${bicycle.discount_amount}</p>
         </div>
         <div class="price-a">
         <h2> ${bicycle.condition} </h2>
         <h3> $${bicycle.price}</h3>
         </div>
        </div>
    </div>
    `;
}



const conditions=["Condition", "New","Used"];
const tys = [
  { value: "MOUNTAIN BIKE", text: "Web And Mobile Development" },
  { value: "ROAD BIKE", text: "Human Resource" },
  { value: "ELECTRIC BIKE", text: "Human Resource" },
  { value: "MMX BIKE", text: "Human Resource" },

];
const conditionSelect = document.getElementById("condition");
for (let i = 0; i < conditions.length; i++) {
  conditionSelect.innerHTML += `<option value="${conditions[i]}">${conditions[i]}</option>`;
}

conditionSelect.addEventListener("change", filterCondition);

function filterCondition(event) {
  let bicycleFiltered = getBicyclesByCondition(conditionSelect.value);
  display3Bicycles("bike-list", bicycleFiltered);
}

function getBicyclesByCondition(bicycleCondition) {
  let results = [];
  for (let i = 0; i < bicycles.length; i++) {
    if (bicycles[i].condition.toLowerCase() === bicycleCondition.toLowerCase()) {
      results.push(bicycles[i]);
    }
  }
  return results;
}

function display3Bicycles(elementId, data) {
  let listIndex = 0;
  let container = document.getElementById(elementId);
  // clear the previous data
  container.innerHTML = "";

  for (let index = 1; index <= data.length; index++) {
    container.innerHTML += createBicycleCardHTML(
      data[listIndex]
    );
    listIndex++;
  }
}

function createBicycleCardHTML(bicycle) {
  return `
    <div class="product-card">
         <h2>${bicycle.model}</h2>
         <img src="${bicycle.image}" />
        <div class="type-a">
         <div class="price">
         <p> ${bicycle.model} </p>
         <h5> ${bicycle.brand}</h5>
            <p style="text-decoration: line-through;">$${bicycle.discount_amount}</p>
         </div>
         <div class="price-a">
         <h2> ${bicycle.condition} </h2>
         <h3> $${bicycle.price}</h3>
         </div>
        </div>
    </div>
    `;
}