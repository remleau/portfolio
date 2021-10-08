<footer>
  <div class="container">
    <div>
      <p>Get in touch</p>
      <h3><a href="mailto:remleau@gmail.com">Remleau@gmail.com</a>.</h3>
      <p class="quote">
        <span>“Once a year, go someplace you’ve never been before.” </span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </p>
    </div>
  </div>

  <div class="container">
    <div class="copyright">
      <p>© Remleau <?php echo date("Y") ?></p>
    </div>

    <div class="socials">
      <?php echo $__env->make('partials.socials', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
    </div>

    <div class="menu">
      <?php if(has_nav_menu('primary-navigation')): ?>
        <nav>
          <?php echo wp_nav_menu(['theme_location' => 'primary-navigation', 'container' => false]); ?>

        </nav>
      <?php endif; ?> 
    </div>
  </div>
</footer>