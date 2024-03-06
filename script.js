const api = "https://open.er-api.com/v6/latest/TRY";

function getData(api) {
  fetch(api)
    .then((res) => res.json())
    .then((data) => {
      const TRY = data.rates.TRY;
      const USD = TRY / data.rates.USD;
      const EUR = TRY / data.rates.EUR;
      const GBP = TRY / data.rates.GBP;

      setData(USD, EUR, GBP);
    })
    .catch((err) => console.warn(err));
}

function setData(USD, EUR, GBP) {
  const dollar = document.getElementById("dollar");
  const euro = document.getElementById("euro");
  const sterlin = document.getElementById("sterlin");

  dollar.textContent = USD.toString().slice(0, 5);
  euro.textContent = EUR.toString().slice(0, 5);
  sterlin.textContent = GBP.toString().slice(0, 5);
}

getData(api);

setInterval(() => {
  getData(api);
}, 30000);
