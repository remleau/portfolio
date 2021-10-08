<?php

  function create_block_cbf_title_block_init()
  {
    // Check if Gutenberg is active.
    if ( ! function_exists( 'register_block_type' ) ) {
      return;
    }

    // automatically load dependencies and version
    $asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php');

    wp_register_style(
      'cbf-title-block-editor-css',
      plugins_url( 'build/index.css', __FILE__ ),
      $asset_file['version']
    );

    wp_register_style(
      'cbf-title-block-css',
      plugins_url( 'build/style-index.css', __FILE__ ),
      $asset_file['version']
    );

    wp_register_script(
      'cbf-title-block-editor-js',
      plugins_url( 'build/index.js', __FILE__ ),
      $asset_file['dependencies'],
      $asset_file['version']
    );

    register_block_type( 'cbf-blocks/cbf-title', [
      'api_version' => 2,
      'editor_script' => 'cbf-title-block-editor-js',
      'editor_style'  => 'cbf-title-block-editor-css',
      'style' => 'cbf-title-block-css'
    ]);

  }
  add_action( 'init', 'create_block_cbf_title_block_init' );