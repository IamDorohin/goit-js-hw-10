export const fetchCountries = function(value) {
    const filter = `fields=name,capital,population,flags,languages`;
    return fetch(`https://restcountries.com/v3.1/name/${value}?${filter}`)
    .then(response => {
        if (!response.ok) {
            throw new Error(response.status);
          }
          return response.json();
    })
};




