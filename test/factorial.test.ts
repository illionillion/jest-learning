import { factorial } from "../src/factorial";

test('6を渡したら720になるか', () => {
    const result = factorial(6);
    expect(result).toBe(720)
})