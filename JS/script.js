const bill=document.getElementById("bill");
const tipSlider = document.getElementById('tip');
const tipValue = document.getElementById('tipValue');

const peopleSlider = document.getElementById('numpeople');
const peopleValue = document.getElementById('peopleValue');

tipSlider.addEventListener('input', function () {
  tipValue.textContent = `${tipSlider.value}%`; // Update value dynamically
});

peopleSlider.addEventListener('input', function () {
  peopleValue.textContent = `${peopleSlider.value}`; // Update dynamically
});

function ACFun(){
  location.reload();
} 

window.onload = function () {
  bill.value="";
  tipSlider.value = 0; 
  tipValue.textContent = ""; 
  peopleSlider.value = 1; 
  peopleValue.textContent = ""; 
};

function calculateTip() {
  const input1 = document.getElementById("bill");
  const billAmount = parseFloat(input1.value);
  const tipValue1 = parseFloat(tipSlider.value); 
  const numPeople = parseInt(peopleSlider.value); 

  // Validate inputs
  if (isNaN(billAmount) || billAmount <= 0) {
    alert("Please enter a valid bill amount!");
    return;
  }

  const tipAmount = (billAmount * tipValue1) / 100; 
  const totalBill = billAmount + tipAmount; 
  const amountPerPerson = totalBill / numPeople; 

  document.getElementById("tipAmount").innerHTML = `$${tipAmount.toFixed(2)}`;
  document.getElementById("total").innerHTML = `$${totalBill.toFixed(2)}`;
  document.getElementById("person").innerHTML = `$${amountPerPerson.toFixed(2)}`;
}
