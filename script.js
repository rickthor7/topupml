document.addEventListener('DOMContentLoaded', () => {
    // Tab functionality
    const tabs = document.querySelectorAll('.tab-button');
    const gameGrids = { // Anda perlu membuat kontainer berbeda untuk tiap kategori jika ingin memfilter
        populer: document.querySelector('.popular-games'),
        // terbaru: document.querySelector('.new-games'), // contoh
        // mobile: document.querySelector('.mobile-games-grid'), // contoh
    };

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Logika untuk menampilkan game berdasarkan tab yang aktif
            // Contoh sederhana: (Anda perlu menyesuaikan ini dengan struktur HTML Anda)
            const activeCategory = tab.textContent.toLowerCase().trim();
            console.log("Tab aktif:", activeCategory);

            // Sembunyikan semua grid game
            // for (const key in gameGrids) {
            //     if (gameGrids[key]) {
            //         gameGrids[key].style.display = 'none';
            //     }
            // }
            // Tampilkan grid yang sesuai
            // if (gameGrids[activeCategory]) {
            //     gameGrids[activeCategory].style.display = 'grid';
            // } else if (activeCategory === "populer" && gameGrids.populer) { // Fallback jika tidak ada grid spesifik
            //      gameGrids.populer.style.display = 'grid';
            // }
        });
    });

    // Contoh sederhana untuk slider (membutuhkan library atau kode lebih lanjut untuk fungsionalitas penuh)
    const gameSlider = document.querySelector('.game-slider');
    if (gameSlider) {
        // Di sini Anda bisa menambahkan logika untuk tombol next/prev slider,
        // atau menggunakan library seperti Swiper.js atau Slick Carousel.
        // Untuk saat ini, slider akan bisa di-scroll horizontal karena overflow-x: auto.
        console.log("Game slider ditemukan. Implementasi slider lebih lanjut diperlukan.");
    }


    // Menangani klik pada game card (contoh)
    const gameCards = document.querySelectorAll('.game-card, .game-card-slider');
    gameCards.forEach(card => {
        card.addEventListener('click', () => {
            const gameTitle = card.querySelector('h4')?.textContent || card.querySelector('h5')?.textContent;
            if (gameTitle) {
                alert(`Anda mengklik ${gameTitle}. Redirect ke halaman detail game... (belum diimplementasikan)`);
                // window.location.href = `/game-detail/${gameTitle.toLowerCase().replace(/\s+/g, '-')}`; // Contoh navigasi
            }
        });
    });

    // Menangani klik pada tombol register (contoh)
    const registerButton = document.querySelector('.register-btn');
    if(registerButton) {
        registerButton.addEventListener('click', (e) => {
            e.preventDefault(); // Mencegah aksi default link
            alert('Tombol Daftar diklik! (Fungsionalitas belum ada)');
        });
    }

    // Menangani klik pada tombol login (contoh)
    const loginButton = document.querySelector('.nav-link:not(.register-btn)'); // Asumsi tombol Masuk adalah nav-link pertama
     if(loginButton && loginButton.textContent.toLowerCase() === 'masuk') {
        loginButton.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Tombol Masuk diklik! (Fungsionalitas belum ada)');
        });
    }

    // Menangani klik pada item quick access (contoh)
    const quickAccessItems = document.querySelectorAll('.access-item:not(.social-icons)');
    quickAccessItems.forEach(item => {
        item.addEventListener('click', () => {
            const itemName = item.querySelector('span').textContent;
            alert(`Anda mengklik ${itemName}. (Fungsionalitas belum ada)`);
        });
    });

});
