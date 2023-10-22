let todoList = [
    {
        id: 1,
        title: 'name task 1',
        isDone: false,
        isImportant: false,
    },
    {
        id: 2,
        title: 'name task 2',
        isDone: false,
        isImportant: false,
    },
    {
        id: 3,
        title: 'name task 3',
        isDone: false,
        isImportant: false,
    },
];

let list = document.querySelector('.todo__list');
let form = document.querySelector('.todo__form');
const showList = () => {
    todoList.forEach((item, idx) => {
        list.innerHTML += '<li class="todo__item">' +
            '                <span class="todo__item-title">' + item.title + '</span>' +
            '                <div class="todo__item-buttons">' +
            '                    <button class="todo__item-button done">Done</button>' +
            '                    <button class="todo__item-button important">Important</button>' +
            '                    <button class="todo__item-button delete" >Delete</button>' +
            '                </div>' +
            '            </li>'
    });
    let todoBtnDelete = document.querySelectorAll('.delete');

    todoBtnDelete.forEach((item, idx) => {
        item.addEventListener('click', (evt) => {
            todoList = todoList.filter((el, index) => {
                return index !== idx
            });
            list.innerHTML = ''
            showList()
        });
    });
}
form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    todoList = [...todoList,{
        id: todoList[todoList.length - 1].id + 1,
        title: evt.target[0].value,
        isDone: false,
        isImportant: false,
    }];
    evt.target[0].value = ''
    list.innerHTML = ''
    showList()
});

showList()
