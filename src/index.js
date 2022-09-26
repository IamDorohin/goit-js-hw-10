import './css/styles.css';

import { fetchCountries } from './js/fetchCountries';
import { createCountriesList, createCountryInfo } from './js/countries-markup';

import Debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';


const DEBOUNCE_DELAY = 1500;
const MAX_LIST_LENGTH = 10;

const refs =  {
    input: document.querySelector('#search-box'),
    countryList: document.querySelector('.country-list'),
    countryInfo: document.querySelector('.country-info'),
};

refs.input.addEventListener('input', Debounce(onInputChange, DEBOUNCE_DELAY));

function onInputChange(event) {
    const inputValues = event.target.value.trim();

    if(inputValues.length < 1) {
        clearFetchResult();
        return;
    }

    fetchCountries(inputValues)
        .then(showFetchResult)
        .catch(fetchError);
}

function showFetchResult(countries) {
    if(countries.length > MAX_LIST_LENGTH) {
    return Notify.info(
        'Too many matches found. Please enter a more specific name.',
        {timeout: 1000}
        );
    } else if (countries.length === 1) {
        clearFetchResult();
        const countryInfo = createCountryInfo(countries);
        refs.countryInfo.innerHTML = countryInfo;
    } else {
        clearFetchResult();
        const countriesListMarkup = createCountriesList(countries);
        refs.countryList.innerHTML = countriesListMarkup;
    }

}

function fetchError() {
    clearFetchResult();
    Notify.failure(
        'Oops, there is no country with that name',
        {timeout: 1500}
    )
}

function clearFetchResult() {
    refs.countryInfo.innerHTML = '';
    refs.countryList.innerHTML = '';
}



