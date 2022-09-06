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

const url="https://newsapi.org/v2/everything?q=cars"
const options={
        headers:{
                // 'X-Api-Key':'57cac8b7974a445687521e4c2c792a41'
                'Authorization':'57cac8b7974a445687521e4c2c792a41'
        }
}

fetch(url,options).then(r=>r.json()).then(console.log).catch(console.log)


