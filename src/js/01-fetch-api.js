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
import getRefs from './get-refs';

const refs = getRefs();

refs.searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const searchQuery = form.elements.query.value;
  API.fetchPokemonByID(searchQuery)
    .then(renderPokemonCard)
    .catch(onFetchError)
    .finally(() => form.reset());
}

function renderPokemonCard(pokemon) {
  const markupCards = pokemonCardTpl(pokemon);
  refs.cardContainer.innerHTML = markupCards;
}

function onFetchError(error) {
  alert('Мы не смогли найти ваш Pokemon!');
}

// ================================================

// Параметры запроса

// pokemon?limit=20&offset=20
// fetch("https://pokeapi.co/api/v2/ability/?limit=20&offset=20")
// fetch("https://pixabay.com/api/?key={ KEY }&q=yellow+flowers&image_type=photo").then(r=>r.json()).then(console.log)
// 

fetch("https://api.weatherstack.com/current?access_key=82f18161d6188381eddf7b597d1c796a&query=39.916668,116.383331").then(r=>r.json()).then(console.log).catch(console.log)


