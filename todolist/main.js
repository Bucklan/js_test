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
        isDone: true,
        isImportant: false,
    },
];

let list = document.querySelector('.todo__list');
let form = document.querySelector('.todo__form');
let todoBtnDelete;
const showList = () => {
    todoList.forEach((item, idx) => {
        list.innerHTML += `<li class="todo__item">
                <span style="color: ${item.isImportant ? 'red' : ''};text-decoration: ${item.isDone ? 'line-through' : ''}" class="todo__item-title">${item.title}</span>
                <div class="todo__item-buttons">
                    <button class="todo__item-button done">Done</button>
                    <button class="todo__item-button important">Important</button>
                    <button class="todo__item-button delete">Delete</button>
                </div>
            </li>`
    });
    todoBtnDelete = document.querySelectorAll('.delete');
    let todoDone = document.querySelectorAll('.done');
    let todoImportant = document.querySelectorAll('.important');

    todoBtnDelete.forEach((item, idx) => {
        item.addEventListener('click', (evt) => {
            todoList = todoList.filter((el, index) => {
                return index !== idx
            });
            list.innerHTML = ''
            showList()
        });
    });

    todoImportant.forEach((item, idx) => {
        item.addEventListener('click', (evt) => {
            todoList = todoList.map((el, index) => {
                if (index === idx) {
                    return {...el, isImportant: !el.isImportant}
                }
                return el
            })
            list.innerHTML = ''
            showList();
        })

    })
    todoDone.forEach((item, idx) => {
        item.addEventListener('click', (evt) => {
            todoList = todoList.map((el, index) => {
                if (index === idx) {
                    return {...el, isDone: !el.isDone}
                }
                return el
            })
            list.innerHTML = ''
            showList();
        })

    })

    spanTodoCount.textContent = todoList.length;
    emptyList.style.display = todoList.length ? 'none' : 'block';

}
form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    todoList = [...todoList, {
        id: todoList.length ? todoList[todoList.length - 1].id + 1 : 1,
        title: evt.target[0].value,
        isDone: false,
        isImportant: false,
    }];
    evt.target[0].value = ''
    list.innerHTML = ''
    showList()
});

let spanTodoCount = document.querySelector('.todo_count-num');
let emptyList = document.querySelector('.todo__empty');


showList()
