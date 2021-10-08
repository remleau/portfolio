<?php
  /*
    Plugin Name: Custom blocks fields
    Plugin URI: http://my-awesomeness-emporium.com
    description: a plugin to create awesomeness and spread joy
    Version: 1.0
    Author: Rémy Groleau
    Author URI: http://remygroleau.ca
    License: GPL2
  */


  /**
   * Load required files;
   */

  include( plugin_dir_path( __FILE__ ) . 'blocks/index.php');
  include( plugin_dir_path( __FILE__ ) . 'admin-page.php');
  include( plugin_dir_path( __FILE__ ) . 'uninstall.php');

  $path = plugin_dir_path( __FILE__ ) . '*/*/*.php';
  $filenames = glob($path);
  foreach ($filenames as $filename) {
    include($filename);
  }
