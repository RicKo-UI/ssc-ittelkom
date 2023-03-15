<template>
    <div class="col-md-12">
        <h3 class="mb-5 texth"><div class="blok me-4"></div>Layanan FTEIC</h3>
    </div>

    <div class="row mb-5" role="tabpanel">
        <!-- List group -->
        <div class="col-md-4">
            <div class="list-group" id="myList" role="tablist">
                <a class="list-group-item list-group-item-action active" data-bs-toggle="list" href="#ska" role="tab"><span class="mx-2"><font-awesome-icon icon="fa-regular fa-square-check"/></span>Surat Keterangan Aktif Mahasiswa di Fakultas</a>
                <a class="list-group-item list-group-item-action" data-bs-toggle="list" href="#pengantar" role="tab"><span class="mx-2"><font-awesome-icon icon="fa-regular fa-square-check"/></span>Surat Pengantar dari Kampus untuk Tugas MK dan TA</a>
                <a class="list-group-item list-group-item-action" data-bs-toggle="list" href="#dispensasi" role="tab"><span class="mx-2"><font-awesome-icon icon="fa-regular fa-square-check"/></span>Surat Dispensasi</a>
                <a class="list-group-item list-group-item-action" data-bs-toggle="list" href="#rekomendasi" role="tab"><span class="mx-2"><font-awesome-icon icon="fa-regular fa-square-check"/></span>Surat Rekomendasi</a>
                <a class="list-group-item list-group-item-action" data-bs-toggle="list" href="#lab" role="tab"><span class="mx-2"><font-awesome-icon icon="fa-regular fa-square-check"/></span>Surat Peminjaman Lab dan Perlengkapannya</a>
                <a class="list-group-item list-group-item-action" data-bs-toggle="list" href="#residensi" role="tab"><span class="mx-2"><font-awesome-icon icon="fa-regular fa-square-check"/></span>Residensi TA (menginap di kampus)</a>
                <a class="list-group-item list-group-item-action" data-bs-toggle="list" href="#dana" role="tab"><span class="mx-2"><font-awesome-icon icon="fa-regular fa-square-check"/></span>Proposal Dana Kegiatan</a>
                <a class="list-group-item list-group-item-action" data-bs-toggle="list" href="#legalisir" role="tab"><span class="mx-2"><font-awesome-icon icon="fa-regular fa-square-check"/></span>Legalisir KHS & Transkrip</a>
            </div>
        </div>

        <div class="col-md-8">
            <!-- Tab panes -->
            <div class="tab-content">
                <div class="tab-pane active" id="ska" role="tabpanel">
                    <div class="card">
                        <div class="card-header">
                            Surat Keterangan Aktif Mahasiswa di Fakultas
                        </div>
                        <div class="card-body">
                            <img class="gambar-layanan" src="../assets/layanan/registrasi-krs.png" alt="">
                            <p class="card-text">Layanan panduan pengajuan surat yang menjelaskan bahwa mahasiswa sebagaimana termaktub pada surat tersebut berstatus aktif mengikuti perkuliahan di semester tertentu</p>
                        </div>
                    </div>
                </div>
                <div class="tab-pane" id="pengantar" role="tabpanel">
                    <div class="card">
                        <div class="card-header">
                            Surat Pengantar dari Kampus untuk Tugas MK dan TA
                        </div>
                        <div class="card-body">
                            <img class="gambar-layanan" src="../assets/layanan/uts-uas.png" alt="">
                            <p class="card-text">Surat pengantar yang dikeluarkan untuk Tugas Mata Kuliah dan Tugas Akhir untuk observasi ke suatu Instansi/perusahaan</p>
                        </div>
                    </div>
                </div>
                <div class="tab-pane" id="dispensasi" role="tabpanel">
                    <div class="card">
                        <div class="card-header">
                            Surat Dispensasi
                        </div>
                        <div class="card-body">
                            <img class="gambar-layanan" src="../assets/layanan/surat-keterangan-aktif.png" alt="">
                            <p class="card-text">Surat resmi untuk keperluan meminta keringanan atau pemakluman dari suatu hal</p>
                        </div>
                    </div>
                </div>
                <div class="tab-pane" id="rekomendasi" role="tabpanel">
                    <div class="card">
                        <div class="card-header">
                            Surat Rekomendasi
                        </div>
                        <div class="card-body">
                            <img class="gambar-layanan" src="../assets/layanan/layanan-perkuliahan.png" alt="">
                            <p class="card-text">Surat yang merekomendasikan mahasiswa atau disebut juga sebagai surat referensi yang membantu pihak ketiga mengetahui dan memahami lebih lanjut tentang mahasiswa tersebut</p>
                        </div>
                    </div>
                </div>
                <div class="tab-pane" id="lab" role="tabpanel">
                    <div class="card">
                        <div class="card-header">
                            Surat Peminjaman Lab dan Perlengkapannya
                        </div>
                        <div class="card-body">
                            <img class="gambar-layanan" src="../assets/layanan/ijazah.png" alt="">
                            <p class="card-text">Surat peminjaman ruangan atau inventaris laboratorium</p>
                        </div>
                    </div>
                </div>
                <div class="tab-pane" id="residensi" role="tabpanel">
                    <div class="card">
                        <div class="card-header">
                            Residensi TA (menginap di kampus)
                        </div>
                        <div class="card-body">
                            <img class="gambar-layanan" src="../assets/layanan/ijazah.png" alt="">
                            <p class="card-text">Surat keterangan dengan kepentingan menginap di kampus untuk keperluan Tugas Akhir</p>
                        </div>
                    </div>
                </div>
                <div class="tab-pane" id="dana" role="tabpanel">
                    <div class="card">
                        <div class="card-header">
                            Proposal Dana Kegiatan
                        </div>
                        <div class="card-body">
                            <img class="gambar-layanan" src="../assets/layanan/ijazah.png" alt="">
                            <p class="card-text">Sebuah dokumen rencana acara yang ditulis dengan tujuan permohonan izin dan dukungan berupa dana atau sponsor</p>
                        </div>
                    </div>
                </div>
                <div class="tab-pane" id="legalisir" role="tabpanel">
                    <div class="card">
                        <div class="card-header">
                            Legalisir KHS & Transkrip
                        </div>
                        <div class="card-body">
                            <img class="gambar-layanan" src="../assets/layanan/ijazah.png" alt="">
                            <p class="card-text">Pembubuhan cap stempel dan tanda tangan asli oleh pihak yang berwenang pada lembar fotokopi Kartu Hasil Studi & Transkrip</p>
                        </div>
                    </div>
                </div>
                <div class="tab-pane" id="settings" role="tabpanel">...</div>
            </div>
        </div>
    </div>

    <div class="row my-5">
        <div class="col-md-6">
            <h3 class="mb-3 texth"><div class="blok me-4"></div>Informasi FTEIC</h3>
            <p class="mb-5">Merupakan unit yang bertugas mengelola administrasi fteic yang mencakup kegiatan layanan administrasi fteic, pusat bahasa, dan perpustakaan. Informasi lengkap mengenai Unit FTEIC, silakan kunjungi:</p>
            <div class="links">
                <a href="https://www.instagram.com/fteic.ittelkomsby/" class="mb-3"><span class="me-5 icon"><font-awesome-icon icon="fa-brands fa-instagram"/></span>fteic.ittelkomsby</a>
                <a href="https://fteic.ittelkom-sby.ac.id/" class="mb-3"><span class="me-5 icon"><font-awesome-icon icon="fa-solid fa-globe"/></span>https://fteic.ittelkom-sby.ac.id/</a>
            </div>
        </div>
        <div class="col-md-6">
            <img src="../assets/layanan/Fteic.png" alt="" class="img-fluid">
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