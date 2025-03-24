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