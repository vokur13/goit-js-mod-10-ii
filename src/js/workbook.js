import hbsTemlate from '../templates/workbook.hbs';
import users from '../json/data-base.json';
import '../css/common.css';

//

// '<div>{{name}}</div>';
// ('<div><%name%></div>');

// const temlate = SuperTemplatingEngine.compile('<div>{{name}}</div>');
// tempale({ name: 'Mango' }); //('<div>Mango</div>');

// -------------------------------------------------------------//

const container = document.querySelector('.js-palette');
const cardsMarkup = hbsTemlate(users);

container.insertAdjacentHTML('beforeend', cardsMarkup);
