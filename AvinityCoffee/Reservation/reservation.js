function tambahReservasi() {
    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const noMeja = document.getElementById("noMeja").value;

    if (nama.trim() === "") {
        alert("Nama Perlu Diisi!");
        return ; 
    }

    if (email.trim() === "") {
        alert("Email/Nomor Telepon Perlu Diisi!");
        return ; 
    }

    if (noMeja.trim() === "") {
        alert("Nomor Meja Perlu Dipilih!");
        return ; 
    }

    const konfirmasi = confirm("Apakah Anda yakin ingin menambah reservasi?");
    if (!konfirmasi) {
        return;
    }

    alert("Reservasi berhasil ditambahkan!");
}