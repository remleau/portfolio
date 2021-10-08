<?php $__env->startSection('content'); ?>

  <div class="slider">
    <div class="container">

      <div class="slider-front-page">

        <div class="slider-text">
          <p class="bottom-line">My work.</p>
        </div>

        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide"><a class="" href=""></a></div>
            <div class="swiper-slide"><a class="" href=""></a></div>
            <div class="swiper-slide"><a class="" href=""></a></div>
          </div>
        </div>

      </div>

    </div>
  </div>

  <div class="services" style="background-image: url(<?= App\asset_path('images/circle.svg'); ?>)" data-parallax-image>
    <div class="container">
      <p class="bottom-line">What i offer.</p>
      <div class="flex flex-wrap">
        <?php echo $__env->make('partials.service', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
        <?php echo $__env->make('partials.service', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
        <?php echo $__env->make('partials.service', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
        <?php echo $__env->make('partials.service', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
        <?php echo $__env->make('partials.service', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
        <?php echo $__env->make('partials.service', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
        <?php echo $__env->make('partials.service', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
      </div>
    </div>
  </div>

  <div class="about">
    <div class="about-image">
      <div class="overlay"></div>
      <div class="image" style="background-image:url(https://images.unsplash.com/photo-1600799964235-c827e39f004a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3410&q=80)"></div>
    </div>
    <div class="container">
      <div class="about-text">
        <p class="bottom-line">About me.</p>
      </div>
      <div class="about-text main-text">
        <p>Nulla sit amet sem non mauris aliquet dapibus vitae posuere augue. Curabitur aliquet a ante id pretium. Aliquam ut fermentum risus. Sed dapibus ante augue, ut finibus magna maximus scelerisque.</p>
        <a href="" class="cta">Get in touch.</a>
      </div>
    </div>
  </div>

<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.app', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>