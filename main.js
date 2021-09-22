/*


Author: Owen Parker


*/





// Future-proofing at it's best :D
const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']



const dayCount = 7;
const blockCount = 6; // Per day


// Tuesday or thursday
let today = new Date();
if (today.getDay() == 2 || today.getDay() == 4) {
  const advisoryDay = true;
} else {
  const advisoryDay = false;
};



// Generate the day selector options
let d = document.getElementById('day-selector');
for (let i = 1; i <= dayCount; i++) {
  let o = document.createElement('option');
  o.value = i;
  o.innerHTML = 'Day ' + i;
  d.appendChild(o);
};




function clearElement(e) {
  e.innerHTML = '';
};


// Redraws nonstatic elements
function redraw() {


  // Generate all six blocks in the "all-blocks" table
  let e = document.getElementById('all-blocks');
  clearElement(e);
  for (let i = 0; i < dayCount; i++) {
    
    // Make elements
    let row = document.createElement('tr');
    let block = document.createElement('td');
    let time = document.createElement('td');

    
    // Fill them in
    block.innerHTML = 'Block ' + alphabet[i];

    time.id = 'time-left-block-' + alphabet[i].toLowerCase();
    time.innerHTML = '--:--';

    (i%2) ? row.classList=['even-row'] : row.classList=['odd-row'];


    // And put 'em together!
    row.appendChild(block);
    row.appendChild(time);
    e.appendChild(row);
  };

};



const daySelector = document.getElementById('day-selector');

daySelector.addEventListener('change',()=>{
  setDay(Number(daySelector));
});

// This should not be updated directly, as setDay() updates screen info
var currentDay = -1;

// Changes the day and updates relevant screen info
function setDay() {

};

// Update function every second
setInterval(()=>{
  
},1000);
