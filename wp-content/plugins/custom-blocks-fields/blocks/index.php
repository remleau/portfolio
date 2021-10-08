<?php

  /**
   * Create a custom category for the blocks;
   */

  add_filter( 'block_categories_all', function( $categories, $post ) {
    return array_merge(
      $categories,
      array(
        array(
          'slug'  => 'custom-blocks-fields',
          'title' => 'Custom Blocks Fields',
        ),
      )
    );
  }, 10, 2 );