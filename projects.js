document.addEventListener('DOMContentLoaded', async () => {

    // Function to load external HTML content
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

    await loadSidebar();

    // Projects tab functionality
    const projectTabs = document.querySelectorAll('.project-tab');
    const projectCards = document.querySelectorAll('.project-card');

    projectTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            projectTabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            tab.classList.add('active');

            const category = tab.getAttribute('data-tab');

            // Show/hide project cards based on category
            projectCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                if (category === 'all' || cardCategory === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Interactive buttons functionality (projects and blogs)
    const likeButtons = document.querySelectorAll('.like-btn');
    const commentButtons = document.querySelectorAll('.comment-btn');

    likeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const likeCountSpan = button.querySelector('.like-count');
            let likeCount = parseInt(likeCountSpan.textContent);
            if (button.classList.contains('text-purple-accent')) {
                // Already liked, so unlike
                button.classList.remove('text-purple-accent');
                likeCount--;
            } else {
                // Not liked, so like
                button.classList.add('text-purple-accent');
                likeCount++;
            }
            likeCountSpan.textContent = likeCount;
        });
    });

    commentButtons.forEach(button => {
        button.addEventListener('click', () => {
            console.log("Comment button clicked!");
            // You can add a modal or a comment section here
        });
    });

    // Scroll buttons functionality
    const scrollUpBtn = document.getElementById('scrollUpBtn');
    const scrollDownBtn = document.getElementById('scrollDownBtn');
    const mainContent = document.querySelector('.main-content');

    // Show/hide scroll buttons based on scroll position
    mainContent.addEventListener('scroll', () => {
        if (mainContent.scrollTop > 100) {
            scrollUpBtn.style.display = 'block';
        } else {
            scrollUpBtn.style.display = 'none';
        }
    });

    scrollUpBtn.addEventListener('click', () => {
        mainContent.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    scrollDownBtn.addEventListener('click', () => {
        mainContent.scrollTo({
            top: mainContent.scrollHeight,
            behavior: 'smooth'
        });
    });

});
