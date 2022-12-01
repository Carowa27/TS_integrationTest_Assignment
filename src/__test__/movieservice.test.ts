import { test, expect, jest } from "@jest/globals";
import { IMovie } from "../ts/models/Movie";
import { getData } from "../ts/services/movieservice";
import { mockMovies } from "../ts/services/__mocks__/movieservice";
import axios from "axios";

jest.mock("axios");
const mockAxios = axios as jest.Mocked<typeof axios>;

// jest.mock("./../services/movieservice.ts");

// jest.mock("axios", () => ({
//   get: async () => {
//     return new Promise((resolve) => {
//       resolve({ data: { Search: mockMovies } });
//     });
//   },
// }));
describe("getData", () => {
  test("should get mock data from api", async () => {
    console.log("test:should get mock data from api");

    mockAxios.get.mockResolvedValue({ data: { Search: mockMovies } });
    let result: IMovie[] = await getData("../services/movieservice.ts");

    expect(result.length).toBeGreaterThan(0);
    expect(result[0].Title).toBe("Toy Story");
  });
  test("should not get mock data from api", async () => {
    console.log("test:should not get mock data from api");

    mockAxios.get.mockRejectedValue({ data: { Search: mockMovies } });
    let result: IMovie[] = await getData("../services/movieservice.ts");

    expect(result.length).toBe(0);
  });
});
