import '../css/common.css';
import template from '../templates/workbook.hbs';

const wrap = document.querySelector('.wrap');
console.log(wrap);

const user = {
  username: 'Mango',
  age: 22,
  phone: 876876,
};

console.log(user);

const markupInfo = template(user);
wrap.innerHTML = markupInfo;
console.log(wrap.innerHTML);
