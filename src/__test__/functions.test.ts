import * as functions from "../ts/functions";
import { test, expect } from "@jest/globals";
import { IMovie } from "../ts/models/Movie";

describe("movieSort", () => {
  test("should sort list, a to z", () => {
    console.log("test:should sort list, a to z");
    //arrange
    let mockMovies: IMovie[] = [
      {
        Title: "Toy Story",
        Year: "1995",
        imdbID: "tt0114709",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMj…TViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_SX300.jpg",
      },
      {
        Title: "Toy Story",
        Year: "1995",
        imdbID: "tt0114709",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMj…TViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_SX300.jpg",
      },
      {
        Title: "Toy Story 3",
        Year: "2010",
        imdbID: "tt0435761",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTgxOTY4Mjc0MF5BMl5BanBnXkFtZTcwNTA4MDQyMw@@._V1_SX300.jpg",
      },
      {
        Title: "Toy Story 2",
        Year: "1999",
        imdbID: "tt0120363",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMWM5ZDcxMT…WY4NDIwXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg",
      },
      {
        Title: "Toy Story 4",
        Year: "2019",
        imdbID: "tt1979376",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTYzMDM4NzkxOV5BMl5BanBnXkFtZTgwNzM1Mzg2NzM@._V1_SX300.jpg",
      },
    ];
    //act
    let movies = functions.movieSort(mockMovies);
    //assert
    expect(movies[0].Title).toBe("Toy Story");
    expect(movies.length).toBeGreaterThan(0);
  });
  test("should sort list, z to a", () => {
    console.log("test:should sort list, z to a");
    //arrange
    let mockMovies: IMovie[] = [
      {
        Title: "Toy Story",
        Year: "1995",
        imdbID: "tt0114709",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMj…TViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_SX300.jpg",
      },
      {
        Title: "Toy Story",
        Year: "1995",
        imdbID: "tt0114709",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMj…TViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_SX300.jpg",
      },
      {
        Title: "Toy Story 3",
        Year: "2010",
        imdbID: "tt0435761",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTgxOTY4Mjc0MF5BMl5BanBnXkFtZTcwNTA4MDQyMw@@._V1_SX300.jpg",
      },
      {
        Title: "Toy Story 2",
        Year: "1999",
        imdbID: "tt0120363",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMWM5ZDcxMT…WY4NDIwXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg",
      },
      {
        Title: "Toy Story 4",
        Year: "2019",
        imdbID: "tt1979376",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTYzMDM4NzkxOV5BMl5BanBnXkFtZTgwNzM1Mzg2NzM@._V1_SX300.jpg",
      },
    ];
    //act
    let movies = functions.movieSort(mockMovies, false);
    //assert
    expect(movies[0].Title).toBe("Toy Story 4");
    expect(movies.length).toBe(mockMovies.length);
  });
});
