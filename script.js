document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Form submitted! (Note: This is a demo, no data is actually sent)');
        form.reset();
    });
});
