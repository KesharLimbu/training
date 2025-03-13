const personalDetails = [
    {fname: "Gita", lname: "Ale"},
    {fname: "Keshar", lname: "Limbu"}, 
    {fname: "Dil Kumari", lname: "Limbu"}
]
console.log(personalDetails);
const sortedProducts = personalDetails.sort((a, b)=>{
    return a.fname > b.fname ? 1 : a.fname < b.fname ? -1 : 0;  
});

console.log("Sorted Products:", sortedProducts);

const filteredText = personalDetails.filter(text=> text.lname=="Ale");
console.log("Filtered Text:", filteredText);