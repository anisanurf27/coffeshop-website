function btnBeli() {

    Swal.fire({
        title: "Konfirmasi",
        text: "Apakah Anda yakin ingin membeli menu ini?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ya, Tambah!",
        cancelButtonText: "Batal"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire("Sukses", "Menu berhasil ditambahkan!", "success");
        }
        else{
            Swal.fire("Gagal", "Menu Tidak jadi ditambahkan!", "error");
            return;
        }
    
    });
}

function btnBayar() {

    Swal.fire({
        title: "Konfirmasi",
        text: "Apakah Anda ingin Melanjutkan Pembayaran?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ya, Bayar!",
        cancelButtonText: "Batal"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire("Sukses", "Lanjut Pembayaran!", "success");
            window.location.href = "../Menu/pembayaran.html";
        }
        else{
            Swal.fire("Gagal", "Gagal lanjut Pembayaran!", "error");
            return;
        }
    
    });
}


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
            Swal.fire("Sukses", "Logout Berhasil!", "success");
            window.location.href = "../home.html";
        }
        else{
            Swal.fire("Gagal", "Tidak Jadi Logout!", "error");
            return;
        }
    
    });
}