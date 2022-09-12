function adicionar() {
// for (let i = 0; i < 12; i++) {
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');
    let tr = document.createElement('tr');
    let tr_2 = document.createElement('tr');
    let tr_3 = document.createElement('tr');
    let tr_4 = document.createElement('tr');
    let th = document.createElement('th');
    let td_1 = document.createElement('td');
    let td_2 = document.createElement('td');
    let td_3 = document.createElement('td');
    let td_4 = document.createElement('td');
    let td_5 = document.createElement('td');
    let td_6 = document.createElement('td');
    let td_7 = document.createElement('td');
    let td_8 = document.createElement('td');
    let td_9 = document.createElement('td');

    thead.appendChild(tr);
    tr.appendChild(th);
    th.colSpan = 3;
    th.innerText = 'Teste';

    tbody.appendChild(tr_2);
    tr_2.appendChild(td_1);
    tr_2.appendChild(td_2);
    tr_2.appendChild(td_3);
    tbody.appendChild(tr_3);
    tr_3.appendChild(td_4);
    tr_3.appendChild(td_5);
    tr_3.appendChild(td_6);
    tbody.appendChild(tr_4);
    tr_4.appendChild(td_7);
    tr_4.appendChild(td_8);
    tr_4.appendChild(td_9);
    td_1.innerText = 'Teste';
    td_2.innerText = 'Teste';
    td_3.innerText = 'Teste';
    td_4.innerText = 'Teste';
    td_5.innerText = 'Teste';
    td_6.innerText = 'Teste';
    td_7.innerText = 'Teste';
    td_8.innerText = 'Teste';
    td_9.innerText = 'Teste';

    table.appendChild(thead);
    table.appendChild(tbody);
    table.setAttribute('id', 'idTable');

    // Adding the entire table to the body tag
    document.getElementById('tabela').appendChild(table);
// }
}

function remover() {
    let tabela = document.getElementById('idTable');
    tabela.parentNode.removeChild(tabela);
}

function removerTodos() {
    while (tabela.hasChildNodes()) {
        remover()
    }
}
