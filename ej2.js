const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]
//1.Recorremos el array y luego accedemos a favouritesouns
// 2.Luego accedemos a favouritesounds

// 3.Ahora sacamos los datos de volumen para sumarlos
let contador=0;
let sum=0;
for (const user of users) {
    // console.log(user.favoritesSounds);
    for (const key in user.favoritesSounds) {
       console.log(user.favoritesSounds[key].volume);
       contador++;
       sum+=user.favoritesSounds[key].volume;
    }
}
console.log(sum);
console.log(sum/contador);