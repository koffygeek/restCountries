
const url = `https://restcountries.com/v3.1/all`

const root = document.querySelector("#root")
const fetchCountry = async ()=>{

    const response = await fetch(url)
    const data = await response.json()

    console.log(data)

    const displayData = (item)=>{
            let template = document.createElement("div")
            template.setAttribute("class","result")
            for(let el of item){

                template.innerHTML =
                 `
                 <img src=${el.flags.png} alt=${el.name} >
                 <h1>${el.name.common}</h1>
                 <h3>Population : ${el.population}</h3>
                 <h4>Region : ${el.region}</h4>
                 <h4>Capital : ${el.capital}</h4>
                 `
                root.append(template)
            }

    }
    displayData(data)

}

fetchCountry()

// ()=>{

// }
// function (){

// }

// function fetchCountry(){

// }

// const fetchedCoutry = function(){

// }