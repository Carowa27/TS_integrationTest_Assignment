/**
 *@jest-environment jsdom
 */

import * as movieAppFunctions from "../ts/movieApp";
import { test, expect, describe, jest } from "@jest/globals";
import { mockMovies } from "../ts/services/__mocks__/movieservice";
import { getData } from "../ts/services/movieservice";
import { IMovie } from "../ts/models/Movie";
import axios from "axios";

jest.mock("axios");
const mockAxios = axios as jest.Mocked<typeof axios>;

describe("init", () => {
  test("should start handleSubmit with click", () => {
    console.log("test:should start handleSubmit with click");
    //arrange
    let spy = jest.spyOn(movieAppFunctions, "handleSubmit").mockReturnValue(
      new Promise<void>((resolve) => {
        resolve();
      })
    );
    document.body.innerHTML = `<form id="searchForm">
        <input type="text" id="searchText" placeholder="Skriv titel här" />
        <button type="submit" id="search">Sök</button>
      </form>`;
    movieAppFunctions.init();
    //act
    (document.getElementById("searchForm") as HTMLFormElement)?.submit();
    //assert
    expect(spy).toHaveBeenCalled();
    document.body.innerHTML = "";
  });
});

describe("handleSubmit", () => {
  beforeEach(() => {
    jest.resetModules();
    jest.restoreAllMocks();
  });

  test("should start createHtml", async () => {
    console.log("test: should start createHtml");
    //arrange
    let spy = jest.spyOn(movieAppFunctions, "createHtml").mockReturnValue();
    document.body.innerHTML = `<form id="searchForm">
      <input type="text" id="searchText" placeholder="Skriv titel här" value="Toy Story"/>
      <button type="submit" id="search">Sök</button>
      </form>
      <div id="movie-container"></div>`;
    let movies: IMovie[];
    mockAxios.get.mockResolvedValue({ data: { Search: mockMovies } });
    movies = await getData("../services/movieservice.ts");
    //act
    await movieAppFunctions.handleSubmit();

    //assert
    expect(spy).toHaveBeenCalled();

    document.body.innerHTML = "";
  });
  test("should start displayNoResult", async () => {
    console.log("test: should start displayNoResult");
    //arrange
    let spy = jest
      .spyOn(movieAppFunctions, "displayNoResult")
      .mockReturnValue();
    document.body.innerHTML = `<form id="searchForm">
      <input type="text" id="searchText" placeholder="Skriv titel här"/>
      <button type="submit" id="search">Sök</button>
      </form>
      <div id="movie-container"></div>`;
    (document.getElementById("searchText") as HTMLInputElement).value =
      "search not found";
    let movies: IMovie[];
    mockAxios.get.mockRejectedValue({ data: { Search: mockMovies } });
    movies = await getData("../services/movieservice.ts");
    //act
    await movieAppFunctions.handleSubmit();

    //assert
    expect(spy).toHaveBeenCalledTimes(1);

    document.body.innerHTML = "";
  });
});

describe("createHtml", () => {
  beforeEach(() => {
    jest.resetModules();
    jest.restoreAllMocks();
  });
  test("should create html and display list", () => {
    console.log("should create html and display list");
    //arrange
    document.body.innerHTML = `<div id="container"></div>`;
    let container = document.getElementById("container") as HTMLDivElement;
    //act
    movieAppFunctions.createHtml(mockMovies, container);
    //assert
    expect(document.querySelectorAll(".movie").length).toBe(mockMovies.length);
    document.body.innerHTML = "";
  });
});

describe("displayNoResult", () => {
  beforeEach(() => {
    jest.resetModules();
    jest.restoreAllMocks();
  });
  test("should display noMessage", () => {
    console.log("should display noMessage");
    //arrange
    document.body.innerHTML = `<div id="container"></div>`;
    let container = document.getElementById("container") as HTMLDivElement;
    //act
    movieAppFunctions.displayNoResult(container);
    //assert
    expect(container.innerHTML).toEqual("<p>Inga sökresultat att visa</p>");
    document.body.innerHTML = "";
  });
});
