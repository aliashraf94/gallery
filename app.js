const URL =
  "https://s3.amazonaws.com/codecademy-content/courses/ltp4/photos-api/photos.json";

/*
fetch('url')
.then(Resolve)
.then(Reject) OR .catch(Reject)
OR directly 
fetch('url').then(ResolveFuntion, RejectFuntion)
*/

fetch(URL)
  .then((response) => onFetch(response))
  .then((error) => console.log("this is an error: ", error));

let app = document.getElementById("app");

let divRow = document.createElement("div");
divRow.className = "row";

let numberOfColumns = 3;

let columns = [];

let newColumns = () => {
  for (let i = 0; i <= numberOfColumns - 1; i++) {
    const divColumns = document.createElement("div");
    divColumns.className = "column";
    divRow.appendChild(divColumns);
    columns.push(divColumns);
  }
};
newColumns();

let onFetch = (resolve) => {
  resolve.json().then((photos) => {
    for (indexOfThePhoto in photos) {
      let { author, url, pubdate } = photos[indexOfThePhoto];
      console.log(author, url, pubdate);

      let p = document.createElement("p");
      p.innerText = `Author : ${author}`;

      let img = document.createElement("img");
      img.src = photos[indexOfThePhoto].url;

      columns[indexOfThePhoto % numberOfColumns].appendChild(img);
      columns[indexOfThePhoto % numberOfColumns].appendChild(p);
      //  OR
      // switch ((indexOfThePhoto % numberOfColumns) + 1) {
      //   case 1:
      //     columns[1 - 1].appendChild(img);
      //     break;
      //   case 2:
      //     columns[2 - 1].appendChild(img);
      //     break;
      //   case 3:
      //     columns[3 - 1].appendChild(img);
      //     break;
      //   case 4:
      //     columns[4 - 1].appendChild(img);
      //     break;
      //   default:
      //     break;
      // }
      app.appendChild(divRow);
    }
  });
};