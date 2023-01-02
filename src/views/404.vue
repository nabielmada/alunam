<template>
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
</template>

<script>
export default {
    name: "PageNotFound",
    data() {
        return {
            
        }
    },
}
</script>