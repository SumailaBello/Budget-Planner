//NEW JQUERY ADDITIONS

$(() => {
    $('body#index').hide()

    $('button').hide()

    $('a.btn').hide()

    $('body#index').slideDown('fast');

    $('button').slideDown('fast');

    $('a.btn').slideDown('fast');
     
    

});
//end of jQuery

//triggered by the compute budget button
function computeb() {
    const date = new Date();
    //    gets value of total income input
    var income = document.getElementById("incomeinput").value;

    //    the below converts income value to number
    income2num = Number(income);


    //    gets the value of savings input field
    savings = document.getElementById("savings").value;

    //    the below converts savings value to number
    savings2num = Number(savings);


    //    selects individual expenditure input tags and gets their value

    //    food
    expInput = document.getElementById("food").value;

    //    converts expInput to number
    expInput2num = Number(expInput);

    //    clothing
    expInput2 = document.getElementById("clothing").value;

    //    converts expInput2 to number
    expInput2num2 = Number(expInput2);

    //    shelter
    expInput3 = document.getElementById("shelter").value;

    //    converts expInput3 to number 
    expInput2num3 = Number(expInput3);

    //    transportation
    expInput4 = document.getElementById("transportation").value;

    //    converts expInput4 to number
    expInput2num4 = Number(expInput4);

    //    electricity
    expInput5 = document.getElementById("electricity").value;

    //    converts expInput5 to number
    expInput2num5 = Number(expInput5);

    //    water
    expInput6 = document.getElementById("water").value;

    //    converts expInput6 to number
    expInput2num6 = Number(expInput6);


    //    miscellaneous
    expInput7 = document.getElementById("miscellaneous").value;

    //    converts expInput7 to number
    expInput2num7 = Number(expInput7);

    //    END OF VALUE COLLECTION AND CONVERSION



    //    CALCULATIONS

    //    sum of all expenses
    var totalExpenses = expInput2num + expInput2num2 + expInput2num3 + expInput2num4 + expInput2num5 + expInput2num6 + expInput2num7;

    //    sum of expenses and savings to give overall expenses
    var totalExpenses2 = totalExpenses + savings2num;
    //    end of sum


    //    differences

    //    difference between income, savings and total expenses to get leftover income
    var leftOver = income2num - savings2num - totalExpenses;
    //    end of differences

    //    converts leftOver to positive number to be used for the 'additional sum' needed in an error report if income is not enough
    var leftOver2positive = Math.abs(leftOver);


    //Calculate percentage 

    //    percentage of savings
    var savingsPercentage = savings2num / income2num * 100;
    //    converting the value to string and removing excess decimals
    savingsPercentage = String(savingsPercentage);
    savingsPercentage = savingsPercentage.slice(0, 5);
    //    formular: expenditure amt/income * 100
    var percentage = expInput2num / income2num * 100;
    //    converting the value to string and removing excess decimals
    percentage = String(percentage);
    percentage = percentage.slice(0, 5);

    var percentage2 = expInput2num2 / income2num * 100;
    //    converting the value to string and removing excess decimals
    percentage2 = String(percentage2);
    percentage2 = percentage2.slice(0, 5);

    var percentage3 = expInput2num3 / income2num * 100;
    //    converting the value to string and removing excess decimals
    percentage3 = String(percentage3);
    percentage3 = percentage3.slice(0, 5);

    var percentage4 = expInput2num4 / income2num * 100;
    //    converting the value to string and removing excess decimals
    percentage4 = String(percentage4);
    percentage4 = percentage4.slice(0, 5);

    var percentage5 = expInput2num5 / income2num * 100;
    //    converting the value to string and removing excess decimals
    percentage5 = String(percentage5);
    percentage5 = percentage5.slice(0, 5);

    var percentage6 = expInput2num6 / income2num * 100;
    //    converting the value to string and removing excess decimals
    percentage6 = String(percentage6);
    percentage6 = percentage6.slice(0, 5);

    var percentage7 = expInput2num7 / income2num * 100;
    //    converting the value to string and removing excess decimals
    percentage7 = String(percentage7);
    percentage7 = percentage7.slice(0, 5);

    var totalPercentage = Number(percentage) + Number(percentage2) + Number(percentage3) + Number(percentage4) + Number(percentage5) + Number(percentage6) + Number(percentage7);
    //    converting the value to string and removing excess decimals
    totalPercentage = String(totalPercentage);
    totalPercentage = totalPercentage.slice(0, 5);

    //    percentage of overall expenses
    var overallPercentage = totalExpenses2 / income2num * 100;
    //    converting the value to string and removing excess decimals
    overallPercentage = String(overallPercentage);
    overallPercentage = overallPercentage.slice(0, 5);

    var leftOverPercentage = leftOver / income2num * 100;
    //    converting the value to string and removing excess decimals
    leftOverPercentage = String(leftOverPercentage);
    leftOverPercentage = leftOverPercentage.slice(0, 5);

    //    end of percentage calculation

    //    END OF CALCULATIONS


    if (income2num == 0 || savings2num == 0) {


        errorstyle = document.getElementById("modal-bod");
        errorstyle.style.color = "red";

        document.getElementById("modal-bod").innerHTML = "Error: 'Total Income' or 'Savings' field cannot be empty!";

        //        below hides share button on popup modal
        var hideb = document.getElementById("shareb");
        hideb.classList.add("sharebut");

    } else if (expInput2num == 0 && expInput2num2 == 0 && expInput2num3 == 0 && expInput2num4 == 0 && expInput2num5 == 0 && expInput2num6 == 0 && expInput2num7 == 0) {

        errorstyle = document.getElementById("modal-bod");
        errorstyle.style.color = "red";

        document.getElementById("modal-bod").innerHTML = "Error: Expenditure data not given!";

        //below hides share button if expenditure data not given
        document.getElementById("shareb").classList.add("sharebut");

    } else if (leftOver < 0) {

        //sets red color for error message text
        errorstyle = document.getElementById("modal-bod");
        errorstyle.style.color = "red";

        // error message for when income is too low for budget
        document.getElementById("modal-bod").innerHTML = "Error: Not enough income to finance Budget!" + "<br>" + "An additional sum of #" + leftOver2positive + " or more is required.";

        //below hides share button if income is too low for budget
        document.getElementById("shareb").classList.add("sharebut");


    } else {

        let xx = " of total income";

        //changes the modal body text color from red back to default
        modalBodyStyle = document.getElementById("modal-bod");
        modalBodyStyle.style.color = "grey";

        //below makes share button visible again
        document.getElementById("shareb").classList.remove("sharebut");


        //stores the modal heading object in a variable
        budgetHeading = document.getElementById("exampleModalLongTitle");

        //Updates and adds date to budget report heading 
        budgetHeading.innerHTML = "<b>" + "Current Budget:" + " " + date;

        //stores modal body object in a variable
        budgetBody = document.getElementById("modal-bod");

        //updates and posts budget report to modal body
        budgetBody.innerHTML = "<b>" + "TOTAL INCOME: " + "#" + income2num + "<br>" + "Savings: " + "#" + savings2num + " " + "(" + savingsPercentage + "%" + xx + ")" + "<br>" + "<br>" + "EXPENDITURES" + "<br>" + "<br>" + "Food: " + "#" + expInput2num + " " + "(" + percentage + "%" + xx + ")" + "<br>" + "Clothing: " + "#" + expInput2num2 + " " + "(" + percentage2 + "%" + xx + ")" + "<br>" + "Shelter: " + "#" + expInput2num3 + " " + "(" + percentage3 + "%" + xx + ")" + "<br>" + "Transportation: " + "#" + expInput2num4 + " " + "(" + percentage4 + "%" + xx + ")" + "<br>" + "Electricity: " + "#" + expInput2num5 + " " + "(" + percentage5 + "%" + xx + ")" + "<br>" + "Water: " + "#" + expInput2num6 + " " + "(" + percentage6 + "%" + xx + ")" + "<br>" + "Miscellaneous: " + "#" + expInput2num7 + " " + "(" + percentage7 + "%" + xx + ")" + "<br>" + "Total Expenditure: " + "#" + totalExpenses + " " + "(" + totalPercentage + "%" + xx + ")" + "<br>" + "Overall Total(including savings): " + "#" + totalExpenses2 + " " + "(" + overallPercentage + "%" + xx + ")" + "<br>" + "<br>" + "Leftover Income: " + "#" + leftOver + " " + "(" + leftOverPercentage + "%" + xx + ")";

        //below stores budget history
        let historyContent = document.getElementById("modalId");
        let storeHistory = [];
        historyContent.innerHTML += "Date: " + date + "\n" + document.getElementById("modal-bod").innerText + "\n" + "\n";
        storeHistory.push(historyContent.innerText);
        localStorage.setItem("storeHistory", storeHistory);
        

    }

}

// below function is triggered by the view history button and retrieves the local storage item using the key value 
function viewHistory() {

    if (localStorage.getItem("storeHistory") == null) {
        let History = document.getElementById("modalId");
        History.innerText = "";

//        shareM and clearM are both share and clear history buttons in main.html pages
        
        // selects the share button inside history view and hides it 
        document.getElementById("shareH").classList.add("sharebut");
//        document.getElementById("shareM").classList.add("sharebut");

        // selects the clear button inside history view and hides it 
        document.getElementById("clearH").classList.add("sharebut");
//        document.getElementById("clearM").classList.add("sharebut");
    } else {
        let History = document.getElementById("modalId");
        History.innerText = localStorage.getItem("storeHistory");

        //makes clear button visible again by removing the class 
        document.getElementById("clearH").classList.remove("sharebut");
        //makes share button visible again by removing the class 
        document.getElementById("shareH").classList.remove("sharebut");

    }

}

//attaches click event listener to clear history button
document.getElementById("clearButton").addEventListener("click", clearHistory);

function clearHistory() {
    document.getElementById("modalId").innerHTML = "";
    //    History.innerHTML = "";
    localStorage.removeItem("storeHistory");
    //    storeHistory = "";
    alert("Cleared Budget History!");
}

//clears the current budget screen and input fields
function clearCurrent() {
    //the below lines of code selects all the input fields, necessary because tag and class names didn't work
    document.getElementById("incomeinput").value = "";
    document.getElementById("savings").value = "";
    document.getElementById("food").value = "";
    document.getElementById("clothing").value = "";
    document.getElementById("shelter").value = "";
    document.getElementById("transportation").value = "";
    document.getElementById("electricity").value = "";
    document.getElementById("water").value = "";
    document.getElementById("miscellaneous").value = "";

    document.getElementById("modal-bod").innerHTML = "";
    alert("Cleared!");

}

//attaches click event listener to share button inside history view
document.getElementById("shareH").addEventListener("click", shareHistory);

function shareHistory() {
//    checks if history is available
    if (localStorage.getItem("storeHistory") == null) {
        alert("History not available!")
    } else {
        var link = "mailto:example@example.com" +
            "?cc=myCCaddress@example.com" +
            "&subject=" + escape("Budget History") +
            "&body=" + escape(document.getElementById("modalId").innerText);
        window.location.href = link;
    }
}
//attaches click event listener to share button inside current budget view
document.getElementById("shareb").addEventListener("click", shareCurrent);

function shareCurrent() {
    if (document.getElementById("modal-bod").innerText == "Empty!" || document.getElementById("modal-bod").innerText == "") {
        alert("No Budget Created!");
    } else {
        var link = "mailto:example@example.com" +
            "?cc=myCCaddress@example.com" +
            "&subject=" + escape("Current Budget") +
            "&body=" + escape(document.getElementById("modal-bod").innerText);
        window.location.href = link;
    }
}