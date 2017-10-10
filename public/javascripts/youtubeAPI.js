const youtubeLink = "https://www.youtube.com/watch?v="
//request youtube API
youtubeAPIRequest = (method, type, part, maxResults, query) => {
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

console.log(youtubeAPIRequest("GET", 'search', 'snippet', 1, 'query'));

// $('#search').click(function(event){
//   event.preventDefault();
//   $.ajax({
//     method: 'GET',
//     url: youtubeAPIRequest("GET", 'search', 'snippet', 1, 'query'),
//     success: function(data){
//       console.log(data)
//     },
//     error: function(data){
//       console.log(data)
//     }
//   })
// })
const addCard = (video)=>{
  $('#songs').append(
    `<div class='ui card'>
      <div class='header'><a href=${youtubeLink}${video.id.videoId}>${video.snippet.title}</a></div>
      <div class='image'><img src=${video.snippet.thumbnails.medium.url}></div>
      <div class='content'>
        <div class='meta'>
          <div class='description'>${video.snippet.description}</div>
        </div>
      </div>
    </div>
    `)
}
$('#search-button').click(function(event){
  event.preventDefault();
  const formData = $('#search').serializeArray();;
  $.ajax({
    method: 'GET',
    url: "https://www.googleapis.com/youtube/v3/search?",
    data: {
      part: "snippet",
      q: formData[0].value,
      maxResults: 24,
      order: 'relevance',
      key: "AIzaSyCe0L76JiEKzBGrrw1ByQHJKLLMD_e3MHg"
    },
    success: function( data ) {
      console.log(data)
      const videos = data.items;
      const tumbnail =
      $("#songs").html("");
      for(let i = 0; i < videos.length; i++){
        addCard(videos[i])
        // $('#songs').append(`<div class='ui card'><div class='header'><a href=${youtubeLink}${videos[i].id.videoId}>${videos[i].snippet.title}</a></div>`)
        // $('#songs').append(`<div class='image'><img src=${videos[i].snippet.thumbnails.medium.url} /></div>`)
        // $('#songs').append(`<div class='description'>${videos[i].snippet.description}</div></div>`)
      }


    }
  });

  // $.ajax({
  //   method: 'GET',
  //   url: BASE_URL + "/search?",
  //   data: {
  //     part: "snippet",
  //     q: "dog",
  //     maxResults: 1,
  //     order: 'relevance',
  //     key: youtubeKey
  //   },
  //   success: functon(data){
  //     console.log(data);
  //   }
  //   })
})
