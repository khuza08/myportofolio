// Hapus semua kode JavaScript lama

/* Ganti dengan kode berikut: */

// Dropdown
const toggleBtn = document.querySelector('.toggle-btn');
const toggleBtnIcon = document.querySelector('.toggle-btn i');
const dropDownMenu = document.querySelector('.dropdown-menu');

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');

    toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars';
}

// Active page
const links = document.querySelectorAll('.navbar .links a');

links.forEach(link => {
    link.addEventListener('click', () => {
        links.forEach(link => link.classList.remove('active'));
        link.classList.add('active');
    });
});

// AJAX Loading with Updated Code
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".nav-link, .dropdown-item");
    const content = document.getElementById("content");

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const page = e.target.getAttribute("data-page");
            console.log("Loading page:", page); // Debug: halaman yang dimuat

            fetch(`pages/${page}.html?v=${new Date().getTime()}`) // Menambahkan timestamp
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Page not found");
                    }
                    return response.text();
                })
                .then(data => {
                    while (content.firstChild) {
                        content.removeChild(content.firstChild);
                    }

                    const tempDiv = document.createElement('div');
                    tempDiv.innerHTML = data;

                    while (tempDiv.firstChild) {
                        content.appendChild(tempDiv.firstChild);
                    }

                    setActiveLink(page);
                    console.log("Content loaded successfully"); // Debug: konten berhasil dimuat
                })
                .catch(error => {
                    content.textContent = `Error: ${error.message}`;
                });
        });
    });

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