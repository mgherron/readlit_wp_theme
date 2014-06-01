<?php 

/***************************
*
*	search.php
*	@_crecom
*	@change_log_april_16th
*
****************************/

get_header(); 

$data = get_option('cre_options');


	$count = 0; if (have_posts()) : while (have_posts()) : the_post(); $count++;
		
		include(locate_template('views/search/loop.php'));
	
	endwhile;
	        
		include(locate_template('views/search/pagnition.php'));
	
	else :  
	
		include(locate_template('views/feedback/noposts.php'));
	
	endif; 


	get_sidebar(); 

get_footer(); 

?>
