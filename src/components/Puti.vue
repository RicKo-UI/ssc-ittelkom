<template>
    <div class="col-md-12">
        <h3 class="mb-5 texth"><div class="blok me-4"></div>Layanan PuTi</h3>
    </div>

    <div class="row mb-5" role="tabpanel">
        <!-- List group -->
        <div class="col-md-4">
            <div class="list-group" id="myList" role="tablist">
                <a class="list-group-item list-group-item-action active" data-bs-toggle="list" href="#akun" role="tab"><span class="mx-2"><font-awesome-icon icon="fa-regular fa-square-check"/></span>Manajemen Akun</a>
                <a class="list-group-item list-group-item-action" data-bs-toggle="list" href="#internet" role="tab"><span class="mx-2"><font-awesome-icon icon="fa-regular fa-square-check"/></span>Akses Internet</a>
                <a class="list-group-item list-group-item-action" data-bs-toggle="list" href="#aplikasi" role="tab"><span class="mx-2"><font-awesome-icon icon="fa-regular fa-square-check"/></span>Layanan Aplikasi</a>
                <a class="list-group-item list-group-item-action" data-bs-toggle="list" href="#hosting" role="tab"><span class="mx-2"><font-awesome-icon icon="fa-regular fa-square-check"/></span>Layanan Hosting</a>
                <a class="list-group-item list-group-item-action" data-bs-toggle="list" href="#pengembangan" role="tab"><span class="mx-2"><font-awesome-icon icon="fa-regular fa-square-check"/></span>Pengembangan Aplikasi</a>
            </div>
        </div>

        <div class="col-md-8">
            <!-- Tab panes -->
            <div class="tab-content">
                <div class="tab-pane active" id="akun" role="tabpanel">
                    <div class="card">
                        <div class="card-header">
                            Manajemen Akun (iGracias, eLearning, WiFi)
                        </div>
                        <div class="card-body">
                            <img class="gambar-layanan" src="../assets/layanan/registrasi-krs.png" alt="">
                            <p class="card-text">Layanan untuk permintaan akun Email, iGracias, e-Learning, WiFi, Office365 untuk menunjang keberlangsungan kegiatan akademik.</p>
                        </div>
                    </div>
                </div>
                <div class="tab-pane" id="internet" role="tabpanel">
                    <div class="card">
                        <div class="card-header">
                            Akses Internet
                        </div>
                        <div class="card-body">
                            <img class="gambar-layanan" src="../assets/layanan/uts-uas.png" alt="">
                            <p class="card-text">Layanan untuk pengaduan mengenai akses internet yang putus nyambung (Blind Spot) dan login wifi undefined, serta peminjaman Orbit atau kebutuhan internet untuk event</p>
                        </div>
                    </div>
                </div>
                <div class="tab-pane" id="aplikasi" role="tabpanel">
                    <div class="card">
                        <div class="card-header">
                            Layanan Aplikasi
                        </div>
                        <div class="card-body">
                            <img class="gambar-layanan" src="../assets/layanan/surat-keterangan-aktif.png" alt="">
                            <p class="card-text">Layanan untuk mengatasi aplikasi (iGracias, Elearning dsb) yang terkena masalah seperti bug dan error yang berdampak terhadap keberlangsungan kegiatan akademik.</p>
                        </div>
                    </div>
                </div>
                <div class="tab-pane" id="hosting" role="tabpanel">
                    <div class="card">
                        <div class="card-header">
                            Layanan Hosting
                        </div>
                        <div class="card-body">
                            <img class="gambar-layanan" src="../assets/layanan/layanan-perkuliahan.png" alt="">
                            <p class="card-text">Layanan untuk memenuhi permintaan domain dan VPS untuk keperluan hosting aplikasi atau website</p>
                        </div>
                    </div>
                </div>
                <div class="tab-pane" id="pengembangan" role="tabpanel">
                    <div class="card">
                        <div class="card-header">
                            Pengembangan Aplikasi
                        </div>
                        <div class="card-body">
                            <img class="gambar-layanan" src="../assets/layanan/ijazah.png" alt="">
                            <p class="card-text">Layanan pembuatan solusi sistem informasi untuk memenuhi kebutuhan proses bisnis.</p>
                        </div>
                    </div>
                </div>
                <div class="tab-pane" id="settings" role="tabpanel">...</div>
            </div>
        </div>
    </div>

    <div class="row my-5">
        <div class="col-md-6">
            <h3 class="mb-3 texth"><div class="blok me-4"></div>Informasi PuTi</h3>
            <p class="mb-5">Merupakan unit yang bertugas mengelola administrasi puti yang mencakup kegiatan layanan administrasi puti, pusat bahasa, dan perpustakaan. Informasi lengkap mengenai Unit PuTi, silakan kunjungi:</p>
            <div class="links">
                <a href="https://www.instagram.com/puti.ittelkomsby/" class="mb-3"><span class="me-5 icon"><font-awesome-icon icon="fa-brands fa-instagram"/></span>puti.ittelkomsby</a>
                <a href="https://puti.ittelkom-sby.ac.id/" class="mb-3"><span class="me-5 icon"><font-awesome-icon icon="fa-solid fa-globe"/></span>https://puti.ittelkom-sby.ac.id/</a>
            </div>
        </div>
        <div class="col-md-6">
            <img src="../assets/layanan/PUTI.png" alt="" class="img-fluid">
        </div>
    </div>
</template>
  
<script>
  
var triggerTabList = [].slice.call(document.querySelectorAll('#myTab a'))
triggerTabList.forEach(function (triggerEl) {
    var tabTrigger = new bootstrap.Tab(triggerEl)

    triggerEl.addEventListener('click', function (event) {
        event.preventDefault()
        tabTrigger.show()
    })
})
</script>
  
<style>
    .gambar-layanan{
        display: block;
        margin: auto;
        width: 200px;
        height: auto;
    }

    .list-group > .active{
    background: #aa0000;
    color: #fff;
    border: none;
  }
  .links a{
    display: block;
    text-decoration: none;
    color: #3a3e4b;
  }
  .links a:hover{
    color: #aa0000;
    cursor: pointer;
  }
  .blok{
    width: 80px;
    background: #aa0000;
    height: 20px;
    display: inline-flex;
    border-radius: 5px;
  }
  h3.texth{
    color: #aa0000;
  }
  .icon{
    color: #aa0000;
  }
</style>