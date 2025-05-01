document.addEventListener('DOMContentLoaded', function() {
    // This script adds flipbook navigation functionality
    // It's minimal for GitHub Pages but can be expanded for more interactivity
    
    // For implementing navigation buttons or other interactive features
    console.log('Flipbook loaded successfully');
    
    // Add event listeners for keyboard navigation if needed
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowRight') {
            // Navigate to next page
            console.log('Navigate to next page');
        } else if (e.key === 'ArrowLeft') {
            // Navigate to previous page
            console.log('Navigate to previous page');
        }
    });
    
    // Add print button functionality
    const printButton = document.createElement('button');
    printButton.textContent = 'Print Flipbook';
    printButton.style.position = 'fixed';
    printButton.style.bottom = '20px';
    printButton.style.right = '20px';
    printButton.style.padding = '10px 15px';
    printButton.style.backgroundColor = '#1a56db';
    printButton.style.color = 'white';
    printButton.style.border = 'none';
    printButton.style.borderRadius = '4px';
    printButton.style.cursor = 'pointer';
    
    printButton.addEventListener('click', function() {
        window.print();
    });
    
    document.body.appendChild(printButton);
