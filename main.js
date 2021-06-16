let a = 1;
let b = 2;
let c = 3;
let oke = (a, b, c) => {
    console.log(a * b * c);
}

let p = document.querySelector('p')

p.addEventListener('click', oke.bind(oke, a, b, c))