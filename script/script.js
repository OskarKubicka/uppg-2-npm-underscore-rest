import underscore from '../node_modules/underscore/underscore-esm.js';
import anime from '../node_modules/animejs/lib/anime.es.js'

document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();
    console.log(document.querySelector('form').childNodes[1].value);
    let lang = document.querySelector('form').childNodes[1].value
    const url = `https://restcountries.com/v3.1/lang/${lang}`
    console.log(url)
    async function fetchCountries(url) {
        const response = await fetch(url);
        const countries = await response.json()

        sortCountries(countries)

        console.log(countries, sortCountries(countries))
        showCountries(sortCountries(countries))


    }
    fetchCountries(url)

    function sortCountries(arr) {

        const sortedCountries = underscore.sortBy(arr, 'population')
        console.log(sortedCountries)

        return sortedCountries.reverse()
    }
    function showCountries(arr) {
        
        console.log(arr.length)
        
        const h1 = document.createElement('h1');
        document.body.append(h1);
        h1.innerText = arr[0].name.common
        h1.id = "first"
        if (arr.length > 1) {
            const h12 = document.createElement('h1');
            document.body.append(h12);
            h12.innerText = arr[1].name.common
            h12.id = "second"
        }
        if (arr.length > 2) {
            const h13 = document.createElement('h1');
            document.body.append(h13);
            h13.innerText = arr[2].name.common
            h13.id = "third"
        }
        anime({
            targets: 'h1',
            keyframes: [
                
                {translateX: 250},
                {translateX: 0},
                
              ],
              duration: 4000,
              delay: anime.stagger(100),
              easing: 'easeOutElastic(1, .8)',
              loop: true
        })

    }
})



