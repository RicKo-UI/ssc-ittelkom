<template>
    <div class="col-md-12">
        <h3 class="mb-5 texth"><div class="blok me-4"></div>Layanan Logistik</h3>
    </div>

    <div class="row mb-5" role="tabpanel">
        <!-- List group -->
        <div class="col-md-4">
            <div class="list-group" id="myList" role="tablist">
                <a class="list-group-item list-group-item-action active" data-bs-toggle="list" href="#pinjam" role="tab"><span class="mx-2"><font-awesome-icon icon="fa-regular fa-square-check"/></span>Peminjaman Aset</a>
                <a class="list-group-item list-group-item-action" data-bs-toggle="list" href="#pemeliharaan" role="tab"><span class="mx-2"><font-awesome-icon icon="fa-regular fa-square-check"/></span>Pemeliharaan Asset Rusak/Hilang</a>
            </div>
        </div>

        <div class="col-md-8">
            <!-- Tab panes -->
            <div class="tab-content">
                <div class="tab-pane active" id="pinjam" role="tabpanel">
                    <div class="card">
                        <div class="card-header">
                            Peminjaman Aset
                        </div>
                        <div class="card-body">
                            <img class="gambar-layanan" src="../assets/layanan/registrasi-krs.png" alt="">
                            <p class="card-text">Layanan peminjaman asset seperti ruangan kuliah, aula rapat, serta perlengkapan audio & video.</p>
                        </div>
                    </div>
                </div>
                <div class="tab-pane" id="pemeliharaan" role="tabpanel">
                    <div class="card">
                        <div class="card-header">                          
                            Pemeliharaan Asset Rusak / Hilang Pemeliharaan Asset Rusak/Hilang
                        </div>
                        <div class="card-body">
                            <img class="gambar-layanan" src="../assets/layanan/uts-uas.png" alt="">
                            <p class="card-text">Layanan pemeliharaan asset mengenai kelistrikan, air, gedung, audio & video yang rusak atau hilang.</p>
                        </div>
                    </div>
                </div>
                <div class="tab-pane" id="settings" role="tabpanel">...</div>
            </div>
        </div>
    </div>

    <div class="row my-5">
        <div class="col-md-6">
            <h3 class="mb-3 texth"><div class="blok me-4"></div>Informasi Logistik</h3>
            <p class="mb-5">Merupakan unit yang bertugas mengelola administrasi logistik yang mencakup kegiatan layanan administrasi logistik, pusat bahasa, dan perpustakaan. Informasi lengkap mengenai Unit Logistik, silakan kunjungi:</p>
            <div class="links">
                <a href="https://www.instagram.com/logistik.ittelkomsby/" class="mb-3"><span class="me-5 icon"><font-awesome-icon icon="fa-brands fa-instagram"/></span>logistik.ittelkomsby</a>
                <a href="https://logistik.ittelkom-sby.ac.id/" class="mb-3"><span class="me-5 icon"><font-awesome-icon icon="fa-solid fa-globe"/></span>https://logistik.ittelkom-sby.ac.id/</a>
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