const formulaire = document.getElementById('invocation');
formulaire.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('clic !');

  const prenom = document.getElementById('prenom').value;
  const creature = document.getElementById('creature').value;
  const message = `${prenom}, ${creature} a entendu ton appel !`;

  document.getElementById('message').textContent = message;
  document.getElementById('invocation').classList.add('cache');
  document.getElementById('resultat').classList.remove('cache');
});

const recommencer = document.getElementById('recommencer');
recommencer.addEventListener('click', function() {
    document.getElementById('invocation').classList.remove('cache');
    document.getElementById('resultat').classList.add('cache');  
});
