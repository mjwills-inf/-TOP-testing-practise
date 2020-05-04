const calculate = {
  add: (...args) => {
    let result = 0
    for (let arg of args) result += arg
    return result
  },
  subtract: (x, ...args) => {
    let result = x
    for (let arg of args) result -= arg
    return result
  },
  divide: (x, ...args) => {
    let result = x
    for (let arg of args) result /= arg
    return result
  },
  multiply: (x, ...args) => {
    let result = x
    for (let arg of args) result *= arg
    return result
  }
}

export default calculate