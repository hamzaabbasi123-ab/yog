       // scripts.js
       document.getElementById('menu-btn').addEventListener('click', function() {
        var navigation = document.getElementById('navigation');
        navigation.classList.toggle('active'); // Toggle the 'active' class on the navigation
    });
    function toggleAnswer(button) {
        const answer = button.nextElementSibling;
        button.classList.toggle('active');
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    }
    document.addEventListener('DOMContentLoaded', () => {
        const image1 = document.querySelector('.image2');
        const image2 = document.querySelector('.image1');
        let showFirstImage = true;

        // Function to toggle between images
        const toggleImages = () => {
          if (showFirstImage) {
            image1.classList.add('show');
            image2.classList.remove('show');
          } else {
            image1.classList.remove('show');
            image2.classList.add('show');
          }
          showFirstImage = !showFirstImage;
        };
      
        // Show the first image initially after 1 second
        setTimeout(() => {
          image1.classList.add('show');
        }, 1000);
      
        // Start cycling images every 4 seconds
        setInterval(toggleImages, 4000); // Adjust time for cycling
      });
      document.addEventListener('DOMContentLoaded', function() {
        const hamburgerBtn = document.getElementById('hamburgerBtn');
        const slideInPanel = document.getElementById('slideInPanel');
        const closeBtn = document.querySelector('.close-btn');
        
        // Function to smoothly toggle the slide-in panel
        function toggleSlide() {
            if (!slideInPanel.classList.contains('active')) {
                slideInPanel.classList.add('active');
            } else {
                slideInPanel.classList.remove('active');
            }
        }
    
        // Toggle slide-in panel when hamburger button is clicked
        hamburgerBtn.addEventListener('click', function() {
            toggleSlide();
        });
    
        // Close the panel when the close button is clicked
        closeBtn.addEventListener('click', function() {
            slideInPanel.classList.remove('active');
        });
    });
    

      
 


      