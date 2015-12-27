(function(){

    var robertson = [
        {
            src: 'https://farm7.staticflickr.com/6175/6176698785_7dee72237e_b.jpg',
            w: 100,
            h: 100
        }
    ]

    var dinosaurProvincialPark = [
        {
            src: '../images/canada/1.jpeg',
            w: 1333,
            h: 1000
        },
        {
            src: '../images/canada/2.jpeg',
            w: 1333,
            h: 1000
        },
        {
            src: '../images/canada/3.jpeg',
            w: 1333,
            h: 1000
        },
        {
            src: '../images/canada/4.jpeg',
            w: 750,
            h: 1000
        },
        {
            src: '../images/canada/5.jpeg',
            w: 1333,
            h: 1000
        }
    ]

    var gns = [
        {
            src: '../images/newzealand/1.jpeg',
            w: 1333,
            h: 1000
        },
        {
            src: '../images/newzealand/2.jpeg',
            w: 1333,
            h: 1000
        },
        {
            src: '../images/newzealand/3.jpeg',
            w: 750,
            h: 1000
        },
        {
            src: '../images/newzealand/4.jpeg',
            w: 1333,
            h: 1000
        },
        {
            src: '../images/newzealand/5.jpeg',
            w: 750,
            h: 1000
        }
    ]

    var newMexico = [
        {
            src: '../images/usa/1.jpeg',
            w: 1333,
            h: 1000
        },
        {
            src: '../images/usa/2.jpeg',
            w: 1333,
            h: 1000
        },
        {
            src: '../images/usa/3.jpeg',
            w: 750,
            h: 1000
        },
        {
            src: '../images/usa/4.jpeg',
            w: 1333,
            h: 1000
        },
        {
            src: '../images/usa/5.jpeg',
            w: 1333,
            h: 1000
        }
    ]

    var museu = [
        {
            src: '../images/portugal/1.jpeg',
            w: 1333,
            h: 1000
        },
        {
            src: '../images/portugal/2.jpeg',
            w: 1476,
            h: 1000
        },
        {
            src: '../images/portugal/3.jpeg',
            w: 1476,
            h: 1000
        },
        {
            src: '../images/portugal/4.jpeg',
            w: 1333,
            h: 1000
        },
        {
            src: '../images/portugal/5.jpeg',
            w: 1476,
            h: 1000
        }
    ]

    var openGallery = function(gallery) {
        var pswpElement = document.querySelectorAll('.pswp')[0];

        // define options (if needed)
        var options = {
            // optionName: 'option value'
            // for example:
            index: 0, // start at first slide
            escKey: true,
            showHideOpacity: true,
            shareEl: false
        };

        // Initializes and opens PhotoSwipe
        var photoGallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, gallery, options);
        photoGallery.init();
    }
    
    $('[data-gallery]').on('click', function(e) {
        e.preventDefault();
        var galleryName = $(this).data('gallery');
        console.log(galleryName);

        switch(galleryName) {
            case 'robertson':
                openGallery(robertson);
            break;
            case 'dinosaurProvincialPark':
                openGallery(dinosaurProvincialPark);
            break;
            case 'gns':
                openGallery(gns);
            break;
            case 'newMexico':
                openGallery(newMexico);
            break;
            case 'museu':
                openGallery(museu);
            break;
            

        }
        
    });
})();
