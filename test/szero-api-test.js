'use strict';

const test = require('tape');
const path = require('path');
const szero = require('../index');

test('should export report function', (t) => {
  t.equal(typeof szero.report, 'function', 'there should be a report function');
  t.end();
});

test('should return a promise', (t) => {
  const dir = path.join(__dirname, './test_project');
  const options = {};
  const szeroreturn = szero.report(dir, options);

  t.equal(szeroreturn instanceof Promise, true, 'should return a promise');
  t.end();
});

test('should return some info', (t) => {
  const dir = path.join(__dirname, '../sample_project');
  const options = {};
  szero.report(dir, options).then((jsonReport) => {
    console.log(jsonReport);
    t.equal(Object.keys(jsonReport).length, 5, 'should have 5 keys');
    t.true(jsonReport.groups, 'should have a groups object');
    t.true(jsonReport.dependencies, 'should have a dependencies object');
    t.true(jsonReport.declarations, 'should have a declarations object');
    t.true(jsonReport.totals, 'should have a totals object');
    t.true(jsonReport.unused, 'should have a unused object');
    t.end();
  });
});