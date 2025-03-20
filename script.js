
document.addEventListener('DOMContentLoaded', function() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '<p>Love as Folly, c. 1773/1776</p>';
  });

  const spotifyContainer = document.getElementById('spotify-player');
if (spotifyContainer) {
  const iframe = document.createElement('iframe');
  iframe.className = 'spotify-iframe';  // 클래스 추가
  iframe.src = "https://open.spotify.com/embed/track/1gPVp4acBJk7vdTTwDs6rV?utm_source=generator&theme=0r";
  iframe.setAttribute("frameborder", "0");
  iframe.setAttribute("allowfullscreen", "");
  iframe.setAttribute("allow", "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture");
  iframe.setAttribute("loading", "lazy");

  spotifyContainer.appendChild(iframe);
}


