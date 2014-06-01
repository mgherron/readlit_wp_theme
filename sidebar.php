<div id="sidebar">

	<?php 
		if(is_page()): 

		if($post->post_parent):
 			$children = wp_list_pages("title_li=&child_of=".$post->post_parent."&echo=0&post_type=page&link_before=<i></i>");
  		else:
 			$children = wp_list_pages("title_li=&child_of=".$post->ID."&echo=0&post_type=page&link_before=<i></i>");
 		endif;

	?>

		<?php if($children): ?>

			<div class="widget sub_menu">
				<ul><?php echo $children; ?></ul>
			</div><!-- end of widget -->

		<?php endif; ?>

		<?php if ( !function_exists('dynamic_sidebar') || !dynamic_sidebar('page_sidebar') ) : endif; ?>

	<?php else: ?>

		<?php if ( !function_exists('dynamic_sidebar') || !dynamic_sidebar('general_sidebar') ) : endif; ?>

	<?php endif; ?>


</div><!-- end of sidebar -->