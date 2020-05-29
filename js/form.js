class Form {
    constructor(){
        this.button = createButton('play');
        this.greeting = createElement('h3');
        this.input = createInput("any name");

    }
    hide(){
        this.button.hide();
        this.input.hide();
        this.greeting.hide();
    }
    display(){
        var title = createElement('h2');
        title.html("Car Racing game");
        title.position(displayWidth/2-80,10);
       
       this.input.position(displyWidth/2-40,displayHeight/2-80);
       this.button.position(displayWidth/2+30,displayHeight/2);
        this.button.mousePressed((data)=>{
           this.input.hide();
           this.button.hide();
        player.name =this.input.value();
            playerCount++;
            player.index=playerCount;
            
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("hello "+ player.name);
           this.greeting.position(displayWidth/2-70,displayHeight/4);
            
        })
    }

}