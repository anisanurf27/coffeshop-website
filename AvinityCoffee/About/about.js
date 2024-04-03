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