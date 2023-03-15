<template>
  <div class="home">
    <div class="container">
      <!--Hero Section-->
      <div class="row my-4">
        <div class="col-md-5 align-self-end ps-5 mb-md-0 mb-sm-5">
          <h1 class="display-5"><span>S</span>tudent</h1>
          <h1 class="display-5"><span>S</span>ervice</h1>
          <h1 class="display-5"><span>C</span>enter</h1>
          <p>Datang, Buat Tiket, Proses</p>
          <button class="button">Lihat Layanan</button>
        </div>
        <div class="col-md-7">
          <img src="../assets/hero-image-ssc.png" alt="" class="img-fluid">
        </div>
      </div>
      <!---->

      <!--Panduan Section-->
      <div class="row my-5 pt-5">
        <div class="col-md-12 mt-5">
          <h4 class="mb-5"><span class="text"><font-awesome-icon icon="fa-solid fa-book"/> Panduan</span> Pengajuan Layanan</h4>
          <div class="card" style="border: none;">
            <img src="../assets/timeline-image.png" alt="" class="img-fluid">
          </div>
        </div>
      </div>
      <!---->

      <!--Layanan Section-->
      <div class="row mb-3 mt-5">
        <div class="col-md-12">
          <h4><span class="text"><font-awesome-icon icon="fa-solid fa-clipboard"/> Kategori </span>Layanan</h4>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3">
          <div class="card text-center pt-5 pb-3 px-4 mb-3" @click="akademik">
            <span class="mb-3"><font-awesome-icon icon="fa-solid fa-school-flag" style="width: 64px; height: 64px; color: #24253b;"/></span>
            <p>Akademik</p>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card text-center pt-5 pb-3 px-4 mb-3" @click="puti">
            <span class="mb-3"><font-awesome-icon icon="fa-solid fa-user-gear" style="width: 64px; height: 64px; color: #24253b;"/></span>
            <p>PuTi</p>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card text-center pt-5 pb-3 px-4 mb-3" @click="kemahasiswaan">
            <span class="mb-3"><font-awesome-icon icon="fa-solid fa-graduation-cap" style="width: 64px; height: 64px; color: #24253b;"/></span>
            <p>Kemahasiswaan</p>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card text-center pt-5 pb-3 px-4 mb-3" @click="logistik">
            <span class="mb-3"><font-awesome-icon icon="fa-solid fa-box" style="width: 64px; height: 64px; color: #24253b;"/></span>
            <p>Logistik</p>
          </div>
        </div>

        <div class="col-md-3">
          <div class="card text-center pt-5 pb-3 px-4 mb-3" @click="keuangan">
            <span class="mb-3"><font-awesome-icon icon="fa-solid fa-coins" style="width: 64px; height: 64px; color: #24253b;"/></span>
            <p>Keuangan</p>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card text-center pt-5 pb-3 px-4 mb-3" @click="perpustakaan">
            <span class="mb-3"><font-awesome-icon icon="fa-solid fa-book" style="width: 64px; height: 64px; color: #24253b;"/></span>
            <p>Perpustakaan</p>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card text-center pt-5 pb-3 px-4 mb-3" @click="ftib">
            <span class="mb-3"><font-awesome-icon icon="fa-solid fa-code" style="width: 64px; height: 64px; color: #24253b;"/></span>
            <p>FTIB</p>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card text-center pt-5 pb-3 px-4 mb-3" @click="fteic">
            <span class="mb-3"><font-awesome-icon icon="fa-solid fa-bolt" style="width: 64px; height: 64px; color: #24253b;"/></span>
            <p>FTEIC</p>
          </div>
        </div>
      </div>
      <!---->

      <!--Info-->
      <div class="row mt-5">
        <Akademik v-if="showAkademik"/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Akademik from '../components/Akademik.vue'

export default {
  name: 'HomeView',
  components: {
    Akademik,
  },
  data(){
    return{
      showAkademik: true,
      showPuti: false,
      showKemahasiswaan : false,
      showLogistik: false,
      showKeuangan: false,
      showPerpustakaan: false,
      showFtib: false,
      showFteic: false
    }
  },
  methods: {
    akademik(){
      this.showAkademik= true,
      this.showPuti= false,
      this.showKemahasiswaan= false,
      this.showLogistik= false,
      this.showKeuangan= false,
      this.showPerpustakaan= false,
      this.showFtib= false,
      this.showFteic= false
    }
  }
}
</script>

<style>
  h1 span{
    color: #aa0000;
  }
  .button{
    background-color: #aa0000;
    color: white;
    font-weight: 600;
    font-size: 0.85rem;
    border: none;
    padding: 12px 30px;
    border-radius: 5px;
  }
  .text{
    color: #aa0000;
  }
</style>