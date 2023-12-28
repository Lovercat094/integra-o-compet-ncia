import { getAllGatos } from "./service.js"

window.onload = () => {
  carregarGatos();
}

// *criar o botao
// * colocar os ifs
document.getElementById('buttonCalcular').addEventListener('click', () => {

  const idadeGato = document.getElementById('idadeGato').value;
  const resultado = document.getElementById('resultado');

  console.log(resultado)

  if (idadeGato == 1) {
   
    resultado.innerText = 'a idade do seu gato é de 15 anos';
  
  }

  if (idadeGato == 2) {
    resultado.innerText =  'a idade do seu gato é de 24 anos '

  
  }

  if (idadeGato == 3) {
    resultado.innerText =  'A idade do seu gato é de 28 anos'
  
  }

  if (idadeGato == 4) {
    resultado.innerText =  'A idade do seu gato é de 32 anos '
  }

  if (idadeGato == 5) {
    resultado.innerText =  'A idade do seu gato é de 36 anos'
  }

  if (idadeGato == 6) {
    resultado.innerText = 'A idade do seu gato é de 40 anos '
  }

  if (idadeGato == 7) {
    resultado.innerText = 'A idade do seu gato é de 44 anos'
  }
  if (idadeGato == 8) {
    resultado.innerText = 'A idade do seu gato é de 48 anos'
  }
  if (idadeGato == 9) {
    resultado.innerText = 'A idade do seu gato é de 52 anos'
  }
  if (idadeGato == 10) {
    resultado.innerText = 'A idade do seu gato é de 56 anos'
  }
  if (idadeGato == 11) {
    resultado.innerText = 'A idade do seu gato é de 60 anos'
  }
  if (idadeGato == 12) {
    resultado.innerText = 'A idade do seu gato é de 64 anos'
  }
});



const carregarGatos = () => {
  getAllGatos().then(response => {
    const cardContainer = document.getElementById('card-container');
    console.log(cardContainer)

    response.forEach(gato => {
      let card = document.createElement('div');
      card.className = 'card mb-3';
      card.style.maxWidth = '540px';

      card.innerHTML = `
            <div class="row g-0">
                    <div class="col-md-4">
                      <img
                        src="${gato.img}"
                        class="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title">${gato.raca}</h5>
                        <p class="card-text">
                          ${gato.info}
                        </p>
                        <p class="card-text">
                          <small class="text-body-secondary"
                            >Last updated 3 mins ago</small
                          >
                        </p>
                      </div>
                    </div>
                  </div>
            `;
      cardContainer.appendChild(card);
    });

  });
}