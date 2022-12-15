<template>
    <section class="container" style="padding-top: 15%; padding-bottom: 15%;">
      <div id = "sk" v-if="sk === true">
        <div class="d-flex flex-column align-items-center">
          <div class="text-muted">Pesan Katalog</div>
          <h1>
            Alunam Blue Jeans
          </h1>
          <p class = "mt-2 w-50 text-center">
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

      <div id = "dataDiri" v-if="dataDiri === true">
        <div class="d-flex flex-column align-items-center">
          <div class="text-muted">Lengkapi</div>
          <h1>
            Informasi Data Diri
          </h1>
            <div class="row mt-2 w-50 text-center">
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
            <button type="button" class="btn btn-primary" @click="isNext()"><small>Selanjutnya</small></button>
          </p>
        </div>
      </div>

      <div id = "dataMempelai" v-if="dataMempelai === true">
        <div class="d-flex flex-column align-items-center">
          <div class="text-muted">Lengkapi</div>
          <h1>
            Informasi Data Diri
          </h1>
            <div class="row mt-2 w-50 text-center">
              <div class="col-12">
                <div class="form-floating mb-3">
                    <input type="text" class="form-control form-control-lg border-0" required v-model="namaLengkap"
                    placeholder="namalengkap">
                    <label for="namalengkap">Namxxa Lengkap</label>
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
            <button type="button" class="btn btn-light me-3" @click="backDataDiri()"><small>Sebelumnya</small></button>
            <button type="button" class="btn btn-primary"><small>Selanjutnya</small></button>
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
        dataMempelai: false,
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

      isNext(){
        this.dataMempelai = true;
        this.dataDiri = false;
      },
      backDataDiri(){
        this.dataDiri = true;
        this.dataMempelai = false;
        this.sk = false;
      },
    },
    created() {
      
    },
  };
</script>
