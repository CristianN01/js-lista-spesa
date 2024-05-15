const shoppingList =['patate','cipolle','carote','carne','pasta','ruota',];
const ulEl = document.querySelector('ul');

elementList = 0;

while (elementList < shoppingList.length) {
    const element = document.createElement('li');
    element.append(shoppingList[elementList]);
    elementList++

    ulEl.appendChild(element);
}