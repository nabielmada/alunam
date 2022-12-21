<template>
    <section id = "wizard" class="container">
      <div id = "sk" v-if="sk === true">
        <div class="d-flex flex-column align-items-center">
          <div class="text-muted">Pesan Katalog</div>
          <h1>
            Alunam Blue Jeans
          </h1>
          <p class = "mt-2 text-center">
            Tenang, kamu masih bisa melakukan revisi undangan setelah melakukan pembayaran dan pengisian formulir informasi berikut ini 
          </p>
          <p class="mt-2">
            <router-link to="katalog">
              <button type="button" class="btn btn-light me-3"><small>Kembali</small></button>
            </router-link>
            <button type="button" class="btn btn-primary" @click="isBersedia()"><small>Bersedia</small></button>
          </p>
        </div>
      </div>

      <div id = "dataDiri" class = "container" v-if="dataDiri === true">
        <div class="d-flex flex-column align-items-center">
          <div class="text-muted">Lengkapi</div>
          <h1>
            Informasi Data Diri
          </h1>
            <div class="row mt-2">
              <div class="col-12">
                <div class="form-floating mb-3">
                    <input type="text" class="form-control  border-0" required v-model="fullName"
                    placeholder="fullName">
                    <label for="fullName">Nama Lengkap</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control  border-0" required v-model="noHp"
                    placeholder="noHp">
                    <label for="noHp">No Handphone</label>
                </div>
                <!-- <div class="form-floating mb-3">
                    <input type="text" class="form-control  border-0" required v-model="alamat"
                    placeholder="alamat">
                    <label for="alamat">Alamat</label>
                </div> -->
              </div>
            </div>
          <p class="mt-4">
            <button type="button" class="btn btn-light me-3" @click="backBersedia()"><small>Sebelumnya</small></button>
            <button type="button" class="btn btn-primary" @click="nextMempelaiPria()"><small>Selanjutnya</small></button>
          </p>
        </div>
      </div>

      <div id = "dataMempelaiPria" class = "container" v-if="dataMempelaiPria === true">
        <div class="d-flex flex-column align-items-center">
          <div class="text-muted">Lengkapi</div>
          <h1>
            Calon Mempelai
          </h1>
            <div class="row mt-2">
              <div class="col-12">
                <center>
                  <label class = "fw-bold mb-3">Mempelai Pria</label>
                </center>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control  border-0" required v-model="manName"
                    placeholder="manName">
                    <label for="namalengkap">Nama Lengkap</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control  border-0" required v-model="manCall"
                    placeholder="manCall">
                    <label for="manCall">Nama Panggilan</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control  border-0" required v-model="manFather"
                    placeholder="manFather">
                    <label for="manFather">Nama Lengkap Ayah</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control  border-0" required v-model="manMother"
                    placeholder="manMother">
                    <label for="manMother">Nama Lengkap Ibu</label>
                </div>
              </div>
            </div>
          <p class="mt-4">
            <button type="button" class="btn btn-light me-3" @click="backDataDiri()"><small>Sebelumnya</small></button>
            <button type="button" class="btn btn-primary" @click="nextMempelaiWanita()"><small>Selanjutnya</small></button>
          </p>
        </div>
      </div>

      <div id = "dataMempelaiWanita" class = "container" v-if="dataMempelaiWanita === true">
        <div class="d-flex flex-column align-items-center">
          <div class="text-muted">Lengkapi</div>
          <h1>
            Calon Mempelai
          </h1>
            <div class="row mt-2">
              <div class="col-12">
                <center>
                  <label class = "fw-bold mb-3">Mempelai Wanita</label>
                </center>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control  border-0" required v-model="womenName"
                    placeholder="womenName">
                    <label for="womenName">Nama Lengkap</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control  border-0" required v-model="womenCall"
                    placeholder="womenCall">
                    <label for="womenCall">Nama Panggilan</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control  border-0" required v-model="womenFather"
                    placeholder="womenFather">
                    <label for="womenFather">Nama Lengkap Ayah</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control  border-0" required v-model="womenMother"
                    placeholder="womenMother">
                    <label for="womenMother">Nama Lengkap Ibu</label>
                </div>
              </div>
            </div>
          <p class="mt-4">
            <button type="button" class="btn btn-light me-3" @click="backMempelaiPria()"><small>Sebelumnya</small></button>
            <button type="button" class="btn btn-primary" @click="nextAcaraAkad()"><small>Selanjutnya</small></button>
          </p>
        </div>
      </div>

      <div id = "dataAcaraAkad" class = "container" v-if="dataAcaraAkad === true">
        <div class="d-flex flex-column align-items-center">
          <div class="text-muted">Lengkapi</div>
          <h1>
            Informasi Acara
          </h1>
            <div class="row mt-2">
              <div class="col-12">
                <center>
                  <label class = "fw-bold mb-3">Akad Nikah</label>
                </center>
                
                <div class="row">
                  <div class="col-12">
                    <div class="form-floating mb-3">
                      <input type="date" class="form-control  border-0" required v-model="akadDate"
                      placeholder="akadDate">
                      <label for="akadDate">Tanggal</label>
                    </div>
                  </div>

                  <div class="col-6">
                    <div class="form-floating mb-3">
                        <input type="time" class="form-control  border-0" required v-model="akadStart"
                        placeholder="akadStart">
                        <label for="akadStart">Waktu (Mulai)</label>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="form-floating mb-3">
                        <input type="time" class="form-control  border-0" required v-model="akadEnd"
                        placeholder="akadEnd">
                        <label for="akadEnd">Waktu (Selesai)</label>
                    </div>
                  </div>

                  <div class="col-12">
                    <div class="form-floating mb-4">
                    <select class="form-select border-0" v-model = "akadTimezone" id="akadTimezone" aria-label="akadTimezone">
                      <option value="Hadir">WIB</option>
                      <option value="Tidak Hadir">WIT</option>
                      <option value="Tidak Hadir">WITA</option>
                    </select>
                    <label for="akadTimezone">Waktu Bagian</label>
                    </div>
                  </div>

                  <div class="col-12">
                    <div class="form-floating mb-3">
                      <textarea class="form-control border-0" v-model = "akadAddress" placeholder="Ucapan" id="ucapan" style="height: 100px"></textarea>
                      <label for="ucapan">Tempat Alamat</label>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          <p class="mt-4">
            <button type="button" class="btn btn-light me-3" @click="backMempelaiWanita()"><small>Sebelumnya</small></button>
            <button type="button" class="btn btn-primary" @click="nextAcaraResepsi()"><small>Selanjutnya</small></button>
          </p>
        </div>
      </div>

      <div id = "dataAcaraResepsi" class = "container" v-if="dataAcaraResepsi === true">
        <div class="d-flex flex-column align-items-center">
          <div class="text-muted">Lengkapi</div>
          <h1>
            Informasi Acara
          </h1>
            <div class="row mt-2">
              <div class="col-12">
                <center>
                  <label class = "fw-bold mb-3">Resepsi</label>
                </center>
                
                <div class="row">
                  <div class="col-12">
                    <div class="form-floating mb-3">
                      <input type="date" class="form-control  border-0" required v-model="resepsiDate"
                      placeholder="resepsiDate">
                      <label for="resepsiDate">Tanggal</label>
                    </div>
                  </div>

                  <div class="col-6">
                    <div class="form-floating mb-3">
                        <input type="time" class="form-control  border-0" required v-model="resepsiStart"
                        placeholder="resepsiStart">
                        <label for="resepsiStart">Waktu (Mulai)</label>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="form-floating mb-3">
                        <input type="time" class="form-control  border-0" required v-model="resepsiEnd"
                        placeholder="resepsiEnd">
                        <label for="resepsiEnd">Waktu (Selesai)</label>
                    </div>
                  </div>

                  <div class="col-12">
                    <div class="form-floating mb-4">
                    <select class="form-select border-0" v-model = "resepsiTimezone" id="resepsiTimezone" aria-label="resepsiTimezone">
                      <option value="Hadir">WIB</option>
                      <option value="Tidak Hadir">WIT</option>
                      <option value="Tidak Hadir">WITA</option>
                    </select>
                    <label for="resepsiTimezone">Waktu Bagian</label>
                    </div>
                  </div>

                  <div class="col-12">
                    <div class="form-floating mb-3">
                      <textarea class="form-control border-0" v-model = "resepsiAddress" placeholder="Ucapan" id="ucapan" style="height: 100px"></textarea>
                      <label for="ucapan">Tempat Alamat</label>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          <p class="mt-4">
            <button type="button" class="btn btn-light me-3" @click="backAcaraAkad()"><small>Sebelumnya</small></button>
            <button type="button" class="btn btn-primary" @click="nextAmplopDigital()"><small>Selanjutnya</small></button>
          </p>
        </div>
      </div>

      <div id = "dataAmplopDigital" class = "container" v-if="dataAmplopDigital === true">
        <div class="d-flex flex-column align-items-center">
          <div class="text-muted">Lengkapi</div>
          <h1>
            Amplop Digital
          </h1>
            <div class="row mt-3">
              <div class="col-12">
                <div class="row">
                  
                  <div class="col-12">
                    <label class="fw-bold">BCA</label>
                    <input type="hidden" class="form-control  border-0" readonly v-model="bankBCA" >
                  </div>

                  <div class="col-12">
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control  border-0" required v-model="anBCA"
                        placeholder="anBCA">
                        <label for="anBCA">Atas Nama</label>
                    </div>
                  </div>

                  <div class="col-12">
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control  border-0" required v-model="norekBCA"
                        placeholder="norekBCA">
                        <label for="norekBCA">No Rekening</label>
                    </div>
                  </div>

                  <div class="col-12">
                    <label class="fw-bold">Mandiri</label>
                    <input type="hidden" class="form-control  border-0" readonly v-model="bankMandiri" >
                  </div>

                  <div class="col-12">
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control  border-0" required v-model="anMandiri"
                        placeholder="anMandiri">
                        <label for="anMandiri">Atas Nama</label>
                    </div>
                  </div>

                  <div class="col-12">
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control  border-0" required v-model="norekMandiri"
                        placeholder="norekMandiri">
                        <label for="norekMandiri">No Rekening</label>
                    </div>
                  </div>

                  <div class="col-12">
                    <label class="fw-bold">Dana</label>
                    <input type="hidden" class="form-control  border-0" readonly v-model="bankDana" >
                  </div>

                  <div class="col-12">
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control  border-0" required v-model="anDana"
                        placeholder="anDana">
                        <label for="anDana">Atas Nama</label>
                    </div>
                  </div>

                  <div class="col-12">
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control  border-0" required v-model="norekDana"
                        placeholder="norekDana">
                        <label for="norekDana">No Rekening</label>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          <p class="mt-4">
            <button type="button" class="btn btn-light me-3" @click="backAcaraResepsi()"><small>Sebelumnya</small></button>
            <button type="button" class="btn btn-primary" @click="nextFotoMempelai()"><small>Selanjutnya</small></button>
          </p>
        </div>
      </div>

      <div id = "dataFotoMempelai" class = "container" v-if="dataFotoMempelai === true">
        <div class="d-flex flex-column align-items-center">
          <div class="text-muted">Lengkapi</div>
          <h1>
            Foto Mempelai
          </h1>
            <div class="row mt-4">
              <div class="col-12">
                
                <div class="row">

                  <div class="col-12 mb-4 px-4">
                      <label class = "fw-bold">Foto Couple</label>
                        <input type="file" class="form-control border-0">
                  </div>

                  <div class="card mb-3 border-0">
                    <div class="card-body">
                      <div class="col-12">
                        <label>Mempelai Pria</label>
                      </div>
                      <div class="col-12 mb-3 fw-bold">
                            Nabiel Mada Ranu Ramadhan
                      </div>
                      <div class="col-12">
                        <input type="file" class="form-control border-0" >
                      </div>
                    </div>
                  </div>
                  
                  <div class="card mb-3 border-0">
                    <div class="card-body">
                      <div class="col-12">
                        <label>Mempelai Wanita</label>
                      </div>
                      <div class="col-12 mb-3 fw-bold">
                            Nor Maulida Porwanti
                      </div>
                      <div class="col-12">
                        <input type="file" class="form-control border-0" >
                      </div>
                    </div>
                  </div>

                </div>

                <center>
                  <small>Silahkan lewati saja jika kamu tidak ingin menggunakan foto pada undangan</small>
                </center>
              </div>
            </div>
          <p class="mt-4">
            <button type="button" class="btn btn-light me-3" @click="backAmplopDigital()"><small>Sebelumnya</small></button>
            <button type="button" class="btn btn-primary" @click="buatPesanan()"><small>Buat Pesanan</small></button>
          </p>
        </div>
      </div>

    </section>
</template>

<script>
import axios from 'axios'

  export default {
    name: "UnlockView",
    data() {
      return {
        sk: true,
        dataDiri: false,
        dataMempelaiPria: false,
        dataMempelaiWanita: false,
        dataAcaraAkad: false,
        dataAcaraResepsi: false,
        dataAmplopDigital: false,
        dataFotoMempelai: false,

        fullName: '',
        noHp: '',
        url_params: '',
        isActive: 'N',

        manName: '',
        manCall: '',
        manFather: '',
        manMother: '',

        womenName: '',
        womenCall: '',
        womenFather: '',
        womenMother: '',

        akadDate: '',
        akadStart: '',
        akadEnd: '',
        akadTimezone: '',
        akadAddress: '',

        resepsiDate: '',
        resepsiStart: '',
        resepsiEnd: '',
        resepsiTimezone: '',
        resepsiAddress: '',

        bankBCA: "BCA",
        anBCA: '',
        norekBCA: '',

        bankMandiri: "MANDIRI",
        anMandiri: '',
        norekMandiri: '',

        bankDana: "DANA",
        anDana: '',
        norekDana: '',

        noInvoice: '',
      }
    },
    mounted() {

    },
    created() {
      setInterval(this.getNow, 1000);
    },
    methods: {
      isBersedia(){
        this.dataDiri = true;
        this.sk = false;
      },
      backBersedia(){
        this.dataDiri = false;
        this.sk = true;
      },

      nextMempelaiPria(){
        this.dataMempelaiPria = true;
        this.dataDiri = false;
      },
      backMempelaiPria(){
        this.dataMempelaiPria = true;
        this.dataMempelaiWanita = false;
      },

      backDataDiri(){
        this.dataDiri = true;
        this.dataMempelaiPria = false;
        this.sk = false;
      },

      nextMempelaiWanita(){
        this.dataMempelaiWanita = true;
        this.dataMempelaiPria = false;
      },
      backMempelaiWanita(){
        this.dataMempelaiWanita = true;
        this.dataAcaraAkad = false;
      },

      nextAcaraAkad(){
        this.dataAcaraAkad = true;
        this.dataMempelaiWanita = false;
      },

      backAcaraAkad(){
        this.dataAcaraAkad = true;
        this.dataAcaraResepsi = false;
      },
      nextAcaraResepsi(){
        this.dataAcaraResepsi = true;
        this.dataAcaraAkad = false;
      },

      nextAmplopDigital(){
        this.dataAmplopDigital = true;
        this.dataAcaraResepsi = false;
      },

      backAcaraResepsi(){
        this.dataAcaraResepsi = true;
        this.dataAmplopDigital = false;
      },

      nextFotoMempelai(){
        this.dataFotoMempelai = true;
        this.dataAmplopDigital = false;
      },
      backAmplopDigital(){
        this.dataFotoMempelai = false;
        this.dataAmplopDigital = true;
      },

      getNow: function() {
        const today = new Date();
        const date = today.getFullYear()+''+(today.getMonth()+1)+''+today.getDate();
        const time = today.getHours() + "" + today.getMinutes() + "" + today.getSeconds();
        const dateTime = 'TFR-'+ date +''+ time;
        this.noInvoice = dateTime;
      },

      buatPesanan() {
        let dataBride = {
          manName: this.manName,
          manCall: this.manCall,
          manFather: this.manFather,
          manMother: this.manMother,

          womenName: this.womenName,
          womenCall: this.womenCall,
          womenFather: this.womenFather,
          womenMother: this.womenMother,
        }

        let dataEvent = {
          akadDate: this.akadDate,
          akadStart: this.akadStart,
          akadEnd: this.akadEnd,
          akadTimezone: this.akadTimezone,
          akadAddress: this.akadAddress,

          resepsiDate: this.resepsiDate,
          resepsiStart: this.resepsiStart,
          resepsiEnd: this.resepsiEnd,
          resepsiTimezone: this.resepsiTimezone,
          resepsiAddress: this.resepsiAddress,
        }

        let dataEnvelope = {
          bankBCA: "BCA",
          anBCA: this.anBCA,
          norekBCA: this.norekBCA,

          bankMandiri: "MANDIRI",
          anMandiri: this.anMandiri,
          norekMandiri: this.norekMandiri,

          bankDana: "DANA",
          anDana: this.anDana,
          norekDana: this.norekDana,
        }

        let dataInvite = {
          fullName: this.fullName,
          noHp: this.noHp,
          url_params: this.manCall + " & " + this.womenCall,
          isActive: this.isActive
        }

        let dataInvoice = {
          noInvoice: this.noInvoice,
          nominalBill: this.nominalBill,
          type: this.type,
        }

        axios
          .post('http://localhost:5000/addInvite', dataInvite)
          .then(() => {
            axios
              .post('http://localhost:5000/addBride', dataBride)
              .then(() => {
                axios
                  .post('http://localhost:5000/addEvent', dataEvent)
                  .then(() => {
                    axios
                      .post('http://localhost:5000/addEnvelope', dataEnvelope)
                      .then(() => {
                        axios
                          .post('http://localhost:5000/createInvoice', dataInvoice)
                          .then(() => {
                            this.$router.push("/pembayaran");
                          });
                      });
                  });
              });
          });
        
      },
    },
    created() {
      
    },
  };
</script>
