const root = __dirname
const Modules = []

Modules.push (require (`${root}/Modules/parse`).Parse)

const Main = (data) =>
{
  this.parse = data.Modules[0]

  return this
}
module.exports = Main

const test = Main ({Modules})

console.log (test)