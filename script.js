
/* Dropdown */
const toggleBtn = document.querySelector('.toggle-btn')
const toggleBtnIcon = document.querySelector('.toggle-btn i')
const dropDownMenu = document.querySelector('.dropdown-menu')

toggleBtn.onclick = function (){
  dropDownMenu.classList.toggle('open')
  const isOpen = dropDownMenu.classList.contains('open')

  toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}

/* Active page */
const links = document.querySelectorAll('.navbar .links a');

links.forEach(link => {
    link.addEventListener('click', () => {
        links.forEach(link => link.classList.remove('active'));
        link.classList.add('active');
    });
});

/* Ajaxxx */

document.addEventListener("DOMContentLoaded", () => {
   const links = document.querySelectorAll(".nav-link, .dropdown-item");
   const content = document.getElementById("content");

   links.forEach(link => {
       link.addEventListener("click", (e) => {
           e.preventDefault();
           const page = e.target.getAttribute("data-page");

           // AJAX request
           fetch(`pages/${page}.html`)
               .then(response => {
                   if (!response.ok) {
                       throw new Error("Page not found");
                   }
                   return response.text();
               })
               .then(data => {
                   content.innerHTML = data;
                   setActiveLink(page);
               })
               .catch(error => {
                   content.innerHTML = `<p>Error: ${error.message}</p>`;
               });
       });
   });

   // Fungsi untuk update link aktif
   function setActiveLink(page) {
       links.forEach(link => {
           if (link.getAttribute("data-page") === page) {
               link.classList.add("active");
           } else {
               link.classList.remove("active");
           }
       });
   }
});


const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Hapus class "active" dari semua link
        navLinks.forEach(nav => nav.classList.remove('active'));
        // Tambahin class "active" ke link yang diklik
        link.classList.add('active');
    });
});

