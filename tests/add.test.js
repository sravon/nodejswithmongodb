const add = require('../add')

test('adds 1 + 2 to equal 3', () => {
  expect(add.add(1, 2)).toBe(3)
  expect(add.subTraction(5, 2)).toBe(3)
})
