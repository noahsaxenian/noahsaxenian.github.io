// Toggle Sections Functionality
document.addEventListener('DOMContentLoaded', function() {
    
    // Get all toggle sections
    const toggleSections = document.querySelectorAll('.toggle-section');
    
    // Function to update the height of all parent toggles
    function updateParentHeights(element) {
        let parent = element.parentElement;
        while (parent) {
            if (parent.classList.contains('toggle-content') && parent.classList.contains('active')) {
                parent.style.maxHeight = parent.scrollHeight + 'px';
            }
            parent = parent.parentElement;
        }
    }
    
    toggleSections.forEach(section => {
        const header = section.querySelector(':scope > .toggle-header');
        const content = section.querySelector(':scope > .toggle-content');
        const icon = section.querySelector(':scope > .toggle-header > .toggle-icon');
        
        if (header && content) {
            header.addEventListener('click', function(e) {
                // Prevent event from bubbling to parent toggles
                e.stopPropagation();
                
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
                
                // Update all parent toggle heights
                updateParentHeights(section);
            });
            
            // Listen for when nested toggles change to update this toggle's height
            content.addEventListener('transitionend', function() {
                if (content.classList.contains('active')) {
                    content.style.maxHeight = content.scrollHeight + 'px';
                    updateParentHeights(section);
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