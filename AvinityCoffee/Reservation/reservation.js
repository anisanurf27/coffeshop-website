
function btnLogout() {

    Swal.fire({
        title: "Konfirmasi",
        text: "Apakah Anda ingin Logout?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Logout!",
        cancelButtonText: "Batal"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire("Sukses", "Logout Berhasil!", "success").then(() => {
                window.location.href = "../home-login.html";
            });
        }
        else{
            Swal.fire("Gagal", "Tidak Jadi Logout!", "error");
            return;
        }
    
    });
}


// reservation.js
function tambahReservasi() {
    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const noMeja = document.getElementById("noMeja").value;

    if (nama.trim() === "") {
        Swal.fire("Error", "Nama Perlu Diisi!", "error");
        return;
    }

    if (email.trim() === "") {
        Swal.fire("Error", "Email/Nomor Telepon Perlu Diisi!", "error");
        return;
    }

    if (noMeja.trim() === "") {
        Swal.fire("Error", "Nomor Meja Perlu Dipilih!", "error");
        return;
    }

    Swal.fire({
        title: "Konfirmasi",
        text: "Apakah Anda yakin ingin menambah reservasi?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ya, Tambah!",
        cancelButtonText: "Batal"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire("Sukses", "Reservasi berhasil ditambahkan!", "success");
        }
    });

}



