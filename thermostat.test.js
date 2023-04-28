const Thermostat = require('./thermostat');

describe('Thermostat', () => {

    test('constructor sets temperature', () => {
        const thermostat = new Thermostat(20);
        expect(thermostat.getTemperature()).toBe(20);
    });

    test('getTemperature returns current temperature', () => {
        const thermostat = new Thermostat(20);
        expect(thermostat.getTemperature()).toBe(20);
    });

    test('up increases tempreture by 1', () => {
        const thermostat = new Thermostat(20);
        expect(thermostat.up()).toBe(21);
    })

    test('down decreases tempreture by 1', () => {
        const thermostat = new Thermostat(20);
        expect(thermostat.down()).toBe(19);
    })

    test('should set powerSavingMode to true when passed true', () => {
        const thermostat = new Thermostat(20);
        thermostat.setPowerSavingMode(true);
        expect(thermostat.powerSavingMode).toBe(true);
      });
    
      test('should set powerSavingMode to false when passed false', () => {
        const thermostat = new Thermostat(20);
        thermostat.setPowerSavingMode(false);
        expect(thermostat.powerSavingMode).toBe(false);
      });
    
      test('should limit temperature to 25 when powerSavingMode is turned on and temperature is above 25', () => {
        const thermostat = new Thermostat(20);
        thermostat.tempreture = 26;
        thermostat.setPowerSavingMode(true);
        expect(thermostat.tempreture).toBe(25);
      });
    
      test('should set temperature to 32 when powerSavingMode is turned off and temperature is below 32', () => {
        const thermostat = new Thermostat(20);
        thermostat.tempreture = 30;
        thermostat.setPowerSavingMode(false);
        expect(thermostat.tempreture).toBe(32);
      });
    
      test('should not change temperature when powerSavingMode is turned off and temperature is above 32', () => {
        const thermostat = new Thermostat(20);
        thermostat.tempreture = 33;
        thermostat.setPowerSavingMode(false);
        expect(thermostat.tempreture).toBe(33);
      });

      test('it should reset the tempreture back to 20', () => {
        const thermostat = new Thermostat(20);
        thermostat.up = 21;
        expect(thermostat.reset()).toBe(20);
      })
});