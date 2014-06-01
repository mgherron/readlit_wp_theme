<article class="blog-post" id="post-<?php the_ID(); ?>">

	<header>
		
		<div class="thumbnail">
		
			<?php 
				if ( has_post_thumbnail() ) { // check if the post has a Post Thumbnail assigned to it.
				  the_post_thumbnail();
				} 
			?>
		
		</div><!-- end of thumbnail -->
		
		
		<h2><a href="<?php the_permalink(); ?>" title="<?php the_title_attributes(); ?>"><?php the_title(); ?></a></h2>
		<time datetime="<?php the_time('Y-m-d'); ?>"><?php the_time('F jS'); ?></time>
	
	</header>
	
	<?php the_content('Read On.'); ?>

</article>