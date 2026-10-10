// Main JavaScript for Doctor Portfolio Website

document.addEventListener('DOMContentLoaded', function () {
    const appointmentForm = document.getElementById('appointmentForm');
    const successAlert = document.getElementById('successAlert');

    if (appointmentForm) {
        appointmentForm.addEventListener('submit', function (e) {
            e.preventDefault();
            
            // Simulate form processing
            appointmentForm.style.display = 'none';
            successAlert.classList.remove('d-none');
            
            // Reset form after 5 seconds if needed
            setTimeout(function() {
                appointmentForm.reset();
                appointmentForm.style.display = 'block';
                successAlert.classList.add('d-none');
            }, 6000);
        });
    }

    // Navbar active link toggle on scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
});
