import _ from 'lodash'

const component () => {
    let element = document.createElement('div');

    element.innerHTML=_.join(['hello new!!! -->', 'div element'], ' ');
    return element;
}

document.body.appendChild(component());