//In your js file, declare three const variables that hold references to the input, button, and .list elements.

const input = document.querySelector('#favchap');
const input2 = document.querySelector('#favhero')
const button = document.querySelector('button');
const button2 = document.querySelector('#button2')
const list = document.querySelector('#list');
const list2 = document.querySelector('#heroes');

//Create a click event listener for the Add Chapter button using addEventListener and an anonymous function or arrow function.

button.addEventListener('click', function () {
    if (input.value != '') {
        const li = document.createElement('li')
        const deleteButton = document.createElement('button')
        li.textContent = input.value
        deleteButton.textContent = '❌'
        li.append(deleteButton)
        list.append(li)
        deleteButton.addEventListener('click', function () {
            list.removeChild(li)
            input.focus()
        })
        input.focus()
        input.value = ''
    }
});

button2.addEventListener('click', function () {
    if (input2.value != '') {
        const li = document.createElement('li')
        const deleteButton2 = document.createElement('button')
        li.textContent = input2.value
        deleteButton2.textContent = '❌'
        li.append(deleteButton2)
        list2.append(li)
        deleteButton2.addEventListener('click', function () {
            list2.removeChild(li)
            input2.focus()
        })
        input2.focus()
        input2.value = ''
    }
});
