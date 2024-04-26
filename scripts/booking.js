/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, 
//and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
cost_per_day = 35;
number_of_days = 0;
let calculated_cost = document.getElementById('calculated-cost');
let monday = document.getElementById("monday");
let tuesday = document.getElementById("tuesday");
let wednesday = document.getElementById("wednesday");
let thursday = document.getElementById("thursday");
let friday = document.getElementById("friday");
let full = document.getElementById('full');
let half = document.getElementById('half');
let clear_button = document.getElementById('clear-button');

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element,'
// and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once.
// hint: .classList.contains() might be helpful here!
// Add event listeners to the day elements
monday.addEventListener("click", toggleDay);
tuesday.addEventListener("click", toggleDay);
wednesday.addEventListener("click", toggleDay);
thursday.addEventListener("click", toggleDay);
friday.addEventListener("click", toggleDay);

function toggleDay(event) {
    let day = event.target;
    day.classList.toggle("clicked");
    if (day.classList.contains("clicked")) {
        number_of_days++;
    } else {
        number_of_days--;
    }
    calculate_cost();
}


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, 
// any other relevant variables are reset, and the calculated cost is set to 0.

clear_button.addEventListener('click', function clearAll(event) {
    monday.classList.remove('clicked');
    tuesday.classList.remove('clicked');
    wednesday.classList.remove('clicked');
    thursday.classList.remove('clicked');
    friday.classList.remove('clicked');
    numberOfDays = 0;
    calculated_cost.innerHTML = "0";
    half.classList.remove('clicked');
    full.classList.add('clicked');
});


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, 
//add the "clicked" class to the "half" element,
// remove it from the "full" element, and recalculate the total cost.
half.addEventListener('click', function halfday(event) {
    cost_per_day = 20;
    half.classList.add('clicked');
    full.classList.remove('clicked');
    calculate_cost();
});



// when the full-day button is clicked, the daily rate is set back to $35,
// the clicked class is added to "full" and removed from "half", 
// and the total cost is recalculated.
full.addEventListener('click', function fullday(event) {
    cost_per_day = 35;
    full.classList.add('clicked');
    half.classList.remove('clicked');
    calculate_cost();
});




/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function calculate_cost() {
    calculated_cost.textContent = number_of_days * cost_per_day;
}
