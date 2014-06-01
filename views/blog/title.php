<div id="page-title" <?php if(!$data['subtitle']) echo 'class="no-subtitle"'; ?>>
		
	<div class="over">
		
		<div class="container">
				
				<h1>Blog</h1>
				<?php if($data['subtitle']): ?><h5><?=$data['subtitle']?></h5><?php endif; ?>

			<i class="arrow-up"></i>
		
		</div><!-- end of container -->
	
	</div><!-- end of text -->

	<?php
		$blog = get_option('blog');
		if($blog['image']):
	?>
		<img src="<?=$blog['image']?>" title="Blog" />
	<?php
		endif;
	?>


</div><!-- end of page-title -->