import { renderHook, waitFor } from "@testing-library/react";
import useData from "../../src/app/hooks/useData";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([]),
  })
);

describe("useData", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return the initial value", () => {
    const { result } = renderHook(() => useData("http://xyz.com/data"));
    expect(result.current.data).toEqual([]);
    expect(result.current.isLoading).toBeTruthy();
  });

  it("should fetch data from the given url", async () => {
    fetch.mockImplementationOnce(() =>
      Promise.resolve({
        json: () => Promise.resolve([{ id: 1, name: "John Doe" }]),
      })
    );

    const { result } = renderHook(() => useData("http://xyz.com/data"));

    expect(result.current.data).toEqual([]);
    expect(result.current.isLoading).toBeTruthy();

    await waitFor(() =>
      expect(result.current.data).toEqual([{ id: 1, name: "John Doe" }])
    );
    expect(result.current.isLoading).toBeFalsy();
  });

  it("should handle error", async () => {
    fetch.mockImplementationOnce(() =>
      Promise.resolve({
        json: () => Promise.reject("some error occured"),
      })
    );

    const { result } = renderHook(() => useData("http://xyz.com/data"));

    await waitFor(() => expect(result.current.isError).toBeTruthy());
  });
});
