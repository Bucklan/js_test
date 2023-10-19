/*let test = document.getElementById('id_number')
   console.log(test.textContent); //читает все пробелы и отступы и не читает теги будем работать с ним
   console.log(test.innerText); // читает пробелы отступы и читает теги
   console.log(test.innerHTML); // не читает пробелы отступы и теги*/

// let test2 = document.querySelector('p')
// console.log(test2.className); // получаем простой текст и выдает названия класса
// console.log(test2.classList); // получаем псевдомоссив какой-то с value ми

// test2.className += "_red"; //add  class
// test2.className = "red"; //edited  class


// test2.classList.add('qwe') //add  class
// test2.classList.remove('first') //add  class
// test2.classList.toggle('first') //add class if, don't have else remove
// test2.classList.replace('first', 'second') // replaced
//
//
// let issetClass = test2.classList.contains('second') //search class if, have true else false to type boolean
//
// let dashboard = document.querySelector('.dashboard');
// console.log(test2.attributes)
// let h3 = document.createElement('h3'); //create new tag
//
// let body = document.body;
// body.appendChild(h3); //add element to body to end
// body.appendChild(h3); //add element to body to end
// body.prepend(h3); //add element to body to begin
// body.append('234'); //add element to body in text
// h3.textContent = 'new element';
// console.log(h3)
//
// dashboard.after(h3) // add h3 after dashboard
// dashboard.before(h3) // add h3 after dashboard


// let box = document.querySelector('#box');
// let hello = document.querySelector('.hi');

// box.removeChild(hello);//delete child class
// hello.remove() // delete element

// console.log(box.children); // get box children
//
// console.log(box.childNodes)
//
// console.log(box.childElementCount) // count class child
//
// console.log(hello.parentElement) //get first parent class
// console.log(hello.parentNode) //get first parent class
//
// console.log(hello.nextElementSibling) // get next element after hello
// console.log(hello.previousElementSibling) // get previous element before hello
// let input = document.querySelector('input');
// let h1 = document.querySelector('.dashboard');
// let btn = document.querySelector('button')
//
// let agent = document.querySelector('#message');
// let agentSpan = document.querySelector('span');

// console.log(input.value) // get value list inputs
// console.log(input.checked); // check inputs when input type checkbox and checked
// console.log(input.disabled); // check inputs when input disabled

// btn.onclick = () => {
//     alert('my function')
// }
// btn.onmouseover = () => {
//     h1.style.background = 'red'
// }
// btn.onmouseleave = () => {
//     h1.style.background = 'transparent'
// }
//
// btn.ondblclick = () => {
//     alert('my function')
// }
// let asd = () => {
//     console.log(false)
// }
// btn.disabled = true
// btn.addEventListener('click', () => {
//     asd()
//     if (input.value.length > 0) {
//         agentSpan.textContent = input.value;
//         input.value = ''
//     }
// });


// input.addEventListener('input', () => {
//     if (input.value.trim() !== '') {
//         btn.disabled = false
//     } else {
//         btn.disabled = true
//     }
// })

// input.addEventListener('change', (evt) => {
//     agentSpan.textContent = input.value
//     if (input.value.length < 1) {
//         btn.disabled = true;
//     } else {
//         btn.disabled = false
//     }
// })
// let form = document.querySelector('form');
// let inputText = document.querySelector('#input1')
// let checkBox = document.querySelector('#check1')
// let btnSub = document.querySelector('#sub')

// form.addEventListener('submit', (evt) => {
//     evt.preventDefault() // function for prohibition re-setup sites
// console.log(evt.target[0].value) // meaning first element to form
// evt.target[0] -> input
// evt.target[1] -> check
// if (evt.target[1].checked) {
//     agentSpan.textContent = evt.target[0].value
//     evt.target[0].value = ''
//     evt.target[1].checked = false
// } else {
//     alert('insert check')
// }
// });


let form = document.querySelector('form');
let ul = document.querySelector('ul');
form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if (evt.target[0].value.length > 0) {
        let li = document.createElement('li');
        li.textContent = evt.target[0].value;
        ul.append(li)
        evt.target[0].value = '';
    } else {
        alert('ERROR');
    }
});

let listItem = document.querySelectorAll('li');


Array.from(listItem).forEach(item => {
    item.style.cursor = 'pointer'
    item.addEventListener('click', (evt) => {
        item.style.color = 'darkred'
    })
})
