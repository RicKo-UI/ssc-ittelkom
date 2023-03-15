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
        <div class="col-md-3 col-sm-3">
          <div class="card text-center pt-5 pb-3 px-4 mb-3" @click="akademik" :class="{ slct: showAkademik}">
            <span class="mb-3"><font-awesome-icon icon="fa-solid fa-school-flag icons" style="width: 64px; height: 64px;"/></span>
            <p>Akademik</p>
          </div>
        </div>
        <div class="col-md-3 col-sm-3">
          <div class="card text-center pt-5 pb-3 px-4 mb-3" @click="puti" :class="{ slct: showPuti}">
            <span class="mb-3"><font-awesome-icon icon="fa-solid fa-user-gear icons" style="width: 64px; height: 64px;"/></span>
            <p>PuTi</p>
          </div>
        </div>
        <div class="col-md-3 col-sm-3">
          <div class="card text-center pt-5 pb-3 px-4 mb-3" @click="kemahasiswaan" :class="{ slct: showKemahasiswaan}">
            <span class="mb-3"><font-awesome-icon icon="fa-solid fa-graduation-cap icons" style="width: 64px; height: 64px;"/></span>
            <p>Kemahasiswaan</p>
          </div>
        </div>
        <div class="col-md-3 col-sm-3">
          <div class="card text-center pt-5 pb-3 px-4 mb-3" @click="logistik" :class="{ slct: showLogistik}">
            <span class="mb-3"><font-awesome-icon icon="fa-solid fa-box icons" style="width: 64px; height: 64px;"/></span>
            <p>Logistik</p>
          </div>
        </div>

        <div class="col-md-3 col-sm-3">
          <div class="card text-center pt-5 pb-3 px-4 mb-3" @click="keuangan" :class="{ slct: showKeuangan}">
            <span class="mb-3"><font-awesome-icon icon="fa-solid fa-coins icons" style="width: 64px; height: 64px;"/></span>
            <p>Keuangan</p>
          </div>
        </div>
        <div class="col-md-3 col-sm-3">
          <div class="card text-center pt-5 pb-3 px-4 mb-3" @click="perpustakaan" :class="{ slct: showPerpustakaan}">
            <span class="mb-3"><font-awesome-icon icon="fa-solid fa-book icons" style="width: 64px; height: 64px;"/></span>
            <p>Perpustakaan</p>
          </div>
        </div>
        <div class="col-md-3 col-sm-3">
          <div class="card text-center pt-5 pb-3 px-4 mb-3" @click="ftib" :class="{ slct: showFtib}">
            <span class="mb-3"><font-awesome-icon icon="fa-solid fa-code icons" style="width: 64px; height: 64px;"/></span>
            <p>FTIB</p>
          </div>
        </div>
        <div class="col-md-3 col-sm-3">
          <div class="card text-center pt-5 pb-3 px-4 mb-3" @click="fteic" :class="{ slct: showFteic}">
            <span class="mb-3"><font-awesome-icon icon="fa-solid fa-bolt icons" style="width: 64px; height: 64px;"/></span>
            <p>FTEIC</p>
          </div>
        </div>
      </div>
      <!---->

      <!--Info-->
      <div class="row mt-5">
        <Akademik v-if="showAkademik"/>
        <Puti v-if="showPuti"/>
        <Kemahasiswaan v-if="showKemahasiswaan"/>
        <Logistik v-if="showLogistik"/>
        <Keuangan v-if="showKeuangan"/>
        <Perpustakaan v-if="showPerpustakaan"/>
        <Ftib v-if="showFtib"/>
        <Fteic v-if="showFteic"/>
      </div>
      <!---->

    </div>
    <div class="container-fluid mt-5 pt-3 fluid-bg">
      <div class="container">
        <!--Footer-->
        <div class="row pt-5">
          <div class="col-md-3">
            <h3>Student Service Center</h3>
            <p>Contact</p>
            <p class="fluid-p">Address: Jl. Ketintang No.156, Gayungan, Surabaya, Jawa Timur 60231</p>
            <p class="fluid-p">Phone: (+6231) 8280800</p>
            <p class="fluid-p">Email: humas@ittelkom-sby.ac.id</p>
          </div>
          <div class="col-md-6">
            <h5 class="mb-4">Aplikasi Student Service Center</h5>
            <p class="fst-italic">Ditunjukkan untuk mempermudah perangkat kerja serta mahasiswa Institut Teknologi Telkom Surabaya untuk melakukan pelaporan pemintaan bantuan, demi terciptanya lingkungan kerja serta perkuliahan yang lebih baik dan efisien.</p>
          </div>
          <div class="col-md-3">
            <h5 class="mb-4">My Account</h5>
            <div class="link-home">
              <a href="https://ssc.ittelkom-sby.ac.id/operator-sign-in" class="mb-2">My History</a>
              <a href="https://ssc.ittelkom-sby.ac.id/operator-sign-in" class="mb-2">Service List</a>
              <a href="https://ssc.ittelkom-sby.ac.id/operator-sign-in" class="mb-2">Sign Out</a>
            </div>
          </div>
        </div>
        <!---->
        
      </div>
    </div>

    <!--Copyright-->
    <div class="container">
      <div class="row pt-3">
        <div class="col-md-6">
          <p>&#169; 2023, <span class="copyright-text">IT Telkom Surabaya</span> Student Service Center</p>
        </div>
        <div class="col-md-6">
          <p class="text-end"><span class="copyright-text">IT Telkom Surabaya</span> All rights reserved</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Akademik from '../components/Akademik.vue'
import Puti from '../components/Puti.vue'
import Kemahasiswaan from '../components/Kemahasiswaan.vue'
import Logistik from '../components/Logistik.vue'
import Keuangan from '../components/Keuangan.vue'
import Perpustakaan from '../components/Perpustakaan.vue'
import Ftib from '../components/Ftib.vue'
import Fteic from '../components/Fteic.vue'

export default {
  name: 'HomeView',
  components: {
    Akademik,
    Puti,
    Kemahasiswaan,
    Logistik,
    Keuangan,
    Perpustakaan,
    Ftib,
    Fteic
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
    },
    puti(){
      this.showAkademik= false,
      this.showPuti= true,
      this.showKemahasiswaan= false,
      this.showLogistik= false,
      this.showKeuangan= false,
      this.showPerpustakaan= false,
      this.showFtib= false,
      this.showFteic= false
    },
    kemahasiswaan(){
      this.showAkademik= false,
      this.showPuti= false,
      this.showKemahasiswaan= true,
      this.showLogistik= false,
      this.showKeuangan= false,
      this.showPerpustakaan= false,
      this.showFtib= false,
      this.showFteic= false
    },
    logistik(){
      this.showAkademik= false,
      this.showPuti= false,
      this.showKemahasiswaan= false,
      this.showLogistik= true,
      this.showKeuangan= false,
      this.showPerpustakaan= false,
      this.showFtib= false,
      this.showFteic= false
    },
    keuangan(){
      this.showAkademik= false,
      this.showPuti= false,
      this.showKemahasiswaan= false,
      this.showLogistik= false,
      this.showKeuangan= true,
      this.showPerpustakaan= false,
      this.showFtib= false,
      this.showFteic= false
    },
    perpustakaan(){
      this.showAkademik= false,
      this.showPuti= false,
      this.showKemahasiswaan= false,
      this.showLogistik= false,
      this.showKeuangan= false,
      this.showPerpustakaan= true,
      this.showFtib= false,
      this.showFteic= false
    },
    ftib(){
      this.showAkademik= false,
      this.showPuti= false,
      this.showKemahasiswaan= false,
      this.showLogistik= false,
      this.showKeuangan= false,
      this.showPerpustakaan= false,
      this.showFtib= true,
      this.showFteic= false
    },
    fteic(){
      this.showAkademik= false,
      this.showPuti= false,
      this.showKemahasiswaan= false,
      this.showLogistik= false,
      this.showKeuangan= false,
      this.showPerpustakaan= false,
      this.showFtib= false,
      this.showFteic= true
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
  .link-home a{
    display: block;
    text-decoration: none;
    color: #fff;
  }
  .link-home a:hover{
    color: #aa0000;
    cursor: pointer;
  }
  .fluid-bg{
    background: #1e1e1e;
    color: white;
  }
  .fluid-p{
    color: white;
  }
  .copyright-text{
    color: #aa0000;
    font-weight: 600;
  }
  .card.slct{
    background: #aa0000;
    color: white;
  }
  .card.slct p{
    color: white;
  }
  .card.slct .icons{
    color: white;
  }
</style>