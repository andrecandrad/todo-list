var list = document.querySelector('.list');
var input = document.querySelector('input');
var addBtn = document.querySelector('button');

var arr = [];
render();

function render(){
    list.innerHTML = '';

    if(arr[0] == undefined){
        var li = document.createElement('li');
        var todoDsc = document.createTextNode('Você ainda não tem nada na sua lista.');
        li.appendChild(todoDsc);
        list.appendChild(li);
    }

    arr.forEach((item, index) => {
        var li = document.createElement('li');
        var todoDsc = document.createTextNode(item);
        li.appendChild(todoDsc);

        var todoRmv = document.createElement('a');
        var rmvText = document.createTextNode('Excluir');
        todoRmv.appendChild(rmvText);
        todoRmv.setAttribute('href', '#')
        todoRmv.setAttribute('onclick', 'removeElement(' + index + ');');
        li.appendChild(todoRmv);

        list.appendChild(li);
    })
}

function removeElement(pos){
    arr.splice(pos, 1);
    render();
}

addBtn.setAttribute('onclick', 'addElement()');

function addElement(){
    if(input.value){
        arr.push(input.value);
        input.value = '';
        render();
    }
}







// function renderLi(){
//     arr.forEach((item, index) => {
//         var LiElement = document.createElement('li');
//         var LiText = document.createTextNode(item);
//         var liLink = document.createElement('a');
//         var linkText = document.createTextNode('Excluir');
//         liLink.setAttribute('onclick', 'devareItem(' + index + ');')
//         LiElement.appendChild(LiText);
//         liLink.appendChild(linkText);
//         liLink.setAttribute('href', '#');
//         list.appendChild(LiElement);
//         LiElement.appendChild(liLink);
//     })
// }

// function devareItem(pos){
//     arr.slice(pos, 1);
//     renderLi();
// }