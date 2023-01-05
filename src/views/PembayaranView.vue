<template>
    <div>
        <section id = "pembayaran" class = "container mt-1">
            <div class="d-flex justify-content-center">
            <div class="row align-content-center">
            <div class="col-12 col-sm-12">

                <div class = "text-center mb-4">
                <div class = "bi bi-patch-check-fill fs-5 text-success"></div>
                <div class="text-muted">
                    Pembayaran Undangan Digital <br/>
                    {{ pesananCust }}
                </div>
                <h5 class="mb-3 mt-2">{{ namaCust }}</h5>
                
                <div class="card border-0">
                    <div class="card-body">
                        <small>
                        No.Transaksi {{ noTrans }}
                        <p>Tagihan yang harus di bayarkan:</p>
                        </small>
                        <h1 class="fw-bold">Rp{{ formatNum(tagihanCust) }}</h1>
                        <small class = "fw-bold">Pastikan nominal pembayaran sesuai <br/> dengan 3 digit belakang </small>
                    </div>
                </div>
                </div>

                <div class="row g-3">
                    <div class="col-1"></div>
                    <div class="col-3 col-sm-3 col-lg-2">
                    <img src="/web/bca-logo.png" class = "img-fluid" draggable="false" alt="logo-bca">
                    </div>
                    <div class="col-8 col-sm-8 col-lg-3">
                    <div>
                        BANK CENTRAL ASIA (BCA)<br/>
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
                    <img src="/web/mandiri-logo.png" class = "img-fluid" draggable="false" alt="logo-mandiri">
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

                <div class="text-center mt-3">
                    <p><small>Lakukan konfirmasi manual dengan mengirim bukti pembayaran kamu disini yah!</small></p>
                    <a :href="apiLink" target="_blank">
                        <button type = "buttoon" class="btn btn-success px-4 py-2 "> 
                            <small><span class = "bi bi-whatsapp"></span> Konfirmasi</small>
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
import axios from 'axios'

export default {
    name: 'PembayaranView',
    data() {
        return {
            myNumber: '+6285727393383',
            myMessage: 'Hai, saya ingin melakukan konfirmasi serta mengirimkan bukti pembayaran dari tagihan berikut ini: %0a',
            noTrans: '',
            namaCust: '',
            tagihanCust: '',
            pesananCust: '',
            apiLink: '',
        }
    },
    mounted() {
        axios
            .get('http://localhost:3000/apial/getInvoice/'+this.$route.params.no_invoice)
            .then((response) => {

                let noTrans = response.data.dataInvoice.noinvoice;
                let namaCust = response.data.dataInvoice.customer;
                let tagihanCust = response.data.dataInvoice.nominal_bill;
                let pesananCust = response.data.dataInvoice.type;

                this.noTrans = noTrans;
                this.namaCust = namaCust;
                this.tagihanCust = tagihanCust;
                this.pesananCust = pesananCust;

                let message = this.myMessage + 
                      "No Transaksi: " + noTrans + "%0a" +
                      "Atas Nama: " + namaCust + "%0a" +
                      "Tagihan: *Rp" + tagihanCust + "*%0a" +
                      "Pesanan: " + pesananCust;

                this.apiLink = 'https://api.whatsapp.com/send?phone=' + this.myNumber + '&text=' + message
            });
    },
    methods: {
        formatNum(num) {
            let str = num.toLocaleString('id-ID');
            return str;
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
    },
    created() {
        
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