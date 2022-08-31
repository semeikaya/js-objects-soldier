const soldier = {
    name: 'Gigachad',
    health: 10,
    weapon:{
        model: 'Лук',
        numberofrounds: 30,
    } ,
    ammo: 3,
    fire: function () {
        if (this.weapon.numberofrounds === 0) {
            console.log("обойма пуста. Перезарядитесь");
        }else{this.weapon.numberofrounds -= 1
            console.log('бах-бах');}
        
    },
    reload: function () {
        if (this.ammo === 0 && this.weapon.numberofrounds < 30) {
            console.log("не осталось припасов");
        } else if (this.weapon.numberofrounds === 30) {
            console.log("полная обойма");
        }
        else {
            this.weapon.numberofrounds = 30
            this.ammo -= 1
            console.log('перезарядка');
        }
    },
    hurt: function () {
        if (this.health === 0) {
            console.log('mission failed');
        }else{
            this.health -= 1
        }
    
    } ,
}
