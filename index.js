var listInput = document.getElementById("list-input");
var sortedList = document.getElementById("sorted-list");
var listInput = document.getElementById("list-input");
var separateBy;
var displayBy;
var sortUsing;
var sortOrder;

function seperateMethod() {

}

function displayMethod() {

}

function sortUsingMethod() {

}

function sortOrderMethod() {
    
}

function listSort() {
    var input = listInput.value;
    var inputArray = input.split(/\n/g);
    sortedList.innerHTML = inputArray.filter(x => (x !== "")).sort().join("<br />");
    console.log(inputArray)
}
