import fs from 'fs'
import absolutify from '../src/absolutify'

document.body.innerHTML = fs.readFileSync('./test/fixture.html', 'utf8')
const expected = fs.readFileSync('./test/expected.html', 'utf8')

test('main', () => {
  absolutify('http://prefix.com/')
  expect(document.body.innerHTML)
    .toBe(expected)
})
