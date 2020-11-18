const dotenv = require("dotenv");
dotenv.config();
import { search } from "./api";
import { appendMovies, clearMovies } from "./ui";

(() => {
  window.addEventListener("load", () => {
    (document.getElementById(
      "search-pane-button"
    ) as HTMLButtonElement).addEventListener("click", () => {
      const searchterm = (document.getElementById(
        "searh-pane-input"
      ) as HTMLInputElement).value;
      search(searchterm)
        .then((response) => {
          if (!response.hasOwnProperty("Error")) {
            console.log(response);
            const messagePar = document.getElementById("search-pane-message");
            (messagePar as HTMLElement).innerHTML = "";
            clearMovies();
            appendMovies(response.Search);
          } else {
            clearMovies();
            const messagePar = document.getElementById("search-pane-message");
            (messagePar as HTMLElement).innerHTML = response.Error;
          }
        })
        .catch((error) => console.error(error));
    });
  });
})();
