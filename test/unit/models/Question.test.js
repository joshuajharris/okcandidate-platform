'use strict';
/* global describe, it */

const assert = require('assert');

describe('Question Model', () => {
    it('should exist', () => {
        assert(global.app.api.models['Question']);
    });
});
