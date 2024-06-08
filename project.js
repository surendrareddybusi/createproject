document.getElementById('createProjectBtn').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'flex';
});

document.getElementById('cancelBtn').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
});

document.getElementById('createBtn').addEventListener('click', function() {
    const projectName = document.getElementById('projectName').value;
    if (projectName) {
        alert(`Project "${projectName}" created successfully!`);
        document.getElementById('popup').style.display = 'none';
        document.getElementById('projectName').value = '';
    } else {
        alert('Please enter a project name.');
    }
});
