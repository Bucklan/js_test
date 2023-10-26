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
        isImportant: true,
    },
]; //object

let list = document.querySelector('.todo__list'); // tag ul for list
let form = document.querySelector('.todo__form'); // form for add task

const showList = (status = 'all') => { //main function - doing add elements to list
    todoList.filter((item) => {
        if (status === 'important') {
            return item.isImportant
        }
        if (status === 'done') {
            return item.isDone
        }else {
            return item
        }
    }).forEach((item) => { // foreach for gets list
        //for add to our tag ul - our tasks
        list.innerHTML += `<li class="todo__item">
                <span style="color: ${item.isImportant ? 'red' : ''};text-decoration: ${item.isDone ? 'line-through' : ''}" class="todo__item-title">${item.title}</span>
                <div class="todo__item-buttons">
                    <button class="todo__item-button done"  data-id="${item.id}">Done</button>
                    <button class="todo__item-button important" data-id="${item.id}">Important</button>
                    <button class="todo__item-button delete" data-id="${item.id}">Delete</button>
                </div>
            </li>`
    });
    let todoBtnDelete = document.querySelectorAll('.delete'); //
    let todoDone = document.querySelectorAll('.done');
    let todoImportant = document.querySelectorAll('.important');

    todoBtnDelete.forEach((item) => {
        item.addEventListener('click', () => {
            todoList = todoList.filter((el) => {
                return item.dataset.id != el.id
            });
            list.innerHTML = ''
            showList()
        });
    });

    todoImportant.forEach((item) => {
        item.addEventListener('click', () => {
            todoList = todoList.map((el) => {
                if (item.dataset.id == el.id) {
                    return {...el, isImportant: !el.isImportant}
                }
                return el
            })
            list.innerHTML = ''
            showList();
        })

    })
    todoDone.forEach((item) => {
        item.addEventListener('click', () => {
            todoList = todoList.map((el) => {
                if (item.dataset.id == el.id) {
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


let all = document.querySelector('.status__all')
let done = document.querySelector('.status__important')
let important = document.querySelector('.status__important')


all.addEventListener('click', () => {
    list.innerHTML = ''
    showList()

});
done.addEventListener('click', () => {
    list.innerHTML = ''
    showList('done')

});
important.addEventListener('click', () => {
    list.innerHTML = ''
    showList('important')
});

showList()
