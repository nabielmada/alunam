<template>
    <div>
        <section id = "pembayaran" class = "container">
            <div class="d-flex justify-content-center">
            <div class="row align-content-center">
            <div class="col-12 col-sm-12">

                <div class = "text-center mb-4">
                <div class = "bi bi-patch-check-fill fs-5 text-success"></div>
                <div class="text-muted">Pembayaran Undangan Digital</div>
                <h5 class="mb-4">Nabiel & Maulida</h5>
                
                <div class="card border-0">
                    <div class="card-body">
                        <small>
                        No.Transaksi 2221012081
                        <p>Tagihan yang harus di bayarkan:</p>
                        </small>
                        <h1 class="fw-bold">Rp150.567</h1>
                        <small class = "fw-bold">Pastikan nominal pembayaran sesuai <br/> dengan 3 digit belakang </small>
                    </div>
                </div>
                </div>

                <div class="row g-3">
                    <div class="col-1"></div>
                    <div class="col-3 col-sm-3 col-lg-2">
                    <img src="/img/katalog/katalog-satu/bca-logo.png" class = "img-fluid" draggable="false" alt="logo-bca">
                    </div>
                    <div class="col-8 col-sm-8 col-lg-3">
                    <div>
                        BANK CENTRAL ASIA <br/>
                        <small>a.n Nor Maulida Porwanti</small>
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

                <div class="text-center mt-3">
                    <p><small>Lakukan konfirmasi manual dengan mengirim bukti pembayaran kamu disini yah!</small></p>
                    <a :href="apiLink" target="_blank">
                        <button type = "buttoon" class="btn btn-success p-3"> 
                            <span class = "bi bi-whatsapp"></span> Konfirmasi
                        </button>
                    </a>
                </div>

                </div>
            </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'PembayaranView',
    data() {
        return {
            myNumber: "+6285727393383",
            myMessage: "Hai, saya ingin melakukan konfirmasi serta mengirimkan bukti pembayaran dari tagihan berikut ini: %0a",
            noTrans: "No Transaksi: 2221012081 %0a",
            namaCust: "Atas Nama: Nabiel Maulida %0a",
            tagihanCust: "Tagihan: *Rp150.567* %0a",
            pesananCust: "Pesanan: Alunam Blue Jeans",
            apiLink: "",
        }
    },
    methods: {

    },
    created() {
        let message = this.myMessage + this.noTrans + this.namaCust + this.tagihanCust + this.pesananCust;
        this.apiLink = 'https://api.whatsapp.com/send?phone=' + this.myNumber + '&text=' + message
    },
}
</script>

<style>
#pembayaran {
    display: flex;
    justify-content: center;
    align-items: center;
    /* text-align: center; */
    min-height: 93vh;
  }
</style>