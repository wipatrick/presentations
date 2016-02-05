var SLIDE_CONFIG = {
  // Slide settings
  settings: {
    title: 'Title', // Also set the $title variable in default.scss, or the content specification in slides>slide:not(.nobackground):before in default.css
    subtitle: 'Subtitle',
    //eventTitle: 'Google I/O 2013',
    useBuilds: true, // Default: true. False will turn off slide animation builds.
    usePrettify: true, // Default: true
    enableSlideAreas: true, // Default: true. False turns off the click areas on either slide of the slides.
    enableTouch: true, // Default: true. If touch support should enabled. Note: the device must support touch.
    //analytics: 'UA-XXXXXXXX-1', // TODO: Using this breaks GA for some reason (probably requirejs). Update your tracking code in template.html instead.
    // favIcon: 'images/google_developers_logo_tiny.png',
    fonts: [
      'Open Sans:regular,semibold,italic,italicsemibold',
      'Source Code Pro'
    ]
    //theme: ['mytheme'], // Add your own custom themes or styles in /theme/css. Leave off the .css extension.
  },

  // Author information
  presenters: [{
    name: 'Patrick Wiener',
    company: 'BigGIS Infrastructure<br>Hochschule Karlsruhe - Technik und Wirtschaft',
    twitter: '@patrickwiener',
    www: 'http://www.hs-karlsruhe.de/w',
    github: 'http://github.com/wipatrick',
    // link: 'http://wipatrick.github.io/presentations/'
  }/*, {
    name: 'Second Name',
    company: 'Job Title, Google',
    gplus: 'http://plus.google.com/1234567890',
    twitter: '@yourhandle',
    www: 'http://www.you.com',
    github: 'http://github.com/you'
  }*/]
};
