//sqaure the elemenst of an array using map function 

/*const nums = [1,2,3,4,5,6]
const map2 = nums.map((x)=> x**2)
console.log(map2)
*/
// forst letter of each string is capatalized

const names = ["hello", "hey", "bye"]
const names2 = names.map((x) => {  
   return   x[0].toUpperCase() + x.slice(1)
}
)
console.log(names2)

 const s = ["hello", "hey", "bye"]
 const y = s.map((x)=> `<p>${x}</p>`)
 console.log(y)