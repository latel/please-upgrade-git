var semverCompare = require("semver");
var gitVersion = (require("child_process")
  .execSync("git --version", { encoding: "utf8" })
  .trim()
  .match(/[\d.]+/) || [])[0];

module.exports = function pleaseUpgradeGit(pkg, opts) {
  opts = opts || {};
  pkg.engines = pkg.engines || {};
  var requiredVersion = pkg.engines.git;
  if (!semver.satisfies(gitVersion, requiredVersion)) {
    if (opts.message) {
      console.error(opts.message(requiredVersion));
    } else {
      console.error(
        pkg.name +
          " requires " +
          requiredVersion +
          " version of git, please upgrade"
      );
    }

    if (opts.hasOwnProperty("exitCode")) {
      process.exit(opts.exitCode);
    } else {
      process.exit(1);
    }
  }
};
