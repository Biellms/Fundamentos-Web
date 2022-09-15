function adicionar() {
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
    th.innerText = 'Tabela';

    tbody.appendChild(tr_2);
    tr_2.appendChild(td_1);
    tr_2.appendChild(td_2);
    tr_2.appendChild(td_3);
    td_1.innerText = returnInfo();
    td_2.innerText = randomNumber();
    td_3.innerText = randomString();
    tbody.appendChild(tr_3);
    tr_3.appendChild(td_4);
    tr_3.appendChild(td_5);
    tr_3.appendChild(td_6);
    td_4.innerText = returnInfo();
    td_5.innerText = randomNumber();
    td_6.innerText = randomString();
    tbody.appendChild(tr_4);
    tr_4.appendChild(td_7);
    tr_4.appendChild(td_8);
    tr_4.appendChild(td_9);
    td_7.innerText = returnInfo();
    td_8.innerText = randomNumber();
    td_9.innerText = randomString();

    table.appendChild(thead);
    table.appendChild(tbody);
    table.setAttribute('id', 'idTable');

    document.getElementById('tabela').appendChild(table);
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

function returnInfo() {
    let s = ''
    let info = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    
    s = info.charAt(Math.floor(Math.random() * info.length));
    
    return s
}

function randomString() {
    let s = ''
    let info = new Array("Sim", "Nao")
    let n = 0

    n = Math.floor(Math.random() * 2)
    s = info[n]

    return s
}

function randomNumber() {
    let n = 0;
    n = Math.floor(Math.random() * 100)

    return n
}