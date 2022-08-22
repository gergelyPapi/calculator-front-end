// For number formatting
const removeSpaces = (num) => num.toString().replace(/\s/g, "");
const toLocaleString = (num) =>
  String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");

const math = (a, b, sign) =>
  sign === "+" ? a + b : sign === "-" ? a - b : sign === "X" ? a * b : a / b;

const resetClickHandler = () => {}
const equalsClickHandler = (_, calc) => {
    if (calc.sign && calc.num) {
        return {
          result:
            calc.num === "0" && calc.sign === "/"
              ? "Can't divide with 0"
              : toLocaleString(
                  math(
                    Number(removeSpaces(calc.result)),
                    Number(removeSpaces(calc.num)),
                    calc.sign
                  )
                ),
          sign: "",
          num: 0,
        };
      }
}
const signClickHandler = (e, calc) => ({
    ...calc,
    sign: e.target.innerHTML,
    result: !calc.num
        ? calc.result
        : !calc.result
        ? calc.num
        : toLocaleString(
            math(
            Number(removeSpaces(calc.result)),
            Number(removeSpaces(calc.num)),
            calc.sign
            )
        ),
    num: 0,
})
const comaClickHandler = () => {};
const loadClickHandler = () => {};
const saveClickHandler = () => {};
const numClickHandler = (e, calc) => {
    const value = e.target.innerHTML;
    if (removeSpaces(calc.num).length < 16) {
        return {
            num:
              calc.num === 0 && value === "0"
                ? "0"
                : calc.num % 1 === 0
                ? Number(calc.num + value)
                : calc.num + value,
            result: !calc.sign ? 0 : calc.result,
          }
    }
};

const btnClickHandlerFactory = (btn) => btn === 'C'
? resetClickHandler
: btn === '='
? equalsClickHandler
: btn === '/' || btn === 'X' || btn === '-' || btn === '+'
? signClickHandler
: btn === '.'
? comaClickHandler
: btn === 'Load'
? loadClickHandler
: btn === 'Save'
? saveClickHandler
: numClickHandler;

export default btnClickHandlerFactory;