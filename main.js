const daySelector = document.getElementById('day-selector');

daySelector.addEventListener('change',()=>{
  setDay(Number(daySelector));
});
