function btn2() {
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
        position: "center",
        icon: "success",
        title: "Selamat Datang!",
        showConfirmButton: false,
        timer: 1500
      });
}

function show() {
    Swal.fire("SweetAlert2 is working!");
}