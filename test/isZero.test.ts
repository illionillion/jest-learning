import { isZero } from "../src/isZero"

test('0を渡したらtrueになるか', () => {
    const result = isZero(0);
    expect(result).toBe(true)
})

test('1を渡したらfalseになるか', () => {
    const result = isZero(1)
    expect(result).toBe(false)
})