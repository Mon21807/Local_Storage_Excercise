document.addEventListener('DOMContentLoaded', function() {
    const userForm = document.getElementById('userForm');
    const retrieveBtn = document.getElementById('retrieveBtn');
    const displayArea = document.getElementById('displayArea');

    userForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const age = document.getElementById('age').value;

        // Store data in Local Storage
        localStorage.setItem('userName', name);
        localStorage.setItem('userAge', age);

        // Clear form fields
        userForm.reset();
    });

    retrieveBtn.addEventListener('click', function() {
        // Retrieve data from Local Storage
        const storedName = localStorage.getItem('userName');
        const storedAge = localStorage.getItem('userAge');

        // Display data in a table
        if (storedName && storedAge) {
            displayArea.innerHTML = `
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                    <tr>
                        <td>${storedName}</td>
                        <td>${storedAge}</td>
                    </tr>
                </table>
            `;
        } else {
            displayArea.innerHTML = 'No data found in Local Storage.';
        }
    });
});
