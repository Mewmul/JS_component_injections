// Function to fetch and inject the content
function loadComponent(componentPath) {
    // Fetch and inject the content
    fetch(componentPath)
        .then(response => response.text())
        .then(data => {
            document.getElementById('componentContainer').innerHTML = data;
        });
}

// Add click event listener to all elements with the "loadComponent" class
document.querySelectorAll('.loadComponent').forEach(function(element) {
    element.addEventListener('click', function(event) {
        event.preventDefault();
        const componentPath = element.getAttribute('data-component');
        loadComponent(componentPath);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Replace 'path/to/your/default-component.html' with the actual path to your default component
    const defaultComponentPath = '../components/component2.html';
    loadComponent(defaultComponentPath);
});