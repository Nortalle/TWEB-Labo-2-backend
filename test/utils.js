const { expect } = require('chai');
const utils = require('../src/utils');

describe('Github utils', () => {
  it('should calculate languages stats', () => {
    const languages = [
      { CSS: 1, Javascript: 2, MakeFile: 4 },
      {},
      { CSS: 2 },
      { Javascript: 1 },
    ];

    const expected = {
      CSS: 3,
      Javascript: 3,
      MakeFile: 4,
    };

    expect(utils.getReposLanguagesStats(languages)).to.eql(expected);
  });

  it('should give the five best languages', () => {
    const languages = {
      CSS: 1,
      Javascript: 6,
      Makefile: 5,
      Guidoux: 3,
      CKevinSS: 2,
      Paul: 7,
    };

    const expected = [
      { lines: 7, name: 'Paul' },
      { lines: 6, name: 'Javascript' },
      { lines: 5, name: 'Makefile' },
      { lines: 3, name: 'Guidoux' },
      { lines: 2, name: 'CKevinSS' },
    ];

    expect(utils.getReposFiveBestLanguages(languages)).to.eql(expected);
  });
});
