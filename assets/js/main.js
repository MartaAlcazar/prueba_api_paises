window.onload = function () {

  fetch('https://restcountries.eu/rest/v2/all', {
    // headers: {
    //   'Accept'        : 'application/json',
    //   'Content-Type'  : 'application/json'
    // },

  })
    .then(res => res.json())
    .then(res => {
      

      let caja = document.getElementById("content");

      res.forEach(function (cont, index) {
        let item = `<div class="eachCountry">
        <div class="name">${cont.name}</div>
        <div class="flag"><img src="${cont.flag}"></div>
        <div class="capital">${cont.capital}</div>
        
        </div>`;
        caja.innerHTML += item;
      }
      );
})


}

