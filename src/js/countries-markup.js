export { createCountriesList, createCountryInfo };

function createCountriesList(countries) {
    return countries.map(
        ({ name, flags }) =>
        `<li class='country-list__item'>
            <img
                src="${flags.svg}"
                width='50'
                height='30'
                alt="${name.official}"
                class='country-list__flag' />
            <p class='country-list__name'>
                ${name.official}
            </p>
        </li>`).join('');
}

function createCountryInfo(countries) {
    return countries.map(
        ({ name, flags, capital, population, languages }) =>
        `<div class='country-info__title'>
            <img
                src="${flags.svg}"
                width='100'
                height='50'
                alt="${name.official}"
                class='country-list__flag' />
            <h1 class='country-list__name'>
                ${name.official}
            </h1>
        </div>
        <ul class='country-info__list'>
            <li class='country-info__item'>
                Capital:
                <span class='country-info__description'>
                    ${capital}
                </span>
            </li>
            <li class='country-info__item'>
                Population:
                <span class='country-info__description'>
                    ${population}
                </span>
            </li>
            <li class='country-info__item'>
                Languages:
                <span class='country-info__description'>
                    ${Object.values(languages)}
                </span>
            </li>
        </ul>
        `).join('');
}