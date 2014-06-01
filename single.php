<?php 

/***************************
*
*	single.php
*
****************************/

get_header(); 

?>
	
	<div class="screen blog single">
		
		<?php include(locate_template('views/blog/title.php')); ?>

		<div class="container">

			<?php get_sidebar(); ?>

			<div id="content-with-sidebar">

				<?php

					$count = 0; if (have_posts()) : while (have_posts()) : the_post(); $count++;
						
						include(locate_template('views/blog/loop.php'));
					
					endwhile;
					        					
					else :  
					
						include(locate_template('views/feedback/noposts.php'));
					
					endif; 
				?>

			</div><!-- end of content-with-sidebar -->

		</div><!-- end of container -->

	</div><!-- end of screen blog index -->


<?php

	get_footer(); 

?>
