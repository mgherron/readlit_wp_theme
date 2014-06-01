<?php 

	get_header(); 
	
	if (have_posts()) : while (have_posts()) : the_post(); $count++;
	
	$chapters = get_post_meta($post->ID, 'chapters', true);
	$book_meta = get_post_meta($post->ID, 'book_meta', true);
	
?>

<div class="chapter_menu_cont book_sidebar">
      
      <div class="head"></div>
      
      <?php if($chapters): ?>
      <div class="chaptermenu">
      	<h3>Chapter Menu</h3>
      	<ul>
      		<?php 
      			$count=0; foreach($chapters as $chapter): $count++;
      				$hook = str_replace(' ', '', strtolower($chapter['name']));
      		?>
      			<li><a href="#<?php if($chapter['name']): echo $hook; else: echo 'chapter-'.$count; endif; ?>">
      				<?php if($chapter['name']): echo $chapter['name']; else: echo 'Chapter '.$count; endif; ?>
      			</a></li>
      		<?php endforeach; ?>
      	</ul>
      </div>
      <?php endif; ?>
      
      <div class="book_info">
      	<h3>Book Information</h3>
        <div class="sp_info"><strong>Title</strong><?php the_title(); ?></div>
        <?php if($book_meta['author']):?>
        	<div class="sp_info"><strong>Author</strong><?=$book_meta['author']?></div>
        <?php endif; ?>
        <?php if($book_meta['note']):?>
        <div class="sp_info"><?php echo apply_filters('the_content', $book_meta['note']); ?></div>
        <?php endif; ?>
        
      </div>
    </div>
    
<div class="main-area">
    
    <div class="pageheader">
        <div class="menu_toggle open">
          menu
        </div>
      <div class="pagetitle_cont">
        <a href="<?=get_option('home')?>"><img src="<?=get_bloginfo('template_directory')?>/style/images/logo_90x80.png" alt="ReadL.it Homepage" class="logo_middle"/></a>
      </div>	 
	</div>
    <div class="bookcontent">
    	
    	<h1 class="thetitle"><?php the_title(); ?></h1>
    	<h3 class="theauthor">By <?=$book_meta['author']?></h3>
    			
		<?php 
			if($chapters):
			$count=0; foreach($chapters as $chapter): $count++;
			$copy = apply_filters('the_content', $chapter['text']);
			$hook = str_replace(' ', '', strtolower($chapter['name']));
		?>
			
			<chapter id="<?php if($chapter['name']): echo $hook; else: echo 'chapter-'.$count; endif; ?>">
				
				<h3><?=$chapter['name']?></h3>
				<?php echo $copy; ?>
				
			</chapter>
		
		<?php 
			endforeach;
			endif;	
		?>
		
		<h2 class="theend">THE END</h2>
	
    </div>
    
</div><!-- end of main-area -->

<?php 
	endwhile; endif;
	get_footer();
?>