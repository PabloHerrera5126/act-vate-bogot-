const selector = document.getElementById("actividad");
const tarjetas = document.querySelectorAll(".espacio-card");

selector.addEventListener("change", () => {

  const valor = selector.value.toLowerCase();

  tarjetas.forEach(card => {

    const tags = card.dataset.tags;

    if (valor === "*") {
      card.style.display = "flex";
    }
    else if (tags.includes(valor)) {
      card.style.display = "flex";
    }
    else {
      card.style.display = "none";
    }

  });

});