<template>
    <!-- <nav class="navbar navbar-expand-lg navbar-dark bg-primary py-3 shadow">
      <div class="container">
        <a class="navbar-brand fs-4" href="/">
            <div class="text-primary-m">alunam</div>
        </a>
        <div class = "navbar-toggler text-white border-0 fs-6" data-bs-toggle="collapse" data-bs-target="#navbarText"
            aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <small>Contoh Katalog</small>
        </div>

        <div class="collapse navbar-collapse" id="navbarText">
        <div class = "mx-auto text-white">
          Saat ini Anda sedang melihat secara uji coba
        </div>
        </div>
            
        <div class="d-flex text-muted ">
          <router-link to="/unlock">
            <button type = "button" class="btn btn-light rounded-pill">
              <span class = "bi bi-cart"></span> 
              Pesan
            </button>
          </router-link>
        </div>
      </div>
    </nav> -->

  <section id = "cover">
    <div class="d-flex justify-content-center">
    <div class="row align-content-center">
      <div class="col-12 col-sm-12 text-center">
          <img src="/img/katalog/katalog-satu/foto-bingkai-non.png" class = "img-fluid" draggable="false" alt="foto-bingkai">
          <h1 class = "nama-mempelai mt-5">
            Maulida & Nabiel
          </h1>
          <p class="mt-5">
            Kepada Bapak/Ibu/Saudara/i 
          </p>
          <p class="mt-4">
            Kami mengundang Anda untuk hadir <br/>
            di acara pernikahan kami
          </p>
          <div class="mt-5">
            <button type = "button" class="btn btn-primary rounded-pill px-4 py-2" @click="bukaUndangan()">
              <span class="bi bi-envelope-paper-heart me-1"></span> <small>Buka Undangan</small>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div id = "content">
  <section id = "mempelai" class = "mempelai container">
    <div class="d-flex justify-content-center">
    <div class="row align-content-center">
      <div class="col-12 col-sm-12 text-center">
          <h5 class="fw-bold mb-5">THE WEDDING OF</h5>
          <img src="/img/katalog/katalog-satu/foto-bingkai-non.png" class = "img-fluid" draggable="false" alt="foto-bingkai">
          <h1 class = "nama-mempelai mt-5">
            Maulida & Nabiel
          </h1>
          <p class="mt-5">
            Kami berharap Anda menjadi bagian <br/>
            dari hari istimewa kami!
          </p>
          <p class="mt-4">
            Kamis, 10 Oktober 2022
          </p>
        </div>
      </div>
    </div>
  </section>

  <section id = "detail-mempelai" class = "detail-mempelai container">
    <div class="d-flex justify-content-center">
    <div class="row align-content-center">
      <div class="col-12 col-sm-12 text-center">
        <img src="/img/katalog/katalog-satu/bismillah.svg" class = "img-fluid mb-3" draggable="false" alt="foto-bingkai">
          <p class="mb-3">Assalamu'alaikum Wr. Wb.</p>
          <p class="mb-5"> 
            Tanpa mengurangi rasa hormat. <br/>
            Kami mengundang Bapak/Ibu/Saudara/i <br/>
            sekalian untuk menghadiri acara pernikahan kami:
          </p>
          <img src="/img/katalog/katalog-satu/foto-bingkai-non.png" class = "img-fluid" draggable="false" alt="foto-bingkai">
          <h1 class = "nama-mempelai-detail mt-5">
            Nor Maulida Porwanti
          </h1>
          <p class="mt-3">
            Putri keempat Bapak Sutega <br/>
            dan Ibu Sutega
          </p>
            <h1 class="my-4">&</h1>
            <img src="/img/katalog/katalog-satu/foto-bingkai-non.png" class = "img-fluid" draggable="false" alt="foto-bingkai">
          <h1 class = "nama-mempelai-detail mt-5">
            Nabiel Mada Ranu R
          </h1>
          <p class="mt-3">
            Putra kedua (Alm) Bapak Masrikan<br/>
            dan Ibu Danik
          </p>
        </div>
      </div>
    </div>
  </section>

  <section id = "acara" class = "container mt-5 pt-4">
    <div class="d-flex justify-content-center">
    <div class="row align-content-center">
      <div class="col-12 col-sm-12 text-center">
          <h5 class="fw-bold mb-5">SAVE THE DATE</h5>

          <div class="card mb-4 border-0">
            <div class="card-body m-5">
                <h3>Akad Nikah</h3>
                <p class = "fw-semibold">Sabtu, 15 Desember 2022</p>
                <p>
                  Pukul: 09.00 WIB <br/>
                  Kedalaman Mempelai Wanita
                </p>
            </div>
          </div>

          <div class="card border-0">
            <div class="card-body m-5">
                <h3>Resepsi</h3>
                <p class = "fw-semibold">Sabtu, 15 Desember 2022</p>
                <p>
                  Pukul: 09.00 WIB <br/>
                  Kedalaman Mempelai Wanita
                </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </section>

  <section id = "amplop-digital" class = "container mt-5 pt-4">
    <div class="d-flex justify-content-center">
    <div class="row align-content-center">
      <div class="col-12 col-sm-12">
          <h5 class="fw-bold mb-5 text-center">AMPLOP DIGITAL</h5>

          <div class="row g-4 ">
            <div class="col-1"></div>
            <div class="col-3 col-sm-3 col-lg-2">
              <img src="/img/katalog/katalog-satu/bca-logo.png" class = "img-fluid" draggable="false" alt="logo-bca">
            </div>
            <div class="col-8 col-sm-8 col-lg-3">
              <div>
                BANK CENTRAL ASIA <br/>
                <small>a.n Nabiel Mada Ranu Ramadhan</small>
                <p>2221012081</p>
                <button type = "button" class = "btn btn-light">
                  <small><i class = "bi bi-clipboard"></i> Salin</small>
                </button>
              </div>
            </div>

            <div class="col-1"></div>
            <div class="col-3 col-sm-3 col-lg-2">
              <img src="/img/katalog/katalog-satu/mandiri-logo.png" class = "img-fluid" draggable="false" alt="logo-bca">
            </div>
            <div class="col-8 col-sm-8 col-lg-3">
              <div>
                BANK MANDIRI <br/>
                <small>a.n Nabiel Mada Ranu Ramadhan</small>
                <p>2221012081</p>
                <button type = "button" class = "btn btn-light">
                  <small><i class = "bi bi-clipboard"></i> Salin</small>
                </button>
              </div>
            </div>

          </div>
          
        </div>
      </div>
    </div>
  </section>

  <section id = "penutup" class = "container mt-5 pt-4">
    <div class="d-flex justify-content-center">
    <div class="row align-content-center">
      <div class="col-12 col-sm-12 text-center">
        <img src="/img/katalog/katalog-satu/foto-bingkai-non.png" class = "img-fluid" draggable="false" alt="foto-bingkai">
          <p class="mt-5 px-2">
            Suatu kehormatan dan kebahagiaan <br/>
            apabila Bapak/Ibu/Saudara/i berkenan hadir
            dan memberikan  doa restu. 
          </p>
          <p class="mt-4">
            Atas kehadiran dan doa restunya,<br/>
            kami mengucapkan terima kasih.
          </p>
          <p class="mt-4">
            Wassalamu'alaikum Wr. Wb.
          </p>
          <h1 class = "nama-mempelai mt-5">
            Maulida & Nabiel
          </h1>
        </div>
      </div>
    </div>
  </section>

  <footer class="my-5 py-5 text-center">
    <small>
      Made with <i class = "bi bi-heart-fill text-danger"></i> by 
      <a href = "/">Alunam</a>
    </small>
  </footer>

  <div class="music-player">
    <audio
      ref="audio"
      src="/img/katalog/katalog-satu/audio/satu.mp3"
      preload
      loop
      id="audio"
      
    ></audio>
    <div @click="toggleSound()" class="toggle-sound"></div>
  </div>
  <WindowsBottomNavigation :options="options" v-model="selected"/>
  </div>


</template>

<script>
  import { WindowsBottomNavigation } from "bottom-navigation-vue";
  import "bottom-navigation-vue/dist/style.css";

  export default {
    name: "KatalogView",
    components: { WindowsBottomNavigation },
    data() {
      return {
        selected: 1,
        options: [
          { id: 1, icon: 'bi-brands bi-heart-fill', color: 'red' },
          { id: 2, icon: 'bi-solid bi-people-fill', color: '#d2d2d2' },
          { id: 3, icon: 'bi-brands bi-calendar-event-fill', color: '#d2d2d2' },
          { id: 4, icon: 'bi-brands bi-images', color: '#d2d2d2' },
          { id: 5, icon: 'bi-brands bi-chat-heart-fill', color: '#d2d2d2' }
        ]
      }
    },
    mounted() {
      this.isCover();
    },
    methods: {
      isCover() {
        document.getElementById("content").style.display = "none";
      },
      bukaUndangan() {
        this.$refs.audio.play()

        document.getElementById("cover").style.display = "none";
        document.getElementById("content").style.display = "block";

      },
      toggleSound() {
        let audio = this.$refs.audio;
        if (
          audio.paused &&
          document.querySelector(".toggle-sound").classList.contains("paused")
        ) {
          console.log("play it")
          audio.play();
          document.querySelector(".toggle-sound").classList.remove("paused");
        } else {
          console.log("pause it")
          audio.pause();
          document.querySelector(".toggle-sound").classList.add("paused");
        }
      },
    },
    created() {
      // 
    }
  };
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Birthstone+Bounce&display=swap');

  #cover,
  #mempelai {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: 90vh;
  }
  /* Image Bingkai */
  .img-bingkai {
    height: 15%;
    width: auto;
  }
  .nama-mempelai{
    font-size: 45px;
    font-family: 'Birthstone Bounce', cursive;
  }
  .nama-mempelai-detail{
    font-size: 40px;
    font-family: 'Birthstone Bounce', cursive;
  }
  .font-acara{
    font-size: 40px;
    font-family: 'Birthstone Bounce', cursive;
  }

  /* Wallpaper */
  .mempelai{
    /* background-image: url('/Applications/XAMPP/xamppfiles/htdocs/alunam/public/img/katalog/katalog-satu/wallpaper-mempelai.png'); */
    background-repeat: no-repeat;
    background-size: contain;
  }
</style>