/**
 *@jest-environment jsdom
 */

import * as movieAppFunctions from "../ts/movieApp";
import { test, expect, describe, jest } from "@jest/globals";
import { mockMovies } from "../ts/services/__mocks__/movieservice";

describe("init", () => {
  //   beforeEach(() => {
  //     jest.resetModules();
  //     jest.restoreAllMocks();
  //   });
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
  test("should get searchText value", async () => {
    console.log("test:should get searchText value");
    //arrange
    document.body.innerHTML = `<form id="searchForm">
      <input type="text" id="searchText" placeholder="Skriv titel här" value="valueText" />
      <button type="submit" id="search">Sök</button>
    </form>`;
    let searchText = (document.getElementById("searchText") as HTMLInputElement)
      .value;
    //act
    await movieAppFunctions.handleSubmit();
    //assert
    expect(searchText).toBe("valueText");
    document.body.innerHTML = "";
  });
  test("should start createHTML", () => {});
});
describe("createHtml", () => {
  test("should create html and display list", () => {
    console.log("should create html and display list");
    //arrange
    document.body.innerHTML = `<div id="container"></div>`;
    let container = document.getElementById("container") as HTMLDivElement;
    // const match = document.querySelectorAll(".movie").length;
    //act
    movieAppFunctions.createHtml(mockMovies, container);
    //assert
    expect(document.querySelectorAll(".movie").length).toBe(mockMovies.length);
    document.body.innerHTML = "";
  });
});

describe("displayNoResult", () => {
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
