/*
 Graphics can be displayed a couple of different ways.
 */
var win = Ti.UI.createWindow({
    backgroundColor: '#fff'
});

/*
 1) Using Image Views.

 http://docs.appcelerator.com/titanium/2.1/index.html#!/api/Titanium.UI.ImageView
 */
win.add(Ti.UI.createImageView({
    image: 'images/button.png',
    width: 100, height: 50,
    top: 10, left: 10
}));

/*
 2) Using the backgroundImage property of views.

 http://docs.appcelerator.com/titanium/2.1/index.html#!/api/Titanium.UI.View-property-backgroundImage
 */
win.add(Ti.UI.createView({
    backgroundImage: 'images/button.png',
    width: 272, height: 50,
    top: 90, left: 10
}));

/*
 Notice how the two scale the graphic differently.
 */

win.open();