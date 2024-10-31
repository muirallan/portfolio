function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
  }
  
  function downloadCV() {
    window.open('./resummeeeeee/assets/muir,Allan2024.pdf', '_blank');
  }
  
  // Smooth scroll for navigation links
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      document.getElementById(link.getAttribute('href').substring(1)).scrollIntoView({ behavior: 'smooth' });
      // Close the menu on link click for mobile
      document.querySelector('.nav-links').classList.remove('active');
    });
  });
  