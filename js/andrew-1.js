if (typeof registerPaint !== 'undefined') {
    class AndrewOne {
      static get inputProperties() {
        return ['--direction'];
      }
  
      getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
  
      paint(ctx, size, properties) {

        const direction = Boolean(Number(properties.get('--direction')));

        if (direction) {
            ctx.fillStyle = 'red';
            ctx.fillRect(0, 0, size.width, size.height / 3 );
    
            ctx.fillStyle = 'blue';
            ctx.fillRect(0, size.height / 3 * 2, size.width, size.height / 3 );
    
            ctx.fillStyle = 'white';
            ctx.fillRect(0, size.height / 3 * 1, size.width, size.height / 3 );
        } else {
            ctx.fillStyle = 'red';
            ctx.fillRect(0, 0, size.width / 3, size.height );

            ctx.fillStyle = 'blue';
            ctx.fillRect(size.width / 3 * 2, 0, size.width / 3, size.height );

            ctx.fillStyle = 'white';
            ctx.fillRect( size.width / 3 * 1, 0,size.width / 3, size.height );
        }


        
            

        //   }
        // }
      }
  
    }
  
    registerPaint('andrew-1', AndrewOne);
  }