import util from '../helpers/utils.js';
import bread from '../helpers/data/breadData.js';

const selectBread = (e) => {
    const breadId = e.target.id;
    bread.setSelectedBread(breadId);
  }

const radioButtonEvent = (e) => {
    const radioButtons = document.getElementsByClassName('breadRadio');
    for(let i=0; i<radioButtons.length; i++){
        radioButtons[i].addEventListener('click', selectBread)
    }
}


const breadBuilder = () => {
    
    const breadings = bread.getBread();
    let domString = '';
    for(let i = 0; i < breadings.length; i++){
    domString += `<div class="btn-group btn-group-toggle" data-toggle="buttons">`
    domString += `<label class="btn btn-secondary active">`
    domString += `<input class="breadRadio" type="radio" name="options" id="${breadings[i].id}" checked> ${breadings[i].type} </label>`
    domString += `</div>`
    }
    util.printToDom('bread-container', domString); 
    radioButtonEvent();
};

export default { breadBuilder }