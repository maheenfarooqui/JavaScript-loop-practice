// // ..............................for loop
// for(let i = 0 ; i <= 100; i++){
//     // console.log(i);
    
// }
// for(let i = 0 ; i >= -100 ; i--){
//     // console.log(i);
    
// }

// const user = ["Afsah", "Hareem", "Hiba", "Nadiya"];
// for(let i = 0 ; i < user.length ; i++){
//     console.log(`Hello ${user[i]} , How Are You ${user[i]} ? `);
    
// }

// const value =[2000,4000,3400,5400];
// let total = 0;
// for(let i = 0 ; i < value.length ; i ++){
//     total += value[i];
    
// }
// console.log(total);

// const value1 = [5000,7600,34567,12340];
// let total1 = 0;
// for(let i = 0 ; i< value1.length ; i++){
//     total1 += value1[i];
// }
// let finalPrice = total1 * 0.9;
// console.log(finalPrice);
// console.log(total1);


// let priceOfProduct =Number( prompt("enter the product price"));
// let discountPercentage = 15;
// let discountAmount = (discountPercentage /100)* priceOfProduct;
// let finallPrice = priceOfProduct - discountAmount;
// alert(`final discount price is ${finalPrice}`);

// ...................if else condition

let bill = Number(prompt("enter your bill"));
let discount = 0;
if(bill > 5000){
    discount = 15;
}
else{
   discount = 10;
}
let discounttAmount= (discount/100)*bill;
let finlaBill = bill - discounttAmount;
console.log(finlaBill);









