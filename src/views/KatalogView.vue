<template>

<div v-if="cover === true">
  <section id = "cover">
    <img :src="'/katalog/'+url_type+'/wallpaper/cover.jpg'" class = "wallpaper-cover img-fluid" draggable="false" alt="wallpaper-cover">

    <div class="row">
      <div class="col-12 col-sm-12 text-center">
        <div data-aos="zoom-in" data-aos-delay="200">

          <!-- this photo bride -->
          <div class = "d-flex justify-content-center align-items-center">
            <img :src="'/katalog/'+url_type+'/bingkai/foto-bingkai.png'" class = "frame-bingkai rotate img-fluid" draggable="false" alt="foto-bride">
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
            <button type = "button" class="btn btn-primary rounded-pill px-4 py-2 shadow" @click="bukaUndangan()">
              <span class="bi bi-envelope-paper-heart me-1"></span> <small>Buka Undangan</small>
            </button>
          </div>
          </div>
        </div>
      </div>
  </section>
</div>

<div id = "content" v-if="content === true">
  <img :src="'/katalog/'+url_type+'/wallpaper/wallpaper.png'" class = "wallpaper img-fluid" draggable="false" alt="wallpaper">
  <section id = "mempelai" class = "mempelai container">
    <div class="d-flex justify-content-center">
    <div class="row align-content-center">
      <div class="col-12 col-sm-12 text-center">
          <h5 class="fw-bold mb-4" data-aos="fade-down" data-aos-delay="200">THE WEDDING OF</h5>
          <!-- this photo bride -->
          <div class = "d-flex justify-content-center align-items-center" data-aos="fade-down" data-aos-delay="200">
            <img :src="'/katalog/'+url_type+'/bingkai/foto-bingkai.png'" class = "frame-bingkai img-fluid" draggable="false" alt="foto-bride">
            <div class="frame">
              <img :src="'/katalog/'+url_type+'/foto/DSCF0139.jpg'" class = "frame-photo img-fluid" draggable="false" alt="foto-bride">
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
            Jum'at, 08 Desember 2023
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

  <!-- <img :src="'/katalog/'+url_type+'/wallpaper/02_Background-Golden-Blue.png'" class = "wallpaper-detail-mempelai img-fluid" draggable="false" alt="wallpaper-detail-mempelai"> -->
  <div id = "detail-mempelai">
  <section class = "container">
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
            <img :src="'/katalog/'+url_type+'/bingkai/foto-bingkai.png'" class = "frame-bingkai img-fluid" draggable="false" alt="foto-bride">
            <div class="frame">
              <img :src="'/katalog/'+url_type+'/foto/DSCF0058.jpg'" class = "frame-photo img-fluid" draggable="false" alt="foto-bride">
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
              <img :src="'/katalog/'+url_type+'/bingkai/foto-bingkai.png'" class = "frame-bingkai img-fluid" draggable="false" alt="foto-bride">
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

  <!-- <img :src="'/katalog/'+url_type+'/wallpaper/04_Background-Golden-Blue.png'" class = "wallpaper-acara img-fluid" draggable="false" alt="wallpaper-acara"> -->
  <div id = "acara">
  <section class = "container">
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
                <p class = "fw-semibold">Jum'at, 08 Desember 2023</p>
                <p>
                  Pukul: 08.00 - 09.30 WIB <br/>
                  Masjid Agung Jawa Tengah (MAJT)
                </p>
                <a href = "https://goo.gl/maps/tz2dbStTSaMTdTLi7" class = "text-black text-decoration-none">
                  <button type = "button" class="btn btn-light"><span class = "bi bi-geo-alt"></span> Lokasi</button>
                </a>
            </div>
          </div>
        </div>

        <div data-aos="flip-down" data-aos-delay="300">
          <div class="card border-0">
            <div class="card-body m-4">
                <h3>Resepsi</h3>
                <p class = "fw-semibold">Jum'at, 08 Desember 2023</p>
                <p>
                  Pukul: 10.00 - 15.00 WIB <br/>
                  Marina Convention Center Semarang (MCC)
                </p>
                <a href = "https://goo.gl/maps/dT2DasPRAAGNsvM77" class = "text-black text-decoration-none">
                  <button type = "button" class="btn btn-light"><span class = "bi bi-geo-alt"></span> Lokasi</button>
                </a>
            </div>
          </div>
        </div>
          
        </div>
      </div>
    </div>
  </section>
  </div>

  <!-- <img :src="'/katalog/'+url_type+'/wallpaper/04_Background-Golden-Blue.png'" class = "wallpaper-amplop-digital img-fluid" draggable="false" alt="wallpaper-amplop-digital"> -->
  <section id = "amplop-digital" class = "container">
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
                
                  <button type = "button" class = "btn btn-light" @click="copyToClipBoard('2221012081')">
                    <small>
                      <span id="myTooltip">
                        <i class = 'bi bi-clipboard'></i> Salin
                      </span>
                    </small>
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
                <p>1350018166007</p>
                
                  <button type = "button" class = "btn btn-light" @click="copyToClipBoard2('1350018166007')">
                    <small>
                      <span id="myTooltip2">
                        <i class = 'bi bi-clipboard'></i> Salin
                      </span>
                    </small>
                  </button>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>

  <section id = "animation" class = "container-fluid">
    <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_4p4x21lt.json"  background="transparent"  speed="0.8"  class = "img-fluid" loop autoplay></lottie-player>
    <p class = "text-center mt-4">
      <small>"Berjumpa dengamu adalah suatu anugerah terindah dalam hidupku dan aku yakin kini kau pun tau. Hidup bersamamu adalah salah satu mimpiku"</small>
    </p>
  </section>

  <!-- <img :src="'/katalog/'+url_type+'/wallpaper/05_Background-Golden-Blue.png'" class = "wallpaper-ucapan img-fluid" draggable="false" alt="wallpaper-ucapan"> -->
  <div id = "ucapan">
    <section class = "container" data-aos="fade-up" data-aos-delay="200">
    <div class="row align-content-center">
      <div class="col-12 col-sm-12 text-center">
          <h5 class="fw-bold">UCAPKAN SESUATU</h5>
          <p class="mb-3">Berikan ucapan dan doa restu.</p>

          <form @submit.prevent="addChat">
          <div class="form-floating mb-3">
              <input type="text" class="form-control border-0" required v-model = "name_chat"
              placeholder="nama">
              <label for="alamat">Nama</label>
          </div>
          <div class="form-floating mb-3">
            <textarea class="form-control border-0 scroll-ucapan" placeholder="Ucapan" required v-model = "say_chat" id="ucapan"></textarea>
            <label for="ucapan">Ucapan</label>
          </div>
          <div class="form-floating mb-4">
          <select class="form-select border-0" v-model = "iscome" id="kehadiran" required aria-label="Konfirmasi Kehadiran">
            <option value="Y">Hadir</option>
            <option value="N">Tidak Hadir</option>
          </select>
          <label for="kehadiran">Konfirmasi Kehadiran</label>
          </div>
          <div class = "mb-4">
            <button type = "submit" class="form-control btn btn-primary rounded-pill p-2">Kirim</button>
          </div>
          </form>

          <p>
            <small>Total: {{ dataChat.length }} Ucapan</small>
          </p>

          <div class="card mb-4 border-0 text-start">
            <div class="card-body scroll-reply">
              <ul class="list-group list-group-flush">
                
                <li v-for = "dataChats in visibleChats" :key="dataChats.id_chat"
                    class="list-group-item d-flex justify-content-between align-items-start my-1">
                  <div class="ms-2 me-auto">
                    <div class="fw-bold">{{ dataChats.name_chat }}</div>
                    <div class = "text-chat">{{ dataChats.say_chat }}</div>
                    <small class = "mt-2 text-muted">
                      <span class = "bi bi-clock-history"></span>  
                       {{ moment(dataChats.created_at).locale("id").calendar() }}
                      <!-- <span class = "ms-1">Reply</span> -->
                    </small>
                  </div>
                  <div v-if = "dataChats.iscome == 'Y'">
                    <span class="bi bi-patch-check-fill text-success"></span>
                  </div>
                  <div v-else>
                    <span class="bi bi-x-circle-fill text-danger"></span>
                  </div>
                </li>

              </ul>
              <center>
                  <button type = "button" class="btn btn-sm btn-light mt-3" @click="chatsVisible += step" v-if="chatsVisible < dataChat.length"> 
                    <small>Lebih Banyak</small>
                  </button>
              </center>
            </div>
          </div>
          
        </div>
      </div>
  </section>
  </div>

  <!-- <img :src="'/katalog/'+url_type+'/wallpaper/06_Background-Golden-Blue.png'" class = "wallpaper-penutup img-fluid" draggable="false" alt="wallpaper-penutup"> -->
  <section id = "penutup">
    <div class="d-flex justify-content-center container">
    <div class="row align-content-center">
      <div class="col-12 col-sm-12 text-center">
        <!-- this photo bride -->
        <div class = "d-flex justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="200">
          <img :src="'/katalog/'+url_type+'/bingkai/foto-bingkai.png'" class = "frame-bingkai img-fluid" draggable="false" alt="foto-bride">
          <div class="frame">
            <img :src="'/katalog/'+url_type+'/foto/DSCF0107.JPG'" class = "frame-photo img-fluid" draggable="false" alt="foto-bride">
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
  import axios from 'axios'
  import moment from 'moment'
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
          { id: 'amplop-digital', icon: 'bi-brands bi-gift-fill', color: '#d2d2d2' },
          { id: 'ucapan', icon: 'bi-brands bi-chat-heart-fill', color: '#d2d2d2' }
        ],
        // type: '',
        akad_date: '',
        dataChat: [],
        chatsVisible: 5,
        step: 5,
      }
    },
    mounted() {
      // if(this.url_type == 'alunam-blue-love'){
      //    this.type = 'Alunam Blue Love';
      // }

      axios
        .get('http://localhost:3000/apial/getChatAll')
        .then((response) => {
          this.dataChat = response.data.dataChat
        });

      return this.akad_date = '2023-12-08 08:00';
    },
    computed: {
      visibleChats() {
        return this.dataChat.slice(0, this.chatsVisible)
      }
    },
    methods: {
      bukaUndangan() {
        this.cover = false;
        this.content = true;
      },
      copyToClipBoard(textToCopy){
        let tmpTextField = document.createElement("textarea")
        tmpTextField.textContent = textToCopy
        tmpTextField.setAttribute("style","position:absolute; right:200%;")
        document.body.appendChild(tmpTextField)
        tmpTextField.select()
        tmpTextField.setSelectionRange(0, 99999) /*For mobile devices*/
        document.execCommand("copy")
        tmpTextField.remove()

        var tooltip = document.getElementById("myTooltip");
        tooltip.innerHTML = "<i class = 'bi bi-clipboard-check'></i> Berhasil disalin";

        var tooltip2 = document.getElementById("myTooltip2");
        tooltip2.innerHTML = "<i class = 'bi bi-clipboard'></i> Salin";
      },
      copyToClipBoard2(textToCopy2){
        let tmpTextField2 = document.createElement("textarea")
        tmpTextField2.textContent = textToCopy2
        tmpTextField2.setAttribute("style","position:absolute; right:200%;")
        document.body.appendChild(tmpTextField2)
        tmpTextField2.select()
        tmpTextField2.setSelectionRange(0, 99999) /*For mobile devices*/
        document.execCommand("copy")
        tmpTextField2.remove()

        var tooltip2 = document.getElementById("myTooltip2");
        tooltip2.innerHTML = "<i class = 'bi bi-clipboard-check'></i> Berhasil disalin";

        var tooltip = document.getElementById("myTooltip");
        tooltip.innerHTML = "<i class = 'bi bi-clipboard'></i> Salin";
      },
      addChat(){

        let dataChat = {
          name_chat: this.name_chat,
          say_chat: this.say_chat,
          iscome: this.iscome
        }

        axios
          .post('http://localhost:3000/apial/addChatAll', dataChat)
          .then(() => {
            this.name_chat = '';
            this.say_chat = '';
            this.iscome = '';
            axios
              .get('http://localhost:3000/apial/getChatAll')
              .then((response) => {
                this.dataChat = response.data.dataChat
              });
          });
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
        selected === 'amplop-digital' ? document.getElementById('amplop-digital').scrollIntoView() : false
        selected === 'ucapan' ? document.getElementById('ucapan').scrollIntoView() : false
      }
    },
    created() {
      this.moment = moment;
    },
  };
</script>