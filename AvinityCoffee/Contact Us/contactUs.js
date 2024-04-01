function contactUs() {
    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const pesan = document.getElementById("pesanTextarea").value;

    if (nama.trim() === "") {
        alert("Nama Perlu Diisi!");
        return ; 
    }

    if (email.trim() === "") {
        alert("Email Perlu Diisi!");
        return ; 
    }

    if (pesan.trim() === "") {
        alert("Pesan Perlu Diisi!");
        return ; 
    }

    const konfirmasi = confirm("Apakah Anda yakin ingin mengirim pesan?");
    if (!konfirmasi) {
        return;
    }

    alert("Pesan berhasil dikirim!");
}
