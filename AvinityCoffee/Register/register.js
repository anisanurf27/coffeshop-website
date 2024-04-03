function register() {
    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const tglLahir = document.getElementById("tglLahir").value;
    const noTlp = document.getElementById("nomorTlp").value;
   
    if (nama.trim() === "") {
        Swal.fire("Error", "Nama Perlu Diisi!", "error");
        return;
    }

    if (email.trim() === "") {
        Swal.fire("Error", "Email/Nomor Telepon Perlu Diisi!", "error");
        return;
    }

    if (password.trim() === "") {
        Swal.fire("Error", "Isikan Password!", "error");
        return;
    }

    if (tglLahir.trim() === "") {
        Swal.fire("Error", "Isikan Tanggal Lahir Anda!", "error");
        return;
    }

    if (noTlp.trim() === "") {
        Swal.fire("Error", "Isikan Nomor Telepon Anda!", "error");
        return;
    }

    Swal.fire({
        title: "Konfirmasi",
        text: "Apakah Anda yakin melakukan registrasi?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ya!",
        cancelButtonText: "Batal"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire("Sukses", "Registrasi berhasil!", "success").then(() => {
                window.location.href = '../../AvinityCoffee/home.html';
            });
        }
    });
}
