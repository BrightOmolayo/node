// Global
// __dirname    path to directory
// __filename   filename
// require      function to use modules(commonJS)
// module       info about current module(file)
//  process     info about env where the program  is being executed

// console.log(__dirname)
// setInterval(() => {
//   console.log('Hello Bright')
// }, 1000)

// every file is a module
// modules are encapsulated codes (share minimum)

// const firstname = 'Bright'
// const middlename = 'Omolayo'
// const secret = 'supersecret'

// const sayHi = (name) => {
//   console.log(`Hello there you ${name}`)
// }

const names = require('./names')
const sayHi = require('./util')

sayHi('Balogun')
sayHi(names.firstname)
sayHi(names.middlename)
