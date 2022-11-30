import { test, expect, jest } from "@jest/globals";
import { IMovie } from "../models/Movie";
import { getData } from "../services/movieservice";

jest.mock("./../services/movieservice.ts");

test("should get mock data from api", async () => {
  let movies: IMovie[] = await getData("toy story");

  expect(movies.length).toBe(4);
});
