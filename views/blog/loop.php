

<article class="post" id="post-<?php the_ID(); ?>">

	<h2><a href="<?php the_permalink(); ?>" title="<?php the_title_attribute(); ?>"><?php the_title(); ?></a></h2>
	<div class="meta"><time datetime="<?php the_time('Y-m-d'); ?>"> Posted <?php echo get_the_date('l, F j, Y'); ?> in <?php the_category(', '); ?></time></div>

	<div class="format content">
		<?php the_content('<i></i> Continue reading'); ?>
	</div><!-- end of format -->
	
	<?php if(is_single()): ?>
		
		<div class="author_information">
				
				<h3>About <?php the_author(); ?></h3>
				<p><?php the_author_description(); ?></p>		
				
				<a class="btn blue" href="<?php echo get_author_posts_url( get_the_author_meta( 'ID' ) ); ?>">View posts by <?php the_author_meta( 'display_name' ); ?></a>	
		
		</div><!-- end of author_information -->
		
		<div class="share-options">
			
			<h5>Share post:</h5>
			
			<a href="https://twitter.com/share" class="twitter-share-button" data-lang="en">Tweet</a>
			<div class="fb-like" data-width="100" data-layout="button_count" data-show-faces="false" data-send="false"></div>
			
		</div><!-- end of share-options -->
		
		
		<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="https://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
		<div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=166888450136001";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>
	
	<?php endif; ?>

</article>


