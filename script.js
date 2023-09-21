function checkWindowSize() {
  if (jQuery(window).width() >= 480) {
    $(".truncate").succinct({
      size: 100,
    });
  } else if (jQuery(window).width() >= 320) {
    $(".truncate").succinct({
      size: 55,
    });
  } else {
    $(".truncate").succinct({
      size: 150,
    });
  }
}

jQuery(document).ready(function () {
  jQuery(window).resize(checkWindowSize);
  checkWindowSize();
});

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Récupération des éléments
const contactLink = document.getElementById("contactLink");
const contactPopup = document.getElementById("contactPopup");
const closePopup = document.getElementById("closePopup");

// Afficher le pop-up au clic sur le lien
contactLink.addEventListener("click", () => {
  contactPopup.style.display = "block";
});

// Masquer le pop-up au clic sur la croix
closePopup.addEventListener("click", () => {
  contactPopup.style.display = "none";
});

// Masquer le pop-up si l'utilisateur clique en dehors de celui-ci
window.addEventListener("click", (event) => {
  if (event.target == contactPopup) {
    contactPopup.style.display = "none";
  }
});

// Fonction pour mettre à jour les options en fonction du thème sélectionné
function updateHeroOptions() {
  const themeSelect = document.getElementById("pet-select");
  const heroSelectGroup = document.getElementById("hero-select-group");
  const heroSelect = document.getElementById("hero-select");

  // Supprimer toutes les options actuelles
  heroSelect.innerHTML = "";

  // Si le thème est "DC Comics"
  if (themeSelect.value === "dc") {
    const dcHeroes = ["Superman", "Batman", "Flash", "Wonderwoman", "Le Joker"];
    dcHeroes.forEach((hero) => {
      const option = document.createElement("option");
      option.value = hero.toLowerCase().replace(" ", "-");
      option.textContent = hero;
      heroSelect.appendChild(option);
    });
    heroSelectGroup.style.display = "block";
  } else if (themeSelect.value === "marvel") {
    // Ajoutez les héros Marvel
    const marvelHeroes = [
      "Iron Man",
      "Hulk",
      "Spiderman",
      "Deadpool",
      "Captain America",
    ];
    marvelHeroes.forEach((hero) => {
      const option = document.createElement("option");
      option.value = hero.toLowerCase().replace(" ", "-");
      option.textContent = hero;
      heroSelect.appendChild(option);
    });
    heroSelectGroup.style.display = "block";
  } else if (themeSelect.value === "pokemon") {
    // Ajoutez les héros Pokémon
    const pokemonHeroes = ["Pikachu", "Dracaufeu", "Sacha", "Team Rocket"];
    pokemonHeroes.forEach((hero) => {
      const option = document.createElement("option");
      option.value = hero.toLowerCase().replace(" ", "-");
      option.textContent = hero;
      heroSelect.appendChild(option);
    });
    heroSelectGroup.style.display = "block";
  } else if (themeSelect.value === "disney") {
    // Ajoutez les héros Disney
    const disneyHeroes = ["La reine des neiges", "Cendrillon", "Blanche neige"];
    disneyHeroes.forEach((hero) => {
      const option = document.createElement("option");
      option.value = hero.toLowerCase().replace(" ", "-");
      option.textContent = hero;
      heroSelect.appendChild(option);
    });
    heroSelectGroup.style.display = "block";
  } else {
    heroSelectGroup.style.display = "none";
  }
}

// Écoutez les changements dans le choix du thème
const themeSelect = document.getElementById("pet-select");
themeSelect.addEventListener("change", updateHeroOptions);

// Appelez cette fonction au chargement de la page pour initialiser les options
updateHeroOptions();

$(document).ready(function () {
  $(".open-contact-form").click(function () {
    // Code pour ouvrir le formulaire
    $("#contactPopup").show(); // Supposons que vous avez un élément avec l'id 'contactPopup' qui représente le formulaire
  });
});
