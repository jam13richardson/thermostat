class Thermostat {

constructor(tempreture) {
    this.tempreture = 20;
    this.powerSavingMode = false;
}  

    getTemperature() {
        return this.tempreture;
    }

    up() {
        return this.tempreture = this.tempreture + 1;
    }

    down() {
        return this.tempreture = this.tempreture - 1;
    }

    setPowerSavingMode(mode) {
        this.powerSavingMode = mode;
        if (this.powerSavingMode === true && this.tempreture > 25) {
            return this.tempreture = 25

        } else if (this.powerSavingMode === false) {
           return this.tempreture = Math.max(this.tempreture, 32)
        }
    }
    
    reset() {
        return this.tempreture = 20;
    }

};

module.exports = Thermostat;

//const Thermostat = require('./thermostat');
// const thermostat1 = new Thermostat();