const addCardEl = document.getElementById('add-card');
if(addCardEl != null){
  addCardEl.addEventListener('click', ()=> {
    window.location.replace("/add");
  });
}

const deleteButton = document.getElementsByClassName("deleteButton");




$('#playlist').on("click", '.deleteButton', function(e){
  // const videoName = e.path[2].children[2].innerText;
  const urlArray = window.location.href.split("/");
  const roomId = urlArray[urlArray.length - 1];
  e.preventDefault();
  const item = $(this).parents('.item')
  const videoId = e.target.dataset.videoId;
  console.log(e.target)
  console.log(videoId)

  $.ajax({
    method: 'DELETE',
    url: `/rooms/${roomId}/${videoId}`,
    success: function(data) {
      console.log("yes")
      item.remove();
    },
      error: function(data){
        console.log("error")
      }
  });
})


$(document).ready(function(){

})
