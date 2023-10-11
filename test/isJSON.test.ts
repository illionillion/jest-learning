import { isJSON } from "../src/isJSON"

test('{}でtrueになるか', () => {
    const result = isJSON('{}')
    expect(result).toBe(true)
})

test('{"name":"John"}でtrueになるか', () => {
    const result = isJSON('{"name":"John"}')
    expect(result).toBe(true)
})

test('{""}でfalseになるか', () => {
    const result = isJSON('{""}')
    expect(result).toBe(false)
})

test('nameでfalseになるか', () => {
    const result = isJSON('name')
    expect(result).toBe(false)
})