import usersStore from '../../store/users-store';
import './render-table.css';

let table;

const createTable = () => {
    const table = document.createElement('table');
    const tableHeader = document.createElement('thead');
    tableHeader.innerHTML = `
        <tr>
            <th>Id</th>
            <th>Balance</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Active</th>
            <th>Actions</th>
        </tr>
    `;
    const tableBody = document.createElement('tbody');
    table.appendChild(tableHeader);
    table.appendChild(tableBody);
    return table; 
}

export const RenderTable = (element) => {
    const users = usersStore.getUsers(); // users en plural, ya que es una lista
    if (!table) {
        table = createTable(users); // No es necesario pasar users a createTable, ya que no se usa en esa función
        element.append(table);
    }

    let tableHTML ='';
    users.forEach(user =>{
        tableHTML += `
            <tr>
                <td>${user.id}</td>
                <td>${user.balance}</td>
                <td>${user.firstName}</td>
                <td>${user.lastName}</td>
                <td>${user.isActive}</td>
                <td>
                    <a href="#/" data-id="${user.id}">Select</a>
                    |
                    <a href="#/" data-id="${user.id}">Delete</a>
                </td>
            </tr>
        `;
    });
    table.querySelector('tbody').innerHTML = tableHTML;
    console.log('RenderTable');
    
}
