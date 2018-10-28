function getReposLanguagesStats(reposLanguages = []) {
  const stats = {};
  const countLanguages = o => {
    Object.keys(o).forEach(key => {
      const value = o[key];
      const current = stats[key] || 0;
      stats[key] = current + value;
    });
  };
  reposLanguages.forEach(countLanguages);
  return stats;
}

function getReposFiveBestLanguages(reposLanguages) {
  const stats = [];
  Object.keys(reposLanguages).forEach(key => {
    stats.push({
      name: key,
      lines: reposLanguages[key],
    });
  });
  stats.sort((a, b) => {
    return Number(a.lines) < Number(b.lines);
  });
  return stats.slice(0, 5);
}

module.exports = {
  getReposLanguagesStats,
  getReposFiveBestLanguages,
};
