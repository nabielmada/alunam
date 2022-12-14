<template>

  <nav class="navbar navbar-expand-lg navbar-light py-3">
      <div class="container">
        <a class="navbar-brand fs-4" href="#">
            <div class="text-primary-m">alunam</div>
        </a>
        <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
            aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mx-auto order-0">
                <li class="nav-item me-4">
                    <a class="nav-link active" aria-current="page" href="#home" >Home</a>
                </li>
                <li class="nav-item me-4">
                    <a class="nav-link" v-scroll-to="'#portofolio'" href="#portofolio">Benefit</a>
                </li>
                <li class="nav-item me-4">
                    <a class="nav-link" v-scroll-to="'#specialize'" href="#specialize">Katalog</a>
                </li>
                <li class="nav-item me-4">
                    <a class="nav-link" v-scroll-to="'#aboutme'" href="#aboutme">Testimoni</a>
                </li>
            </ul>
            <div class="d-flex text-muted ">
                <span class="bi bi-instagram me-3 fs-4"></span>
                <span class="bi bi-whatsapp me-3 fs-4"></span>
                <span class="bi bi-envelope me-3 fs-4"></span>
            </div>
          </div>
      </div>
  </nav>

  <header>
    <div class = "container">
      <div class = "d-flex">
        <div class="row align-items-center">
          <div class="col-6">
            <p> 
              <span class = "bi bi-megaphone me-2"></span> 
              PROMO DESEMBER UP TO 70%
            </p>
            <h1 class="fw-bold">
              Sebar Undangan Kamu
              Lebih <mark class="text-primary">Praktis</mark> Dari Sebelumnya
            </h1>
            <p class="pt-4 text-muted sub-heading sub-heading-resize">
              Bagikan momen bahagia kamu hanya dengan satu genggaman serta banyak pilihan undangan yang kekinian
            </p>
          </div>
          <div class="col-6">
            <img src="/img/cover-header.webp" class="img-fluid" alt="cover-header" loading = "lazy" srcset="">
          </div>
        </div>
      </div>
    </div>
  </header>

  <article>
    <div id = "space" class="container">
      <div class="row text-center">

          <div class="col-lg-3">
            <div class="card hover-card border-0">
                <div class="card-body my-2">
                  <p class = "bi bi-lightning-charge-fill text-warning fs-3"></p>
                  <h5 class="card-title">Cepat</h5>
                  <p class="card-text text-muted text-vt">
                    Sebar undangan praktis kemana saja tanpa batasan apapun
                  </p>
                </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="card hover-card border-0">
                <div class="card-body my-2">
                  <p class = "bi bi-balloon-heart text-danger fs-3"></p>
                  <h5 class="card-title">Lovable</h5>
                  <p class="card-text text-muted text-vt">
                    Abadikan moment spesial kamu dengan undangan digital yang spesial
                  </p>
                </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="card hover-card border-0">
                <div class="card-body my-2">
                  <p class = "bi bi-robot text-info fs-3"></p>
                  <h5 class="card-title">Optimal</h5>
                  <p class="card-text text-muted text-vt">
                    Proses pengerjaan cepat dan optimal serta tersedia lengkap kebutuhan kamu 
                  </p>
                </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="card hover-card border-0">
                <div class="card-body my-2">
                  <p class = "bi bi-shield-check text-success fs-3"></p>
                  <h5 class="card-title">Menjaga Privasi</h5>
                  <p class="card-text text-muted text-vt">
                    Kami menjaga privasi kamu agar bisa pakai foto atau tidak di dalam undangan
                  </p>
                </div>
            </div>
          </div>

        </div>
      </div>
  </article>

  <section>
    <div id = "space" class="container">
      <div class="col-12 text-center" data-aos="fade-up" data-aos-delay="200"> 
        <h1 class="title"><mark>Katalog</mark> Undangan</h1>
        <p class="text-muted mt-3 sub-title">
          Silahkan klik gambar dibawah ini untuk melihat contoh <br>
          dari katalog digital yang kami sediakan 
        </p>
      </div>


      <div class="row row-cols-1 row-cols-md-4 g-4 card-porto mt-3">
      
        <div class="col">
            <div class="card hover-card border-0">
                <div class="text-center">
                    <div class="badge bg-danger w-25 text-white"><small>Promo</small></div>
                </div>
                <div class="card-body mb-3">
                    <div class="text-center mb-3">
                        <img src="/img/cover-katalog-satu.jpeg" draggable="false" class="card-img-top" alt="...">
                    </div>
                    <div class="mx-3">
                        <div class="card-text mb-1 fw-semibold">
                          Alunam Blue Love
                        </div>
                        
                        <div class="text-danger text-decoration-line-through">
                            <small>Rp330.000</small>
                        </div>
                        <div class = "d-flex">
                          Rp150.000
                          <span class = "ms-auto">
                            <i class="bi bi-star-fill text-warning"></i>
                            (10)
                        </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col">
            <div class="card hover-card border-0">
                <div class="text-center mt-4">
                </div>
                <div class="card-body mb-3">
                    <div class="text-center mb-3">
                        <img src="/img/cover-katalog-satu.jpeg" draggable="false" class="card-img-top" alt="...">
                    </div>
                    <div class="mx-3">
                        <div class="card-text mb-1 fw-semibold">
                          Alunam Blue Love
                        </div>
                        <div class = "mb-4"></div>
                        <div class = "d-flex">
                          Rp150.000
                          <span class = "ms-auto">
                            <i class="bi bi-star-fill text-warning"></i>
                            (10)
                        </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col">
            <div class="card hover-card border-0">
                <div class="text-center">
                    <div class="badge bg-success w-25 text-white"><small>Populer</small></div>
                </div>
                <div class="card-body mb-3">
                    <div class="text-center mb-3">
                        <img src="/img/cover-katalog-satu.jpeg" draggable="false" class="card-img-top" alt="...">
                    </div>
                    <div class="mx-3">
                        <div class="card-text mb-1 fw-semibold">
                          Alunam Blue Love
                        </div>
                        <div class = "mb-4"></div>
                        <div class = "d-flex">
                          Rp150.000
                          <span class = "ms-auto">
                            <i class="bi bi-star-fill text-warning"></i>
                            (10)
                        </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col">
            <div class="card hover-card border-0">
                <div class="text-center">
                    <div class="badge bg-primary w-25 text-white"><small>Baru</small></div>
                </div>
                <div class="card-body mb-3">
                    <div class="text-center mb-3">
                        <img src="/img/cover-katalog-satu.jpeg" draggable="false" class="card-img-top" alt="...">
                    </div>
                    <div class="mx-3">
                        <div class="card-text mb-1 fw-semibold">
                          Alunam Blue Love
                        </div>
                        <div class = "mb-4"></div>
                        <div class = "d-flex">
                          Rp150.000
                          <span class = "ms-auto">
                            <i class="bi bi-star-fill text-warning"></i>
                            (10)
                        </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  </section>

  <section>
    <div id = "space-testi" class="container">
      <div class="row">
        <div class="col-lg-12 text-center mb-3" data-aos="fade-up" data-aos-delay="200">
            <img src="/img/icon-google.png" draggable="false" class="img-fluid" alt="" srcset="">
        </div>

        <div class="col-lg-4" data-aos="fade-up" data-aos-delay="250">
          <div class="card hover-card border-0">
              <div class="card-body">
                  <div class="text-muted p-3">
                      Easy to use, got way more and way better designs that I expected and very happy with the end result.
                      Fast service with 1 weeks only. So crazy!
                  <hr/>
                  <div class="row g-0 mx-3 card-review mt-4">
                      <div class="col-lg-2 col-3 text-end">
                          <img src="/avatar/avatar-7.png" draggable="false" class="h-75" alt="" srcset="">
                      </div>
                      <div class="col col card-name-review mx-4">
                          Irfan Wihatnata <br/>
                          Mahasiswa
                      </div>
                  </div>
                  </div>
              </div>
          </div>
        </div>
        
        <div class="col-lg-4" data-aos="fade-up" data-aos-delay="250">
          <div class="card hover-card border-0">
              <div class="card-body">
                  <div class="text-muted p-3">
                      Easy to use, got way more and way better designs that I expected and very happy with the end result.
                      Fast service with 1 weeks only. So crazy!
                  <hr/>
                  <div class="row g-0 mx-3 card-review mt-4">
                      <div class="col-lg-2 col-3 text-end">
                          <img src="/avatar/avatar-7.png" draggable="false" class="h-75" alt="" srcset="">
                      </div>
                      <div class="col col card-name-review mx-4">
                          Irfan Wihatnata <br/>
                          Mahasiswa
                      </div>
                  </div>
                  </div>
              </div>
          </div>
        </div>

        <div class="col-lg-4" data-aos="fade-up" data-aos-delay="250">
          <div class="card hover-card border-0">
              <div class="card-body">
                  <div class="text-muted p-3">
                      Easy to use, got way more and way better designs that I expected and very happy with the end result.
                      Fast service with 1 weeks only. So crazy!
                  <hr/>
                  <div class="row g-0 mx-3 card-review mt-4">
                      <div class="col-lg-2 col-3 text-end">
                          <img src="/avatar/avatar-7.png" draggable="false" class="h-75" alt="" srcset="">
                      </div>
                      <div class="col col card-name-review mx-4">
                          Irfan Wihatnata <br/>
                          Mahasiswa
                      </div>
                  </div>
                  </div>
              </div>
          </div>
        </div>

      <div class="col-12 text-center mt-5 mb-5 " data-aos="fade-up" data-aos-delay="200">
          <a href = "https://www.google.co.id/search?hl=id&_ga=2.20499834.392118132.1626078498-161525578.1626078498&q=Personal+Website+of+Nabiel+Mada&ludocid=4765965147224250446&lsig=AB86z5WpO2RR6dfxZbT50_vGvu4O"
              target = "_blank">
              <button class="btn btn-light text-muted"> LOAD MORE</button>
          </a>
      </div>

    </div>

    </div>
  </section>

  <footer id = "space" class="container pb-5">
    <div class = "d-flex">
      <div>
        Made with <span class = "bi bi-heart-fill text-danger"></span> Alunam &copy; 2022 
      </div>
      <div class ="ms-auto text-muted">
        <span class="me-3">Instagram</span>
        <span class="me-3">Whatsapp</span>
        <span class="me-3">Siapa Kami?</span>
      </div>
    </div>
  </footer>

</template>

<script>
  export default {
    name: "HomeView",
  };
</script>