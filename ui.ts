import { listenerCount } from "process";
import { search } from "./api";

export const clearMovies = () => {
  const list = document.getElementById("search-results");
  while ((list as HTMLElement).firstChild) {
    list.firstChild.remove();
  }
};
const createListItem = (title: string, year: string, poster: string) => {
  const caption = `${year}, ${title}`;
  const captionNode = document.createElement("figure");
  captionNode.appendChild(document.createTextNode(caption));
  const posterNode = document.createElement("img");
  posterNode.setAttribute("alt", caption);
  posterNode.setAttribute("class", "search-results-item-poster");
  posterNode.setAttribute("src", poster);

  const figureNode = document.createElement("figure");
  figureNode.appendChild(posterNode);
  figureNode.appendChild(captionNode);

  const listItemNode = document.createElement("li");
  listItemNode.setAttribute("class", "search-results-item");
  listItemNode.appendChild(figureNode);
  return listItemNode;
};

interface Movie {
  Title: string,
  Year: string,
  Poster: string
}
export const appendMovies = (movies: Movie[]) => {
  const list = document.getElementById("search-results");

  movies.forEach((movie) => {
    const listItemNode= createListItem(movie.Title, movie.Year, movie.Poster)
    list?.appendChild(listItemNode)
  })
  
}