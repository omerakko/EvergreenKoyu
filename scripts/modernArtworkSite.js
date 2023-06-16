const artworkContainer = document.getElementById('artwork-container');

// Sample array of artwork URLs (replace with your own)
const artworkURLs = [
  'file:///C:/Users/omera/Documents/GitHub/EvergreenKoyu/images/alpana_logo.png'
  
  // Add more artwork URLs as needed
];

function createArtworkCard(url) {
  const artworkCard = document.createElement('div');
  artworkCard.classList.add('artwork-card');

  const image = document.createElement('img');
  image.src = url;
  artworkCard.appendChild(image);

  artworkContainer.appendChild(artworkCard);
}

// Load initial artwork
window.addEventListener('load', function() {
  artworkURLs.forEach(function(url) {
    createArtworkCard(url);
  });
});

// Infinite scroll
window.addEventListener('scroll', function() {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    // Load more artwork when user reaches the bottom
    artworkURLs.forEach(function(url) {
      createArtworkCard(url);
    });
  }
});
