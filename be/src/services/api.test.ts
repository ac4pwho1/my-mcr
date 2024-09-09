import axios from "axios";
import { getUsers, createUser } from "./api";

// Mock axios
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("API service", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should fetch users", async () => {
    const mockUsers = [
      { id: 1, name: "John Doe", email: "john.doe@example.com" },
    ];
    mockedAxios.get.mockResolvedValueOnce({ data: mockUsers });

    const users = await getUsers();

    expect(users).toEqual(mockUsers);
    expect(mockedAxios.get).toHaveBeenCalledWith("/users");
  });

  test("should create a user", async () => {
    const newUser = { name: "Jane Doe", email: "jane.doe@example.com" };
    const mockUser = { id: 2, ...newUser };
    mockedAxios.post.mockResolvedValueOnce({ data: mockUser });

    const user = await createUser(newUser);

    expect(user).toEqual(mockUser);
    expect(mockedAxios.post).toHaveBeenCalledWith("/users", newUser);
  });
});
