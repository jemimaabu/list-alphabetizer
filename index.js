var listInput = document.getElementById("list-input");
var sortedList = document.getElementById("sorted-list");

function listSort() {
    var input = listInput.value;
    var inputArray = input.split(/\n/g);
    sortedList.innerHTML = inputArray.sort().join("<br />");
    console.log(inputArray)
}