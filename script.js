
document.querySelector('.resume-btn').addEventListener('click', function() {
    alert('Sorry :( \nResume currently not available.');
});


// document.querySelector('.resume-btn').addEventListener('click', function() {
//     const messageDiv = document.querySelector('.resume-message');
//     messageDiv.style.display = 'block';
//     messageDiv.textContent = 'Resume currently not available.';
    
//     // Hide message after 3 seconds
//     setTimeout(() => {
//         messageDiv.style.display = 'none';
//     }, 3000);
// });


// document.querySelector('.nor-btn').addEventListener('click', function() {
//     const messageDiv = document.querySelector('.btn-message');
//     messageDiv.textContent = 'Thank you for reaching out! I will get back to you soon.';
//     messageDiv.classList.add('show');
    
//     // Hide message after 3 seconds
//     setTimeout(() => {
//         messageDiv.classList.remove('show');
//     }, 3000);
// });



function showToast(message, type = 'success') {
    // Create toast element
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);

    // Show toast
    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    // Remove toast
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}



// Update other button handlers
document.querySelector('.nor-btn').addEventListener('click', function() {
    showToast('Thank you for reaching out! I will get back to you soon.');
});

document.querySelector('.coding-box').addEventListener('click', function() {
    showToast('This Feature is coming soon...', 'error');
});