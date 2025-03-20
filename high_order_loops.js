// for of loop

    const arr = [1,2,3,4,5,6];
    
    for (const num of arr) {
        console.log(num);
    }

// Maps in js

    const map = new Map();

    map.set('a',0);
    map.set('b',1);
    map.set('c',2);
    map.set('d',3);

    console.log(map);

    // for (const ev of map) {
    //     console.log(ev[0] + " "+ ev[1]);
        
    // }

    for (const [key ,value] of map) {
        console.log(key , ":-" ,value);
    }
    