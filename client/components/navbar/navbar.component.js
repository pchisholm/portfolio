'use strict';
/* eslint no-sync: 0 */

import angular from 'angular';
import * as THREE from 'three/build/three.min';

export class NavbarComponent {
  menu = [{
    title: 'Home',
    state: 'main'
  }];
  isCollapsed = true;

  constructor(Auth, $state, $window, $document, $mdSidenav, $mdPanel, post) {
    'ngInject';
    this.isAdmin = Auth.isAdminSync;
    this.$state = $state;
    this.$window = $window;
    this.$document = $document;
    this.$mdSidenav = $mdSidenav;
    this.$mdPanel = $mdPanel;
    this.post = post;
    this.recentPosts = [];
    this.myDate = new Date();
    this.showMobileMenu = false;
  }//End constructor

  $onInit() {
    let limit = 3;
    if (this.$window.innerHeight > 700) limit = 5;

    this.post.getRecent(limit).then(res => {
      this.recentPosts = res.data;
    }, err => {
      console.log(err);
      this.initError = true;
    });
    console.log(this.$window)

    var frag_view = document.getElementById("pixelate");
    var scene, camera, clock, renderer, light, geometry,
        material, geom, geom2, taurusMesh, taurusMesh2, uniforms;

    init();
    animate();

    function init() {
      const vertexShader=`
        varying vec2 vUv;
        void main()
        {
          vUv = uv;
          vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
          gl_Position = projectionMatrix * mvPosition;
        }`;

      const fragShader=`
        uniform float time;
        uniform vec2 resolution;
        varying vec2 vUv;

        void main( void ) {
          vec2 position = vUv;
          float color = 0.0;
          color += sin( position.x * cos( time / 15.0 ) * 80.0 ) + cos( position.y * cos( time / 15.0 ) * 10.0 );
          color += sin( position.y * sin( time / 10.0 ) * 40.0 ) + cos( position.x * sin( time / 25.0 ) * 40.0 );
          color += sin( position.x * sin( time / 5.0 ) * 10.0 ) + sin( position.y * sin( time / 35.0 ) * 80.0 );
          color *= sin( time / 10.0 ) * 0.5;
          gl_FragColor = vec4( vec3( color, color * 0.5, sin( color + time / 3.0 ) * 1.75 ), 1.0 );
        }`;

        scene = new THREE.Scene(), clock = new THREE.Clock();
        // scene.fog = new THREE.Fog( 0xcce0ff, 5000, 5 );

        camera = new THREE.PerspectiveCamera(150, 319.5 / 50, 20, 10000);
        camera.position.z = 1000;

        geom = new THREE.TorusKnotGeometry(250, 1500, 300, 32, 64);
        geom2 = new THREE.TorusKnotGeometry(250, 1500, 600, 32, 64);

        uniforms = {
          time:       {value: 1.0},
          resolution: {value: new THREE.Vector2()}
        };

        material = new THREE.ShaderMaterial({
          uniforms: uniforms,
          vertexShader: vertexShader,
          fragmentShader: fragShader
        });

        taurusMesh = new THREE.Mesh(geom, material);
        taurusMesh = new THREE.Mesh(geom2, material);
        scene.add(taurusMesh);
        scene.add(taurusMesh2);

        renderer = new THREE.WebGLRenderer({alpha: true});
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize(319.5, 50);

        frag_view.appendChild(renderer.domElement);
    }

    function animate() {
        requestAnimationFrame(animate);

        taurusMesh.rotation.x -= 0.000001;
        taurusMesh.rotation.y -= 0.000001;
        taurusMesh.rotation.z -= 0.0001;

        var delta = clock.getDelta();
        uniforms.time.value += delta * 0.4;

        renderer.render( scene, camera );
    }
  }//End onInit

  //Toggle sidenav
  openLeftMenu() {
    this.$mdSidenav('left').toggle();
  };//End openLeftMenu
}//End class

export default angular.module('directives.navbar', ['ngMaterial'])
.component('navbar', {
  template: require('./navbar.html'),
  controller: NavbarComponent,
  controllerAs: 'NavCtrl'
})
.name;
