// Table of Contents Generator and Scroll Spy
document.addEventListener('DOMContentLoaded', function() {
    
    // Only run on project detail pages
    const projectDetail = document.querySelector('.project-detail');
    if (!projectDetail) return;
    
    // Check if TOC should be generated (look for headings)
    const headings = projectDetail.querySelectorAll('h2, h3');
    if (headings.length < 3) return; // Only create TOC if there are enough headings
    
    // Create TOC container
    const tocContainer = document.createElement('nav');
    tocContainer.className = 'toc-container';
    tocContainer.innerHTML = `
        <div class="toc-title">Contents</div>
        <ul class="toc-list" id="toc-list"></ul>
    `;
    
    // Insert TOC into page
    document.body.appendChild(tocContainer);
    
    // Add class to adjust main content margin
    projectDetail.classList.add('with-toc');
    
    const tocList = document.getElementById('toc-list');
    const tocLinks = [];
    
    // Generate TOC items
    headings.forEach((heading, index) => {
        // Skip headings inside toggle sections that are closed
        const toggleSection = heading.closest('.toggle-section');
        if (toggleSection) {
            const toggleContent = heading.closest('.toggle-content');
            if (toggleContent && !toggleContent.classList.contains('active')) {
                return; // Skip headings in closed toggles
            }
        }
        
        // Create ID for heading if it doesn't have one
        if (!heading.id) {
            heading.id = 'heading-' + index;
        }
        
        // Create TOC item
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = '#' + heading.id;
        a.textContent = heading.textContent;
        
        // Add class for styling (h2 vs h3)
        if (heading.tagName === 'H3') {
            a.classList.add('toc-h3');
        }
        
        a.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.getElementById(heading.id);
            if (target) {
                // Smooth scroll to target
                const offset = 100; // Offset for fixed navbar
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Update active state
                tocLinks.forEach(link => link.classList.remove('active'));
                a.classList.add('active');
            }
        });
        
        li.appendChild(a);
        tocList.appendChild(li);
        tocLinks.push(a);
    });
    
    // Scroll spy - highlight current section
    function updateActiveLink() {
        let currentSection = null;
        const scrollPos = window.pageYOffset + 150; // Offset for navbar
        
        headings.forEach((heading) => {
            if (heading.offsetTop <= scrollPos) {
                currentSection = heading;
            }
        });
        
        if (currentSection) {
            tocLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + currentSection.id) {
                    link.classList.add('active');
                }
            });
        }
    }
    
    // Update active link on scroll (with debounce for performance)
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (scrollTimeout) {
            window.cancelAnimationFrame(scrollTimeout);
        }
        scrollTimeout = window.requestAnimationFrame(updateActiveLink);
    });
    
    // Initial update
    updateActiveLink();
    
    // Update TOC when toggles are opened/closed
    const toggleHeaders = document.querySelectorAll('.toggle-header');
    toggleHeaders.forEach(header => {
        header.addEventListener('click', function() {
            // Wait for toggle animation to complete
            setTimeout(() => {
                // Regenerate TOC to include/exclude toggled content
                tocList.innerHTML = '';
                const newHeadings = projectDetail.querySelectorAll('h2, h3');
                
                newHeadings.forEach((heading, index) => {
                    const toggleSection = heading.closest('.toggle-section');
                    if (toggleSection) {
                        const toggleContent = heading.closest('.toggle-content');
                        if (toggleContent && !toggleContent.classList.contains('active')) {
                            return;
                        }
                    }
                    
                    if (!heading.id) {
                        heading.id = 'heading-' + index;
                    }
                    
                    const li = document.createElement('li');
                    const a = document.createElement('a');
                    a.href = '#' + heading.id;
                    a.textContent = heading.textContent;
                    
                    if (heading.tagName === 'H3') {
                        a.classList.add('toc-h3');
                    }
                    
                    a.addEventListener('click', function(e) {
                        e.preventDefault();
                        const target = document.getElementById(heading.id);
                        if (target) {
                            const offset = 100;
                            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                            window.scrollTo({
                                top: targetPosition,
                                behavior: 'smooth'
                            });
                        }
                    });
                    
                    li.appendChild(a);
                    tocList.appendChild(li);
                });
                
                updateActiveLink();
            }, 450); // Match toggle animation duration
        });
    });
});
