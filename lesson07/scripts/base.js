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

// WEEK 07

const input1 = document.querySelector('#favchap');
const button1 = document.querySelector('button');
const list1 = document.querySelector('#list');

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

button1.addEventListener('click', () => {
    if (input1.value != '') {  // make sure the input is not empty
        displayList(input1.value); // call the function that outputs the submitted chapter
        chaptersArray.push(input1.value);  // add the chapter to the array
        setChapterList(); // update the localStorage with the new array
        input1.value = ''; // clear the input
        input1.focus(); // set the focus back to the input
    }
});

function displayList(item) {
    let li = document.createElement('li');
    let deletebutton = document.createElement('button');
    li.textContent = item; // note the use of the displayList parameter 'item'
    deletebutton.textContent = '❌';
    deletebutton.classList.add('delete'); // this references the CSS rule .delete{width:fit-content;} to size the delete button
    li.append(deletebutton);
    list1.append(li);
    deletebutton.addEventListener('click', function () {
        list1.removeChild(li);
        deleteChapter(li.textContent); // note this new function that is needed to remove the chapter from the array and localStorage.
        input1.focus(); // set the focus back to the input
    });
    console.log('I am doing my best to understand this code');
}

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}