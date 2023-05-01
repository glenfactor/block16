// needed two discounts (subscription, coupon)
// need totalCost of Refills for (subscription, coupon) 
// totalCost (subscription, coupon)
// if customer === subscriptionDiscount = [ customer = refillPriced - (refillPrice * discount)]
// if customer === couponDiscount = [ customer = subscriptionDiscount - (refillPrice * coupon)]
// at the end of the transaction, return and log the message "Your grand total is ${finalAmount}."

// Given Objects

const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}
//
let member = ["timmy", "sarah", "rocky"];
//console.table(Object.keys ["timmy", "sarah", "rocky"]);
// Subscription Discount
//const subcriptionDiscount = .25; // this is for the subscripttion discount
// Coupon Discount after the subscription discount has been calculated.
//const couponDiscount = .10;


//Timmy
console.log (`-------------Timmy--------------`)

function subscriptionDiscount (pricePerRefill, refills) {
        if (timmy.subscription === true && timmy.coupon === true) {
        return pricePerRefill * refills - ((pricePerRefill * refills) * 0.25);
    }   else if (!(timmy.sub === true) && !(timmy.coupon === true)) {
        return pricePerRefill * refills - ((pricePerRefill * refills) * 0.25) - (((pricePerRefill * refills) * 0.25) * 0.10) ;
    } else {
        return pricePerRefill * refills;
    }
}
const finalAmountTimmy = subscriptionDiscount(25, 3);
//console.log(finalAmountTimmy);
console.log(`${member[0]} => Your grand total is ${finalAmountTimmy}`);

// Sarah

console.log (`-------------Sarah--------------`)

function subscriptionDiscount (pricePerRefill, refills) {
    if (sarah.subscription === true && sarah.coupon === true) {
    return pricePerRefill * refills - ((pricePerRefill * refills) * 0.25);
}   else if (!(sarah.subscription === true) && !(sarah.coupon === true)) {
    return pricePerRefill * refills - ((pricePerRefill * refills) * 0.25) - (((pricePerRefill * refills) * 0.25) * 0.10) ;
} else {
    return pricePerRefill * refills
}
}
const finalAmountSarah = subscriptionDiscount(50, 1);
//console.log(finalAmountSarah);
console.log(`${member[1]} => Your grand total is ${finalAmountSarah}`);

// Rocky

console.log (`-------------Rocky--------------`)

function subscriptionDiscount (pricePerRefill, refills) {
    if (rocky.subscription === true && rocky.coupon === true) {
    return pricePerRefill * refills - ((pricePerRefill * refills) * 0.25);
}   else if (!(rocky.subscription === true) && !(rocky.coupon === true)) {
    return pricePerRefill * refills - ((pricePerRefill * refills) * 0.25) - (((pricePerRefill * refills) * 0.25) * 0.10) ;
} else {
    return pricePerRefill * refills;
}
}
const finalAmount = subscriptionDiscount(30, 5);
//console.log(finalAmount);
console.log(`${member[2]} => Your grand total is ${finalAmount}`);