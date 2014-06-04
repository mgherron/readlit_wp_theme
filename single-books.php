<?php 

	get_header();
	
	if (have_posts()) : while (have_posts()) : the_post(); $count++;
	
	$chapters  = get_post_meta($post->ID, 'chapters',  true);
	$book_meta = get_post_meta($post->ID, 'book_meta', true);
  
  $chapters_arr = array();

  if(isset($chapters)) {
    foreach($chapters as $key=>$chapter) {
      $count = $key++;
      $push_data  = array(
        'count'   => $count,
        'anchor'  => ($chapter['name']) ? preg_replace('~[^\p{L}\p{N}]++~u', '-', strtolower($chapter['name'])) : 'chapter-' . $count,
        'title'   => ($chapter['name']) ? $chapter['name'] : 'Chapter ' . $count,
        'copy'    => apply_filters('the_content', $chapter['text'])
      );
      array_push($chapters_arr, $push_data);
    }
    unset($chapters);
  }

?>

<header class="pageheader">
  <a class="menu_toggle" href="#">Menu</a>
  <div class="pagetitle_cont">
    <a href="/"><img src="<?= wp_make_link_relative(get_bloginfo('template_directory')) ?>/style/images/logo.png" width="90" height="18" alt="ReadL.it Homepage" class="logo_middle"/></a>
  </div>
</header>

<nav id="sidebar">

  <div id="sidebar-scroller">        

    <div class="chaptermenu">
      <h3>Chapter Menu</h3>
      <ul id="chapters">

        <?php foreach($chapters_arr as $chapter) { ?>

          <li><a href="#<?= $chapter['anchor'] ?>">
            <?= $chapter['title'] ?>
          </a></li>

        <?php } ?>

      </ul>
    </div>
    
    <div class="book_info">

      <h3>Book Information</h3>
      <div class="sp_info"><strong>Title</strong><?php the_title(); ?></div>

      <? if($book_meta['author']) { ?>
        <div class="sp_info">
          <strong>Author</strong><?= $book_meta['author'] ?>
        </div>
      <? } ?>

      <? if($book_meta['note']) { ?>
        <div class="sp_info"><?= apply_filters('the_content', $book_meta['note']) ?></div>
      <? } ?>
      
    </div>

  </div>

</nav>

<section id="book">

  <article class="bookcontent">
  	
  	<h1 class="thetitle"><?php the_title(); ?></h1>
  	<h3 class="theauthor">By <?= $book_meta['author'] ?></h3>
  			
  	<?php  if($chapters_arr) { foreach($chapters_arr as $chapter) { ?>
  		<chapter id="<?= $chapter['anchor'] ?>">
  			<h3><?= $chapter['title'] ?></h3>
  			<?= $chapter['copy']; ?>
  		</chapter>
  	<?php }} ?>
  	
  	<h2 class="theend">THE END</h2>

  </article>
</section>

<?php 
	endwhile; endif;
	get_footer();
?>