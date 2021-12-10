import './sass/main.scss';

const itemInput=document.getElementById("new-item");//Add a new item.
const addButton=document.getElementsByTagName("button")[0];//first button
const itemsList=document.getElementById("list");//ul 


//New Item list item
const createNewItemElement=function(itemString){

	const listItem=document.createElement("li");

	//label
	const label=document.createElement("label");//label
	//input (text)
	const editInput=document.createElement("input");//text
	//button.edit
	const editButton=document.createElement("button");//edit button

	//button.delete
	const deleteButton=document.createElement("button");//delete button

	label.innerText=itemString;

	//Each elements, needs appending
	editInput.type="text";

	editButton.innerText="Edit";//innerText encodes special characters, HTML does not.
	editButton.className="edit";
	deleteButton.innerText="Delete";
	deleteButton.className="delete";

	//and appending.
	listItem.appendChild(label);
	listItem.appendChild(editInput);
	listItem.appendChild(editButton);
	listItem.appendChild(deleteButton);
	return listItem;
}



const addItem=function(){
	console.log("Add Item...");
	//Create a new list item with the text from the #new-item:
	const listItem=createNewItemElement(itemInput.value);

	//Append listItem to itemsList
	itemsList.appendChild(listItem);
	bindItemEvents(listItem);

	itemInput.value="";

}

//Edit an existing item.

const editItem=function(){
console.log("Edit Item...");
console.log("Change 'edit' to 'save'");


const listItem=this.parentNode;

const editInput=listItem.querySelector('input[type=text]');
const label=listItem.querySelector("label");
const containsClass=listItem.classList.contains("editMode");
		//If class of the parent is .editmode
		if(containsClass){

		//switch to .editmode
		//label becomes the inputs value.
			label.innerText=editInput.value;
		}else{
			editInput.value=label.innerText;
		}

		//toggle .editmode on the parent.
		listItem.classList.toggle("editMode");
}

//Delete item.
const deleteItem=function(){
		console.log("Delete Item...");

		const listItem=this.parentNode;
		const ul=listItem.parentNode;
		//Remove the parent list item from the ul.
		ul.removeChild(listItem);

}

const ajaxRequest=function(){
	console.log("AJAX Request");
}

//Set the click handler to the addItem function.
addButton.onclick=addItem;
addButton.addEventListener("click",addItem);
addButton.addEventListener("click",ajaxRequest);


const bindItemEvents=function(itemListItem){
	console.log("bind list item events");
//select ListItems children
	const editButton=itemListItem.querySelector("button.edit");
	const deleteButton=itemListItem.querySelector("button.delete");

			//Bind editItem to edit button.
			editButton.onclick=editItem;
			//Bind deleteItem to delete button.
			deleteButton.onclick=deleteItem;
}


