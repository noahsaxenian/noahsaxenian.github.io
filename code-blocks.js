// Code Block Copy Functionality
document.addEventListener('DOMContentLoaded', function() {
    
    // Add copy buttons to all code blocks
    const codeBlocks = document.querySelectorAll('.code-block');
    
    codeBlocks.forEach(block => {
        const copyBtn = block.querySelector('.code-copy-btn');
        
        if (copyBtn) {
            copyBtn.addEventListener('click', function() {
                const codeElement = block.querySelector('code');
                const codeText = codeElement.textContent;
                
                // Copy to clipboard
                navigator.clipboard.writeText(codeText).then(() => {
                    // Visual feedback
                    const originalText = copyBtn.textContent;
                    copyBtn.textContent = 'Copied!';
                    copyBtn.classList.add('copied');
                    
                    // Reset after 2 seconds
                    setTimeout(() => {
                        copyBtn.textContent = originalText;
                        copyBtn.classList.remove('copied');
                    }, 2000);
                }).catch(err => {
                    console.error('Failed to copy code:', err);
                    copyBtn.textContent = 'Failed';
                    setTimeout(() => {
                        copyBtn.textContent = 'Copy';
                    }, 2000);
                });
            });
        }
    });
});
