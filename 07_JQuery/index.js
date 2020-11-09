const app = {

   buttons: {
      hide: $('#hide'),
      peek: $('#peek-a-boo'),
   },

   squares: [
      $('.sq1'),
      $('.sq2'),
      $('.sq3'),
      $('.sq4'),
      $('.sq5')    
   ],

   colors: [
      'lightskyblue',
      'lightgreen',
      'mediumpurple',
      'peachpuff'      
   ],

   initialize: function() {
      app.buttons.peek.toggle();
      app.buttons.hide.click(app.hideSquares);
      app.buttons.peek.click(app.peek);
      for(let square in app.squares){
         app.squares[square].click(function() {
            app.setRandomColor(app.squares[square]);
         });
      }
      
      console.log("initialized");
   },

   switchButtons: function(buttonsArray = app.buttons) {
      for (button in buttonsArray) {
         buttonsArray[button].toggle();
      }
   },

   hideSquares: function() {
      let width = 80;

      for (let sq in app.squares) {
         if(sq == 0) sq++;
         else {
            app.squares[sq].animate({right: `${width}px`}, 'fast');
            width += 80;
         };
      };
      console.log("squares hidden");
      app.switchButtons();
   },

   getRandomIntArray: function(arrayLength){
      let intArray = [];

      for (let index = 0; index < arrayLength; index ++){
         let randNum = Math.floor((Math.random()*arrayLength));
         let check = intArray.includes(randNum);
         if (check) index--;
         else intArray.push(randNum);
      }
      
      return intArray;
   },

   getRandomColor: function() {
      let letters = '0123456789ABCDEF';
      let color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
   },

   setRandomColor: function(item){
      item.css("background", app.getRandomColor());
   },

   setColors: function(shapeArray = app.squares, colorsArray = app.colors) {
      const randomArray = app.getRandomIntArray(shapeArray.length - 1);
      console.log(randomArray);

      for (let shape in shapeArray){
         if (shape == 0) shape++;
         else shapeArray[shape].css("background", app.colors[randomArray[shape-1]]);
      }
   },

   peek: function() {
      let width = 0;
      
      app.setColors();

      for (sq in app.squares) {
         if (sq === 0) shape ++;
         else app.squares[sq].animate({right: `${width}px`}, 'fast');
      };
      
      console.log("peeked");
      app.switchButtons(app.buttons);

   }

}

$(app.initialize);