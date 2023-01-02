<template>

<div class = "wallpaper-cover" v-if="cover === true">
  <section id = "cover">
    <div class="row">
      <div class="col-12 col-sm-12 text-center">
        <div data-aos="zoom-in" data-aos-delay="200">

          <!-- this photo bride -->
          <div class = "d-flex justify-content-center align-items-center">
            <img :src="'/katalog/'+url_type+'/bingkai/foto-bingkai-tiga.png'" class = "frame-bingkai img-fluid" draggable="false" alt="foto-bride">
            <div class="frame">
              <img :src="'/katalog/'+url_type+'/foto/DSCF0107.JPG'" class = "frame-photo img-fluid" draggable="false" alt="foto-bride">
            </div>
          </div>
          <!-- end this photo bride -->

          <h1 class = "nama-mempelai mt-4">
            Maulida & Nabiel
          </h1>
          <p class="mt-3">
            Kepada Bapak/Ibu/Saudara/i 
          </p>
          <p class="mt-3 fs-3 fw-bold">
            MADA RANU 
          </p>
          <p class="mt-3">
            Kami mengundang Anda untuk hadir <br/>
            di acara pernikahan kami
          </p>
          <div class="mt-4">
            <button type = "button" class="btn btn-primary rounded-pill px-4 py-2" @click="bukaUndangan()">
              <span class="bi bi-envelope-paper-heart me-1"></span> <small>Buka Undangan</small>
            </button>
          </div>
          </div>
        </div>
      </div>
  </section>
</div>

<div id = "content" v-if="content === true">
  <div class = "wallpaper-mempelai" >
  <section id = "mempelai" class = "mempelai container">
    <div class="d-flex justify-content-center">
    <div class="row align-content-center">
      <div class="col-12 col-sm-12 text-center">
          <h5 class="fw-bold mb-4" data-aos="fade-down" data-aos-delay="200">THE WEDDING OF</h5>
          <!-- this photo bride -->
          <div class = "d-flex justify-content-center align-items-center" data-aos="fade-down" data-aos-delay="200">
            <img :src="'/katalog/'+url_type+'/bingkai/foto-bingkai-tiga.png'" class = "frame-bingkai img-fluid" draggable="false" alt="foto-bride">
            <div class="frame">
              <img :src="'/katalog/'+url_type+'/foto/DSCF0139.JPG'" class = "frame-photo img-fluid" draggable="false" alt="foto-bride">
            </div>
          </div>
          <!-- end this photo bride -->
          <!-- <img :src="'/katalog/'+url_type+'/bingkai/foto-bingkai-non.png'" class = "img-fluid" draggable="false" alt="foto-bingkai" data-aos="fade-down" data-aos-delay="200"> -->

          <div data-aos="fade-up" data-aos-delay="200">
          <h1 class = "nama-mempelai mt-4">
            Maulida & Nabiel
          </h1>
          <p class="mt-4">
            Kami berharap Anda menjadi bagian <br/>
            dari hari istimewa kami!
          </p>
          <p class="mt-4 fw-semibold">
            Kamis, 10 Oktober 2023
          </p>
          
          <!-- Countdown -->
          <TimerEvent 
          :endtime="akad_date" 
          trans='{  
          "day":"Hari",
          "hours":"Jam",
          "minutes":"Menit",
          "seconds":"Detik",
          "expired":"Event has been expired.",
          "running":"Till the end of event.",
          "upcoming":"Till start of event.",
          "status": {
              "expired":"Expired",
              "running":"Running",
              "upcoming":"Future"
            }}'
          ></TimerEvent>
          <!-- End Countdown -->
        </div>

        </div>
      </div>
    </div>
  </section>
</div>

  <div id = "detail-mempelai"></div>
  <div class = "wallpaper-detail-mempelai my-5 pt-4" >
  <section class = "detail-mempelai container">
    <div class="d-flex justify-content-center">
    <div class="row align-content-center">
      <div class="col-12 col-sm-12 text-center">
        <div data-aos="fade-up" data-aos-delay="200">
        <img :src="'/katalog/'+url_type+'/asset/bismillah.svg'" class = "img-fluid mb-3" draggable="false" alt="foto-bingkai">
          <p class="mb-3">Assalamu'alaikum Wr. Wb.</p>
          <p class="mb-5"> 
            Tanpa mengurangi rasa hormat. <br/>
            Kami mengundang Bapak/Ibu/Saudara/i <br/>
            sekalian untuk menghadiri acara pernikahan kami:
          </p>
        </div>
          <!-- this photo bride -->
          <div class = "d-flex justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="200">
            <img :src="'/katalog/'+url_type+'/bingkai/foto-bingkai-tiga.png'" class = "frame-bingkai img-fluid" draggable="false" alt="foto-bride">
            <div class="frame">
              <img :src="'/katalog/'+url_type+'/foto/DSCF0058.JPG'" class = "frame-photo img-fluid" draggable="false" alt="foto-bride">
            </div>
          </div>
          <!-- end this photo bride -->
          <!-- <img :src="'/katalog/'+url_type+'/bingkai/foto-bingkai-non.png'" class = "img-fluid" draggable="false" alt="foto-bingkai" data-aos="fade-up" data-aos-delay="200"> -->

          <h1 class = "nama-mempelai-detail mt-5" data-aos="fade-up" data-aos-delay="250">
            Nor Maulida Porwanti
          </h1>
          <p class="mt-3" data-aos="fade-up" data-aos-delay="300">
            Putri keempat Bapak Sutega <br/>
            dan Ibu Sri Lestari
          </p>
            <h1 class="my-4" data-aos="fade-up" data-aos-delay="200">&</h1>
            <!-- this photo bride -->
            <div class = "d-flex justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="200">
              <img :src="'/katalog/'+url_type+'/bingkai/foto-bingkai-tiga.png'" class = "frame-bingkai img-fluid" draggable="false" alt="foto-bride">
              <div class="frame">
                <img :src="'/katalog/'+url_type+'/foto/DSCF0115.JPG'" class = "frame-photo img-fluid" draggable="false" alt="foto-bride">
              </div>
            </div>
            <!-- end this photo bride -->
            <!-- <img :src="'/katalog/'+url_type+'/bingkai/foto-bingkai-non.png'" class = "img-fluid" draggable="false" alt="foto-bingkai" data-aos="fade-up" data-aos-delay="200"> -->

          <h1 class = "nama-mempelai-detail mt-5" data-aos="fade-up" data-aos-delay="250">
            Nabiel Mada Ranu R
          </h1>
          <p class="mt-3" data-aos="fade-up" data-aos-delay="300">
            Putra kedua Bapak Masrikan<br/>
            dan Ibu Danik
          </p>
        </div>
      </div>
    </div>
  </section>
</div>

  <div id = "acara"></div>
  <section class = "container my-5 pt-4">
    <div class="d-flex justify-content-center">
    <div class="row align-content-center">
      <div class="col-12 col-sm-12 text-center">
        <div data-aos="fade-up" data-aos-delay="200">
          <h5 class="fw-bold">SAVE THE DATE</h5>
          <p class="mb-4">Indahnya hari yang dinanti</p>
        </div>

        <div data-aos="flip-down" data-aos-delay="300">
          <div class="card mb-4 border-0">
            <div class="card-body m-4">
                <h3>Akad Nikah</h3>
                <p class = "fw-semibold">Sabtu, 15 Desember 2023</p>
                <p>
                  Pukul: 09.00 WIB <br/>
                  Kedalaman Mempelai Wanita
                </p>
                <button type = "button" class="btn btn-light"><span class = "bi bi-geo-alt"></span> Lokasi</button>
            </div>
          </div>
        </div>

        <div data-aos="flip-down" data-aos-delay="300">
          <div class="card border-0">
            <div class="card-body m-4">
                <h3>Resepsi</h3>
                <p class = "fw-semibold">Sabtu, 15 Desember 2023</p>
                <p>
                  Pukul: 09.00 WIB <br/>
                  Kedalaman Mempelai Wanita
                </p>
                <button type = "button" class="btn btn-light"><span class = "bi bi-geo-alt"></span> Lokasi</button>
            </div>
          </div>
        </div>
          
        </div>
      </div>
    </div>
  </section>

  <section id = "amplop-digital" class = "container mt-5 pt-5">
    <div class="d-flex justify-content-center">
    <div class="row align-content-center">
      <div class="col-12 col-sm-12">
          <h5 class="fw-bold mb-5 text-center" data-aos="fade-up" data-aos-delay="200">AMPLOP DIGITAL</h5>

          <div class="row g-3" data-aos="fade-up" data-aos-delay="200">
            <div class="col-1"></div>
            <div class="col-3 col-sm-3 col-lg-2">
              <img :src="'/katalog/'+url_type+'/asset/bca-logo.png'" class = "img-fluid" draggable="false" alt="logo-bca">
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
              <img :src="'/katalog/'+url_type+'/asset/mandiri-logo.png'" class = "img-fluid" draggable="false" alt="logo-bca">
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

  <div id = "ucapan"></div>
  <section class = "container mt-5 pt-4" data-aos="fade-up" data-aos-delay="200">
    <div class="d-flex justify-content-center">
    <div class="row align-content-center">
      <div class="col-12 col-sm-12 text-center">
          <h5 class="fw-bold">UCAPKAN SESUATU</h5>
          <p class="mb-3">Berikan ucapan dan doa restu.</p>

          <div class="form-floating mb-3">
              <input type="text" class="form-control border-0" required
              placeholder="nama">
              <label for="alamat">Nama</label>
          </div>
          <div class="form-floating mb-3">
            <textarea class="form-control border-0" placeholder="Ucapan" id="ucapan" style="height: 80px"></textarea>
            <label for="ucapan">Ucapan</label>
          </div>
          <div class="form-floating mb-4">
          <select class="form-select border-0" id="kehadiran" aria-label="Konfirmasi Kehadiran">
            <option value="Hadir">Hadir</option>
            <option value="Tidak Hadir">Tidak Hadir</option>
          </select>
          <label for="kehadiran">Konfirmasi Kehadiran</label>
          </div>
          <div class = "mb-4">
            <button type = "button" class="form-control btn btn-primary rounded-pill p-2">Kirim</button>
          </div>

          <p>
            <small>Total: 99 Ucapan</small>
          </p>

          <div class="card mb-4 border-0 text-start">
            <div class="card-body scroll-ucapan">
              <ul class="list-group list-group-flush">
                <li class="list-group-item d-flex justify-content-between align-items-start">
                  <div class="ms-2 me-auto">
                    <div class="fw-bold">Nabiel Mada</div>
                    <div class = "text-chat">Selamat menikah kawanku</div>
                    <small class = "mt-1 text-muted">
                      <span class = "bi bi-clock-history"></span> 
                      Baru saja
                      <!-- <span class = "ms-1">Reply</span> -->
                    </small>
                  </div>
                  <span class="bi bi-patch-check-fill text-success"></span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start">
                  <div class="ms-2 me-auto">
                    <div class="fw-bold">Madara Ucihah</div>
                    <div class = "text-chat">Sat set sekali maszeeehh, semoga lancar dan menjadi keluarga yang sakinah mawadah warahmah</div>
                    <small class = "mt-1 text-muted">
                      <span class = "bi bi-clock-history"></span> 
                      2 hari, 20 jam lalu
                      <!-- <span class = "ms-1">Reply</span> -->
                    </small>
                  </div>
                  <span class="bi bi-x-circle-fill text-danger"></span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start">
                  <div class="ms-2 me-auto">
                    <div class="fw-bold">Nabiel Mada</div>
                    <div class = "text-chat">Selamat menikah kawanku</div>
                    <small class = "mt-1 text-muted">
                      <span class = "bi bi-clock-history"></span> 
                      Baru saja
                      <!-- <span class = "ms-1">Reply</span> -->
                    </small>
                  </div>
                  <span class="bi bi-patch-check-fill text-success"></span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start">
                  <div class="ms-2 me-auto">
                    <div class="fw-bold">Nabiel Mada</div>
                    <div class = "text-chat">Selamat menikah kawanku</div>
                    <small class = "mt-1 text-muted">
                      <span class = "bi bi-clock-history"></span> 
                      Baru saja
                      <!-- <span class = "ms-1">Reply</span> -->
                    </small>
                  </div>
                  <span class="bi bi-patch-check-fill text-success"></span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start">
                  <div class="ms-2 me-auto">
                    <div class="fw-bold">Nabiel Mada</div>
                    <div class = "text-chat">Selamat menikah kawanku seperjuangan</div>
                    <small class = "mt-1 text-muted">
                      <span class = "bi bi-clock-history"></span> 
                      Baru saja
                      <!-- <span class = "ms-1">Reply</span> -->
                    </small>
                  </div>
                  <span class="bi bi-patch-check-fill text-success"></span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start">
                  <div class="ms-2 me-auto">
                    <div class="fw-bold">Madara Ucihah</div>
                    <div class = "text-chat">Sat set sekali maszeeehh, semoga lancar dan menjadi keluarga yang sakinah mawadah warahmah</div>
                    <small class = "mt-1 text-muted">
                      <span class = "bi bi-clock-history"></span> 
                      2 hari, 20 jam lalu
                      <!-- <span class = "ms-1">Reply</span> -->
                    </small>
                  </div>
                  <span class="bi bi-x-circle-fill text-danger"></span>
                </li>
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </section>

  <section id = "penutup" class = "container mt-5 py-4">
    <div class="d-flex justify-content-center">
    <div class="row align-content-center">
      <div class="col-12 col-sm-12 text-center">
        <!-- this photo bride -->
        <div class = "d-flex justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="200">
          <img :src="'/katalog/'+url_type+'/bingkai/foto-bingkai-tiga.png'" class = "frame-bingkai img-fluid" draggable="false" alt="foto-bride">
          <div class="frame">
            <img :src="'/katalog/'+url_type+'/foto/DSCF0144.JPG'" class = "frame-photo img-fluid" draggable="false" alt="foto-bride">
          </div>
        </div>
        <!-- end this photo bride -->
        <!-- <img :src="'/katalog/'+url_type+'/bingkai/foto-bingkai-non.png'" class = "img-fluid" draggable="false" alt="foto-bingkai" data-aos="fade-up" data-aos-delay="200"> -->
        <div data-aos="fade-up" data-aos-delay="200">
          <p class="mt-4 px-2">
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
        </div>
          <h1 class = "nama-mempelai mt-4" data-aos="fade-up" data-aos-delay="200">
            Maulida & Nabiel
          </h1>
        </div>
      </div>
    </div>
  </section>

  <footer class="my-5 pb-5 text-center">
    <small>
      Made with <i class = "bi bi-heart-fill text-danger"></i> by 
      <a href = "/">Alunam</a>
    </small>
  </footer>

  <div class="music-player">
    <audio
      ref="audio"
      :src="'/katalog/'+url_type+'/audio/song.mp3'"
      autoplay
      preload
      loop
      id="audio"
      
    ></audio>
    <div @click="toggleSound()" class="toggle-sound"></div>
  </div>

    <WindowsBottomNavigation :options="options" v-model="selected" @click="scrollTo(selected)"/>
  </div>


</template>

<script>
  import { WindowsBottomNavigation } from "bottom-navigation-vue";
  import "bottom-navigation-vue/dist/style.css";

  import TimerEvent from '@/components/TimerEvent.vue'

  // import VueSlickCarousel from 'vue-slick-carousel'
  // import 'vue-slick-carousel/dist/vue-slick-carousel.css'

  export default {
    name: "KatalogView",
    props: {
      url_type: {
        type: String,
        default: null,
      },
    },
    components: { WindowsBottomNavigation, TimerEvent },
    data() {
      return {
        cover: true,
        content: false,
        selected: 'mempelai',
        options: [
          { id: 'mempelai', icon: 'bi-brands bi-heart-fill', color: 'red' },
          { 
            id: 'detail-mempelai', 
            icon: 'bi-solid bi-people-fill', 
            color: '#d2d2d2',
          },
          { id: 'acara', icon: 'bi-brands bi-calendar-event-fill', color: '#d2d2d2' },
          { id: 'amplop-digital', icon: 'bi-brands bi-images', color: '#d2d2d2' },
          { id: 'ucapan', icon: 'bi-brands bi-chat-heart-fill', color: '#d2d2d2' }
        ],
        type: '',
        akad_date: '',
      }
    },
    mounted() {
      if(this.url_type == 'alunam-blue-love'){
         this.type = 'Alunam Blue Love';
      }

      return this.akad_date = '2023-01-05 16:37';
    },
    methods: {
      bukaUndangan() {
        this.cover = false;
        this.content = true;
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
      scrollTo(selected) {
        selected === 'mempelai' ? document.getElementById('mempelai').scrollIntoView() : false
        selected === 'detail-mempelai' ? document.getElementById('detail-mempelai').scrollIntoView() : false
        selected === 'acara' ? document.getElementById('acara').scrollIntoView() : false
        selected === 'galeri' ? document.getElementById('galeri').scrollIntoView() : false
        selected === 'ucapan' ? document.getElementById('ucapan').scrollIntoView() : false
      }
    },
    created() {
      //
    }
  };
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Birthstone+Bounce&display=swap');

  #cover{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 90vh;
    width: 100vw;
    position: fixed;
    /* margin-top: 10%; */
  }
  
  #mempelai {
    padding-top: 15%;
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
  /* .wallpaper-cover{
    background: url('/Applications/XAMPP/xamppfiles/htdocs/alunam/public/undangan/alunam-blue-love/asset/wallpaper-cover.jpeg') no-repeat;
    background-size: cover;
    min-height: 100vh;
  } */
  /* .wallpaper-mempelai{
    background: url('/Applications/XAMPP/xamppfiles/htdocs/alunam/public/undangan/alunam-blue-love/asset/wallpaper-cover.jpeg') no-repeat;
    background-size: cover;
    min-height: 90vh;
  } */
  /* .wallpaper-detail-mempelai{
    background: url('/Applications/XAMPP/xamppfiles/htdocs/alunam/public/undangan/alunam-blue-love/asset/wallpaper-cover.jpeg') no-repeat center fixed;
    background-size: cover;
    min-height: 90vh;
  } */
</style>