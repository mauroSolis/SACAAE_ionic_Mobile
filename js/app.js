angular.module('ionicApp', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('tabs', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })
    .state('tabs.home', {
      url: "/home",
      views: {
        'home-tab': {
          templateUrl: "templates/home.html",
          controller: 'HomeTabCtrl'
        }
      }
    })
    .state('tabs.facts', {
      url: "/facts",
      views: {
        'home-tab': {
          templateUrl: "templates/facts.html"
        }
      }
    })
    .state('tabs.proyectos', {
      url: "/proyectos",
      views: {
        'home-tab': {
          templateUrl: "templates/proyectos.html"
        }
      }
    })
  .state('tabs.detalle_proy', {
      url: "/detalle_proy",
      views: {
        'home-tab': {
          templateUrl: "templates/detalles_proyecto.html"
        }
      }
    })
    .state('tabs.comisiones', {
      url: "/comisiones",
      views: {
        'home-tab': {
          templateUrl: "templates/comisiones.html"
        }
      }
    })
    .state('tabs.detalle_com', {
      url: "/detalle_com",
      views: {
        'home-tab': {
          templateUrl: "templates/detalles_comision.html"
        }
      }
    })
    .state('tabs.facts2', {
      url: "/facts2",
      views: {
        'home-tab': {
          templateUrl: "templates/facts2.html"
        }
      }
    })
  .state('tabs.oferta', {
      url: "/oferta",
      views: {
        'home-tab': {
          templateUrl: "templates/oferta.html"
        }
      }
    })
    .state('tabs.detalle_oferta', {
      url: "/detalle_oferta",
      views: {
        'home-tab': {
          templateUrl: "templates/detalles_oferta.html"
        }
      }
    })
    .state('tabs.about', {
      url: "/about",
      views: {
        'about-tab': {
          templateUrl: "templates/about.html"
        }
      }
    })
    .state('tabs.navstack', {
      url: "/navstack",
      views: {
        'about-tab': {
          templateUrl: "templates/nav-stack.html"
        }
      }
    })
    .state('tabs.contact', {
      url: "/contact",
      views: {
        'contact-tab': {
          templateUrl: "templates/contact.html"
        }
      }
    });


   $urlRouterProvider.otherwise("/tab/home");

})

.controller('HomeTabCtrl', function($scope) {
  console.log('HomeTabCtrl');
});