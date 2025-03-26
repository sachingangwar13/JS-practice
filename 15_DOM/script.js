// task 1
document.getElementById("changeTextButton").addEventListener('click',function(){
    document.getElementById("paragraph").textContent = "The paragraph is Changed";
})

// task 2
document.getElementById("highlighFirstCity").addEventListener('click', function(){
    let cityList = document.getElementById("citiesList");
    // console.log(cityList);

    cityList.firstElementChild.classList.add("highlight");
    
})

// task 3
document.getElementById("changeOrder").addEventListener('click' , function(){
    let coffeeType = document.getElementById("cofeeType");
    coffeeType.textContent = "expresso";
    coffeeType.style.backgroundColor ="brown"
})

// task 4
document.getElementById("addNewItem").addEventListener('click',function(){
    let newListItem = document.createElement('li');
    newListItem.textContent = "Eggs";

    let itemList = document.getElementById("shoppingList");
    itemList.appendChild(newListItem);
})

// task 5
document.getElementById("removeLastTask").addEventListener('click',function(){
    let taskList = document.getElementById("taskList");
    console.log(taskList);

    taskList.lastElementChild.remove();
})

//task 6
document.getElementById("clickMeButton").addEventListener('click' ,function(){
    document.getElementById("clickMeButton").classList.add("highlight");
})

// task 7
document.getElementById("teaList").addEventListener('click' , function(event){
    // console.log(event.target);
    // event.target.classList.add("highlight");

    alert(`you have clicked ${event.target.textContent}`);
})

// task 8
document.getElementById("feedbackForm").addEventListener('submit', function(event){
    event.preventDefault(); // prevents the form from submitting
    let feedback = document.getElementById("feedbackInput").value;  // get the value of the input
    document.getElementById("feedbackDisplay").textContent = `feedback is: ${feedback}`;
})

// task 9
document.addEventListener('DOMContentLoaded',function(){
    document.getElementById("domStatus").textContent = "DOM is fully loaded...";
})

// task 10
document.getElementById("toggleHighlight").addEventListener('click',function(){
    let descriptionText = document.getElementById("descriptionText");
    descriptionText.classList.toggle("highlight");
})