function getName() {
    let cc = document.getElementById('input').value;
    console.log(cc);

    async function getData() {
        let data = await fetch(`https://api.nationalize.io/?name=${cc}`);
        // console.log(data);
        let result = await data.json();
        // console.log(result);
        document.getElementById("name").style.fontWeight = "900";
        document.getElementById('name').innerHTML = `Name: ${result.name}`;

        for (let a = 0; a < result.country.length; a++) {
            let b = result.country[a];
            // console.log(b);

            let countryCode = b.country_id;
            // console.log(countryCode);

            let probabilitys = b.probability;
            // console.log(probabilitys);

            let restCountries = await fetch('https://restcountries.com/v2/all');
            // console.log(restCountries);
            let restCountriesData = await restCountries.json();
            // console.log(restCountriesData);

            for (let i in restCountriesData) {
                // console.log(`${restCountriesData[i].alpha2Code}`);

                if (restCountriesData[i].alpha2Code === countryCode) {

                    var pdiv = document.createElement('div');
                    var prob = document.createElement('div1');

                    pdiv.setAttribute('id', 'country');
                    prob.setAttribute('id', 'probability');
                    pdiv.innerHTML = `Country: ${restCountriesData[i].name}`;
                    prob.innerHTML = `Probability of Name: ${probabilitys}`;
                    document.body.append(pdiv);
                    document.body.append(prob);

                }
            }



        }


    }

    getData();
}
