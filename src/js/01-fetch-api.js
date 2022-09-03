/*
 * - HTTP-запросы в браузере
 *  - Fetch API
 *  - Владка Network
 *  - HTTP-методы
 *  - Заголовки
 *  - MIME-типы
 *  - Параметры запроса
 * - Документация REST API
 * - Обработка 404 с fetch
 * - Аутентификация
 * - Библиотеки-обёртки
 * - https://pokeapi.co/
 */

import '../css/common.css';
import pokemonCardTpl from '../templates/pokemon-card.hbs';
import API from './api-service';
// import getRefs from './get-refs';

// const refs = getRefs();

const refs ={
        
}

// const refs =
// {cardContainer: document.querySelector('.js-card-container'),
// searchForm: document.querySelector('.js-search-form')}

refs.form.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const searchQuery = form.elements.query.value;
  API.fetchPokemonByID(searchQuery)
    .then(renderPokemonCard)
    .catch(onFetchError)
    .finally(() => form.reset());
}

// function fetchPokemonByID(pokemonID) {
//   const url = `https://pokeapi.co/api/v2/pokemon/${pokemonID}`;
//   return fetch(url).then((response) => {
//     return response.json();
//   });
// }

function renderPokemonCard(pokemon) {
  const markupCards = pokemonCardTpl(pokemon);
  refs.cardContainer.innerHTML = markupCards;
}

function onFetchError(error) {
  alert('Мы не смогли найти ваш Pokemon!');
}
