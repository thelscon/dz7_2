'use strict' ;

alert ( 'Реализовать ф-ю, которая принимает объект и возвращает число обозначающее длину всех строковых значений внутри этого объекта.' ) ;

let currentObject = {
    ['motherboard'] : 'Asus' ,
    ['processor'] : 'Ryzen' ,
    ['videoCard'] : 'Radeon' ,
    ['memory'] : 222
} ;

let getAllLength = thisObject => {
    let allLenght = 0 ;

    for ( let key in thisObject ) {
        if ( typeof ( thisObject [key] ) === 'string' ) {
            allLenght += thisObject [key].length ;
        }
    }

    return allLenght ;
} ;

alert ( getAllLength ( currentObject ) ) ;