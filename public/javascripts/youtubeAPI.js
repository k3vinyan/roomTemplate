

//youtubeAPI Request
youtubeAPIRequest = (method, type, part, maxResults, query) => {
  const youtubeLink = "https://www.youtube.com/watch?v="
  const youtubeKey = "AIzaSyCe0L76JiEKzBGrrw1ByQHJKLLMD_e3MHg";
  const BASE_URL = "https://www.googleapis.com/youtube/v3/search?";

  let response = {
    BASE_URL: BASE_URL,
    method,
    type,
    youtubeKey: youtubeKey,
    part,
    maxResults,
    query,
    order: 'relevance'
}
  let getUrl = function(res){
    console.log(`${res.BASE_URL}${res.type}?part=${res.part}&q=$${res.query}&maxResults=${res.maxResults}&order=${res.order}&key=${res.youtubeKey}`);
    return `${res.BASE_URL}${res.type}?part=${res.part}&q=$${res.query}&maxResults=${res.maxResults}&order=${res.order}&key=${res.youtubeKey}`
  }
  getUrl(response);
}

//add Videos(cards) to the DOM
const addCard = (video)=>{
  $('#songs').append(
    `<div class='ui card'>
      <div class='description'><a href='#' id=${video.id.videoId}>ADD VIDEO</a></div>
      <iframe id="player" type="text/html"
        src='http://www.youtube.com/embed/${video.id.videoId}'
      frameborder="0"></iframe>
      <div class='content'>
        <div class='header'>${video.snippet.title}</div>
      </div>
    </div>
    `)
}

//ajax call to YOUTUBE API to search for videos
$('#search-button').click(function(event){
  event.preventDefault();
  const formData = $('#search').serializeArray();;
  $.ajax({
    method: 'GET',
    url: "https://www.googleapis.com/youtube/v3/search?",
    data: {
      part: "snippet",
      q: formData[0].value,
      maxResults: 8,
      order: 'relevance',
      key: "AIzaSyCe0L76JiEKzBGrrw1ByQHJKLLMD_e3MHg"
    },
    success: function( data ) {
      const videos = data.items;
      const tumbnail =
      $("#songs").html("");
      for(let i = 0; i < videos.length; i++){
        addCard(videos[i])
      }
    }
  });
})

//function to add songs to playlist
const addSongs = (song)=> {
  $('#playlist').append(
    `<div class='ui card'>
      <div class='description'>${song}</div>
    </div>
  `)
}

//ajax call to add video to playlist
const el = document.getElementById("songs");
if(el){
  el.addEventListener("click", function(e){
    e.preventDefault();
    const videoName = e.path[2].children[2].innerText;
    const urlArray = window.location.href.split("/");
    const roomId = urlArray[urlArray.length - 1];
    const videoId = e.target.id;
    $.ajax({
      method: 'POST',
      url: `/rooms/${roomId}/${videoId}`,
      data: {
        roomId,
        videoName,
        videoId
      },
      success: function(data){
        console.log("Success: " + data)
        addSongs(data)
      }, error: function(data){
        console.log("error: " + data)
      }
    })
  })
}
