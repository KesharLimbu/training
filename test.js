const personalDetails = [
{
    fname: "Keshar", lname: "Limbu"}, 
    {fname: "Gita", lname: "Ale"}
]

    
    

console.log(personalDetails);

const sortedProducts = personalDetails.sort((a, b)=>{
    return a.lname > b.lname ? 1 : a.lname < b.lname ? -1 : 0;  
});

console.log(sortedProducts);