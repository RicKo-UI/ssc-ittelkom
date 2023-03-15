<template>
    <div class="col-md-12">
        <h3 class="mb-5 texth"><div class="blok me-4"></div>Layanan Kemahasiswaan</h3>
    </div>

    <div class="row mb-5" role="tabpanel">
        <!-- List group -->
        <div class="col-md-4">
            <div class="list-group" id="myList" role="tablist">
                <a class="list-group-item list-group-item-action active" data-bs-toggle="list" href="#tak" role="tab"><span class="mx-2"><font-awesome-icon icon="fa-regular fa-square-check"/></span>Transkrip aktivitas kemahasiswaan (TAK)</a>
                <a class="list-group-item list-group-item-action" data-bs-toggle="list" href="#dispen" role="tab"><span class="mx-2"><font-awesome-icon icon="fa-regular fa-square-check"/></span>Surat Tugas/Dispensasi</a>
                <a class="list-group-item list-group-item-action" data-bs-toggle="list" href="#lomba" role="tab"><span class="mx-2"><font-awesome-icon icon="fa-regular fa-square-check"/></span>Surat Rekomendasi/Delegasi Lomba</a>
                <a class="list-group-item list-group-item-action" data-bs-toggle="list" href="#beasiswa" role="tab"><span class="mx-2"><font-awesome-icon icon="fa-regular fa-square-check"/></span>Surat Keterangan Beasiswa</a>
                <a class="list-group-item list-group-item-action" data-bs-toggle="list" href="#ktm" role="tab"><span class="mx-2"><font-awesome-icon icon="fa-regular fa-square-check"/></span>KTM, Jas Almameter dan Vest</a>
                <a class="list-group-item list-group-item-action" data-bs-toggle="list" href="#dana" role="tab"><span class="mx-2"><font-awesome-icon icon="fa-regular fa-square-check"/></span>Proposal Pengajuan Dana dan LPJ Kegiatan Ormawa dan UKM</a>
                <a class="list-group-item list-group-item-action" data-bs-toggle="list" href="#asuransi" role="tab"><span class="mx-2"><font-awesome-icon icon="fa-regular fa-square-check"/></span>Asuransi dan Layanan Kesehatan Telkomedika</a>
            </div>
        </div>

        <div class="col-md-8">
            <!-- Tab panes -->
            <div class="tab-content">
                <div class="tab-pane active" id="tak" role="tabpanel">
                    <div class="card">
                        <div class="card-header">
                            Transkrip aktivitas kemahasiswaan (TAK)
                        </div>
                        <div class="card-body">
                            <img class="gambar-layanan" src="../assets/layanan/registrasi-krs.png" alt="">
                            <p class="card-text">Layanan approval sertifikat TAK sebagai syarat untuk mengikuti sidang tugas akhir/skripsi/proyek akhir, mendapatkan beasiswa, dan mengikuti seleksi mahasiswa berprestasi.</p>
                        </div>
                    </div>
                </div>
                <div class="tab-pane" id="dispen" role="tabpanel">
                    <div class="card">
                        <div class="card-header">
                            Surat Tugas / Dispensasi
                        </div>
                        <div class="card-body">
                            <img class="gambar-layanan" src="../assets/layanan/uts-uas.png" alt="">
                            <p class="card-text">Layanan pembuatan surat tugas atau dispensasi untuk kebutuhan presensi.</p>
                        </div>
                    </div>
                </div>
                <div class="tab-pane" id="lomba" role="tabpanel">
                    <div class="card">
                        <div class="card-header">
                            Surat Rekomendasi / Delegasi Lomba
                        </div>
                        <div class="card-body">
                            <img class="gambar-layanan" src="../assets/layanan/surat-keterangan-aktif.png" alt="">
                            <p class="card-text">Layanan pengajuan surat rekomendasi atau surat pengantar lomba.</p>
                        </div>
                    </div>
                </div>
                <div class="tab-pane" id="beasiswa" role="tabpanel">
                    <div class="card">
                        <div class="card-header">
                            Surat Keterangan Tidak Menerima Beasiswa Dari Kampus
                        </div>
                        <div class="card-body">
                            <img class="gambar-layanan" src="../assets/layanan/layanan-perkuliahan.png" alt="">
                            <p class="card-text">Layanan pembuatan surat keterangan tidak menerima beasiswa dari kampus untuk keperluan tertentu.</p>
                        </div>
                    </div>
                </div>
                <div class="tab-pane" id="ktm" role="tabpanel">
                    <div class="card">
                        <div class="card-header">
                            KTM, Jas Almameter dan Vest
                        </div>
                        <div class="card-body">
                            <img class="gambar-layanan" src="../assets/layanan/ijazah.png" alt="">
                            <p class="card-text">Layanan pendataan, penerimaan jas almamater & vest serta KTM mahasiswa Institut Teknologi Telkom Surabaya.</p>
                        </div>
                    </div>
                </div>
                <div class="tab-pane" id="dana" role="tabpanel">
                    <div class="card">
                        <div class="card-header">
                            Proposal Pengajuan Dana dan LPJ Kegiatan Ormawa dan UKM
                        </div>
                        <div class="card-body">
                            <img class="gambar-layanan" src="../assets/layanan/ijazah.png" alt="">
                            <p class="card-text">Layanan terkait pelaksanaan pengusulan & pendanaan program kegiatan ormawa dan UKM.</p>
                        </div>
                    </div>
                </div>
                <div class="tab-pane" id="asuransi" role="tabpanel">
                    <div class="card">
                        <div class="card-header">
                            Asuransi dan Layanan Kesehatan Telkomedika
                        </div>
                        <div class="card-body">
                            <img class="gambar-layanan" src="../assets/layanan/ijazah.png" alt="">
                            <p class="card-text">Layanan terkait pelaksanaan pengajuan klaim & asuransi kesehatan mahasiswa.</p>
                        </div>
                    </div>
                </div>
                <div class="tab-pane" id="settings" role="tabpanel">...</div>
            </div>
        </div>
    </div>

    <div class="row my-5">
        <div class="col-md-6">
            <h3 class="mb-3 texth"><div class="blok me-4"></div>Informasi kemahasiswaan</h3>
            <p class="mb-5">Merupakan unit yang bertugas mengelola administrasi kemahasiswaan yang mencakup kegiatan layanan administrasi kemahasiswaan, pusat bahasa, dan perpustakaan. Informasi lengkap mengenai Unit Kemahasiswaan, silakan kunjungi:</p>
            <div class="links">
                <a href="https://www.instagram.com/kemahasiswaanitts/" class="mb-3"><span class="me-5 icon"><font-awesome-icon icon="fa-brands fa-instagram"/></span>kemahasiswaanitts</a>
                <a href="https://www.instagram.com/kemahasiswaan.ittelkomsby/" class="mb-3"><span class="me-5 icon"><font-awesome-icon icon="fa-solid fa-globe"/></span>https://kemahasiswaan.ittelkom-sby.ac.id/</a>
            </div>
        </div>
        <div class="col-md-6">
            <img src="../assets/layanan/Kemahasiswaan.png" alt="" class="img-fluid">
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