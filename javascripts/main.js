//div in html - id="bread-container"
//printToDom function in utils
//breadData will have array of bread objects, export a getBreads function
//each bread object = type, color, price, id
// bread.js component - with domstring builder (find something nice in bootstrap) use getBreads function
// import breads component into main.js
//event listener on radio button - call breadData.setSelectedBread(breadId);
//setSelectedBread = assign a var (setlectedBreadId) to the id passed in (console.log the id)
import bread from './components/bread.js'

const init = () => {
    //breads.makeBreadRadioButtons();
    bread.breadBuilder();
}

init();