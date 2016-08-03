# cordova-angular-angularMaterial-seed

A seed for projects using Cordova + AngularJS + Angular-Material
(Note: this isn't an Ionic Framework Seed)

Just clone it to your computer, run the command `cordova serve`, and use it to initialize your projects.

* The directory structure is based on this topic:

  https://scotch.io/tutorials/angularjs-best-practices-directory-structure

* When looking for Plugins, you should look here:

  http://ngcordova.com/docs/plugins/
  
  But you can also use other plugins from standard cordova or anything(where) else.

* There are places in the index.html to load your javascript files on the top of the file, please use it as a guide. (Since it's an app, the files should be load at the start, so the first paint will be complete)

* Any time you need to use a cordova plugin, make sure to wrap it in a 'deviceready' event listener like so:
  ```javascript
    document.addEventListener("deviceready", function () {
    //your plugin code here
  }, false);
  ```
  There's one example of this use in app.js

* Here's a list of Angular-Material Icon and how to use them:
  
  https://klarsys.github.io/angular-material-icons/

* The Angular-Material documentation is here:

  https://material.angularjs.org/latest/

* Here's the documentation for Google's Material Design Style, take a little look and keep the styles in your mind:

  http://www.google.com/design/spec/material-design/introduction.html#
  Keep you main color search here: (This will save your life/time)
  http://www.google.com/design/spec/style/color.html#color-color-palette

* If you want to debug on Google Chrome, use [Brackets](http://brackets.io/), Node Server or even ISS Express.
  
  Unfortunately, the cordova server isn't supporting the application, but I'm looking for a solution.

* If you want to debug on an Android device, connect the device on your computer via usb and use:
  
  `cordova run android --device` (MS Windows requires specific drivers for your device)
  
  Also use Chrome's Developer Tools ( chrome://inspect/#devices )

* This project is my favorite son, I'll always keep improving it, so anything you want to share with me or any questions you can ask me and/or open an issue, just make a good title so anyone can know what it's about.

* Keep in mind that information and knowledge always get better when it's shared with anyone, feel free to use this seed, but still I'd be glad if you mention this repository on your code or repository or share it with your friends. Also, if you do something, I would be glad to receive a link showing your repository or work.
  
### I'm pretty sure that:
![That's all Folks!](http://junkee.com/wp-content/uploads/2013/08/thats-all-folks-7172-1280x800.jpg)
