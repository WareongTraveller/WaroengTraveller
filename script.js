function showSection(sectionId, element) {
    // Sembunyikan semua section
    const sections = document.querySelectorAll('section');
    sections.forEach(section => section.style.display = 'none');

    // Tampilkan section yang dipilih
    document.getElementById(sectionId).style.display = 'block';

    // Hapus class 'active' dari semua link
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => link.classList.remove('active'));

    // Tambahkan class 'active' ke link yang diklik
    element.classList.add('active');
}
// Fungsi untuk menampilkan popup dengan konten yang sesuai
function showDescription(serviceId) {
    const title = {
        'service1': 'Gunung Gede 3026 mdpl ',
        'service2': 'Petualangan Hiking',
        'service3': 'Camping di Danau'
    };
    
    const description = {
        'service1': 'jadwal open trip.\n\n4-5 Oktober 2024. \n\n11-12 Oktober 2024.\n\n18-19 Oktober 2024',
        'service2': 'Nikmati petualangan hiking di hutan.',
        'service3': 'Camping di tepi danau dengan pemandangan matahari terbit.'
    };

    // Set the title and description based on serviceId
    document.getElementById('popup-title').innerText = title[serviceId];
    document.getElementById('popup-description').innerText = description[serviceId];

    // Display the popup
    document.getElementById('service-popup').style.display = 'flex';
}

// Fungsi untuk menutup popup
function closePopup() {
    document.getElementById('service-popup').style.display = 'none';
}

// Event listener untuk menutup popup saat klik di luar konten popup
window.onclick = function(event) {
    const popup = document.getElementById('service-popup');
    if (event.target === popup) {
        closePopup();
    }
};



