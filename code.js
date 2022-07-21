var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["d824b666-3133-4637-addb-a9d3e351f7ba","19b7bb16-011d-4482-954c-d4cb4509489e","124794f0-ccc6-4910-b6bd-a2c5eb699db8","f96902e8-9148-419e-a4c6-9eafc3e120ef","7beb4845-8d08-4293-a3e5-9eb199da7624","78291e6c-4249-4f0f-a960-7178ac296b84"],"propsByKey":{"d824b666-3133-4637-addb-a9d3e351f7ba":{"name":"bubbly","sourceUrl":"assets/api/v1/animation-library/gamelab/yl79lY115MZwICn31CotYGmQk8drYotK/category_faces/bubbly.png","frameSize":{"x":82,"y":130},"frameCount":4,"looping":true,"frameDelay":2,"version":"yl79lY115MZwICn31CotYGmQk8drYotK","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":82,"y":520},"rootRelativePath":"assets/api/v1/animation-library/gamelab/yl79lY115MZwICn31CotYGmQk8drYotK/category_faces/bubbly.png"},"19b7bb16-011d-4482-954c-d4cb4509489e":{"name":"bat","sourceUrl":"assets/api/v1/animation-library/gamelab/ZDqxOIsPUxo1v0QEjzxvWOiy1DevnaVu/category_animals/bat.png","frameSize":{"x":400,"y":217},"frameCount":1,"looping":true,"frameDelay":2,"version":"ZDqxOIsPUxo1v0QEjzxvWOiy1DevnaVu","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":217},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ZDqxOIsPUxo1v0QEjzxvWOiy1DevnaVu/category_animals/bat.png"},"124794f0-ccc6-4910-b6bd-a2c5eb699db8":{"name":"bat_1","sourceUrl":"assets/api/v1/animation-library/gamelab/ZDqxOIsPUxo1v0QEjzxvWOiy1DevnaVu/category_animals/bat.png","frameSize":{"x":400,"y":217},"frameCount":1,"looping":true,"frameDelay":2,"version":"ZDqxOIsPUxo1v0QEjzxvWOiy1DevnaVu","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":217},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ZDqxOIsPUxo1v0QEjzxvWOiy1DevnaVu/category_animals/bat.png"},"f96902e8-9148-419e-a4c6-9eafc3e120ef":{"name":"bat_2","sourceUrl":"assets/api/v1/animation-library/gamelab/ZDqxOIsPUxo1v0QEjzxvWOiy1DevnaVu/category_animals/bat.png","frameSize":{"x":400,"y":217},"frameCount":1,"looping":true,"frameDelay":2,"version":"ZDqxOIsPUxo1v0QEjzxvWOiy1DevnaVu","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":217},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ZDqxOIsPUxo1v0QEjzxvWOiy1DevnaVu/category_animals/bat.png"},"7beb4845-8d08-4293-a3e5-9eb199da7624":{"name":"forest","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"WqQcVh_5QmfpY6F0nxU4WZwgRpj7HTOO","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/7beb4845-8d08-4293-a3e5-9eb199da7624.png"},"78291e6c-4249-4f0f-a960-7178ac296b84":{"name":"forest_copy_1","sourceUrl":"assets/api/v1/animation-library/gamelab/6M6MI5k464mg5p8h89sU8tyvtAbANGea/category_backgrounds/meadow.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"6M6MI5k464mg5p8h89sU8tyvtAbANGea","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/6M6MI5k464mg5p8h89sU8tyvtAbANGea/category_backgrounds/meadow.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


var b = createSprite(200,200);
b.setAnimation("forest")
var goal;
var mortes;

var hero = createSprite(180,363,20,20);
hero.setAnimation("bubbly");
hero.scale=.5;

var enemy = createSprite(360,293,10,10);
var enemy2 = createSprite(25,206,10,10);
var enemy3 = createSprite(365,81,10,10);
enemy.setAnimation("bat");
enemy2.setAnimation("bat_1");
enemy3.setAnimation("bat_2");
enemy.scale=.2;
enemy2.scale=.2;
enemy3.scale=.2;

enemy.velocityX=-10;
enemy2.velocityX=10;
enemy3.velocityX=-10;
var net = createSprite(200,6,200,20);
net.shapeColor="red";

createEdgeSprites();
function draw() {
background("forest");

enemy.bounceOff(leftEdge);
enemy.bounceOff(rightEdge);
enemy2.bounceOff(leftEdge);
enemy2.bounceOff(rightEdge);
enemy3.bounceOff(leftEdge);
enemy3.bounceOff(rightEdge);
hero.bounceOff(bottomEdge);
hero.bounceOff(topEdge);
hero.bounceOff(rightEdge);
hero.bounceOff(leftEdge);

if(keyDown("w")){
hero.y=hero.y+-4;
}
if (keyDown("d")){
  hero.x=hero.x+4;
}
if(keyDown("a")){
  hero.x=hero.x+-4
}

if(keyDown("s")){
  hero.y=hero.y+4
}

if(hero.isTouching(enemy)|| hero.isTouching(enemy2)|| hero.isTouching(enemy3)){
  playSound("assets/category_achievements/bubbly_game_achievement_sound.mp3")
  hero.x=180
  hero.y=363
  mortes = mortes+1
}
if(hero.isTouching(net)){
  playSound("assets/category_achievements/vibrant_game_game_gold_tresure_chest_open.mp3")
  hero.x=180
  hero.y=363
  goal=goal+1
}
textSize(20);
stroke(0)
fill(0);
text("Objetivo:"+goal,340,29);




drawSprites() ; 
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
