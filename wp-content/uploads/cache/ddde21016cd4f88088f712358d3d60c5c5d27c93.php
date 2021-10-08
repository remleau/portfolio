<header>
  <div class="container">

    <div class="logo">
      <h1>Remleau<span class="dot text-yellow">.</span></h1>

      <div class="burger">

      </div>
    </div>
    
    <?php if(has_nav_menu('primary-navigation')): ?>
      <nav>
        <?php echo wp_nav_menu(['theme_location' => 'primary-navigation', 'container' => false]); ?>

      </nav>
    <?php endif; ?>  

  </div>
</header>