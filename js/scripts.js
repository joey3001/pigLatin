$(document).ready(function()  {
  $("form#numberForm").submit(function(event) {
    event.preventDefault();
    
    let arrayNums = [5, 10, 15, 20, 25, 30, 35, 40]
    //let arrayNums = $("#inputBox").val();
    let arrayNums1 = arrayNums.map(function(element)  {
      return element + 1;
    });
    console.log(arrayNums1);
  });
});