    // *** App Academy ***
// Create a game.PaddleEntity
game.PaddleEntity = me.ObjectEntity.extend ({
    init:function (x, y, settings) {
        settings.image = "paddle";
        settings.spritewidth="48";
        settings.spritehieght="16";
        
        this.parent(x, y, settings);
        
        this.setVelocity(2, 0);
    },
            
    update: function() {
        if(me.input.isKeyPressed("left")) {
            this.vel.x -= this.accel.x * me.timer.tick; 
        }
        else if(me.input.isKeyPressed("right")) {
            this.vel.x += this.accel.x * me.timer.tick;
        }
        else {
            this.vel.x =0;
        }

        this.updateMovement();

        if(this.vel.x !== 0) {
            return true;
        }
    }
});
       

game.BallEntity = me.ObjectEntity.extend ({
    init:function (x, y, settings) {
        settings.image = "ball";
        settings.spritewidth="16";
        settings.spritehieght="16";
        this.parent(x, y, settings);
        this.setVelocity(2, 2);
        this.vel.x +=this.accel.x * me.timer.tick;
        this.vel.y +=this.accel.x * me.timer.tick; 
        
        this.collidable = true; 
    },
    update: function() {
        this.updateMovement();
        return true; 
    }});


game.BrickEntity = me.ObjectEntity.extend ({
    init:function (x, y, settings) {
        settings.image = "brick";
        settings.spritewidth="32";
        settings.spritehieght="16";
        this.parent(x, y, settings);
   
        
        this.collidable = true; 
    },
    update: function() {
        this.updateMovement();
        return true; 
    }});
