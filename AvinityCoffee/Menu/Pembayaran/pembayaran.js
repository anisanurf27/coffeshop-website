
function btnLogout() {
    Swal.fire({
        title: "Konfirmasi",
        text: "Apakah Anda ingin Logout?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Logout!",
        cancelButtonText: "Batal",
    }).then((result) => {
        if (result.isConfirmed) {
        Swal.fire("Sukses", "Logout Berhasil!", "success").then(() => {
            window.location.href = "../../home-login.html";
        });
        } else {
        Swal.fire("Gagal", "Tidak Jadi Logout!", "error");
        return;
        }
    });
}

function onClickBayar() {
    var radioButtons = document.getElementsByName("flexRadioDefault");
    var pembayaranDipilih = false;
    var pembayaranValue = "";

    for (var i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            pembayaranDipilih = true;
            pembayaranValue = radioButtons[i].value; 
        break;
        }
    }

    Swal.fire({
        title: "Konfirmasi",
        text: "Apakah Anda yakin ingin melanjutkan pembayaran?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ya, Lanjutkan!",
        cancelButtonText: "Batal"
        }).then((result) => {
            if (result.isConfirmed) {
                if (pembayaranDipilih) {
                    
                    Swal.fire("Sukses", "Pemilihan Metode Pembayaran Berhasil!", "success").then(() => {
                        window.location.href = "../Pembayaran/DetailPembayaran/detailPembayaran.html";
                    });
                } else {
                    Swal.fire("Error", "Silakan pilih metode pembayaran!", "error");
                }
            } else{
                Swal.fire("Gagal", "Tidak Jadi Memilih Metode Pembayaran!", "error");
                return;
            }
    });
}

