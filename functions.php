<?php

/*************************

	Theme Options 

*************************/

$inc_path = (TEMPLATEPATH.'/functions/');
require_once ($inc_path.'book_options.php');
require_once ($inc_path.'widgets.php');

/**************************

	Theme scripts

****************************/

function theme_scripts() {
  wp_enqueue_script('modernizr', get_bloginfo('template_directory') . '/style/js/modernizr-2.8.2.min.js');
  wp_enqueue_script('jquery', get_bloginfo('template_directory') . '/style/js/jquery-1.10.1.min.js', null, null);
	wp_enqueue_script('velocity', get_bloginfo('template_directory') . '/style/js/velocity.min.js', array('jquery'), null);
	wp_enqueue_script('jsfunctions', get_bloginfo('template_directory') . '/style/js/functions.js', array('jquery', 'velocity'), null);
	wp_enqueue_style( 'main-style', get_stylesheet_uri() );
}
add_action('wp_enqueue_scripts', 'theme_scripts');

/*************************

	 Enable Menus 
	 
*************************/

	add_action( 'init', 'register_my_menu' );
	function register_my_menu() {
		register_nav_menu( 'primary-menu', __( 'Primary Menu' ) );
	}
	add_theme_support('menus');

	/******************************
		
		Remove Menu Container 
		 
	******************************/
	
		function my_wp_nav_menu_args( $args = '' )
		{
			$args['container'] = false;
			return $args;
		}
		add_filter( 'wp_nav_menu_args', 'my_wp_nav_menu_args' );
			
/******************************
	
	Enable Thumbnails
	
******************************/

	add_theme_support('post-thumbnails');
	set_post_thumbnail_size( 1500, 200, true ); // Normal post thumbnails
	add_image_size( 'custom-img-size', 210, 110, true ); 
		
/******************************

	Excerpts Legnth and Ending 

******************************/

		function new_excerpt_length($length) {
			return 40;
		}
		add_filter('excerpt_length', 'new_excerpt_length');
		
		function new_excerpt_more($more) {
			return '...';
		}
		add_filter('excerpt_more', 'new_excerpt_more');

/******************************

	The Slug

******************************/

	function the_slug() { 
			$post_data = get_post($post->ID, ARRAY_A);
			$slug = $post_data['post_name'];
			return $slug;
	}
	

/**********************
*
*	Hiding non-needed things
*
************************/

function remove_menus () {
global $menu;
	$restricted = array(
		__('Posts'), 
		__('Links'), 
		__('Pages'), 
		__('Comments'), 
	);
	end ($menu);
	while (prev($menu)){
		$value = explode(' ',$menu[key($menu)][0]);
		if(in_array($value[0] != NULL?$value[0]:"" , $restricted)){unset($menu[key($menu)]);}
	}
}
add_action('admin_menu', 'remove_menus');
	
	
/**********************

	Custom Post Types 
	
**********************/

add_action( 'init', 'cre_posts' );

function cre_posts() {

	register_post_type( 'books',
		array(
			'labels' => array('name' => __( 'Books' ), 'singular_name' => __( 'Book' )),
			'public' => true,
			'supports' => array( 'title', 'custom-fields', 'page-attributes' ),
			'rewrite' => array( 'slug' => '/book', 'with_front' => false ),
			'can_export' => true,
			'exclude_from_search' => false,
			'public' => true,
			'menu_position' => 5,
		)
	);

	register_taxonomy( 'book-category', 'books',
		array(
			'label' => __( 'Categories' ),
			'rewrite' => array( 'slug' => 'book-category' ),
			'hierarchical' => true,
		)
	);

}


?>
