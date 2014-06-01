<?php 

/***************************
*
*	page.php
*
****************************/

get_header(); 

	$count = 0; if (have_posts()) : while (have_posts()) : the_post(); $count++;
		
	// Get Custom Post Data

	$data = array(
		'subtitle' => get_post_meta($post->ID, 'subtitle', true),
	);
?>
	<div class="screen page">

	<?php
	
		/***
		*
		*	Title
		*
		*****/

		include(locate_template('views/page/title.php'));

		/***
		*
		*	Content
		*
		*****/
		
		include(locate_template('views/page/loop.php'));

	?>

	</div><!-- end of screen.page -->
	
<?php

	endwhile; endif; 

get_footer(); 

?>
