export default formula => {
  if (formula[0] === '=') formula = formula.substr(1) // Removes the = in the beginning
  formula = formula.replace(/([A-Z]{1,3}[0-9]{1,5})/g, '"$1"') // Cell => Text
  formula = formula.replace(/,/g, '.') // , => . (asciimath uses point to indicate decimal places)
  formula = formula.replace(/([A-Z]+)\(/g, val => `${val}`.toLowerCase()) // Excel functions to lowerCase
  formula = formula.replace(/\*/g, 'xx') // * => x (times)
  formula = formula.replace(/exp\((.*?)\)/g, '(e^$1)') // EXP => e^exponent
  // Bug: if what's inside EXP has parentesis the app will misbehave
  // One way to avoid this bug is to write EXP(1)^(the power)
  return formula
}