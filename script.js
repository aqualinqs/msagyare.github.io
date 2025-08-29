<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AA Creation Portfolio</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <script>
        // Tailwind custom configuration
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: '#3498db',
                        secondary: '#2c3e50',
                    }
                }
            }
        }
    </script>
</head>

<body class="bg-gray-50 text-gray-800 min-h-screen flex flex-col">
    <header class="bg-white shadow-md p-4 sticky top-0 z-50">
        <div class="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <div class="flex items-center mb-4 md:mb-0">
                <img src="icons/logo2.png" alt="AA Creation Logo" class="h-10 w-auto mr-2">
                <span class="font-bold text-xl text-primary">AA CREATION</span>
            </div>

            <button id="mobile-menu-button"
                class="md:hidden text-gray-700 hover:text-primary focus:outline-none absolute top-4 right-4">
                <i class="fas fa-bars text-2xl"></i>
            </button>

            <div id="nav-links"
                class="hidden md:flex flex-col md:flex-row w-full md:w-auto space-y-4 md:space-y-0 md:space-x-6 mt-4 md:mt-0 bg-white md:bg-transparent absolute md:relative right-0 top-16 md:top-0 shadow-md md:shadow-none p-4 md:p-0 rounded-md transition-all duration-300 ease-in-out z-40">
                <nav class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                    <a href="index.html"
                        class="font-medium hover:text-primary border-b-2 border-transparent hover:border-primary pb-1 transition-all">HOME</a>
                    <a href="profile.html"
                        class="font-medium hover:text-primary border-b-2 border-transparent hover:border-primary pb-1 transition-all">PROFILE</a>
                    <a href="experience.html"
                        class="font-medium hover:text-primary border-b-2 border-transparent hover:border-primary pb-1 transition-all">EXPERIENCE</a>
                    <a href="projects.html"
                        class="font-medium hover:text-primary border-b-2 border-transparent hover:border-primary pb-1 transition-all">PROJECTS</a>
                </nav>
                <a href="connect.html"
                    class="bg-primary text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors text-center">LET'S
                    TALK</a>
            </div>
        </div>
    </header>

    <section id="home" class="flex-grow py-8 md:py-16 px-4">
        <div class="container mx-auto">
            <div
                class="fixed left-8 md:left-12 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 z-10 bg-white bg-opacity-60 p-2 rounded-lg shadow-sm">
                <a href="https://linkedin.com/in/akua-agyare" target="_blank"
                    class="hover:scale-110 transition-transform">
                    <img src="icons/linkedin.png" alt="LinkedIn" class="w-5 md:w-6 h-5 md:h-6">
                </a>
                <a href="https://github.com/MsAgyare" target="_blank" class="hover:scale-110 transition-transform">
                    <img src="icons/github3.png" alt="GitHub" class="w-5 md:w-6 h-5 md:h-6">
                </a>
                <a href="https://medium.com/@v4cjghana" target="_blank" class="hover:scale-110 transition-transform">
                    <img src="icons/medium2.png" alt="Medium" class="w-5 md:w-6 h-5 md:h-6">
                </a>
                <a href="https://wa.me/233201739962" target="_blank" class="hover:scale-110 transition-transform">
                    <img src="icons/whatsApp.png" alt="WhatsApp" class="w-5 md:w-6 h-5 md:h-6">
                </a>
                <a href="mailto:v4cj@gmail.com" target="_blank" class="hover:scale-110 transition-transform">
                    <img src="icons/gmail.png" alt="Email" class="w-5 md:w-6 h-5 md:h-6">
                </a>
            </div>

            <div class="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                <div class="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-xl border-4 border-white">
                    <img src="images/profilepic.jpg" alt="Akua Agyare" class="w-full h-full object-cover">
                </div>

                <div class="max-w-xl text-center md:text-left">
                    <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">Welcome! I'm Akua Agyare</h1>
                    <h2 class="text-xl md:text-2xl text-primary font-semibold mb-2 animated-title">Product Developer |
                        BI Analyst</h2>
                    <h3 class="text-lg italic text-gray-600 mb-4">"Crafting Solutions with Data and Design"</h3>

                    <p class="text-gray-700 mb-2">
                        I'm a developer at heart with a high affinity for automated solutions and data curation
                    </p>
                    <p class="text-gray-600 mb-6">
                        Dedicated to creating impactful digital experiences and insightful data-driven solutions.
                    </p>

                    <div class="space-y-4">
                        <h4 class="font-medium text-gray-700">Looking for a tech enthusiast to build smarter and faster
                            systems for you.</h4>
                        <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <a href="connect.html"
                                class="bg-primary text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors text-center">Let's
                                Connect</a>
                            <a href="profile.html"
                                class="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-50 transition-colors text-center">View
                                Profile</a>
                        </div>
                        <p class="text-sm text-gray-500 mt-2">Or first view my profile to know more about me</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <footer class="bg-gray-800 text-white py-6 px-4">
        <div class="container mx-auto text-center">
            <p class="mb-2">&copy; 2025 AA Designs Portfolio | Product Developer | BI Analyst</p>
            <p>Designed with <span class="text-red-400">💖</span> by Akua Agyare</p>
        </div>
    </footer>

    <div class="fixed right-6 bottom-6 flex flex-col space-y-2">
        <button id="scrollUpButton" aria-label="Scroll Up"
            class="bg-primary text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors">
            <i class="fas fa-arrow-up"></i>
        </button>
        <button id="scrollDownButton" aria-label="Scroll Down"
            class="bg-primary text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors">
            <i class="fas fa-arrow-down"></i>
        </button>
    </div>

    <script>
        // Simple Mobile menu toggle
        document.getElementById('mobile-menu-button').addEventListener('click', function (e) {
            e.stopPropagation();
            const navLinks = document.getElementById('nav-links');

            // Simply toggle the hidden class
            if (navLinks.classList.contains('hidden')) {
                navLinks.classList.remove('hidden');
            } else {
                navLinks.classList.add('hidden');
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', function (e) {
            const navLinks = document.getElementById('nav-links');
            const mobileMenuButton = document.getElementById('mobile-menu-button');

            if (!navLinks.contains(e.target) && !mobileMenuButton.contains(e.target) && !navLinks.classList.contains('hidden')) {
                navLinks.classList.add('hidden');
            }
        });

        // Close menu when clicking on a nav link
        document.querySelectorAll('#nav-links a').forEach(link => {
            link.addEventListener('click', function () {
                const navLinks = document.getElementById('nav-links');
                if (window.innerWidth < 768) {
                    navLinks.classList.add('hidden');
                }
            });
        });
    </script>
    <script src="script.js"></script>
</body>

</html>
