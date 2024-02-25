document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const sideModal = document.getElementById('sideModal');
    const closeDrawerButton = document.querySelector('.close-drawer');
  
    menuIcon.addEventListener('click', function() {
      sideModal.style.right = '0'; // Show the side modal
    });
  
    closeDrawerButton.addEventListener('click', function() {
      sideModal.style.right = '-300px'; // Hide the side modal
    });
  
    sideModal.addEventListener('click', function(event) {
      if (event.target === sideModal) {
        sideModal.style.right = '-300px'; // Hide the side modal if clicked outside content
      }
    });
  });
  