function login() {
    const nama = document.getElementById("user").value;
    const sandi = document.getElementById("pass").value;

    if (nama.trim() === "") {
        Swal.fire("Error", "Username Perlu Diisi!", "error");
        return;
    }

    if (sandi.trim() === "") {
        Swal.fire("Error", "Password Perlu Diisi!", "error");
        return;
    }

    Swal.fire({
        title: "Konfirmasi",
        text: "Apakah Anda yakin melakukan login?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ya!",
        cancelButtonText: "Batal"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire("Sukses", "Login berhasil!", "success").then(() => {
                window.location.href = '../../AvinityCoffee/home.html';
            });
        }
    });
}
