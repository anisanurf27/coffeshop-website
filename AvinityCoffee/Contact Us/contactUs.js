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

function contactUs() {
    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const pesan = document.getElementById("pesanTextarea").value;
  
    if (nama.trim() === "") {
      Swal.fire("Error", "Nama Perlu Diisi!", "error");
      return;
    }
  
    if (email.trim() === "") {
      Swal.fire("Error", "Email Perlu Diisi!", "error");
      return;
    }
  
    if (pesan.trim() === "") {
      Swal.fire("Error", "Pesan Perlu Diisi!", "error");
      return;
    }
  
    Swal.fire({
      title: "Konfirmasi",
      text: "Apakah Anda yakin ingin mengirim pesan?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, Kirim!",
      cancelButtonText: "Batal"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Sukses", "Pesan berhasil dikirim!", "success");
      }
    });
}
  
function initMap() {
    // Lokasi kafe
    var kafe = { lat: -7.7828, lng: 110.4725 };
  
    // Buat peta dengan lokasi kafe sebagai pusat
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: kafe,
    });
  
    // Tambahkan marker untuk lokasi kafe
    var marker = new google.maps.Marker({
      position: kafe,
      map: map,
      title: "Avinity Coffee & Roastery",
    });
}  



