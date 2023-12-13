// http://www.omdbapi.com/?i=tt3896198&apikey=cd6756c7&s=titanic
// http://www.omdbapi.com/?i=tt3896198&apikey=cd6756c7&s=${titanic}
let card = document.querySelector(".card");
let input = document.querySelector("#input");
input.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    const inputValue = this.value;
    result(inputValue);
    this.value = "";
  }
});



function renderShow(p1) {
  card.innerHTML = p1.map((item) =>
    `<div class="showContainer d-flex gap-5" style="height: 300px;">
    <div class="imgContent">
        <img src="${item.Poster}" alt="" id="imgUrl" width="400px" height="300px">
    </div>
    <div class="textContent">
        <h1 class="text-danger fw-bold">${item.Title}</h1>
        <ul>
            <li class="fs-3 fw-medium text-black">Year: ${item.Year}</li>
            <li class="fs-3 fw-medium text-black">Type:${item.Type}</li>
        </ul>
    </div>
</div>`).join("");
};

function result(a) {
  const myPromises = fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=cd6756c7&s=${a}`);
  myPromises
    .then((res) => {
      const dataPromise = res.json();
      // console.log("dataPromise", dataPromise);
      return dataPromise;
    })
    .then((data) => {
      let dataSearch = data.Search;
      renderShow(dataSearch);

    })
    .catch((err) => {
      console.log(err);
    });
}
