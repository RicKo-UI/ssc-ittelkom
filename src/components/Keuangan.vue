<template>
    <div class="col-md-12">
        <h3 class="mb-5 texth"><div class="blok me-4"></div>Layanan Keuangan</h3>
    </div>

    <div class="row mb-5" role="tabpanel">
        <!-- List group -->
        <div class="col-md-4">
            <div class="list-group" id="myList" role="tablist">
                <a class="list-group-item list-group-item-action active" data-bs-toggle="list" href="#bpp" role="tab"><span class="mx-2"><font-awesome-icon icon="fa-regular fa-square-check"/></span>Pembayaran BPP Semester</a>
                <a class="list-group-item list-group-item-action" data-bs-toggle="list" href="#angsuran" role="tab"><span class="mx-2"><font-awesome-icon icon="fa-regular fa-square-check"/></span>Pengajuan Angsuran</a>
                <a class="list-group-item list-group-item-action" data-bs-toggle="list" href="#bukti" role="tab"><span class="mx-2"><font-awesome-icon icon="fa-regular fa-square-check"/></span>Permintaan Bukti Pembayaran/Kuitansi Pembayaran Biaya Pendidikan</a>
                <a class="list-group-item list-group-item-action" data-bs-toggle="list" href="#tagihan" role="tab"><span class="mx-2"><font-awesome-icon icon="fa-regular fa-square-check"/></span>Permintaan Surat Tagihan/ Invoice Biaya Pendidikan</a>
                <a class="list-group-item list-group-item-action" data-bs-toggle="list" href="#keterangan" role="tab"><span class="mx-2"><font-awesome-icon icon="fa-regular fa-square-check"/></span>Permintaan Surat Keterangan Bebas Administrasi Keuangan</a>
            </div>
        </div>

        <div class="col-md-8">
            <!-- Tab panes -->
            <div class="tab-content">
                <div class="tab-pane active" id="bpp" role="tabpanel">
                    <div class="card">
                        <div class="card-header">
                            Pembayaran BPP Semester
                        </div>
                        <div class="card-body">
                            <img class="gambar-layanan" src="../assets/layanan/registrasi-krs.png" alt="">
                            <p class="card-text">Panduan pembayaran Biaya Penyelenggaraan Pendidikan setiap semester.</p>
                        </div>
                    </div>
                </div>
                <div class="tab-pane" id="angsuran" role="tabpanel">
                    <div class="card">
                        <div class="card-header">
                            Pengajuan Angsuran
                        </div>
                        <div class="card-body">
                            <img class="gambar-layanan" src="../assets/layanan/uts-uas.png" alt="">
                            <p class="card-text">Pengajuan keringanan bagi mahasiswa yang belum dapat melakukan pelunasan pembayaran BPP</p>
                        </div>
                    </div>
                </div>
                <div class="tab-pane" id="bukti" role="tabpanel">
                    <div class="card">
                        <div class="card-header">
                            Permintaan Bukti Pembayaran/Kuitansi Pembayaran Biaya Pendidikan
                        </div>
                        <div class="card-body">
                            <img class="gambar-layanan" src="../assets/layanan/surat-keterangan-aktif.png" alt="">
                            <p class="card-text">ermintaan bukti pembayaran biaya pendidikan dari mahasiswa atau orang tua/wali mahasiswa</p>
                        </div>
                    </div>
                </div>
                <div class="tab-pane" id="tagihan" role="tabpanel">
                    <div class="card">
                        <div class="card-header">
                            Permintaan Surat Tagihan/ Invoice Biaya Pendidikan
                        </div>
                        <div class="card-body">
                            <img class="gambar-layanan" src="../assets/layanan/layanan-perkuliahan.png" alt="">
                            <p class="card-text">Permintaan surat tagihan atau invoice biaya pendidikan dari mahasiswa atau orang tua/wali mahasiswa</p>
                        </div>
                    </div>
                </div>
                <div class="tab-pane" id="keterangan" role="tabpanel">
                    <div class="card">
                        <div class="card-header">
                            Permintaan Surat Keterangan Bebas Administrasi Keuangan
                        </div>
                        <div class="card-body">
                            <img class="gambar-layanan" src="../assets/layanan/ijazah.png" alt="">
                            <p class="card-text">Permintaan surat keterangan yang menyatakan bahwa mahasiswa sudah tidak memiliki piutang biaya pendidikan. Surat tersebut digunakan untuk keperluan mengurus proses kelulusan dan proses undur diri</p>
                        </div>
                    </div>
                </div>
                <div class="tab-pane" id="settings" role="tabpanel">...</div>
            </div>
        </div>
    </div>

    <div class="row my-5">
        <div class="col-md-6">
            <h3 class="mb-3 texth"><div class="blok me-4"></div>Informasi Keuangan</h3>
            <p class="mb-5">Merupakan unit yang bertugas mengelola administrasi keuangan yang mencakup kegiatan layanan administrasi keuangan, pusat bahasa, dan perpustakaan. Informasi lengkap mengenai Unit Keuangan, silakan kunjungi:</p>
            <div class="links">
                <a href="https://www.instagram.com/keuangan.ittelkomsby/" class="mb-3"><span class="me-5 icon"><font-awesome-icon icon="fa-brands fa-instagram"/></span>keuangan.ittelkomsby</a>
                <a href="https://keuangan.ittelkom-sby.ac.id/" class="mb-3"><span class="me-5 icon"><font-awesome-icon icon="fa-solid fa-globe"/></span>https://keuangan.ittelkom-sby.ac.id/</a>
            </div>
        </div>
        <div class="col-md-6">
            <img src="../assets/layanan/Keuangan.png" alt="" class="img-fluid">
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