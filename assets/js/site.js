let listItem = document.getElementsByClassName('list-item');

for (let i = 0; i < listItem.length; i++) {
    listItem[i].addEventListener('mouseenter',function(){
        if(listItem[i].getElementsByClassName('view-experience').length > 0)
            listItem[i].getElementsByClassName('view-experience')[0].classList.add('activeItem');
    });
    listItem[i].addEventListener('click',function(){
        if(listItem[i].getElementsByClassName('view-experience').length > 0)
            listItem[i].getElementsByClassName('view-experience')[0].classList.add('activeItem');
    });
}

for (let i = 0; i < listItem.length; i++) {
    listItem[i].addEventListener('mouseleave',function(){
        if(listItem[i].getElementsByClassName('view-experience').length > 0)
            listItem[i].getElementsByClassName('view-experience')[0].classList.remove('activeItem');
    });
}