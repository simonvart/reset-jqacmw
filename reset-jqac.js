 jQuery(document).ready( function() {

  /* MENU RESET SIMON
	   *
	   * Checks current URL and set active class accordingly
	   *
	   */

	   var urlList = [
		['', 0 ],
		['our-blog', 1],
		['our-mission', [2,3] ],
		['the-logic-behind', [2,3] ],
		['location', [2,4] ],
		['uncontrolled-logging', [2,5] ],
		['the-foundation', [2,6] ],
		['the-movie', [2,7] ], 
		['nature-parent', 8 ],
		['wildlife', 9 ],
		['flowers', 10 ],
		['about-us', 11 ],
		['partners', 12 ],
		['publications', 13 ]
	   ]


	   // MENU ID DYNAMICALLY IN CASE THE WIDGET NUMBER CHANGES
	   menu_id = jQuery('li[id^=dc_jqaccordion_widget]').attr('id');
	   subMenus = jQuery( '#' + menu_id + ' .sub-menu' );

	   // HIDE SUB-MENUS 
	   subMenus.each( function() {
		jQuery(this).css( 'display', 'none' );
	   });

	   // DOMAIN ( SET IT TO THE CORRECT DOMAIN ROOT )
	   var baseHref = 'http://truecph.com/wildland/';

	   // CURRENT PAGE (WITH AND WITHOUT DOMAIN ROOT)
	   var pageLocation = window.location.href;
	   var pageLocationHash = pageLocation.replace( baseHref, '' );

	   // ARRAY OF URLS FROM MENU
	   var menuLinks = jQuery( '#' + menu_id + ' a');

	   // function IS HOME
	   isHome = function(  ) { 
		if ( pageLocation == baseHref ) {
		 return true;
		} else {
		 return false;
		}
	   }

	   /* function MATCH PARTIEL
	   * Checks url location against array of fragments
	   * requires urlList
	   */
	   partialMatch = function() {
		activeArray = false; 
		jQuery.each( urlList, function( index, value ) {
		 presence = pageLocationHash.indexOf(value[0]);
		 if ( presence >= 0 && index != 0 ) {
		  activeArray = value[1];
		 }
		});
	   return activeArray;
	   }

	   // SET CLASS ACCORDING TO IDENTIFIED FRAGMENT OF URL
	   setActiveItems = function( activeArray ) {

		// REMOVE ACTIVE CLASS   
		menuLinks.each( function() {
		 if ( jQuery(this).hasClass('active') ) {
		  jQuery(this).removeClass('active');
		 }
		});
		// SET ACTIVE CLASS 
		if ( jQuery.type( activeArray ) === 'number' ) {
		 menuLinks.eq( activeArray ).addClass('active');
		}

		if ( jQuery.type( activeArray ) === 'array' ) {
		 jQuery.each( activeArray, function( index, value ) {
		  menuLinks.eq(value).addClass('active');
		  // CHECK IF THE IS SUBMENU TO DISPLAY
		  childrenSubMenus = menuLinks.eq(value).siblings('.sub-menu');
		  if ( childrenSubMenus ) {
		   childrenSubMenus.each( function() {
			jQuery(this).css( 'display', 'block');
		   });
		  }
		 });
		}

	   }
		  
	   // function INIT
	   checkInit = function() {

		if ( isHome() ) {
		 setActiveItems( 0 );
		 return true;
		}

		checkPartiel = partialMatch();
		if ( checkPartiel ) {
		 setActiveItems( checkPartiel );
		 return true;
		}
	   }

	   checkInit();
});
