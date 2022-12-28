<template>
    <section id = "wizard" class="container">
      <div id = "sk" v-if="sk === true">
        <div class="row">
        <div class="col-12">
        <div class="d-flex flex-column align-items-center">
          <div class="text-muted">Pesan Katalog</div>
          <h3>
            {{ type }} 
          </h3>
          <p class = "mt-2 text-center">
            Tenang, kamu masih bisa melakukan revisi undangan setelah melakukan pembayaran dan pengisian formulir informasi berikut ini 
          </p>
          <p class="mt-2">
            <a :href="'/katalog/'+url_type">
              <button type="button" class="btn btn-light me-3"><small>Kembali</small></button>
            </a>
            <button type="button" class="btn btn-primary" @click="isBersedia()"><small>Buat Undangan</small></button>
          </p>
        </div>
        </div>
        </div>
      </div>

      <div id = "dataDiri" class = "container" v-if="dataDiri === true">
        <div class="d-flex flex-column align-items-center">
          <div class="text-muted">Lengkapi</div>
          <h3>
            Informasi Data Diri
          </h3>
            <div class="row mt-2">
              <div class="col-12">
                <div class="form-floating mb-3">
                    <input type="text" class="form-control  border-0" required v-model="fullName"
                    placeholder="fullName">
                    <label for="fullName">Nama Lengkap</label>
                </div>
              </div>
              <div class="col-12">
                <div class="form-floating mb-3">
                    <input type="text" class="form-control  border-0" required v-model="noHp"
                    placeholder="noHp">
                    <label for="noHp">No Handphone</label>
                </div>
              </div>
            </div>
          <p class="mt-2">
            <button type="button" class="btn btn-light me-3" @click="backBersedia()"><small>Sebelumnya</small></button>
            <button type="button" class="btn btn-primary" @click="nextMempelaiPria()"><small>Selanjutnya</small></button>
          </p>
        </div>
      </div>

      <div id = "dataMempelaiPria" class = "container" v-if="dataMempelaiPria === true">
        <div class="d-flex flex-column align-items-center">
          <div class="text-muted">Lengkapi</div>
          <h3>
            Calon Mempelai
          </h3>
            <div class="row mt-2">
              <div class="col-12">
                <center>
                  <label class = "fw-bold mb-3">Mempelai Pria</label>
                </center>

                <div class="row">
                <div class="col-12 col-md-6">
                <div class="form-floating mb-3">
                    <input type="text" class="form-control  border-0" required v-model="manName"
                    placeholder="manName">
                    <label for="namalengkap">Nama Lengkap</label>
                </div>
                </div>

                <div class="col-12 col-md-6">
                <div class="form-floating mb-3">
                    <input type="text" class="form-control  border-0" required v-model="manCall"
                    placeholder="manCall">
                    <label for="manCall">Nama Panggilan</label>
                </div>
                </div>
                <div class="col-12 col-md-12">
                <div class="form-floating mb-3">
                    <input type="text" class="form-control  border-0" required v-model="manFather"
                    placeholder="manFather">
                    <label for="manFather">Nama Lengkap Ayah</label>
                </div>
                </div>

                <div class="col-12 col-md-12">
                <div class="form-floating mb-3">
                    <input type="text" class="form-control  border-0" required v-model="manMother"
                    placeholder="manMother">
                    <label for="manMother">Nama Lengkap Ibu</label>
                </div>
                </div>

                <div class="col-12 col-md-12">
                    <div class="form-floating mb-4">
                    <select class="form-select border-0" v-model = "manChildOf" id="manChildOf" aria-label="manChildOf">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                    </select>
                    <label for="manChildOf">Anak Ke</label>
                    </div>
                  </div>
                  </div>
              </div>
            </div>
          <p class="mt-2">
            <button type="button" class="btn btn-light me-3" @click="backDataDiri()"><small>Sebelumnya</small></button>
            <button type="button" class="btn btn-primary" @click="nextMempelaiWanita()"><small>Selanjutnya</small></button>
          </p>
        </div>
      </div>

      <div id = "dataMempelaiWanita" class = "container" v-if="dataMempelaiWanita === true">
        <div class="d-flex flex-column align-items-center">
          <div class="text-muted">Lengkapi</div>
          <h3>
            Calon Mempelai
          </h3>
            <div class="row mt-2">
              <div class="col-12">
                <center>
                  <label class = "fw-bold mb-3">Mempelai Wanita</label>
                </center>

                <div class="row">
                <div class="col-12 col-md-6">
                <div class="form-floating mb-3">
                    <input type="text" class="form-control  border-0" required v-model="womenName"
                    placeholder="womenName">
                    <label for="womenName">Nama Lengkap</label>
                </div>
                </div>
                <div class="col-12 col-md-6">
                <div class="form-floating mb-3">
                    <input type="text" class="form-control  border-0" required v-model="womenCall"
                    placeholder="womenCall">
                    <label for="womenCall">Nama Panggilan</label>
                </div>
                </div>
                <div class="col-12 col-md-12">
                <div class="form-floating mb-3">
                    <input type="text" class="form-control  border-0" required v-model="womenFather"
                    placeholder="womenFather">
                    <label for="womenFather">Nama Lengkap Ayah</label>
                </div>
                </div>
                <div class="col-12 col-md-12">
                <div class="form-floating mb-3">
                    <input type="text" class="form-control  border-0" required v-model="womenMother"
                    placeholder="womenMother">
                    <label for="womenMother">Nama Lengkap Ibu</label>
                </div>
                </div>
                <div class="col-12 col-md-12">
                    <div class="form-floating mb-4">
                    <select class="form-select border-0" v-model = "womenChildOf" id="womenChildOf" aria-label="womenChildOf">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                    </select>
                    <label for="womenChildOf">Anak Ke</label>
                    </div>
                  </div>
              </div>
              </div>
            </div>
          <p class="mt-2">
            <button type="button" class="btn btn-light me-3" @click="backMempelaiPria()"><small>Sebelumnya</small></button>
            <button type="button" class="btn btn-primary" @click="nextAcaraAkad()"><small>Selanjutnya</small></button>
          </p>
        </div>
      </div>

      <div id = "dataAcaraAkad" class = "container" v-if="dataAcaraAkad === true">
        <div class="d-flex flex-column align-items-center">
          <div class="text-muted">Lengkapi</div>
          <h3>
            Informasi Acara
          </h3>
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
                    <div class="form-floating mb-3">
                    <select class="form-select border-0" v-model = "akadTimezone" id="akadTimezone" aria-label="akadTimezone">
                      <option value="WIB">WIB</option>
                      <option value="WIT">WIT</option>
                      <option value="WITA">WITA</option>
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
          <p class="mt-2">
            <button type="button" class="btn btn-light me-3" @click="backMempelaiWanita()"><small>Sebelumnya</small></button>
            <button type="button" class="btn btn-primary" @click="nextAcaraResepsi()"><small>Selanjutnya</small></button>
          </p>
        </div>
      </div>

      <div id = "dataAcaraResepsi" class = "container" v-if="dataAcaraResepsi === true">
        <div class="d-flex flex-column align-items-center">
          <div class="text-muted">Lengkapi</div>
          <h3>
            Informasi Acara
          </h3>
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
                    <div class="form-floating mb-3">
                    <select class="form-select border-0" v-model = "resepsiTimezone" id="resepsiTimezone" aria-label="resepsiTimezone">
                      <option value="WIB">WIB</option>
                      <option value="WIT">WIT</option>
                      <option value="WITA">WITA</option>
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
          <p class="mt-2">
            <button type="button" class="btn btn-light me-3" @click="backAcaraAkad()"><small>Sebelumnya</small></button>
            <button type="button" class="btn btn-primary" @click="nextAmplopDigital()"><small>Selanjutnya</small></button>
          </p>
        </div>
      </div>

      <div id = "dataAmplopDigital" class = "container" v-if="dataAmplopDigital === true">
        <div class="d-flex flex-column align-items-center">
          <div class="text-muted">Lengkapi</div>
          <h3>
            Amplop Digital
          </h3>
            <div class="row mt-2">
              <div class="col-12">
                <div class="row">

                  <div class="col-12 col-md-12">
                    <div class="form-floating mb-3">
                    <select class="form-select border-0" v-model="bankOne" id="bankOne" aria-label="bankOne">
                      <option value="BCA">BCA</option>
                      <option value="MANDIRI">MANDIRI</option>
                      <option value="BNI">BNI</option>
                      <option value="BRI">BRI</option>
                      <option value="DANA">DANA</option>
                    </select>
                    <label for="bankOne">Pilih Bank (Opsi Pertama)</label>
                    </div>
                  </div>
                  
                  <div class="col-12 col-md-6">
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control  border-0" required v-model="anOne"
                        placeholder="anOne">
                        <label for="anOne">Atas Nama</label>
                    </div>
                  </div>

                  <div class="col-12 col-md-6">
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control  border-0" required v-model="norekOne"
                        placeholder="norekOne">
                        <label for="norekOne">No Rekening</label>
                    </div>
                  </div>

                    <div class="col-12 col-md-12">
                    <div class="form-floating mb-3">
                    <select class="form-select border-0" v-model="bankTwo" id="bankTwo" aria-label="bankTwo">
                      <option value="BCA">BCA</option>
                      <option value="MANDIRI">MANDIRI</option>
                      <option value="BNI">BNI</option>
                      <option value="BRI">BRI</option>
                      <option value="DANA">DANA</option>
                    </select>
                    <label for="bankTwo">Pilih Bank (Opsi Kedua)</label>
                    </div>
                  </div>

                  <div class="col-12 col-md-6">
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control  border-0" required v-model="anTwo"
                        placeholder="anTwo">
                        <label for="anTwo">Atas Nama</label>
                    </div>
                  </div>

                  <div class="col-12 col-md-6">
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control  border-0" required v-model="norekTwo"
                        placeholder="norekTwo">
                        <label for="norekTwo">No Rekening</label>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          <p class="mt-2">
            <button type="button" class="btn btn-light me-3" @click="backAcaraResepsi()"><small>Sebelumnya</small></button>
            <button type="button" class="btn btn-primary" @click="nextFotoMempelai()"><small>Selanjutnya</small></button>
          </p>
        </div>
      </div>

      <div id = "dataFotoMempelai" class = "container" v-if="dataFotoMempelai === true">
        <div class="d-flex flex-column align-items-center">
          <div class="text-muted">Lengkapi</div>
          <h3>
            Foto Mempelai
          </h3>
            <div class="row mt-2">
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
          <p class="mt-3">
            <button type="button" class="btn btn-light me-3" @click="backAmplopDigital()"><small>Sebelumnya</small></button>
            <button type="button" class="btn btn-primary" @click="nextDaftarUndangan()"><small>Selanjutnya</small></button>
          </p>
        </div>
      </div>

      <div id = "dataDaftarUndangan" class = "container" v-if="dataDaftarUndangan === true">
        <div class="d-flex flex-column align-items-center">
          <div class="text-muted">Lengkapi</div>
          <h3>
            Daftar & Musik Undangan 
          </h3>
            <div class="row mt-2">
              <div class="col-12">
                
                <div class="row">

                  <div class="card mb-3 border-0">
                    <div class="card-body">
                      <div class="col-12">
                        <label class = "mb-3">Musik Undangan</label>
                      </div>
                      <div class="col-12">
                        <input type="file" class="form-control border-0" >
                      </div>
                    </div>
                  </div>
                  
                  <div class="col-12">
                    <div class="form-floating">
                      <textarea class="form-control border-0" v-model = "nameTo" placeholder="nameTo" id="nameTo" style="height: 300px"></textarea>
                      <label for="nameTo">Tulis Nama Tamu Disini</label>
                    </div>
                    <div class = "text-muted">
                      <small>
                        Harap pisahkan nama tamu dengan tanda koma. Contoh: Nabiel,Maulida,Ranu.
                      </small>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          <p class="mt-3">
            <button type="button" class="btn btn-light me-3" @click="backFotoMempelai()"><small>Sebelumnya</small></button>
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
    props: {
      url_type: {
        type: String,
        default: null,
      },
    },
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
        manChildOf: '',

        womenName: '',
        womenCall: '',
        womenFather: '',
        womenMother: '',
        womenChildOf: '',

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

        bankOne: '',
        anOne: '',
        norekOne: '',

        bankTwo: '',
        anTwo: '',
        norekTwo: '',

        nameTo: '',

        noInvoice: '',
        nominalBill: '',
        type: '',
      }
    },
    setup() {
      window.addEventListener("beforeunload", function (e) {
        // Cancel the event
        e.preventDefault(); // If you prevent default behavior in Mozilla Firefox prompt will always be shown
        // Chrome requires returnValue to be set
        e.returnValue = "";
      });
    },
    mounted() {

      if(this.url_type == 'alunam-blue-love'){
         this.type = 'Alunam Blue Love';
         this.nominalBill = '150000'
      }

    },
    created() {
      setTimeout(this.getNow, 1000);
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

      nextDaftarUndangan(){
        this.dataDaftarUndangan = true;
        this.dataFotoMempelai = false;
      },
      backFotoMempelai(){
        this.dataDaftarUndangan = false;
        this.dataFotoMempelai = true;
      },

      getNow: function() {
        const today = new Date();
        const date = today.getFullYear()+''+(today.getMonth()+1)+''+today.getDate();
        const time = today.getHours() + "" + today.getMinutes() + "" + today.getSeconds();
        const dateTime = date +''+ time;
        this.noInvoice = dateTime;
      },

      buatPesanan() {
        let dataBride = {
          manName: this.manName,
          manCall: this.manCall,
          manFather: this.manFather,
          manMother: this.manMother,
          manChildOf: this.manChildOf,

          womenName: this.womenName,
          womenCall: this.womenCall,
          womenFather: this.womenFather,
          womenMother: this.womenMother,
          womenChildOf: this.womenChildOf,
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
          bankOne: this.bankOne,
          anOne: this.anOne,
          norekOne: this.norekOne,

          bankTwo: this.bankTwo,
          anTwo: this.anTwo,
          norekTwo: this.norekTwo,
        }

        let dataInviteTo = {
          nameTo: this.nameTo
        }

        let dataInvite = {
          fullName: this.fullName,
          noHp: this.noHp,
          url_type: this.url_type,
          url_params: this.womenCall + "-" + this.manCall,
          isActive: this.isActive
        }

        let dataInvoice = {
          noInvoice: this.noInvoice,
          customer: this.womenCall + " dan " + this.manCall,
          nominalBill: this.nominalBill,
          type: this.type,
        }

        axios
          .post('http://localhost:3000/apial/addInvite', dataInvite)
          .then(() => {
            axios
              .post('http://localhost:3000/apial/addBride', dataBride)
              .then(() => {
                axios
                  .post('http://localhost:3000/apial/addEvent', dataEvent)
                  .then(() => {
                    axios
                      .post('http://localhost:3000/apial/addEnvelope', dataEnvelope)
                      .then(() => {
                        axios
                          .post('http://localhost:3000/apial/addInviteTo', dataInviteTo)
                          .then(() => {
                              axios
                            .post('http://localhost:3000/apial/createInvoice', dataInvoice)
                            .then(() => {
                              this.$router.push("/pembayaran/" + this.noInvoice);
                            });
                          });
                      });
                  });
              });
          });
        
      },
    }

  };
</script>
