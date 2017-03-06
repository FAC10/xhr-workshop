var searchKeyword;
var beginningURL = 'http://api.giphy.com/v1/gifs/search?q='
var apiKey = '&api_key=dc6zaTOxFJmzC'
var url;
// var url = beginningURL + searchKeyword + apiKey;

document.getElementById('search-btn').addEventListener('click', function() {
  searchKeyword = document.getElementsByClassName('search-query')[0].value;
  var res = encodeURI(searchKeyword);
  url = beginningURL + res + apiKey;
  getGif(url);
});

function getGif(url) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        var giphyObj = JSON.parse(xhr.responseText);
        var gifDrop = document.getElementById('search-results');
        var link = giphyObj.data[1].images.downsized_medium.url;
        var image = document.createElement('img');
        image.src = link;
        gifDrop.appendChild(image);
      }
  };
  xhr.open("GET", url, true);
  xhr.send();
};
