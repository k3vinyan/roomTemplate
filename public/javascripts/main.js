const addCardEl = document.getElementById('add-card');
if(addCardEl != null){
  addCardEl.addEventListener('click', ()=> {
    window.location.replace("/add");
  });
}
