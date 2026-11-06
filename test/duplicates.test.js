const { test } = require('node:test');
const assert = require('node:assert');
const { isDuplicate } = require('../tools/duplicates');

test('pages with different titles are not duplicates', () => {
  assert.strictEqual(isDuplicate({ title: 'Home' }, { title: 'About' }), false);
});

test('pages with the same title are duplicates', () => {
  assert.strictEqual(isDuplicate({ title: 'Home' }, { title: 'Home' }), true);
});

test('missing page arguments return false', () => {
  assert.strictEqual(isDuplicate(null, { title: 'Home' }), false);
});
