<?php

  /**
   * Create a custom page in the admin
   */
  function create_custom_page()
  {
    $page_title = 'My Custom Page';
    $menu_title = 'My Custom Page';
    $capability = 'read';
    $slug = 'custom_page_content';
    $callback = 'custom_page_content';
    $icon = 'dashicons-welcome-write-blog';
    $position = 100;

    add_menu_page( $page_title, $menu_title, $capability, $slug, $callback, $icon, $position );
  }
  add_action( 'admin_menu', 'create_custom_page' );


  /**
   * Admin page content
   */
  function custom_page_content(){
    echo '<h1>My Custom Page Title</h1>';
  }