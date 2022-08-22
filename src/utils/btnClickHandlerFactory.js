// For number formatting
const removeSpaces = (num) => num.toString().replace(/\s/g, "");

const resetClickHandler = () => {}
const equalsClickHandler = () => {}
const signClickHandler = () => {};
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
: btn === 'load'
? loadClickHandler
: btn === 'save'
? saveClickHandler
: numClickHandler;

export default btnClickHandlerFactory;