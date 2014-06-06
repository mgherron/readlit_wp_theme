<?php 

/***************************
*
*	index.php
*
****************************/

get_header(); 

?>
	
<div class="left">
	<div class="left_main">
		<div class="left_main_top">
			<img src="<?= wp_make_link_relative(get_bloginfo('template_directory')) ?>/img/logo.png" alt="readlit" class="logo"/>
			<p class="main_descp">
				<em>Open source your reading.</em>
			</p>
			<p class="main_descp">
				<strong>ReadLit</strong> is a free, open-source reading initiative that provides web-based books optimized for desktop, mobile and tablet devices.
			<p class="main_descp">
				All content is available in the public domain, courtesy of <a href="http://www.gutenberg.org/">Project Gutenberg</a>.
			<p class="main_descp">
				<a href="mailto: readlitapp@gmail.com">Contact us</a> to suggest a book.
			</P>
			<!--
			<input type="text" class="email" placeholder="Your Email Address"/>
			<input type="submit" value="Sign up to ReadLit" class="submit"/>
			-->
		</div>
		<div class="left_main_bottom">
			<div class="footer">
				<a href="https://twitter.com/readlitapp" target="_blank">&#64;readlitapp</a>
			</div>
		</div>
	</div>
</div>

<div class="right">

	<?php 
		$args = array(
			'post_type' => 'books',
			'order_by' => 'menu_order',
			'posts_per_page' => -1,	
		);
		$books = get_posts($args);
		foreach($books as $post): setup_postdata($post);
			$term_list = wp_get_post_terms($post->ID, 'book-category', array("fields" => "names"));
			$book_meta = get_post_meta($post->ID, 'book_meta', true);
	?>

		<a class="book_common green" href="<?php the_permalink(); ?>">
			<p class="pbookname"><?php the_title(); ?></p>
			<p class="pauthor"><?=$book_meta['author']?></p>
			<p class="pcategory"><?php echo implode(', ', $term_list); ?></p>
		</a>
	
	<?php endforeach; ?>
</div>

<?php

	get_footer(); 

?>
