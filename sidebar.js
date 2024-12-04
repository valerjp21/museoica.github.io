// Load Sidebar Fragment
document.addEventListener('DOMContentLoaded', () => {
    const sidebarContainer = document.getElementById('sidebar-container');
  
    if (sidebarContainer) {
      fetch('sidebar.html')
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.text();
        })
        .then(data => {
          sidebarContainer.innerHTML = data;
  
          // Add active class based on current page
          const currentPage = window.location.pathname.split('/').pop();
          const menuItems = document.querySelectorAll('.menu-item');
  
          menuItems.forEach(item => {
            if (item.getAttribute('href') === currentPage) {
              item.classList.add('active');
            }
          });
        })
        .catch(error => console.error('Error loading sidebar:', error));
    }
  });
  