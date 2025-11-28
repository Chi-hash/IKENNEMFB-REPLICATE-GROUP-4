const menuIcon = document.getElementById('menuIcon');
      const dropdown = document.getElementById('dropdown');


      menuIcon.addEventListener('click', function() {

        dropdown.classList.toggle('active');
        

        const icon = menuIcon.querySelector('i');
        if (dropdown.classList.contains('active')) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-times');
        } else {
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
        }
      });

      //Close dropdown when click outside
      document.addEventListener('click', function(event) {
        if (!menuIcon.contains(event.target) && !dropdown.contains(event.target)) {
          dropdown.classList.remove('active');
          const icon = menuIcon.querySelector('i');
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
        }
      });

      // active states for nav links
      const navLinks = document.querySelectorAll('header .right ul li a, header .dropdown ul li a');
      
      navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
          
          navLinks.forEach(l => l.classList.remove('active'));
          
        
          this.classList.add('active');
          
          
          const linkText = this.textContent.trim();
          navLinks.forEach(l => {
            if (l.textContent.trim() === linkText && l !== this) {
              l.classList.add('active');
            }
          });
        });
      });

      
      // You can customize this based on your routing logic
      const currentPath = window.location.pathname;
      if (currentPath === '/' || currentPath.includes('index')) {
        const homeLinks = document.querySelectorAll('header a[href="#"]');
        if (homeLinks.length > 0) {
          const firstHomeLink = Array.from(navLinks).find(link => link.textContent.trim() === 'Home');
          if (firstHomeLink) firstHomeLink.classList.add('active');
        }
      }



      
       document.addEventListener('DOMContentLoaded', () => {
            const sliderDivs = document.querySelectorAll('.slider-div');
            let currentSlide = 0;

            // Ensure first slide is active initially
            if(sliderDivs.length > 0) {
                sliderDivs[0].classList.add('active');
            }

            function nextSlide() {
                // Remove active class from current
                sliderDivs[currentSlide].classList.remove('active');
                
                // Calculate next
                currentSlide = (currentSlide + 1) % sliderDivs.length;
                
                // Add active class to next
                sliderDivs[currentSlide].classList.add('active');
            }

            // Auto-play slider every 5 seconds
            setInterval(nextSlide, 5000);
        });


      // testimonial section
 document.addEventListener('DOMContentLoaded', () => {
            const track = document.querySelector('.testimonial-track');
            const prevBtn = document.querySelector('.prev-btn');
            const nextBtn = document.querySelector('.next-btn');
            const indicatorsContainer = document.querySelector('.slider-indicators');
            const cards = document.querySelectorAll('.testimonial-card');

            // --- 1. SETUP INDICATORS ---
            cards.forEach((_, index) => {
                const dot = document.createElement('button');
                dot.classList.add('indicator');
                if (index === 0) dot.classList.add('active');
                dot.ariaLabel = `Go to slide ${index + 1}`;
                
                // Click event to scroll to specific card
                dot.addEventListener('click', () => {
                    const cardWidth = getCardWidth();
                    track.scrollTo({
                        left: cardWidth * index,
                        behavior: 'smooth'
                    });
                });
                
                indicatorsContainer.appendChild(dot);
            });

            const indicators = document.querySelectorAll('.indicator');

            // Helper to get dynamic width
            const getCardWidth = () => {
                const card = cards[0];
                return card.offsetWidth + 20; // 20 is the gap
            };

            // --- 2. UPDATE INDICATORS ON SCROLL ---
            track.addEventListener('scroll', () => {
                const cardWidth = getCardWidth();
                // Calculate which card index is currently at the left edge
                const scrollIndex = Math.round(track.scrollLeft / cardWidth);

                indicators.forEach((dot, index) => {
                    if (index === scrollIndex) {
                        dot.classList.add('active');
                    } else {
                        dot.classList.remove('active');
                    }
                });
            });

            // --- 3. BUTTON NAVIGATION ---
            nextBtn.addEventListener('click', () => {
                track.scrollBy({ left: getCardWidth(), behavior: 'smooth' });
            });

            prevBtn.addEventListener('click', () => {
                track.scrollBy({ left: -getCardWidth(), behavior: 'smooth' });
            });
        });
  

 document.addEventListener('DOMContentLoaded', () => {
            const sliderContent = document.querySelector('.gallery-slider-content');
            const prevBtn = document.getElementById('prevBtn');
            const nextBtn = document.getElementById('nextBtn');

            const scrollAmount = () => {
              
                const containerWidth = sliderContent.clientWidth;
                const gap = 20; 
                return containerWidth + gap;
            };

            nextBtn.addEventListener('click', () => {
                sliderContent.scrollBy({
                    left: scrollAmount(),
                    behavior: 'smooth'
                });
            });

            prevBtn.addEventListener('click', () => {
                sliderContent.scrollBy({
                    left: -scrollAmount(),
                    behavior: 'smooth'
                });
            });
 });
        


//  gallery section

  document.addEventListener('DOMContentLoaded', () => {
            const sliderContent = document.querySelector('.gallery-slider-content');
            const prevBtn = document.getElementById('prevBtn');
            const nextBtn = document.getElementById('nextBtn');

            // Scroll Logic: Width of one item + gap
            const scrollAmount = () => {
                const containerWidth = sliderContent.clientWidth;
             
                const firstSlide = sliderContent.querySelector('.gallery-slide');
                if(firstSlide) {
                    return firstSlide.offsetWidth + 24; // 24 is the gap
                }
                return 300; 
            };

            nextBtn.addEventListener('click', () => {
                sliderContent.scrollBy({ left: scrollAmount(), behavior: 'smooth' });
            });

            prevBtn.addEventListener('click', () => {
                sliderContent.scrollBy({ left: -scrollAmount(), behavior: 'smooth' });
            });
  });
        



// modal functionality

      // Modal Functionality
      const modal = document.getElementById("teamModal");
      const modalImg = document.getElementById("modalImg");
      const modalName = document.getElementById("modalName");
      const modalRole = document.getElementById("modalRole");
      const modalBio = document.getElementById("modalBio");
      const closeBtn = document.querySelector(".close");

      document.querySelectorAll(".team-card").forEach(card => {
        card.addEventListener("click", function() {
          modalName.textContent = this.dataset.name;
          modalRole.textContent = this.dataset.role;
          modalImg.src = this.querySelector(".team-img").src;
          modalBio.textContent = this.dataset.bio;

          modal.style.display = "block";
          document.body.style.overflow = "hidden"; // Prevent background scroll
        });
      });

      // Close modal
      closeBtn.onclick = () => {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
      };

      window.onclick = (e) => {
        if (e.target === modal) {
          modal.style.display = "none";
          document.body.style.overflow = "auto";
        }
      };
  