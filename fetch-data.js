async function fetchUserData() {
    const apiUrl = "https://jsonplaceholder.typicode.com/users"
    const dataContainer = document.getElementById('api-data')

    try {
        const response = await fetch(apiUrl, {
            method: 'GET',
        })
        const users = await response.json()
        dataContainer.innerHTML = '';
        const userList = document.createElement('ul');

        users.forEach(user => {
            list = document.createElement('li');
            list.textContent = user.name;
            userList.appendChild(list)
        });

        dataContainer.appendChild(userList)
    } catch (error) {
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.'
    }
}

document.addEventListener('DOMContentLoaded', fetchUserData)