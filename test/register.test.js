const register = require('./register.fn.js')
let config = require('./config.register.js');

describe('Register', () => {
    jest.setTimeout(config.timeout);

    it('should register user correctly', () => {
        config.data.id = 22;
        return register(config);
    });

});