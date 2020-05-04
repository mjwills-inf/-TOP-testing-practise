const arrayAnalysis = (numberArray) => {  
  let averageResult = (numberArray.reduce((acc, current) => acc + current, 0) 
      / numberArray.length)
  let lengthResult = numberArray.length  
  let minResult = numberArray.reduce((acc, current) => {
    (acc > current) ? acc = current : acc = acc
    return acc
  })
  let maxResult = numberArray.reduce((acc, current) => {
    (acc < current) ? acc = current : acc = acc
    return acc
  }) 
  
  return {
    average: averageResult,    
    min: minResult,
    max: maxResult,
    length: lengthResult    
  }
}

export default arrayAnalysis