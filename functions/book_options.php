<?php

// Chapters

add_action( 'admin_init', 'book_chapters' );

function book_chapters() 
{
    add_meta_box( 'sponsor_fields',
        'Chapters',
        'book_display_chapters',
        'books', 'advanced', 'high'
    );
}
function book_display_chapters($nl_link) 
{
    
    $chapters = get_post_meta($nl_link->ID, 'chapters', true );

    $meta = get_post_meta($nl_link->ID);

?>
	<style>
		.sponsor_table {
			width: 100%;
		}
		.sponsor_table input,
		.sponsor_table textarea {
			width: 100%;
			margin: 0 0 5px 0;
		}
			.sponsor_table tr {
				width: 100%;
				display: block;
				border-bottom: 1px solid #eeeeee;
				padding: 0 0 5px 0;
				margin: 0 0 5px 0;
			}
				.sponsor_table tr td {
					width: 100%;
					display: block;
				}
					.sponsor_table tr td textarea { height: 400px; }
					
					.sponsor_table tr td .chapter_name {
						padding: 8px 15px;
						background: #0074a2;
						color: #ffffff;
						margin: 0 0 5px 0;
						font-weight: 500;
						font-size: 18px;
						cursor: pointer;
					}
					.sponsor_table tr td .fields { display: none; }
	</style>
	    <table class="sponsor_table">
	    	<?php $count=0; if($chapters): ?>
		    	<?php foreach($chapters as $chapter): $count++; ?>
		        <tr>
		            <td>
		            	<div class="toggle_fields chapter_name">
		            		<?php if($chapter['name']): echo $chapter['name']; else: echo 'Chapter '.$count; endif;?>
		            	</div>
	        			<div class="fields">
	        				<input name="book_chapters[<?=$count?>][name]" placeholder="Chapter Name" value="<?=$chapter['name']?>"><br />
	        				<textarea name="book_chapters[<?=$count?>][text]" placeholder="Chapter text"><?=$chapter['text']?></textarea><br />
	        				<button class="remove_row button-secondary">Remove Chapter</button>
	        			</div>
		            </td>
		        </tr>
		        <?php endforeach; ?>
			<?php else: ?>
	        	<tr>
	        		<td>
	        			<div class="toggle_fields chapter_name">New Chapter</div>
	        			<div class="fields">
	        			<input name="book_chapters[0][name]" placeholder="Chapter Name" /><br />
	        			<textarea name="book_chapters[0][text]" placeholder="Chapter text"></textarea><br />
	        			<button class="remove_row button-secondary">Remove Chapter</button>
	        			</div>
	        		</td>
	        	</tr>
	        <?php endif; ?>
	    </table>
	    <button class="add_chapter button-primary">Add Chapter</button>
	    <script type="text/javascript">
	    	jQuery(document).ready(function($) {
		    	var chapter_count = <?=$count?>;
		    	$('.add_chapter').click(function() {
		    		$('.sponsor_table tr td .fields').slideUp(); 
		    		chapter_count = chapter_count+1;
		    		$('table.sponsor_table').append('<tr><td><div class="toggle_fields chapter_name">New Chapter</div><div style="display:block" class="fields"><input name="book_chapters['+chapter_count+'][name]" placeholder="Chapter Name" /><br /><textarea name="book_chapters['+chapter_count+'][text]" placeholder="Chapter text"></textarea><br /><button class="remove_row button-secondary">Remove Chapter</button></div></td></tr>');
		    		return false;
		    	});
		    	
		    	$(document).on('click', '.sponsor_table .remove_row', function() {
		    		$(this).closest('tr').remove();
		    		return false;
		    	});
		    	
		    	$(document).on('click', '.sponsor_table tr td .toggle_fields', function() {
		    		$('.sponsor_table tr td .fields').slideUp();
		    		$(this).parent('td').children('.fields').slideToggle();
		    	});
	    	});
	    	
	    </script>
<?php
}
add_action( 'save_post', 'add_book_fields', 10, 2 );

function add_book_fields( $nl_link_id, $nl_link ) 
{
    // Check post type for movie reviews
    if ( $nl_link->post_type == 'books' ):
        // Store data in post meta table if present in post data
        if ($_POST['save'] || $_POST['publish']):
            update_post_meta( $nl_link_id, 'chapters', $_POST['book_chapters'] );
        endif;
    endif;
}


/***** Book Meta **********/

add_action( 'admin_init', 'book_meta' );

function book_meta() 
{
    add_meta_box( 'book_meta_fields',
        'Chapters',
        'book_meta_display',
        'books', 'advanced', 'high'
    );
}
function book_meta_display($nl_link) 
{
    
    $book_meta = get_post_meta($nl_link->ID, 'book_meta', true );
    $meta = get_post_meta($nl_link->ID);

?>
    <table>
        	<tr>
        		<td><label>Author</label></td>
        		<td><input name="book_meta[author]" value="<?=$book_meta['author']?>" /></td>
        	</tr>
        	<tr>
        		<td><label>Transcriber's note</label></td>
        		<td><textarea name="book_meta[note]"><?=$book_meta['note']?></textarea></td>
        	</tr>
    </table>
<?php
}
add_action( 'save_post', 'add_book_meta_fields', 10, 2 );

function add_book_meta_fields( $nl_link_id, $nl_link ) 
{
    // Check post type for movie reviews
    if ( $nl_link->post_type == 'books' ):
        // Store data in post meta table if present in post data
        if ($_POST['save'] || $_POST['publish']):
            update_post_meta( $nl_link_id, 'book_meta', $_POST['book_meta'] );
        endif;
    endif;
}




?>