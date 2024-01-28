document.addEventListener('DOMContentLoaded', function() {
    var navList = document.getElementById('navList');

    for (let i = 0; i < 12; i++) {
        var novoItem = document.createElement('li');
        var novoLink = document.createElement('a');

        novoLink.href = '#';
        novoLink.className ='navLink';
        novoItem.className = 'navItem';
        novoLink.textContent = `Página ${i}`;

        novoItem.appendChild(novoLink);
        navList.appendChild(novoItem);
    }
});
