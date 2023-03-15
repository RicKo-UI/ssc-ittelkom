<template>
    <div class="col-md-12">
        <h3 class="mb-5 texth"><div class="blok me-4"></div>Layanan Akademik</h3>
    </div>

    <div class="row mb-5" role="tabpanel">
        <!-- List group -->
        <div class="col-md-4">
            <div class="list-group" id="myList" role="tablist">
                <a class="list-group-item list-group-item-action active" data-bs-toggle="list" href="#krs" role="tab"><span class="mx-2"><font-awesome-icon icon="fa-regular fa-square-check"/></span>Registrasi KRS</a>
                <a class="list-group-item list-group-item-action" data-bs-toggle="list" href="#ujian" role="tab"><span class="mx-2"><font-awesome-icon icon="fa-regular fa-square-check"/></span>Ujian UTS & UAS</a>
                <a class="list-group-item list-group-item-action" data-bs-toggle="list" href="#ska" role="tab"><span class="mx-2"><font-awesome-icon icon="fa-regular fa-square-check"/></span>Surat Keterangan Aktif</a>
                <a class="list-group-item list-group-item-action" data-bs-toggle="list" href="#kuliah" role="tab"><span class="mx-2"><font-awesome-icon icon="fa-regular fa-square-check"/></span>Layanan Perkuliahan</a>
                <a class="list-group-item list-group-item-action" data-bs-toggle="list" href="#ijazah" role="tab"><span class="mx-2"><font-awesome-icon icon="fa-regular fa-square-check"/></span>Ijazah & Transkrip Nilai</a>
            </div>
        </div>

        <div class="col-md-8">
            <!-- Tab panes -->
            <div class="tab-content">
                <div class="tab-pane active" id="krs" role="tabpanel">
                    <div class="card">
                        <div class="card-header">
                            Registrasi KRS
                        </div>
                        <div class="card-body">
                            <img class="gambar-layanan" src="../assets/layanan/registrasi-krs.png" alt="">
                            <p class="card-text">Merupakan registrasi mahasiswa pada setiap semester awal perkuliahan</p>
                        </div>
                    </div>
                </div>
                <div class="tab-pane" id="ujian" role="tabpanel">
                    <div class="card">
                        <div class="card-header">
                            Ujian (UTS & UAS)
                        </div>
                        <div class="card-body">
                            <img class="gambar-layanan" src="../assets/layanan/uts-uas.png" alt="">
                            <p class="card-text">Layanan pengumuman jadwal kegiatan ujian akademik yang bertujuan untuk melakukan pengukuran dan penilaian kompetensi peserta didik, sebagai dasar kegiatan evaluasi pembelajaran perkuliahan.</p>
                        </div>
                    </div>
                </div>
                <div class="tab-pane" id="ska" role="tabpanel">
                    <div class="card">
                        <div class="card-header">
                            Surat Keterangan Aktif
                        </div>
                        <div class="card-body">
                            <img class="gambar-layanan" src="../assets/layanan/surat-keterangan-aktif.png" alt="">
                            <p class="card-text">Layanan panduan pengajuan surat yang menjelaskan bahwa mahasiswa sebagaimana termaktub pada surat tersebut berstatus aktif mengikuti perkuliahan di semester tertentu.</p>
                        </div>
                    </div>
                </div>
                <div class="tab-pane" id="kuliah" role="tabpanel">
                    <div class="card">
                        <div class="card-header">
                            Layanan Perkuliahan
                        </div>
                        <div class="card-body">
                            <img class="gambar-layanan" src="../assets/layanan/layanan-perkuliahan.png" alt="">
                            <p class="card-text">Layanan panduan mengenai proses pelayanan perkuliahan yang ada di IT Telkom Surabaya</p>
                        </div>
                    </div>
                </div>
                <div class="tab-pane" id="ijazah" role="tabpanel">
                    <div class="card">
                        <div class="card-header">
                            Ijazah dan Transkrip Nilai
                        </div>
                        <div class="card-body">
                            <img class="gambar-layanan" src="../assets/layanan/ijazah.png" alt="">
                            <p class="card-text">Layanan mengenai proses penerbitan transkrip dan ijazah kepada calon lulusan dan pihak terkait sehingga proses penerbitan transkrip dapat terkendali.</p>
                        </div>
                    </div>
                </div>
                <div class="tab-pane" id="settings" role="tabpanel">...</div>
            </div>
        </div>
    </div>

    <div class="row my-5">
        <div class="col-md-6">
            <h3 class="mb-3 texth"><div class="blok me-4"></div>Informasi Akdemik</h3>
            <p class="mb-5">Merupakan unit yang bertugas mengelola administrasi akademik yang mencakup kegiatan layanan administrasi akademik, pusat bahasa, dan perpustakaan. Informasi lengkap mengenai Unit Akademik, silakan kunjungi:</p>
            <div class="links">
                <a href="https://www.instagram.com/akademikitts/" class="mb-3"><span class="me-5 icon"><font-awesome-icon icon="fa-brands fa-instagram"/></span>akademikitts</a>
                <a href="https://akademik.ittelkom-sby.ac.id/" class="mb-3"><span class="me-5 icon"><font-awesome-icon icon="fa-solid fa-globe"/></span>https://akademik.ittelkom-sby.ac.id/</a>
            </div>
        </div>
        <div class="col-md-6">
            <img src="../assets/layanan/Akademik.png" alt="" class="img-fluid">
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