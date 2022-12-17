<template>
    <section id = "wizard" class="container">
      <div id = "sk" v-if="sk === true">
        <div class="d-flex flex-column align-items-center">
          <div class="text-muted">Pesan Katalog</div>
          <h1>
            Alunam Blue Jeans
          </h1>
          <p class = "mt-2 text-center">
            Tenang, kamu masih bisa melakukan revisi katalog undangan digital dengan kami setelah melakukan pembayaran dan pengisian formulir informasi dari kebutuhan kamu
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
                    <input type="text" class="form-control form-control-lg border-0" required v-model="namaLengkap"
                    placeholder="namalengkap">
                    <label for="namalengkap">Nama Lengkap</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control form-control-lg border-0" required v-model="noHp"
                    placeholder="noHp">
                    <label for="noHp">No Handphone</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control form-control-lg border-0" required v-model="alamat"
                    placeholder="alamat">
                    <label for="alamat">Alamat</label>
                </div>
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
            Data Calon Mempelai
          </h1>
            <div class="row mt-2">
              <div class="col-12">
                <center>
                  <label class = "fw-bold mb-3">Mempelai Pria</label>
                </center>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control form-control-lg border-0" required v-model="namaLengkap"
                    placeholder="namalengkap">
                    <label for="namalengkap">Nama Lengkap</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control form-control-lg border-0" required v-model="noHp"
                    placeholder="noHp">
                    <label for="noHp">Nama Panggilan</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control form-control-lg border-0" required v-model="alamat"
                    placeholder="alamat">
                    <label for="alamat">Nama Lengkap Ayah</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control form-control-lg border-0" required v-model="alamat"
                    placeholder="alamat">
                    <label for="alamat">Nama Lengkap Ibu</label>
                </div>
                <div class="mb-3">
                  <label for="formFile" class="form-label">Foto Profile</label>
                  <input class="form-control" type="file" id="formFile">
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
            Data Calon Mempelai
          </h1>
            <div class="row mt-2">
              <div class="col-12">
                <center>
                  <label class = "fw-bold mb-3">Mempelai Wanita</label>
                </center>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control form-control-lg border-0" required v-model="namaLengkap"
                    placeholder="namalengkap">
                    <label for="namalengkap">Nama Lengkap</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control form-control-lg border-0" required v-model="noHp"
                    placeholder="noHp">
                    <label for="noHp">Nama Panggilan</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control form-control-lg border-0" required v-model="alamat"
                    placeholder="alamat">
                    <label for="alamat">Nama Lengkap Ayah</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control form-control-lg border-0" required v-model="alamat"
                    placeholder="alamat">
                    <label for="alamat">Nama Lengkap Ibu</label>
                </div>
                <div class="mb-3">
                  <label for="formFile" class="form-label">Foto Profile</label>
                  <input class="form-control" type="file" id="formFile">
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
            Informasi Data Acara
          </h1>
            <div class="row mt-2">
              <div class="col-12">
                <center>
                  <label class = "fw-bold mb-3">Akad Nikah</label>
                </center>
                
                <div class="row">
                  <div class="col-12">
                    <div class="form-floating mb-3">
                      <input type="date" class="form-control form-control-lg border-0" required v-model="namaLengkap"
                      placeholder="namalengkap">
                      <label for="namalengkap">Tanggal</label>
                    </div>
                  </div>

                  <div class="col-6">
                    <div class="form-floating mb-3">
                        <input type="time" class="form-control form-control-lg border-0" required v-model="noHp"
                        placeholder="noHp">
                        <label for="noHp">Waktu (Mulai)</label>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="form-floating mb-3">
                        <input type="time" class="form-control form-control-lg border-0" required v-model="noHp"
                        placeholder="noHp">
                        <label for="noHp">Waktu (Selesai)</label>
                    </div>
                  </div>

                  <div class="col-12">
                    <div class="form-floating mb-4">
                    <select class="form-select border-0" id="kehadiran" aria-label="Konfirmasi Kehadiran">
                      <option value="Hadir">WIB</option>
                      <option value="Tidak Hadir">WIT</option>
                      <option value="Tidak Hadir">WITA</option>
                    </select>
                    <label for="kehadiran">Waktu Bagian</label>
                    </div>
                  </div>

                  <div class="col-12">
                    <div class="form-floating mb-3">
                      <textarea class="form-control border-0" placeholder="Ucapan" id="ucapan" style="height: 100px"></textarea>
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
            Informasi Data Acara
          </h1>
            <div class="row mt-2">
              <div class="col-12">
                <center>
                  <label class = "fw-bold mb-3">Resepsi</label>
                </center>
                
                <div class="row">
                  <div class="col-12">
                    <div class="form-floating mb-3">
                      <input type="date" class="form-control form-control-lg border-0" required v-model="namaLengkap"
                      placeholder="namalengkap">
                      <label for="namalengkap">Tanggal</label>
                    </div>
                  </div>

                  <div class="col-6">
                    <div class="form-floating mb-3">
                        <input type="time" class="form-control form-control-lg border-0" required v-model="noHp"
                        placeholder="noHp">
                        <label for="noHp">Waktu (Mulai)</label>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="form-floating mb-3">
                        <input type="time" class="form-control form-control-lg border-0" required v-model="noHp"
                        placeholder="noHp">
                        <label for="noHp">Waktu (Selesai)</label>
                    </div>
                  </div>

                  <div class="col-12">
                    <div class="form-floating mb-4">
                    <select class="form-select border-0" id="kehadiran" aria-label="Konfirmasi Kehadiran">
                      <option value="Hadir">WIB</option>
                      <option value="Tidak Hadir">WIT</option>
                      <option value="Tidak Hadir">WITA</option>
                    </select>
                    <label for="kehadiran">Waktu Bagian</label>
                    </div>
                  </div>

                  <div class="col-12">
                    <div class="form-floating mb-3">
                      <textarea class="form-control border-0" placeholder="Ucapan" id="ucapan" style="height: 100px"></textarea>
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

      <div id = "dataAmplopDigital" class = "container mt-4" v-if="dataAmplopDigital === true">
        <div class="d-flex flex-column align-items-center">
          <div class="text-muted">Lengkapi</div>
          <h1>
            Data Amplop Digital
          </h1>
            <div class="row mt-2">
              <div class="col-12">
                <div class="row">
                  
                  <div class="col-12 mb-3">
                    <label class="fw-bold">BCA</label>
                    <input type="hidden" class="form-control form-control-lg border-0" readonly v-model="bankBCA" >
                  </div>

                  <div class="col-6">
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control form-control-lg border-0" required v-model="anBCA"
                        placeholder="noHp">
                        <label for="noHp">Atas Nama</label>
                    </div>
                  </div>

                  <div class="col-12">
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control form-control-lg border-0" required v-model="norekBCA"
                        placeholder="noHp">
                        <label for="noHp">No Rekening</label>
                    </div>
                  </div>

                  <div class="col-12 mb-3">
                    <label class="fw-bold">Mandiri</label>
                    <input type="hidden" class="form-control form-control-lg border-0" readonly v-model="bankMandiri" >
                  </div>

                  <div class="col-12">
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control form-control-lg border-0" required v-model="anMandiri"
                        placeholder="noHp">
                        <label for="noHp">Atas Nama</label>
                    </div>
                  </div>

                  <div class="col-12">
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control form-control-lg border-0" required v-model="norekMandiri"
                        placeholder="noHp">
                        <label for="noHp">No Rekening</label>
                    </div>
                  </div>

                  <div class="col-12 mb-3">
                    <label class="fw-bold">Dana</label>
                    <input type="hidden" class="form-control form-control-lg border-0" readonly v-model="bankDana" >
                  </div>

                  <div class="col-12">
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control form-control-lg border-0" required v-model="anDANA"
                        placeholder="noHp">
                        <label for="noHp">Atas Nama</label>
                    </div>
                  </div>

                  <div class="col-12">
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control form-control-lg border-0" required v-model="norekDana"
                        placeholder="noHp">
                        <label for="noHp">No Rekening</label>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          <p class="mt-4">
            <button type="button" class="btn btn-light me-3" @click="backAcaraResepsi()"><small>Sebelumnya</small></button>
            <button type="button" class="btn btn-primary" @click="nextAcara()"><small>Buat Pesanan</small></button>
          </p>
        </div>
      </div>

    </section>
</template>

<script>
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

        bankBCA: "BCA",
        bankMandiri: "MANDIRI",
        bankDana: "DANA",
      }
    },
    mounted() {

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
      }
    },
    created() {
      
    },
  };
</script>
