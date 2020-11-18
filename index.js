"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv = require("dotenv");
dotenv.config();
var api_1 = require("./api");
var ui_1 = require("./ui");
(function () {
    window.addEventListener("load", function () {
        document.getElementById("search-pane-button").addEventListener("click", function () {
            var searchterm = document.getElementById("searh-pane-input").value;
            api_1.search(searchterm)
                .then(function (response) {
                if (!response.hasOwnProperty("Error")) {
                    console.log(response);
                    var messagePar = document.getElementById("search-pane-message");
                    messagePar.innerHTML = "";
                    ui_1.clearMovies();
                    ui_1.appendMovies(response.Search);
                }
                else {
                    ui_1.clearMovies();
                    var messagePar = document.getElementById("search-pane-message");
                    messagePar.innerHTML = response.Error;
                }
            })
                .catch(function (error) { return console.error(error); });
        });
    });
})();
