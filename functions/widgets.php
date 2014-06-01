<?php

if ( function_exists('register_sidebar') ) {


    $content_args = array(
        'name'          => 'Page sidebar',
        'id'            => 'page_sidebar',
        'description'   => 'Place the widgets you wish to appear on pages.',
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget'  => '</div><!-- end of footer_item -->',
        'before_title'  => '<h2 class="widgettitle">',
        'after_title'   => '</h2>' 
    );
    register_sidebar($content_args);

}
