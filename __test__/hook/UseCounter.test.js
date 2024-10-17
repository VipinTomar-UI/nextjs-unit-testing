import { renderHook, act } from "@testing-library/react";
import UseCounter from "../../src/app/hooks/useCounter";

describe("UseCounter Hook", () => {
  it("Should render the hook", () => {
    const { result } = renderHook(() => UseCounter(0));
    expect(result.current.count).toBe(0);
  });
  it("Should increment the count", () => {
    const { result } = renderHook(() => UseCounter(0));
    act(() => result.current.increment());
    expect(result.current.count).toBe(1);
  });
  it("Should decrement the count", () => {
    const { result } = renderHook(() => UseCounter(5));
    act(() => result.current.decrement());
    expect(result.current.count).toBe(4);
  });
});
