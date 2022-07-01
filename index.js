let obj = {
    water: "$130",
    Bread: "$230",
    Tv: "$400",
    Fertitlizer: "$200",
    Phone: "$350",
    Notebook: "$730",
}
function userZakaz(obj, money){
const newArr = []
const objValues = Object.values(obj)
const objKeys = Object.keys(obj)
objValues.forEach((index,item) => {
    if(index.split("$")[1] < money.split("$")[1]){
        newArr.push(objKeys[item])
    }
}

)
     return newArr
}


const newArr = userZakaz(obj, "$300")
console.log(newArr);