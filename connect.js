document.addEventListener('DOMContentLoaded', async () => {

    // Function to load external HTML content for the sidebar
    const loadSidebar = async () => {
        try {
            const response = await fetch('sidebar.html');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const htmlContent = await response.text();
            document.getElementById('sidebar-container').innerHTML = htmlContent;
        } catch (error) {
            console.error('Failed to load sidebar:', error);
        }
    };

    // Load the sidebar immediately
    await loadSidebar();

    // Form submission handling
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Simple form validation
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !subject || !message) {
            showMessageBox('Please fill out all fields.', 'error');
            return;
        }

        // Simulating a form submission
        console.log('Form submitted successfully!');
        console.log({ name, email, subject, message });

        showMessageBox('Thank you! Your message has been sent successfully.', 'success');

        form.reset(); // Reset the form after successful submission
    });

    // Function to create and show a stylized message box
    const showMessageBox = (message, type) => {
        const messageBox = document.createElement('div');
        messageBox.classList.add('fixed', 'top-1/2', 'left-1/2', '-translate-x-1/2', '-translate-y-1/2', 'p-8', 'rounded-2xl', 'shadow-2xl', 'text-center', 'z-[100]', 'transition-opacity', 'duration-500', 'ease-in-out');

        let bgColor, borderColor, icon, headingText;
        if (type === 'success') {
            bgColor = 'bg-purple-accent';
            borderColor = 'border-purple-600';
            icon = '<i class="fas fa-check-circle text-4xl mb-4"></i>';
            headingText = 'Success!';
        } else {
            bgColor = 'bg-red-500';
            borderColor = 'border-red-600';
            icon = '<i class="fas fa-exclamation-triangle text-4xl mb-4"></i>';
            headingText = 'Error!';
        }

        messageBox.innerHTML = `
            <div class="${bgColor} border ${borderColor} p-6 rounded-xl text-white">
                ${icon}
                <h3 class="text-2xl font-bold mb-2">${headingText}</h3>
                <p class="text-sm">${message}</p>
            </div>
        `;
        document.body.appendChild(messageBox);

        // Remove the message box after a few seconds
        setTimeout(() => {
            messageBox.style.opacity = '0';
            setTimeout(() => messageBox.remove(), 500);
        }, 5000);
    };
});
