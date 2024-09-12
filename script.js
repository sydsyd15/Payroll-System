// Get references to form elements
const employeeForm = document.getElementById('employee-form');
const employeeNameInput = document.getElementById('employee-name');
const employeeIDInput = document.getElementById('employee-id');
const employeePositionInput = document.getElementById('employee-position');
const employeeList = document.getElementById('employees');

// Handle form submission
employeeForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from submitting the traditional way

    // Get input values
    const employeeName = employeeNameInput.value.trim();
    const employeeID = employeeIDInput.value.trim();
    const employeePosition = employeePositionInput.value.trim();

    // Validate input values
    if (!employeeName || !employeeID || !employeePosition) {
        alert('Please fill in all fields.');
        return;
    }

    // Create a new list item for the employee
    const listItem = document.createElement('li');
    listItem.className = 'employee-item'; // Add a class for styling
    listItem.innerHTML = `
        <span>ID: ${employeeID}</span>
        <span>Name: ${employeeName}</span>
        <span>Position: ${employeePosition}</span>
        <button class="btn-remove">Remove</button>
    `;

    // Add the new employee to the list
    employeeList.appendChild(listItem);

    // Clear the form inputs after submission
    employeeForm.reset();
});

// Handle click events on the employee list for removal
employeeList.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn-remove')) {
        const listItem = e.target.parentElement;
        employeeList.removeChild(listItem);
    }
});

    document.getElementById('profile-pic').addEventListener('change', function(event) {
        // Check if a file is selected
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            
            // Define what happens when the file is read
            reader.onload = function(e) {
                // Update the image source with the new file
                document.getElementById('profile-pic').src = e.target.result;
            };

            // Read the selected file
            reader.readAsDataURL(event.target.files[0]);
        }
    }