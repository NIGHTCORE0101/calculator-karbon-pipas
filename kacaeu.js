document.addEventListener('DOMContentLoaded', function() {
    const riwayat = [];

    // Kalkulator Listrik
    const formListrik = document.getElementById('form-listrik');
    const hasilListrik = document.getElementById('hasil-listrik');
    formListrik.addEventListener('submit', function(e) {
        e.preventDefault();
        const pemakaian = parseFloat(document.getElementById('pemakaian-listrik').value);
        const emisiCO2 = pemakaian * 0.85; // Faktor emisi listrik di Indonesia (kg CO2/kWh)
        hasilListrik.textContent = `Emisi CO2: ${emisiCO2.toFixed(2)} kg CO2`;
        riwayat.push(`Listrik: ${emisiCO2.toFixed(2)} kg CO2`);
        updateRiwayat();
    });

    // Kalkulator Elektronik
    const formElektronik = document.getElementById('form-elektronik');
    const hasilElektronik = document.getElementById('hasil-elektronik');
    formElektronik.addEventListener('submit', function(e) {
        e.preventDefault();
        const jenis = document.getElementById('jenis-elektronik').value;
        const jam = parseFloat(document.getElementById('jam-pemakaian').value);
        const faktorEmisi = {
            laptop: 0.05,
            smartphone: 0.01,
            tv: 0.08,
            kulkas: 0.1
        };
        const emisiCO2 = jam * faktorEmisi[jenis] * 30; // Asumsi 30 hari per bulan
        hasilElektronik.textContent = `Emisi CO2: ${emisiCO2.toFixed(2)} kg CO2`;
        riwayat.push(`Elektronik (${jenis}): ${emisiCO2.toFixed(2)} kg CO2`);
        updateRiwayat();
    });

    // Kalkulator Transportasi
    const formTransportasi = document.getElementById('form-transportasi');
    const hasilTransportasi = document.getElementById('hasil-transportasi');
    formTransportasi.addEventListener('submit', function(e) {
        e.preventDefault();
        const jenis = document.getElementById('jenis-kendaraan').value;
        const jarak = parseFloat(document.getElementById('jarak-tempuh').value);
        const faktorEmisi = {
            mobil: 0.2,
            motor: 0.1,
            bus: 0.05
        };
        const emisiCO2 = jarak * faktorEmisi[jenis];
        hasilTransportasi.textContent = `Emisi CO2: ${emisiCO2.toFixed(2)} kg CO2`;
        riwayat.push(`Transportasi (${jenis}): ${emisiCO2.toFixed(2)} kg CO2`);
        updateRiwayat();
    });

    // Fungsi untuk memperbarui riwayat
    function updateRiwayat() {
        const daftarRiwayat = document.getElementById('daftar-riwayat');
        daftarRiwayat.innerHTML = riwayat.map(item => `<li>${item}</li>`).join('');
    }
});