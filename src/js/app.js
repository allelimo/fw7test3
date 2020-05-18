import $$ from 'dom7';
import Framework7 from 'framework7/framework7.esm.bundle.js';

// Import F7 Styles
import 'framework7/css/framework7.bundle.css';

// Import Icons and App Custom Styles
import '../css/icons.css';
import '../css/app.css';

// Import Routes
import routes from './routes.js';

// Import main app component
import App from '../app.f7.html';

var app = new Framework7({
  root: '#app', // App root element
  component: App, // App main component

  name: 'fwTest3', // App name
  theme: 'auto', // Automatic theme detection

    on: {
        pageInit: function () {
            console.log('pageInit');
            pippo();

         //   helloWorld(); // this gives me error Can’t find variable: helloWorld

        }
    },

  // App routes
  routes: routes,
});

function pippo() {

    var globalTheme = (window.localStorage.getItem("dark") );

    console.log("called pippo");
    if (window.localStorage.getItem("dark") == "dark") {

        window.localStorage.setItem("dark", "light");
        console.log("off dark");

        //var self = this;
        //var $html = self.$('html');
        //globalTheme = "dark";
        //$html.removeClass('theme-dark theme-light').addClass('theme-' + globalTheme);
        //self.$setState({ theme: globalTheme });
    } else {

        window.localStorage.setItem("dark", "dark");
        console.log("on dark");

        //var self = this;
        //var $html = self.$('html');
        //globalTheme = "light";
        //$html.removeClass('theme-dark theme-light').addClass('theme-' + globalTheme);
        //self.$setState({ theme: globalTheme });

    }
}