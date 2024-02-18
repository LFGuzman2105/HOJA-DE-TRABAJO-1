async function getData() {
    try {
        const Id = document.getElementById("Id").value;
        
        if (Id != "") {
            const URL = "https://swapi.dev/api/people/" + Id;
            const Response = await fetch(URL);
            if (Response.ok) {
                const Data = await Response.json();
                console.log(Data);
                let HTMLtext = `
                <div id ="Personaje">
                    <div class="Datos">
                        <h2>Nombre:</h2><h2>${Data.name}</h2>
                    </div>
                    <div class="Datos">
                        <h2>Altura:</h2><h2>${Data.height}</h2>
                    </div>
                    <div class="Datos">
                        <h2>Masa:</h2><h2>${Data.mass}</h2>
                    </div>
                    <div class="Datos">
                        <h2>Color de cabello:</h2><h2>${Data.hair_color}</h2>
                    </div>
                    <div class="Datos">
                        <h2>Color de piel:</h2><h2>${Data.skin_color}</h2>
                    </div>
                    <div class="Datos">
                        <h2>Color de ojos:</h2><h2>${Data.eye_color}</h2>
                    </div>
                    <div class="Datos">
                        <h2>Año de nacimiento:</h2><h2>${Data.birth_year}</h2>
                    </div>
                    <div class="Datos">
                        <h2>Género:</h2><h2>${Data.gender}</h2>
                    </div>
                </div>`;
                document.getElementById("Resultado").innerHTML = HTMLtext;
            }
            else {
                throw new Error("Error: " +Response.statusText);
            }
        }
        else {
            alert("Ingrese un ID valido");
        }
    }
    catch (Error) {
        console.error("Error", Error);
        throw Error;
    }   
}