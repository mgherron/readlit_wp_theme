
<div class="section">

	<?php $general = get_option('general'); ?>

	<label for="contact_shortcode">Contact form shortcode</label>
	<input type="text" value="<?php echo $general['contact_shortcode']; ?>" name="general[contact_shortcode]" />

	<label for="phonenumber">Phone number</label>
	<input type="text" value="<?php echo $general['phonenumber']; ?>" name="general[phonenumber]" />
	
	<label for="address">Address</label>
	<input type="text" value="<?php echo $general['address']; ?>" name="general[address]" />

</div><!-- end of section -->

<div class="section">
	
	<?php $homepage = get_option('homepage'); ?>
	
	<label for="">Home page banner title & subtitle</label>
	<input type="text" value="<?php echo $homepage['title']; ?>" name="homepage[title]" placeholder="Banner main text" />
	<input type="text" value="<?php echo $homepage['subtitle']; ?>" name="homepage[subtitle]" placeholder="Banner subtitle" />
	
	<input type="text" value="<?php echo $homepage['image']; ?>" name="homepage[image]" placeholder="Banner image path" />

</div><!-- end of section -->

<div class="section">
	
	<?php $blog = get_option('blog'); ?>
	
	<label for="blog[image]">Blog things</label>
	<input type="text" value="<?php echo $blog['image']; ?>" name="blog[image]" placeholder="Blog image path" />
	
</div><!-- end of section -->