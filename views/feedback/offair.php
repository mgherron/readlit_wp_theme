<div id="offair">

<div class="container">
	
	<div id="offair-content">
		
		<div id="header-logo" class="logo">
			<a href="<?php echo get_option('home'); ?>">
	    		<?php bloginfo('name'); ?>
			</a>
	    </div><!-- end of logo -->
	    
		
		<h1>Oh Snap, We are making updates!</h1>
	
	</div><!-- end of header-statement -->


	 <?php 
		$d = get_option('cre_options');
		if($d['twitter']) 
		{
			echo '<div id="twitter-bird"><a href="http://twitter.com/'.$d['twitter'].'"></a></div>';
		}
	?>

	
	
</div><!-- end of container -->


</div><!-- end of offair -->