const resetClickHandler = () => {}
const equalsClickHandler = () => {}
const signClickHandler = () => {};
const comaClickHandler = () => {};
const numClickHandler = () => {};

export default  (btn) =>
    btn === 'C'
        ? resetClickHandler
        : btn === '='
        ? equalsClickHandler
        : btn === '/' || btn === 'X' || btn === '-' || btn === '+'
        ? signClickHandler
        : btn === '.'
        ? comaClickHandler
        : numClickHandler;