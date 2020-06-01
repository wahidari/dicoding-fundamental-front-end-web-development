import DataSource from '../data/data-source.js';

// const main = function () {

// arrow function
const main = () => {
  const searchElement = document.querySelector("#searchElement");
  const buttonSearchElement = document.querySelector("#searchButtonElement");
  const clubListElement = document.querySelector("#clubList");

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

  const renderResult = function(results) {
    clubListElement.innerHTML = "";
    results.forEach(function(club) {
      // const name = club.name;
      // const fanArt = club.fanArt;
      // const description = club.description;
      const { name, fanArt, description } = club;

      const clubElement = document.createElement("div");
      clubElement.setAttribute("class", "club");

      // clubElement.innerHTML = '<img class="fan-art-club" src="' + fanArt + '" alt="Fan Art">\n' +
      //     '<div class="club-info">\n' +
      //     '<h2>' + name + '</h2>\n' +
      //     '<p>' + description + '</p>' +
      //     '</div>';

      clubElement.innerHTML = `
                <img class="fan-art-club" src="${fanArt}" alt="Fan Art">
                <div class="club-info">
                    <h2>${name}</h2>
                    <p>${description}</p>
                </div>`;
      clubListElement.appendChild(clubElement);
    });
  };

  const fallbackResult = function(message) {
    clubListElement.innerHTML = "";
    // clubListElement.innerHTML += '<h2 class="placeholder">' + message + '</h2>'
    clubListElement.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  };

  buttonSearchElement.addEventListener("click", onButtonSearchClicked);
};

// menggunakan modul
export default main;