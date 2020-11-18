"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appendMovies = exports.clearMovies = void 0;
exports.clearMovies = function () {
    var list = document.getElementById("search-results");
    while (list.firstChild) {
        list.firstChild.remove();
    }
};
var createListItem = function (title, year, poster) {
    var caption = year + ", " + title;
    var captionNode = document.createElement("figure");
    captionNode.appendChild(document.createTextNode(caption));
    var posterNode = document.createElement("img");
    posterNode.setAttribute("alt", caption);
    posterNode.setAttribute("class", "search-results-item-poster");
    posterNode.setAttribute("src", poster);
    var figureNode = document.createElement("figure");
    figureNode.appendChild(posterNode);
    figureNode.appendChild(captionNode);
    var listItemNode = document.createElement("li");
    listItemNode.setAttribute("class", "search-results-item");
    listItemNode.appendChild(figureNode);
    return listItemNode;
};
exports.appendMovies = function (movies) {
    var list = document.getElementById("search-results");
    movies.forEach(function (movie) {
        var listItemNode = createListItem(movie.Title, movie.Year, movie.Poster);
        list === null || list === void 0 ? void 0 : list.appendChild(listItemNode);
    });
};
