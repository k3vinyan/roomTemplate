const url = `https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=AIzaSyCe0L76JiEKzBGrrw1ByQHJKLLMD_e3MHg`

googleApiClientReady = function() {
  console.log("cat");
}
// function handleAPILoaded() {
//   // $('#search-button').attr('disabled', false);
//
// }

// Search for a specified string.
function search(q) {
  //var q = $('#query').val();
  var request = gapi.client.youtube.search.list({
    q: q,
    part: 'snippet'
  });

  request.execute(function(response) {
    var str = JSON.stringify(response.result);
    $('#search-container').html('<pre>' + str + '</pre>');
  });
}

function handleLoad() {
  console.log("hi");
}

function loadAPIClientInterfaces() {
  gapi.client.load('youtube', 'v3', function() {
    handleAPILoaded();
  });
}

module.exports = search;
