//Selectors

const fenceSelection = document.getElementById('fence-type');
const materialSelection = document.getElementById('material-type');
const linearFeet = document.getElementById('LF');
const submitButton = document.getElementById('fence-submit');
const postQty = document.getElementById('postsQty');
const railQty = document.getElementById('railsQty');
const picketsQty = document.getElementById('picketsQty');
const concreteQty = document.getElementById('concreteQty');
const nails2Qty = document.getElementById('nails2Qty');
const nails3Qty = document.getElementById('nails3Qty');
const postPrice = document.getElementById('postPrice');
const railsPrice = document.getElementById('railsPrice');
const picketsPrice = document.getElementById('picketsPrice');
const concretePrice = document.getElementById('concretePrice');
const nails3Price = document.getElementById('nails3Price');
const nails2Price = document.getElementById('nails2Price');
const postCost = document.getElementById('postCost');
const railsCost = document.getElementById('railsCost');
const picketsCost = document.getElementById('picketsCost');
const concreteCost = document.getElementById('concreteCost');
const nails3Cost = document.getElementById('nails3Cost');
const nails2Cost = document.getElementById('nails2Cost');
const totalCostDisplay = document.getElementById('total-cost');


//prices

let postCurrentPrices = 16.98
let railsCurrentPrices = 9.98
let pineCurrentPrices = 2.18
let cedarCurrentPrices = 3.97
let concreteCurrentPrices = 5.35
let nails2CurrentPrices = 0.02
let nails3CurrentPrices = 0.03

let totalPostCost = 0;
let totalRailCost = 0;
let totalPineCost = 0;
let totalCedarCost = 0;
let totalConcreteCost = 0;
let totalNails2Cost = 0;
let totalNails3Cost = 0;



//functions
const calculatePosts = function(num) {
    return Math.ceil((num / 8) + 1);
}
const calculateRails = function(num, type) {
    if(type === 'framed-and-capped') return Math.ceil(num / 8) * 4;
    return Math.ceil(num / 8) * 3;
}
const calculatePickets = function(num, type) {
    switch (type) {
        case 'privacy':
        case 'framed-and-capped':
            return Math.ceil(num * 2.2);
            break;
        case 'shadow-box': 
        case 'board-on-board':
            return Math.ceil(num * 2.5);
            break;
       default:
           return alert('Please select fence type')
    }
}
const calculateNails2 = function(num, type) {
    switch (type) {
        case 'privacy':
        case 'framed-and-capped':
            return Math.ceil(num * 14);
            break;
        case 'shadow-box': 
        case 'board-on-board':
            return Math.ceil(num * 15);
            break;
       default:
           return alert('Please select fence type')
    }
}
const calculateNails3 = function(num, type) {
    switch (type) {
        case 'privacy':
        case 'shadow-box': 
        case 'board-on-board':
            return Math.ceil(num/8) * 12;
            break;
        case 'framed-and-capped':
            return Math.ceil(num/8) * 16;
            break;
       default:
           return alert('Please select fence type')
    }
}
const setItemCosts = function() {
totalPostCost = (postCurrentPrices * postQty.innerText).toFixed(2);
totalRailCost = (railsCurrentPrices * railQty.innerText).toFixed(2);
totalPineCost = (pineCurrentPrices * picketsQty.innerText).toFixed(2);
totalCedarCost = (cedarCurrentPrices * picketsQty.innerText).toFixed(2);
totalConcreteCost = (concreteCurrentPrices * concreteQty.innerText).toFixed(2);
totalNails2Cost = (nails2CurrentPrices * nails2Qty.innerText).toFixed(2);
totalNails3Cost = (nails3CurrentPrices * nails3Qty.innerText).toFixed(2);
}

const setPrice = function(type) {
    if (type === 'pine'){
        picketsPrice.innerHTML = `$${pineCurrentPrices}`;
    }
    if (type === 'cedar') {
        picketsPrice.innerHTML = `$${cedarCurrentPrices}`;   
    }
        postPrice.innerHTML = `$${postCurrentPrices}`;
        railsPrice.innerHTML = `$${railsCurrentPrices}`;
        concretePrice.innerHTML = `$${concreteCurrentPrices}`;
        nails2Price.innerHTML = `$${nails2CurrentPrices}`;
        nails3Price.innerHTML = `$${nails3CurrentPrices}`;
}
const setTotals = function (type) {
    if (type === 'pine'){
            picketsCost.innerText = `$${totalPineCost}`;
        } else {
            picketsCost.innerText = `$${totalCedarCost}`;
        }
        postCost.innerText = `$${totalPostCost}`;
        railsCost.innerText = `$${totalRailCost}`;
        concreteCost.innerText = `$${totalConcreteCost}`;
        nails2Cost.innerText = `$${totalNails2Cost}`;
        nails3Cost.innerText = `$${totalNails3Cost}`;

}
const totalCost = function(value) {
    let cost = totalRailCost + totalPostCost + totalConcreteCost + totalNails2Cost + totalNails3Cost;
    if (value === 'cedar'){
        cost = cost + totalCedarCost;
    } 
    if (value === 'pine') {
        cost = cost + totalPineCost;
    }
    totalCostDisplay.innerText = `The total cost to build a ${linearFeet.value} foot long ${fenceSelection.value} fence out of ${materialSelection.value} will cost $${cost} in materials.`
}


//Eventlisteners

submitButton.addEventListener('click', () => {
    postQty.innerText = calculatePosts(linearFeet.value);
    railQty.innerText = calculateRails(linearFeet.value, fenceSelection.value);
    picketsQty.innerText = calculatePickets(linearFeet.value, fenceSelection.value);
    nails2Qty.innerText = calculateNails2(linearFeet.value, fenceSelection.value);
    nails3Qty.innerHTML = calculateNails3(linearFeet.value, fenceSelection.value);
    concreteQty.innerHTML = calculatePosts(linearFeet.value)
    setPrice(materialSelection.value);
    setItemCosts();
    setTotals(materialSelection.value);
    totalCost(materialSelection.value);
})