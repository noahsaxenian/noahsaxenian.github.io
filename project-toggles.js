// Toggle Sections Functionality
document.addEventListener('DOMContentLoaded', function() {
    
    // Get all toggle sections
    const toggleSections = document.querySelectorAll('.toggle-section');
    
    toggleSections.forEach(section => {
        const header = section.querySelector('.toggle-header');
        const content = section.querySelector('.toggle-content');
        const icon = section.querySelector('.toggle-icon');
        
        if (header && content) {
            header.addEventListener('click', function() {
                const isOpen = content.classList.contains('active');
                
                if (isOpen) {
                    // Close the section
                    content.classList.remove('active');
                    icon.style.transform = 'rotate(0deg)';
                    content.style.maxHeight = '0';
                } else {
                    // Open the section
                    content.classList.add('active');
                    icon.style.transform = 'rotate(90deg)';
                    content.style.maxHeight = content.scrollHeight + 'px';
                }
            });
        }
    });
    
    // Optional: Open first toggle by default
    // Uncomment these lines if you want the first section open by default
    /*
    if (toggleSections.length > 0) {
        const firstHeader = toggleSections[0].querySelector('.toggle-header');
        if (firstHeader) {
            firstHeader.click();
        }
    }
    */
});
