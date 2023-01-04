<template>
  
  <div v-if="isActive === 'N'">
    <div class="mt-5 pt-5">
    <center>
      <lottie-player src="https://assets5.lottiefiles.com/private_files/lf30_cgfdhxgx.json"  background="transparent"  speed="1" style="width: 300px; height: 300px;"  loop  autoplay></lottie-player>
        <h4>Maaf undangan tidak ditemukan</h4>
        <div class ="text-muted mt-2">
            <small>
                Url Undangan yang Anda berikan tidak ditemukan <br/> 
                pastikan link yang diberikan sudah sesuai</small>
        </div>
    </center>
    </div>
  </div>
  <div v-else>

  <div v-if="cover === true">
  <section id = "cover">
    <img :src="'/katalog/'+url_type+'/wallpaper/cover.jpg'" class = "wallpaper-cover img-fluid" draggable="false" alt="wallpaper-cover">

    <div class="d-flex justify-content-center">
    <div class="row align-content-center">
      <div class="col-12 col-sm-12 text-center">
        <div data-aos="zoom-in" data-aos-delay="200">

          <!-- this photo bride -->
          <div class = "d-flex justify-content-center align-items-center">
            <img :src="'/katalog/'+url_type+'/bingkai/foto-bingkai.png'" class = "frame-bingkai img-fluid" draggable="false" alt="foto-bride">
            <div class="frame">
              <img :src="'/katalog/'+url_type+'/foto/'+couplePic" class = "frame-photo img-fluid" draggable="false" alt="foto-bride">
            </div>
          </div>
          <!-- end this photo bride -->

          <h1 class = "nama-mempelai mt-4">
            {{ womenCall }} & {{ manCall }}
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
              <img :src="'/katalog/'+url_type+'/foto/'+couplePic" class = "frame-photo img-fluid" draggable="false" alt="foto-bride">
            </div>
          </div>
          <!-- end this photo bride -->

          <div data-aos="fade-up" data-aos-delay="200">
          <h1 class = "nama-mempelai mt-4">
            {{ womenCall }} & {{ manCall }}
          </h1>
          <p class="mt-4">
            Kami berharap Anda menjadi bagian <br/>
            dari hari istimewa kami!
          </p>
          <p class="mt-4">
            {{ moment(akadDate).locale("id").format('dddd, Do MMMM YYYY') }}
          </p>
          
          <!-- Countdown -->
          <TimerEvent 
          :endtime="akadDate" 
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
        <img :src="'/undangan/'+url_type+'/asset/bismillah.svg'" class = "img-fluid mb-3" draggable="false" alt="foto-bingkai">
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
              <img :src="'/katalog/'+url_type+'/foto/'+womenPic" class = "frame-photo img-fluid" draggable="false" alt="foto-bride">
            </div>
          </div>
          <!-- end this photo bride -->
          <h1 class = "nama-mempelai-detail mt-5" data-aos="fade-up" data-aos-delay="250">
            {{ womenName }}
          </h1>
          <p class="mt-3" data-aos="fade-up" data-aos-delay="300">
            Putri {{ womenChildOf }} 

            Bapak {{ womenFather }} <br/>
            dan Ibu {{ womenMother }}
          </p>
            <h1 class="my-4" data-aos="fade-up" data-aos-delay="200">&</h1>
            <!-- this photo bride -->
            <div class = "d-flex justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="200">
              <img :src="'/katalog/'+url_type+'/bingkai/foto-bingkai.png'" class = "frame-bingkai img-fluid" draggable="false" alt="foto-bride">
              <div class="frame">
                <img :src="'/katalog/'+url_type+'/foto/'+manPic" class = "frame-photo img-fluid" draggable="false" alt="foto-bride">
              </div>
            </div>
            <!-- end this photo bride -->
          <h1 class = "nama-mempelai-detail mt-5" data-aos="fade-up" data-aos-delay="250">
            {{ manName }}
          </h1>
          <p class="mt-3" data-aos="fade-up" data-aos-delay="300">
            Putra {{ manChildOf }} 

            Bapak {{ manFather }}<br/>
            dan Ibu {{ manMother }}
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
                <p class = "fw-semibold">
                  {{ moment(akadDate).locale("id").format('dddd, Do MMMM YYYY') }}
                </p>
                <p>
                  Pukul: 
                  {{ akadStart }} - {{ akadEnd }}
                  {{ akadTimezone }} <br/>
                  {{ akadAddress }}
                </p>
                <a :href = "url_gmaps_akad" target = "_blank" class = "text-black text-decoration-none">
                  <button type = "button" class="btn btn-light"><span class = "bi bi-geo-alt"></span> Lokasi</button>
                </a>
            </div>
          </div>
        </div>

        <div data-aos="flip-down" data-aos-delay="300">
          <div class="card border-0">
            <div class="card-body m-4">
                <h3>Resepsi</h3>
                <p class = "fw-semibold">
                  {{ moment(resepsiDate).locale("id").format('dddd, Do MMMM YYYY') }}
                </p>
                <p>
                  Pukul: 
                  {{ resepsiStart }} - {{ resepsiEnd }}
                  {{ resepsiTimezone }} <br/>
                  {{ resepsiAddress }}
                </p>
                <a :href = "url_gmaps_resepsi" target = "_blank" class = "text-black text-decoration-none">
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

          <div class="row g-3 " data-aos="fade-up" data-aos-delay="200">
            <div class="col-1"></div>
            <div class="col-3 col-sm-3 col-lg-2">
              <span v-if = "bankOne == 'BANK CENTRAL ASIA (BCA)'" >
                <img :src="'/undangan/'+url_type+'/asset/bca-logo.png'" class = "img-fluid" draggable="false" alt="logo-bca">
              </span>
              <span v-if = "bankOne == 'BANK MANDIRI'" >
                <img :src="'/undangan/'+url_type+'/asset/mandiri-logo.png'" class = "img-fluid" draggable="false" alt="logo-mandiri">
              </span>
              <span v-if = "bankOne == 'BANK NEGARA INDONESIA (BNI)'" >
                <img :src="'/undangan/'+url_type+'/asset/bni-logo.png'" class = "img-fluid" draggable="false" alt="logo-bni">
              </span>
              <span v-if = "bankOne == 'BANK RAKYAT INDONESIA (BRI)'" >
                <img :src="'/undangan/'+url_type+'/asset/bri-logo.png'" class = "img-fluid" draggable="false" alt="logo-bri">
              </span>
              <span v-if = "bankOne == 'DANA'" >
                <img :src="'/undangan/'+url_type+'/asset/dana-logo.png'" class = "img-fluid" draggable="false" alt="logo-dana">
              </span>
            </div>
            <div class="col-8 col-sm-8 col-lg-3">
              <div>
                {{ bankOne }} <br/>
                <small>a.n {{ anOne }}</small>
                <p>{{ norekOne }}</p>
                  <button type = "button" class = "btn btn-light" @click="copyToClipBoard(norekOne)">
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
              <span v-if = "bankTwo == 'BANK CENTRAL ASIA (BCA)'" >
                <img :src="'/undangan/'+url_type+'/asset/bca-logo.png'" class = "img-fluid" draggable="false" alt="logo-bca">
              </span>
              <span v-if = "bankTwo == 'BANK MANDIRI'" >
                <img :src="'/undangan/'+url_type+'/asset/mandiri-logo.png'" class = "img-fluid" draggable="false" alt="logo-mandiri">
              </span>
              <span v-if = "bankTwo == 'BANK NEGARA INDONESIA (BNI)'" >
                <img :src="'/undangan/'+url_type+'/asset/bni-logo.png'" class = "img-fluid" draggable="false" alt="logo-bni">
              </span>
              <span v-if = "bankTwo == 'BANK RAKYAT INDONESIA (BRI)'" >
                <img :src="'/undangan/'+url_type+'/asset/bri-logo.png'" class = "img-fluid" draggable="false" alt="logo-bri">
              </span>
              <span v-if = "bankTwo == 'DANA'" >
                <img :src="'/undangan/'+url_type+'/asset/dana-logo.png'" class = "img-fluid" draggable="false" alt="logo-dana">
              </span>
            </div>
            <div class="col-8 col-sm-8 col-lg-3">
              <div>
                {{ bankTwo }} <br/>
                <small>a.n {{ anTwo }}</small>
                <p>{{ norekTwo }}</p>
                  <button type = "button" class = "btn btn-light" @click="copyToClipBoard2(norekTwo)">
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
  <section id = "penutup" class = "container mt-5 py-4">
    <div class="d-flex justify-content-center">
    <div class="row align-content-center">
      <div class="col-12 col-sm-12 text-center">
         <!-- this photo bride -->
         <div class = "d-flex justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="200">
            <img :src="'/katalog/'+url_type+'/bingkai/foto-bingkai.png'" class = "frame-bingkai img-fluid" draggable="false" alt="foto-bride">
            <div class="frame">
              <img :src="'/katalog/'+url_type+'/foto/'+couplePic" class = "frame-photo img-fluid" draggable="false" alt="foto-bride">
            </div>
          </div>
          <!-- end this photo bride -->
        <div data-aos="fade-up" data-aos-delay="200">
          <p class="mt-4 px-2">
            Suatu kehormatan dan kebahagiaan <br/>
            apabila Bapak/Ibu/Saudara/i berkenan hadir
            dan memberikan doa restu. 
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
            {{ womenCall }} & {{ manCall }}
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
      :src="'/undangan/'+url_type+'/audio/'+music"
      preload
      autoplay
      loop
      id="audio"
      
    ></audio>
    <div @click="toggleSound()" class="toggle-sound"></div>
  </div>

    <WindowsBottomNavigation :options="options" v-model="selected" @click="scrollTo(selected)"/>
  </div>

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
      mempelai: {
        type: String,
        default: null,
      },
      to: {
        type: String,
        default: null,
      }
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
        manName: '',
        manCall: '',
        manFather: '',
        manMother: '',
        manChildOf: '',

        womenName: '',
        womenCall: '',
        womenFather: '',
        womenMother: '',
        womenChildOf: '',

        manPic: '',
        womenic: '',
        couplePic: '',

        akadDate: '',
        akadStart: '',
        akadEnd: '',
        akadTimezone: '',
        akadAddress: '',
        url_gmaps_akad: '',

        resepsiDate: '',
        resepsiStart: '',
        resepsiEnd: '',
        resepsiTimezone: '',
        resepsiAddress: '',
        url_gmaps_resepsi: '',

        bankOne: '',
        anOne: '',
        norekOne: '',
        bankTwo: '',
        anTwo: '',
        norekTwo: '',

        isActive: '',
        url_type: '',

        name_chat: '',
        say_chat: '',
        iscome: '',
        dataChat: [],
        chatsVisible: 4,
        step: 4,
      }
    },
    mounted() {
      axios
        .get('https://b.sulungsoft.com/apial/getUndangan/'+this.$route.params.url_params)
        .then((response) => {

          this.isActive = response.data.dataUndangan.isactive;
          this.url_type = response.data.dataUndangan.url_type;
          this.music = response.data.dataUndangan.music;

          this.manPic = response.data.dataUndangan.man_pic;
          this.womenPic = response.data.dataUndangan.women_pic;
          this.couplePic = response.data.dataUndangan.couple_pic;

          this.manName = response.data.dataUndangan.man_name;
          this.manCall = response.data.dataUndangan.man_call;
          this.manFather = response.data.dataUndangan.man_father;
          this.manMother = response.data.dataUndangan.man_mother;

          let manChildOf = response.data.dataUndangan.man_child_of

          if(manChildOf == '1'){
            this.manChildOf = 'Pertama'
          }else if(manChildOf == '2'){
            this.manChildOf = 'Kedua'
          }else if(manChildOf == '3'){
            this.manChildOf = 'Ketiga'
          }else if(manChildOf == '4'){
            this.manChildOf = 'Keempat'
          }else if(manChildOf == '5'){
            this.manChildOf = 'Kelima'
          }else if(manChildOf == '6'){
            this.manChildOf = 'Keenam'
          }else if(manChildOf == '7'){
            this.manChildOf = 'Ketujuh'
          }else if(manChildOf == '8'){
            this.manChildOf = 'Kedelapan'
          }else if(manChildOf == '9'){
            this.manChildOf = 'Kesembilan'
          }else if(manChildOf == '10'){
            this.manChildOf = 'Kesepuluh'
          }else{
            this.manChildOf = 'Lebih Dari Kesepuluh'
          }

          this.womenName = response.data.dataUndangan.women_name;
          this.womenCall = response.data.dataUndangan.women_call;
          this.womenFather = response.data.dataUndangan.women_father;
          this.womenMother = response.data.dataUndangan.women_mother;
          let womenChildOf = response.data.dataUndangan.women_child_of;

          if(womenChildOf == '1'){
            this.womenChildOf = 'Pertama'
          }else if(womenChildOf == '2'){
            this.womenChildOf = 'Kedua'
          }else if(womenChildOf == '3'){
            this.womenChildOf = 'Ketiga'
          }else if(womenChildOf == '4'){
            this.womenChildOf = 'Keempat'
          }else if(womenChildOf == '5'){
            this.womenChildOf = 'Kelima'
          }else if(womenChildOf == '6'){
            this.womenChildOf = 'Keenam'
          }else if(womenChildOf == '7'){
            this.womenChildOf = 'Ketujuh'
          }else if(womenChildOf === '8'){
            this.womenChildOf = 'Kedelapan'
          }else if(womenChildOf == '9'){
            this.womenChildOf = 'Kesembilan'
          }else if(womenChildOf == '10'){
            this.womenChildOf = 'Kesepuluh'
          }else{
            this.womenChildOf = 'Lebih Dari Kesepuluh'
          }

          this.akadDate = response.data.dataUndangan.akad_date;
          this.akadStart = response.data.dataUndangan.akad_start;
          this.akadEnd = response.data.dataUndangan.akad_end;
          this.akadTimezone = response.data.dataUndangan.akad_timezone;
          this.akadAddress = response.data.dataUndangan.akad_address;
          this.url_gmaps_akad = response.data.dataUndangan.url_gmaps_akad;

          this.resepsiDate = response.data.dataUndangan.resepsi_date;
          this.resepsiStart = response.data.dataUndangan.resepsi_start;
          this.resepsiEnd = response.data.dataUndangan.resepsi_end;
          this.resepsiTimezone = response.data.dataUndangan.resepsi_timezone;
          this.resepsiAddress = response.data.dataUndangan.resepsi_address;
          this.url_gmaps_resepsi = response.data.dataUndangan.url_gmaps_resepsi;


          this.bankOne = response.data.dataUndangan.bank_one;
          this.anOne = response.data.dataUndangan.an_one;
          this.norekOne = response.data.dataUndangan.norek_one;

          this.bankTwo = response.data.dataUndangan.bank_two;
          this.anTwo = response.data.dataUndangan.an_two;
          this.norekTwo = response.data.dataUndangan.norek_two;
        })
        .catch((error) => {
          if(error){
            this.$router.push({ name: '404', query: {bride: this.$route.params.url_params } })
          }
        });
        

        axios
        .get('https://b.sulungsoft.com/apial/getChat/'+this.$route.params.url_params)
        .then((response) => {
          this.dataChat = response.data.dataChat
        });
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
      },
      addChat(){

        let dataChat = {
          url_params: this.$route.params.url_params,
          name_chat: this.name_chat,
          say_chat: this.say_chat,
          iscome: this.iscome
        }

        axios
          .post('https://b.sulungsoft.com/apial/addChat', dataChat)
          .then(() => {
            this.name_chat = '';
            this.say_chat = '';
            this.iscome = '';
            axios
              .get('https://b.sulungsoft.com/apial/getChat/'+this.$route.params.url_params)
              .then((response) => {
                this.dataChat = response.data.dataChat
              });
          });
      }
    },
    created() {
      this.moment = moment;
    }
  };
</script>