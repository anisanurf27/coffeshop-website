function login() {
    const email = document.getElementById("user").value;
    const password = document.getElementById("pass").value;
   
    if (email.trim() === "") {
        Swal.fire("Error", "Email Harus Diisi!", "error");
        return;
    }

    if (password.trim() === "") {
        Swal.fire("Error", "Isikan Password!", "error");
        return;
    }

  
    Swal.fire({
        title: "Konfirmasi",
        text: "Apakah Anda yakin ingin Login?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ya!",
        cancelButtonText: "Batal"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire("Sukses", "Login berhasil!", "success").then(() => {
                window.location.href = '../../AvinityCoffee/Home/home.html';
            });
        }
    });
}
