
function tambahReservasi() {
    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const noHp = document.getElementById("noHp").value;
    const tanggal = document.getElementById("tanggal").value;
    const deskripsi = document.getElementById("deskripsiTextarea").value;

    if (nama.trim() === "") {
        alert("Nama Perlu Diisi!");
        return ; 
    }

    if (email.trim() === "") {
        alert("Email Perlu Diisi!");
        return ; 
    }

    if (noHp.trim() === "") {
        alert("Nomor Handphone Perlu Diisi!");
        return ; 
    }

    if (tanggal.trim() === "") {
        alert("Tanggal Perlu Diisi!");
        return ; 
    }

    if (deskripsi.trim() === "") {
        alert("Deskripsi Perlu Diisi!");
        return ; 
    }

    const konfirmasi = confirm("Apakah Anda yakin ingin menambah reservasi?");
    if (!konfirmasi) {
        return;
    }

    alert("Reservasi berhasil ditambahkan!");
}
