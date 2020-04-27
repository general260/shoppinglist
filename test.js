// create the variables for item form and list items and the filter search bar
const form = document.querySelector('#addForm');
const itemList = document.querySelector('#items');
const filter = document.querySelector('#filter');
const clearList = document.querySelector('#clearList');

//add event listener to the form to listen for a submit
form.addEventListener('submit', addItem);

//add event listener to the item list to listen for a click on the button
itemList.addEventListener('click', delItem);

//add event listener to listen for click on the clear list button
clearList.addEventListener('click', clearItem);

//add event listenetr for the filter field to listen for keyup
filter.addEventListener('keyup', searchItem);

//create a function to filter the list 
function searchItem(e){
    //convert the input on the search bar to lowercase
    const filterItem = e.target.value.toLowerCase();
    //grab the li from the item list global var by tagname into anew instanse
    const items = itemList.getElementsByTagName('li');
    //convert to an array from the new items
    Array.from(items).forEach(function(item) {
        //create new variable of the text content of the firstchild of the item
        const newItem = item.firstChild.textContent;
        // checkif the new item name when converted to lowecase and the indexof the filter item is not equal to -1
        if(newItem.toLowerCase().indexOf(filterItem) != -1){
            item.style.display = 'block';
        }   else
            item.style.display = 'none';
    });
}

//create function to remove all the items that have delete class using ES6 parameters
function clearItem(){
    // create a variable to select all the items on the list 
    const list = document.querySelectorAll('.list-group-item');
    if(confirm('Are you certain?')){
    //create an arrow function to remove the elements while it runs through a foreach loop
    list.forEach(e => e.remove());
    }

}

//create function to remove item using the event 
function delItem(e) {
    //check if the target button contains the class delete
    if(e.target.classList.contains('delete')){
        //confirm with an alert 
        if(confirm('Are you sure?')){
            const li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

//create function to add item using the event 
function addItem(e){
    e.preventDefault();
    //get the input of the form 
    const newItem = document.querySelector('#item').value;
    //create a new list item
    const li = document.createElement('li');
    // style new list item 
    li.className = 'list-group-item';
    //append new item to the list by creating a text node
    li.appendChild(document.createTextNode(newItem));
    // append new list item to the item list 
    itemList.appendChild(li);
    // create the delete button 
    const delBtn = document.createElement('button');
    // style new button 
    delBtn.className = 'btn btn-danger btn-sm float-right delete';
    // create textnode on the new button
    delBtn.appendChild(document.createTextNode('X'));
    //apend new delbtn to the list item
    li.appendChild(delBtn);
}