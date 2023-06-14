document.addEventListener('DOMContentLoaded', function() {
    fetch('https://arma3-servers.net/api/?object=servers&element=detail&key=ygJ6LWwPATrfNJsDuiFeg2AE0aEwoaygRrT')
      .then(function(response) {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error: ' + response.status);
        }
      })
      .then(function(data) {
        var playerCount = data.players;
        var maxPlayers = data.maxplayers;

        document.getElementById('player-count').textContent = playerCount;
        document.getElementById('max-players').textContent = maxPlayers;
      })
      .catch(function(error) {
        console.log('Error occurred while loading JSON data:', error);
      });
  });
  