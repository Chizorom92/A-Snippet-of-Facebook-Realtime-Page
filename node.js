// Write a javascript function that accepts an array and then return the last element in the array

// ["Mango", "Apple", "Banana"] => Banana
// ["Benjamin", "Daniel", "Grace", "Joshua"] => Joshua

function findArray(arr) {
  const lengthArr = arr.length;
  const indexLastItem = lengthArr - 2;

  

  // console.log(arr[indexLastItem]);
  console.log(arr[1])  
}

findArray(["Mango", "Apple", "Banana"]);
findArray(["Benjamin", "Daniel", "Grace", "Joshua"]);
findArray([1, 2, 3, 4, 5, 6, 7]);














const newChage = document.querySelector("#timer");

const dmain = document.getElementById("body")

dmain.addEventListener("mouseover", () => {
  const period = new Date().getHours;
  const day = new Date().getDate()
  // const month = new Date().getUTCMonth(3)

const time = new Date()

const tim = `${time.getHours()}:${time.getMinutes()}`

if (period < 12) {
  newChage.innerHTML = `April ${day} at ${tim} AM <i class="fa-solid fa-earth-africa"></i>` 

} else { 
   newChage.innerHTML = `April ${day} at ${tim} PM <i class="fa-solid fa-earth-africa"></i>` 

}


  })

  
