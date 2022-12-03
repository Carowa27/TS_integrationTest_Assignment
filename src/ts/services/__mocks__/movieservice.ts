import { IMovie } from "../../models/Movie";

export let mockMovies: IMovie[] = [
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
    Title: "Story Toy",
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

export const getData = async (searchText: string): Promise<IMovie[]> => {
  return new Promise((resolve, reject) => {
    if (searchText !== "") {
      if (searchText !== "search not found") {
        resolve(mockMovies);
        console.log("before else");

        console.log(mockMovies);
      } else {
        resolve([]);
        console.log("inside else");
      }
    } else reject("pröva att söka igen");
    console.log("catch");
  });
};
