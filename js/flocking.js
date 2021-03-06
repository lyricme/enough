var flocking = new Page( 'flocking' );

flocking.addToInitArray( function(){

  this.mani = true;
  this.sol  = false;
  
  // Position relative to previous page
  this.position.set(  2000 , -2000 , 0 );


  this.sectionParams.push({
    cameraPosition: new THREE.Vector3(  2000  , 2000 , 500 ) ,
    textChunk:[
      "Mani could not believe that he had lost his friends. It was too much to bear. Too much to remember the love that he felt for them, that he felt for Sol.",
      "","",
      "Around him small ribbons flocked, and though he found their movement soothing, it could not overcome his heartbreak."
    ].join("\n" ), 
  });

  this.sectionParams.push({
    cameraPosition: new THREE.Vector3( -200 , 800 ,1400 )  ,
    textChunk:[
      "The small ribbons of light moved gently around Mani, but he could only imagine them as ghosts of his glimmering friends. As angelic as the ghosts' song seemed, it was not enough, and Mani resigned himself to the well of sorrow.",
      "","",
      "Mani was ready for the quiet to come. For this meloncholy fantasy to finally end."
    ].join("\n" ),

  });

  this.sectionParams.push({
    cameraPosition: new THREE.Vector3(  0 , 400 , 1000 ) ,
    textChunk:[
      "He could feel the darkness inch in around him, winding its icy grip around the deepest part of his being.",
      "","",
      "As he swam, filled with anguish, Mani fondly remembered the crystals, tendrils and tree. He thought of Sol and her compassionate movements, and his friends circling around him. Oh how he missed them, how he wish he had cherished his time in their presence."
    ].join("\n" ),
    start:function(){
      G.tmpV3.set( 0 , 100 , 0 );
      G.iPlane.position.copy( this.page.position.clone().add(G.tmpV3 ));
      G.tmpV3.set( 0 , 101 , 0 )
      G.iPlane.lookAt( this.page.position.clone().add( G.tmpV3 ) );
    },
    transitionOut:function(){
      G.tmpV3.set( 0 ,  200 , 0 );
      G.iPlane.position.copy( this.page.position.clone().add(G.tmpV3 ));
      G.tmpV3.set( 0 , 209 , 0 )
      G.iPlane.lookAt( this.page.position.clone().add( G.tmpV3 ) )
    }
  });

  
  this.sectionParams.push({
    cameraPosition: new THREE.Vector3(   1000 , 2000 , 1000 ) ,
    textChunk:[
      "But the quiet did not come, and Mani hoped for something more.",
      "","",
      "Maybe it was because he could feel some presence near, or just because he refused to believe that this sorrow was all there was, but Mani decided to keep moving.",
      "","",
      "With every ounce of remaining light in his broken soul, Mani swam onwards."
    ].join("\n" ), 
  });


  this.iPlaneDistance = 2000;

  this.audioArray = [
  
    'flocking1',
    'flocking2',
    'flocking3',
    'flocking4',
    'flocking5',
    'flocking6',
    'flocking7',
    'flocking8',
    'flocking9',
    'flocking10',

  ]

}.bind( flocking ) );


// Need to load at least 1 thing
flocking.addToInitArray( function(){
  
  var f = 'img/extras/';
  this.loadTexture( 'ribbon' , f + 'ribbon.png');
  var f = 'img/normals/';
  this.loadTexture( 'ribbonNorm' , f + 'ribbon.jpg');

var f = 'img/matcap/';
  this.loadTexture( 'matcapMetal' , f + 'metal.jpg');


  var f = 'audio/pages/flocking/';

  for( var i=0; i< this.audioArray.length; i++ ){

    var a = this.audioArray[i]
    this.loadAudio( a , f + a + '.mp3' );


  }


  var f = 'pages/flocking/';

  this.loadShader( 'flocking' , f + 'ss-flocking' , 'simulation' );
  this.loadShader( 'fish' , f + 'fs-fish'  , 'fragment' );
  this.loadShader( 'fish' , f + 'vs-fish'  , 'vertex' );
  this.loadShader( 'predatorDebug' , f + 'fs-predatorDebug' , 'fragment' );
  this.loadShader( 'predatorDebug' , f + 'vs-predatorDebug' , 'vertex' );
  this.loadShader( 'fishDebug' , f + 'fs-fishDebug'  , 'fragment' );
  this.loadShader( 'fishDebug' , f + 'vs-fishDebug'  , 'vertex' );
  this.loadShader( 'eel' , f + 'fs-eel' , 'fragment' );
  this.loadShader( 'eel' , f + 'vs-eel' , 'vertex' );
  this.loadShader( 'ribbon' , f + 'fs-ribbon'  , 'fragment' );
  this.loadShader( 'ribbon' , f + 'vs-ribbon'  , 'vertex' );

  //this.loadShader( 'tube' , f + 'fs-tube' , 'fragment' );
  //this.loadShader( 'tube' , f + 'vs-tube' , 'vertex' );

  this.loadShader( 'coralEmanator' , f + 'fs-coralEmanator' , 'fragment' );
  this.loadShader( 'coralEmanator' , f + 'vs-coralEmanator' , 'vertex' );

  this.loadShader( 'coralFloor' , f + 'fs-coralFloor' , 'fragment' );
  this.loadShader( 'coralFloor' , f + 'vs-coralFloor' , 'vertex' );

  this.loadShader( 'coral' , f + 'fs-coral' , 'fragment' );
  this.loadShader( 'coral' , f + 'vs-coral' , 'vertex' );




}.bind( flocking ) );


flocking.addToStartArray( function(){

  /*G.position.copy( this.position );
  G.camera.position.copy( this.cameraPos );
  G.camera.lookAt( this.position );//= 1000;*/

  //G.iPlaneDistance = this.iPlaneDistance;
  
  G.iPlane.faceCamera = false;
  
  G.tmpV3.set( 0 , 200 , 0 );

  G.iPlane.position.copy( this.position.clone().add(G.tmpV3 ));
  G.tmpV3.set( 0 , 201 , 0 )
  G.iPlane.lookAt( this.position.clone().add( G.tmpV3 ) );

}.bind( flocking ));


flocking.addToStartArray( function(){


  this.looper = new Looper( G.audio , G.timer , {

    beatsPerMinute: 77,
    beatsPerMeasure: 4,
    measuresPerLoop: 8

  });

  for( var i = 0; i < this.audioArray.length; i++ ){

    var audio = G.AUDIO[ this.audioArray[i] ];
    audio.reconnect( this.gain );

    this.looper.everyLoop( function(){ this.play() }.bind( audio ) );

  }

  this.looper.start();


}.bind( flocking ) );


flocking.addToStartArray( function(){

  var coralPositions = [];

  for( var i = 0; i < this.audioArray.length; i++ ){

    var z = Math.sin( Math.PI * 2 * i / this.audioArray.length); 
    var x = Math.cos( Math.PI * 2 * i / this.audioArray.length);
    //(i / this.audioArray.length);
    coralPositions[ i ] = [
      x * 10, //(x-.5) * 20,
      ( Math.random() )+1,
      z * 10
    ]


  }
  this.coral = [];


  for( var i = 0; i < coralPositions.length; i++ ){

  // TODO: pull out into Coral.js
    var cp = coralPositions[i]
    var p = new THREE.Vector3( cp[0] , cp[1] , cp[2] );
    p.multiplyScalar( 50 );

    console.log( p );
    var audio = G.AUDIO[ this.audioArray[i] ];
    var coral = new Coral( this , audio , p );  
    
    this.coral.push( coral );

    coral.deactivate();
  }


  this.flock = new Flock( this.coral , {
    pos: this.scene.position,
    size: 16
  });

  this.flock.activate( this.scene );

  this.floor = new CoralFloor( this.coral );
  this.scene.add( this.floor.body );
  /*var debugScene = this.flock.soul.createDebugScene();
  debugScene.scale.multiplyScalar( 20. );
  this.scene.add( debugScene );*/

}.bind( flocking ) );




flocking.addToAllUpdateArrays( function(){

  this.flock.update();
    
  for( var i = 0; i < this.coral.length; i++ ){
    this.coral[i].update();
  }


}.bind( flocking ));


flocking.addToDeactivateArray( function(){

  G.iPlane.faceCamera = true;

}.bind( flocking) );

flocking.addToEndArray( function(){

  this.looper.end();

}.bind( flocking) );


