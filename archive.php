<?php 

/***************************
*
*	archive.php
*
****************************/

get_header(); 

?>
	
	<div class="screen blog archive">
		
		<?php include(locate_template('views/blog/title.php')); ?>

		<div class="container">

			<?php get_sidebar(); ?>

			<div id="content-with-sidebar">
			
				<?php
					
					if(is_author()):
						
						$curauth = (isset($_GET['author_name'])) ? get_user_by('slug', $author_name) : get_userdata(intval($author));
						
						include(locate_template('views/blog/author.php'));
					
					endif;

					$count = 0; if (have_posts()) : while (have_posts()) : the_post(); $count++;
						
						include(locate_template('views/blog/loop.php'));
					
					endwhile;
					        
						include(locate_template('views/blog/pagnition.php'));
					
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
