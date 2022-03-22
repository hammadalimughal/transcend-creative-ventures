<?php
include 'includes/header.php';
$page = 'home';
?>
<main>
    <section class="banner-sec-inner">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-11 col-12 px-lg-4">
                </div>
            </div>
        </div>
    </section>
    <section class="portfolio-inner-tabs">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-11 col-12 px-lg-4">
                    <div class="title-portfolio">
                        <h4>portfolio</h4>
                        <h2>our recent work</h2>
                    </div>
                    <ul class="portfolio-tabs">
                        <li><a role="button" data-target-port="all" class="active" href="javascript:;">all</a></li>
                        <li><a role="button" data-target-port="logos" href="javascript:;">Logos</a></li>
                        <li><a role="button" data-target-port="websites" href="javascript:;">Websites</a>
                        </li>
                        <li><a role="button" data-target-port="video" href="javascript:;">Video</a></li>
                        <li><a role="button" data-target-port="stationary" href="javascript:;">Stationary</a></li>
                        <li><a role="button" data-target-port="illustration" href="javascript:;">Illustration</a></li>
                        <li><a role="button" data-target-port="mobile-apps" href="javascript:;">Mobile Apps</a></li>
                    </ul>
                    <div class="portfolio-content">
                        <div class="row g-lg-5 g-4">
                            <div data-portfolio-type="websites video stationary"
                                class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                <a data-fancybox data-type="image" href="images/portfolio-1-full.png">
                                    <figure class="web">
                                        <img class src="images/portfolio-1-full.png" alt="">
                                    </figure>
                                </a>
                            </div>
                            <div data-portfolio-type="web-design websites stationary"
                                class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                <a data-fancybox data-type="image" href="images/portfolio-2-full.png">
                                    <figure class="web">
                                        <img class src="images/portfolio-2-full.png" alt="">
                                    </figure>
                                </a>
                            </div>
                            <div data-portfolio-type="websites video illustration"
                                class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                <a data-fancybox data-type="image" href="images/portfolio-3-full.png">
                                    <figure class="web">
                                        <img class src="images/portfolio-3-full.png" alt="">
                                    </figure>
                                </a>
                            </div>
                            <div data-portfolio-type="web-design logos illustration"
                                class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                <a data-fancybox data-type="image" href="images/portfolio-4.png">
                                    <figure>
                                        <img class src="images/portfolio-4.png" alt="">
                                    </figure>
                                </a>
                            </div>
                            <div data-portfolio-type="logos video mobile-apps"
                                class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                <a data-fancybox data-type="image" href="images/portfolio-5.png">
                                    <figure>
                                        <img class src="images/portfolio-5.png" alt="">
                                    </figure>
                                </a>
                            </div>
                            <div data-portfolio-type="web-design video mobile-apps"
                                class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                <a data-fancybox data-type="image" href="images/portfolio-6-full.png">
                                    <figure class="web">
                                        <img class src="images/portfolio-6-full.png" alt="">
                                    </figure>
                                </a>
                            </div>
                            <div class="col-12">
                                <div class="load-more-btn"><button>load more</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>
</main>
<?php
include 'includes/footer.php';
$page = 'home';
?>