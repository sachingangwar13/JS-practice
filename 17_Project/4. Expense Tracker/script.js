document.addEventListener('DOMContentLoaded' ,() => {
    const expenseForm = document.getElementById("expense-form");
    const expenseNameInput = document.getElementById("expense-name");
    const expenseAmountInput = document.getElementById("expense-amount");
    const expenseList = document.getElementById("expense-list");
    const totalAmountDisplay = document.getElementById("total-amount");

    let expenses = JSON.parse(localStorage.getItem('expenses'))  || [];
    let totalAmount = 0;
    renderExpense();

    expenseForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = expenseNameInput.value.trim();
        const amount = parseFloat(expenseAmountInput.value.trim());

        if(name !== "" && !isNaN(amount) && amount > 0){
            const newExpense = {
                id : Date.now(),
                name:name,
                amount :amount,
            };

            expenses.push(newExpense);
            console.log(newExpense);
            saveToLocalStorage();
            updateTotal();
            renderExpense();

            expenseNameInput.value="";
            expenseAmountInput.value="";
        }
     
    });

    
    function calculateAmount(){
        let ans = expenses.reduce((sum , expense) => sum + expense.amount, 0);
        console.log(ans);
        
        return ans;
        
    }

    function saveToLocalStorage(){
        localStorage.setItem('expenses' , JSON.stringify(expenses));
    }

    function updateTotal(){
        totalAmount = calculateAmount();
        console.log(totalAmount);
        
        totalAmountDisplay.textContent = totalAmount.toFixed(2);
    }

    function renderExpense(){
        expenseList.innerHTML="";
        expenses.forEach((expense) => {
            const listElement = document.createElement('li');
            listElement.innerHTML = `
                ${expense.name} - $${expense.amount}
                <button data-id ="${expense.id}">Delete</button>
            `;
            expenseList.appendChild(listElement);
        });
    }

    expenseList.addEventListener('click' , (e) =>{
        if(e.target.tagName === 'BUTTON'){
            const expenseId = parseInt(e.target.getAttribute('data-id'));
            expenses = expenses.filter(expense => expense.id !== expenseId);
            
            saveToLocalStorage();
            renderExpense();
            updateTotal();
        }
    })
})