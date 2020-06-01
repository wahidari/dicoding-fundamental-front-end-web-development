import '../component/club-list.js';
import "../component/search-bar.js";
import DataSource from "../data/data-source.js";

// const main = function () {

// arrow function
const main = () => {
  // const searchElement = document.querySelector("#searchElement");

  // <!-- menggunakan custom element search-bar-->
  const searchElement = document.querySelector("search-bar");

  // const buttonSearchElement = document.querySelector("#searchButtonElement");

  // const clubListElement = document.querySelector("#clubList");

  // <!-- menggunakan custom element
  const clubListElement = document.querySelector("club-list");

  //   const onButtonSearchClicked = function() {
  //     const dataSource = new DataSource(renderResult, fallbackResult);
  //     dataSource.searchClub(searchElement.value);
  //   };

  // mengubah callback menjadi Promise
  //   const onButtonSearchClicked = () => {
  //     DataSource.searchClub(searchElement.value)
  //       .then(renderResult)
  //       .catch(fallbackResult);
  //   };

  // Atau jika Anda lebih suka menggunakan async/await, Anda bisa membuat fungsi onButtonSearchClicked berjalan secara asynchronous seperti ini:
  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchClub(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  // const renderResult = function(results) {
  //   clubListElement.innerHTML = "";
  //   results.forEach(function(club) {
  //     // const name = club.name;
  //     // const fanArt = club.fanArt;
  //     // const description = club.description;
  //     const { name, fanArt, description } = club;

  //     const clubElement = document.createElement("div");
  //     clubElement.setAttribute("class", "club");

  //     // clubElement.innerHTML = '<img class="fan-art-club" src="' + fanArt + '" alt="Fan Art">\n' +
  //     //     '<div class="club-info">\n' +
  //     //     '<h2>' + name + '</h2>\n' +
  //     //     '<p>' + description + '</p>' +
  //     //     '</div>';

  //     clubElement.innerHTML = `
  //               <img class="fan-art-club" src="${fanArt}" alt="Fan Art">
  //               <div class="club-info">
  //                   <h2>${name}</h2>
  //                   <p>${description}</p>
  //               </div>`;
  //     clubListElement.appendChild(clubElement);
  //   });
  // };

  // Kita cukup menggantinya dengan seperti ini:
  const renderResult = results => {
    clubListElement.clubs = results;
  };

  // const fallbackResult = function(message) {
  //   clubListElement.innerHTML = "";
  //   // clubListElement.innerHTML += '<h2 class="placeholder">' + message + '</h2>'
  //   clubListElement.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  // };

  // Sesuaikan juga kode yang terdapat pada fungsi fallbackResult, karena kita sudah membuat fungsi renderError() pada ClubList, maka penggunaanya cukup dilakukan seperti ini:
  const fallbackResult = message => {
    clubListElement.renderError(message);
  };

  // buttonSearchElement.addEventListener("click", onButtonSearchClicked);

  searchElement.clickEvent = onButtonSearchClicked;
};

// menggunakan modul
export default main;
