//IMPORTANT NOTES
 //percentage8 refers to the added custom budget item's percentage
//text8 is the label for the added custom budget and it's gotten from span tag's inner text

//NEW JQUERY ADDITIONS

$(() => {
    $('body#index').hide()

    $('button').hide()

    $('a.btn').hide()

    $('body#index').slideDown('fast');

    $('button').slideDown('fast');

    $('a.btn').slideDown('fast');

    
    //for custom budget page
    
//    add field button
    $('#addField').click(() => {
$('#container').append('<div class="row"><div class="col-12"><div class=""><span class="label" id="added"> Custom:</span> <input type="number" min="0" class="pull-right expInput0" placeholder="0" id="addedInput"></div></div></div>')
        
        $('#addField').hide();
        
        $('span#added').on('click', ()=>{
            $('body').append('<div class="middle0"><div class="text-center"><h4>Edit Budget Item</h4><input id="expenditureTitle0" type="text" placeholder="Enter Label Name"></div><button class="btn btn-md btn-primary ok-button" id="okButton0">Accept</button><button class="btn btn-md btn-default pull-right cancel-button" id="cancel0">Cancel</button></div>');
        $('div.middle0').hide();
        $('div.middle0').show('fast');
        $('input#expenditureTitle0').focus();
            
        })
        
        $(document).on('click','#okButton0', ()=> {
//        stores custom budget label in variable
        customVal0 = $('#expenditureTitle0').val();
        customVal0 += ":";
        $('span#added').text(customVal0);

//        removing the created elements from the DOM to enable the newly entered value to be collected after the first time cos the elements with same ID will be duplicated in the DOM and values will not be collected
        $('#expenditureTitle0').remove();
        $('#okButton0').remove();
        $('div.middle0').remove();
        
        });
//end of okButton
        
        //        start of cancel button
        $(document).on('click','#cancel0', ()=> {

//        removing the created elements from the DOM
        $('#expenditureTitle0').remove();
        $('#okButton0').remove();
        $('div.middle0').remove();
        
        
    });
//end of cancel button
        
    });
//    end of add field button

    
//    reset button simply reloads the page
  $('#reset').click((e)=>{
      location.reload();
      event.stopPropagation;
  })
//    end of reset button
    
    
//    CUSTOMIZE FUNCTIONS
    //expenditure title refers to the input field that takes custom budget names or labels
    
//    first.click
//  initial .hide() method helps to make the animations work flawlessly
    
    $('span#first').on('click', ()=>{

        $('body').append('<div class="middle1"><div class="text-center"><h4>Edit Budget Item</h4><input id="expenditureTitle1" type="text" placeholder="Enter Label Name"></div><button class="btn btn-md btn-primary ok-button" id="okButton1">Accept</button><button class="btn btn-md btn-default pull-right cancel-button" id="cancel1">Cancel</button></div>');
        $('div.middle1').hide();
        $('div.middle1').show('fast');
        $('input#expenditureTitle1').focus();
        
        $('div.middle1').on('click','#okButton1', ()=> {
//        stores custom budget label in variable
        customVal1 = $('#expenditureTitle1').val();
        customVal1 += ":";
        $('span#first').text(customVal1);

//        removing the created elements from the DOM to enable the newly entered value to be collected after the first time cos the elements with same ID will be duplicated in the DOM and values will not be collected
        $('#expenditureTitle1').remove();
        $('#okButton1').remove();
        $('div.middle1').remove();
        
        
    });
//end of okButton
        
//        start of cancel button
        $('div.middle1').on('click','#cancel1', ()=> {

//        removing the created elements from the DOM
        $('#expenditureTitle1').remove();
        $('#okButton1').remove();
        $('div.middle1').remove();
        
        
    });
//end of cancel button
        
    })
// end of first.click
    
//    second click
    $('span#second').click(()=>{
        $('body').append('<div class="middle2"><div class="text-center"><h4>Edit Budget Item</h4><input id="expenditureTitle2" type="text" placeholder="Enter Label Name"></div><button class="btn btn-md btn-primary ok-button" id="okButton2">Accept</button><button class="btn btn-md btn-default pull-right cancel-button" id="cancel2">Cancel</button></div>');
        $('div.middle2').hide();
        $('div.middle2').show('fast');
//setting focus on the input field so that user can  start typing immediately without tapping on input field
        $('input#expenditureTitle2').focus();
        
        $('div.middle2').on('click','#okButton2', ()=> {
//        stores custom budget label in variable
        customVal2 = $('#expenditureTitle2').val();
        customVal2 += ":";
        $('span#second').text(customVal2);

//        removing the created elements from the DOM to enable the newly entered value to be collected after the first time cos the elements with same ID will be duplicated in the DOM and values will not be collected
        $('#expenditureTitle2').remove();
        $('#okButton2').remove();
        $('div.middle2').remove();

    })
//end of okButton
        
        //start of cancel button
        $('div.middle2').on('click','#cancel2', ()=> {

//        removing the created elements from the DOM
        $('#expenditureTitle2').remove();
        $('#okButton2').remove();
        $('div.middle2').remove();
        
        
    });
//end of cancel button
        
    })
//    end of second.click

    $('span#third').click(()=>{
        $('body').append('<div class="middle3"><div class="text-center"><h4>Edit Budget Item</h4><input id="expenditureTitle3" type="text" placeholder="Enter Label Name"></div><button class="btn btn-md btn-primary ok-button" id="okButton3">Accept</button><button class="btn btn-md btn-default pull-right cancel-button" id="cancel3">Cancel</button></div>');
        $('div.middle3').hide();
        $('div.middle3').show('fast');
        //setting focus on the input field so that user can  start typing immediately without tapping on input field
        $('input#expenditureTitle3').focus();
        
        $('div.middle3').on('click','#okButton3', ()=> {
//        stores custom budget label in variable
        customVal3 = $('#expenditureTitle3').val();
        customVal3 += ":";
        $('span#third').text(customVal3);

//        removing the created elements from the DOM to enable the newly entered value to be collected after the first time cos the elements with same ID will be duplicated in the DOM and values will not be collected
        $('#expenditureTitle3').remove();
        $('#okButton3').remove();
        $('div.middle3').remove();
    })
    
//end of okButton
    
    
    //start of cancel button
        $('div.middle3').on('click','#cancel3', ()=> {

//        removing the created elements from the DOM
        $('#expenditureTitle3').remove();
        $('#okButton3').remove();
        $('div.middle3').remove();
        
        
    });
//end of cancel button
  })  
//    end of third.click

    $('span#fourth').click(()=>{
        $('body').append('<div class="middle4"><div class="text-center"><h4>Edit Budget Item</h4><input id="expenditureTitle4" type="text" placeholder="Enter Label Name"></div><button class="btn btn-md btn-primary ok-button" id="okButton4">Accept</button><button class="btn btn-md btn-default pull-right cancel-button" id="cancel4">Cancel</button></div>');
        $('div.middle4').hide();
        $('div.middle4').show('fast');
        //setting focus on the input field so that user can  start typing immediately without tapping on input field
        $('input#expenditureTitle4').focus();
        
        $('div.middle4').on('click','#okButton4', ()=> {
//        stores custom budget label in variable
        customVal4 = $('#expenditureTitle4').val();
        customVal4 += ":";
        $('span#fourth').text(customVal4);

//        removing the created elements from the DOM to enable the newly entered value to be collected after the first time cos the elements with same ID will be duplicated in the DOM and values will not be collected
        $('#expenditureTitle4').remove();
        $('#okButton4').remove();
        $('div.middle4').remove();
    })
    
//end of okButton
        
        //start of cancel button
        $('div.middle4').on('click','#cancel4', ()=> {

//        removing the created elements from the DOM
        $('#expenditureTitle4').remove();
        $('#okButton4').remove();
        $('div.middle4').remove();
        
        
    });
//end of cancel button
        
    })
//    end of fourth.click

    $('span#fifth').click(()=>{
        $('body').append('<div class="middle5"><div class="text-center"><h4>Edit Budget Item</h4><input id="expenditureTitle5" type="text" placeholder="Enter Label Name"></div><button class="btn btn-md btn-primary ok-button" id="okButton5">Accept</button><button class="btn btn-md btn-default pull-right cancel-button" id="cancel5">Cancel</button></div>');
        $('div.middle5').hide();
        $('div.middle5').show('fast');
        //setting focus on the input field so that user can  start typing immediately without tapping on input field
        $('input#expenditureTitle5').focus();
        
        $('div.middle5').on('click','#okButton5', ()=> {
//        stores custom budget label in variable
        customVal5 = $('#expenditureTitle5').val();
        customVal5 += ":";
        $('span#fifth').text(customVal5);

//        removing the created elements from the DOM to enable the newly entered value to be collected after the first time cos the elements with same ID will be duplicated in the DOM and values will not be collected
        $('#expenditureTitle5').remove();
        $('#okButton5').remove();
        $('div.middle5').remove();
   
    })
    
//end of okButton
        
        //start of cancel button
        $('div.middle5').on('click','#cancel5', ()=> {

//        removing the created elements from the DOM
        $('#expenditureTitle5').remove();
        $('#okButton5').remove();
        $('div.middle5').remove();
        
        
    });
//end of cancel button
        
    })
//    end of fifth.click

//    sixth.click
    $('span#sixth').click(()=>{
        $('body').append('<div class="middle6"><div class="text-center"><h4>Edit Budget Item</h4><input id="expenditureTitle6" type="text" placeholder="Enter Label Name"></div><button class="btn btn-md btn-primary ok-button" id="okButton6">Accept</button><button class="btn btn-md btn-default pull-right cancel-button" id="cancel6">Cancel</button></div>');
        $('div.middle6').hide();
        $('div.middle6').show('fast');
        //setting focus on the input field so that user can  start typing immediately without tapping on input field
        $('input#expenditureTitle6').focus();
        
        $('div.middle6').on('click','#okButton6', ()=> {
//        stores custom budget label in variable
        customVal6 = $('#expenditureTitle6').val();
        customVal6 += ":";
        $('span#sixth').text(customVal6);

//        removing the created elements from the DOM to enable the newly entered value to be collected after the first time cos the elements with same ID will be duplicated in the DOM and values will not be collected
        $('#expenditureTitle6').remove();
        $('#okButton6').remove();
        $('div.middle6').remove();
    })
//end of okButton
        
        //start of cancel button
        $('div.middle6').on('click','#cancel6', ()=> {

//        removing the created elements from the DOM
        $('#expenditureTitle6').remove();
        $('#okButton6').remove();
        $('div.middle6').remove();
        
        
    });
//end of cancel button
        
    })
//    end of sixth.click

//    seventh.click
    $('span#seventh').click(()=>{
        $('body').append('<div class="middle7"><div class="text-center"><h4>Edit Budget Item</h4><input id="expenditureTitle7" type="text" placeholder="Enter Label Name"></div><button class="btn btn-md btn-primary ok-button" id="okButton7">Accept</button><button class="btn btn-md btn-default pull-right cancel-button" id="cancel7">Cancel</button></div>');
        $('div.middle7').hide();
        $('div.middle7').show('fast');
        //setting focus on the input field so that user can  start typing immediately without tapping on input field
        $('input#expenditureTitle7').focus();
        
        $('div.middle7').on('click','#okButton7', ()=> {
//        stores custom budget label in variable
        customVal7 = $('#expenditureTitle7').val();
        customVal7 += ":";
        $('span#seventh').text(customVal7);

//        removing the created elements from the DOM to enable the newly entered value to be collected after the first time cos the elements with same ID will be duplicated in the DOM and values will not be collected
        $('#expenditureTitle7').remove();
        $('#okButton7').remove();
        $('div.middle7').remove();

    })
    //end of okButton
        
        //start of cancel button
        $('div.middle7').on('click','#cancel7', ()=> {

//        removing the created elements from the DOM
        $('#expenditureTitle7').remove();
        $('#okButton7').remove();
        $('div.middle7').remove();
        
        
    });
//end of cancel button
        
    })
    //    end of seventh.click
    
    
//    TERNARY OPERATORS
//    Determines whether the budget report uses a default/user value
    
//(function(){
//    Ternary1 = (customVal1 == undefined )? "Food:": customVal1;

//    })();
    

});
//end of jQuery



//triggered by the compute budget button
function computeb() {
    
//    stores the expenditure input labels to variables ie span text 
    let text1 =  $('span#first').text();
    let text2 =  $('span#second').text();
    let text3 =  $('span#third').text();
    let text4 =  $('span#fourth').text();
    let text5 =  $('span#fifth').text();
    let text6 =  $('span#sixth').text();
    let text7 =  $('span#seventh').text();
    
//    text8 is the label for the added custom budget 
    if($('span#added').length == 0 && $('#expInput0').length == 0){
    text8 = "Custom budget item not added";
        expInput2num0 = 0;

        }else {
            expInput0 = $('.expInput0').val();
            //    the below converts expenditure value to number
            expInput2num0 = Number(expInput0);
            text8 = $('span#added').text(); 
        }      
    
    
    
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
    let totalExpenses = expInput2num + expInput2num2 + expInput2num3 + expInput2num4 + expInput2num5 + expInput2num6 + expInput2num7 + expInput2num0;

    //    sum of expenses and savings to give overall expenses
    let totalExpenses2 = totalExpenses + savings2num;
    //    end of sum


    //    differences

    //    difference between income, savings and total expenses to get leftover income
    let leftOver = income2num - savings2num - totalExpenses;
    //    end of differences

    //    converts leftOver to positive number to be used for the 'additional sum' needed in an error report if income is not enough
    let leftOver2positive = Math.abs(leftOver);


    //Calculate percentage 

    //    percentage of savings
    let savingsPercentage = savings2num / income2num * 100;
    //    converting the value to string and removing excess decimals
    savingsPercentage = String(savingsPercentage);
    savingsPercentage = savingsPercentage.slice(0, 5);
    //    formular: expenditure amt/income * 100
    let percentage = expInput2num / income2num * 100;
    //    converting the value to string and removing excess decimals
    percentage = String(percentage);
    percentage = percentage.slice(0, 5);

    let percentage2 = expInput2num2 / income2num * 100;
    //    converting the value to string and removing excess decimals
    percentage2 = String(percentage2);
    percentage2 = percentage2.slice(0, 5);

    let percentage3 = expInput2num3 / income2num * 100;
    //    converting the value to string and removing excess decimals
    percentage3 = String(percentage3);
    percentage3 = percentage3.slice(0, 5);

    let percentage4 = expInput2num4 / income2num * 100;
    //    converting the value to string and removing excess decimals
    percentage4 = String(percentage4);
    percentage4 = percentage4.slice(0, 5);

    let percentage5 = expInput2num5 / income2num * 100;
    //    converting the value to string and removing excess decimals
    percentage5 = String(percentage5);
    percentage5 = percentage5.slice(0, 5);

    let percentage6 = expInput2num6 / income2num * 100;
    //    converting the value to string and removing excess decimals
    percentage6 = String(percentage6);
    percentage6 = percentage6.slice(0, 5);

    let percentage7 = expInput2num7 / income2num * 100;
    //    converting the value to string and removing excess decimals
    percentage7 = String(percentage7);
    percentage7 = percentage7.slice(0, 5);
    
//        percentage8 refers to the added custom budget item's percentage
    let percentage8 = expInput2num0 / income2num * 100;
    //    converting the value to string and removing excess decimals
    percentage8 = String(percentage8);
    percentage8 = percentage2.slice(0, 5);

    let totalPercentage = Number(percentage) + Number(percentage2) + Number(percentage3) + Number(percentage4) + Number(percentage5) + Number(percentage6) + Number(percentage7) + Number(percentage8);
    //    converting the value to string and removing excess decimals
    totalPercentage = String(totalPercentage);
    totalPercentage = totalPercentage.slice(0, 5);

    //    percentage of overall expenses
    let overallPercentage = totalExpenses2 / income2num * 100;
    //    converting the value to string and removing excess decimals
    overallPercentage = String(overallPercentage);
    overallPercentage = overallPercentage.slice(0, 5);

    let leftOverPercentage = leftOver / income2num * 100;
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
        budgetBody.innerHTML = "<b>" + "TOTAL INCOME: " + "#" + income2num + "<br>" + "Savings: " + "#" + savings2num + " " + "(" + savingsPercentage + "%" + xx + ")" + "<br>" + "<br>" + "EXPENDITURES" + "<br>" + "<br>" + text1 +" " + "#" + expInput2num + " " + "(" + percentage + "%" + xx + ")" + "<br>" + text2 + " " + "#" + expInput2num2 + " " + "(" + percentage2 + "%" + xx + ")" + "<br>" + text3 + " " + "#" + expInput2num3 + " " + "(" + percentage3 + "%" + xx + ")" + "<br>" +  text4 + " " + "#" + expInput2num4 + " " + "(" + percentage4 + "%" + xx + ")" + "<br>" + text5 + " " + "#" + expInput2num5 + " " + "(" + percentage5 + "%" + xx + ")" + "<br>" + text6 + " " + "#" + expInput2num6 + " " + "(" + percentage6 + "%" + xx + ")" + "<br>" + text7 + " " + "#" + expInput2num7 + " " + "(" + percentage7 + "%" + xx + ")" + "<br>" + text8 + " " + "#" + expInput2num0 + " " + "(" + percentage8 + "%" + xx + ")" + "<br>" + "Total Expenditure: " + "#" + totalExpenses + " " + "(" + totalPercentage + "%" + xx + ")" + "<br>" + "Overall Total(including savings): " + "#" + totalExpenses2 + " " + "(" + overallPercentage + "%" + xx + ")" + "<br>" + "<br>" + "Leftover Income: " + "#" + leftOver + " " + "(" + leftOverPercentage + "%" + xx + ")";

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

        // selects the share button inside history view and hides it 
        document.getElementById("shareH").classList.add("sharebut");

        // selects the clear button inside history view and hides it 
        document.getElementById("clearH").classList.add("sharebut");
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