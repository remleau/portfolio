<header>
  <div class="container">

    <div class="logo">
      <h1>Remleau<span class="dot text-yellow">.</span></h1>

      <div class="burger">

      </div>
    </div>
    
    @if (has_nav_menu('primary-navigation'))
      <nav>
        {!! wp_nav_menu(['theme_location' => 'primary-navigation', 'container' => false]) !!}
      </nav>
    @endif  

  </div>
</header>