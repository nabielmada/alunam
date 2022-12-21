<template>
  <section id = "cover">
    <div class="d-flex justify-content-center">
    <div class="row align-content-center">
      <div class="col-12 col-sm-12 text-center">
          <img src="/img/katalog/katalog-satu/foto-bingkai-non.png" class = "img-fluid" draggable="false" alt="foto-bingkai">
          <h1 class = "nama-mempelai mt-4">
            {{ mempelai }}
          </h1>
          <p class="mt-3">
            Kepada Bapak/Ibu/Saudara/i 
          </p>
          <p class="mt-3 fs-3 fw-bold">
            {{ to }} 
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

  <div id = "content">
  <section id = "mempelai" class = "mempelai container">
    <div class="d-flex justify-content-center">
    <div class="row align-content-center">
      <div class="col-12 col-sm-12 text-center">
          <h5 class="fw-bold mb-4">THE WEDDING OF</h5>
          <img src="/img/katalog/katalog-satu/foto-bingkai-non.png" class = "img-fluid" draggable="false" alt="foto-bingkai">
          <h1 class = "nama-mempelai mt-4">
            {{ mempelai }}
          </h1>
          <p class="mt-4">
            Kami berharap Anda menjadi bagian <br/>
            dari hari istimewa kami!
          </p>
          <p class="mt-4">
            Kamis, 10 Oktober 2022
          </p>
          <div class = "countdown-date mt-2">

            <div class="row row-cols-4 g-2">

              <div class="col">
                <div class="card border-0">
                  <div class="card-body px-0">
                    <div>12</div>
                    <small>Hari</small>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="card border-0">
                  <div class="card-body px-0">
                    <div>12</div>
                    <small>Jam</small>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="card border-0">
                  <div class="card-body px-0">
                    <div>12</div>
                    <small>Menit</small>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="card border-0">
                  <div class="card-body px-0">
                    <div>12</div>
                    <small>Detik</small>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  </section>

  <div id = "detail-mempelai"></div>
  <section class = "detail-mempelai container mt-4">
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

  <div id = "acara"></div>
  <section class = "container my-5 pt-4">
    <div class="d-flex justify-content-center">
    <div class="row align-content-center">
      <div class="col-12 col-sm-12 text-center">
          <h5 class="fw-bold">SAVE THE DATE</h5>
          <p class="mb-4">Indahnya hari yang dinanti</p>

          <div class="card mb-4 border-0">
            <div class="card-body m-4">
                <h3>Akad Nikah</h3>
                <p class = "fw-semibold">Sabtu, 15 Desember 2022</p>
                <p>
                  Pukul: 09.00 WIB <br/>
                  Kedalaman Mempelai Wanita
                </p>
                <button type = "button" class="btn btn-light"><span class = "bi bi-geo-alt"></span> Lokasi</button>
            </div>
          </div>

          <div class="card border-0">
            <div class="card-body m-4">
                <h3>Resepsi</h3>
                <p class = "fw-semibold">Sabtu, 15 Desember 2022</p>
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
  </section>

  <section id = "amplop-digital" class = "container mt-5 pt-5">
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

  <section id = "ucapan" class = "container mt-5 pt-4">
    <div class="d-flex justify-content-center">
    <div class="row align-content-center">
      <div class="col-12 col-sm-12 text-center">
          <h5 class="fw-bold">UCAPKAN SESUATU</h5>
          <p class="mb-3">Berikan ucapan dan doa restu.</p>

          <div class="form-floating mb-3">
              <input type="text" class="form-control form-control-lg border-0" required
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

          <div class="card mb-4 border-0 text-start">
            <div class="card-body scroll-ucapan">
              <ul class="list-group list-group-flush">
                <li class="list-group-item d-flex justify-content-between align-items-start">
                  <div class="ms-2 me-auto">
                    <div class="fw-bold">Nabiel Mada</div>
                    <div>Selamat menikah kawanku</div>
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
                    <div>Sat set sekali maszeeehh, semoga lancar dan menjadi keluarga yang sakinah mawadah warahmah</div>
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
                    <div>Selamat menikah kawanku</div>
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
                    <div>Selamat menikah kawanku</div>
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
                    <div>Selamat menikah kawanku seperjuangan</div>
                    <small class = "mt-1 text-muted">
                      <span class = "bi bi-clock-history"></span> 
                      Baru saja
                      <!-- <span class = "ms-1">Reply</span> -->
                    </small>
                  </div>
                  <span class="bi bi-patch-check-fill text-success"></span>
                </li>
              </ul>
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
          <h1 class = "nama-mempelai mt-4">
            {{ mempelai }}
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
      src="/img/katalog/katalog-satu/audio/satu.mp3"
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

  // import VueSlickCarousel from 'vue-slick-carousel'
  // import 'vue-slick-carousel/dist/vue-slick-carousel.css'

  export default {
    name: "KatalogView",
    props: {
      mempelai: {
        type: String,
        default: null,
      },
      to: {
        type: String,
        default: null,
      }
    },
    components: { WindowsBottomNavigation },
    data() {
      return {
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
        ]
      }
    },
    mounted() {
      this.isCover();
    },
    methods: {
      isCover() {
        document.getElementById("content").style = "display: none";
      },
      bukaUndangan() {
        this.$refs.audio.play()

        document.getElementById("cover").style = "display: none";
        document.getElementById("content").style = "display: block";

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