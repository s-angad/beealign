module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      const existing = webpackConfig.ignoreWarnings;
      const list = Array.isArray(existing) ? existing : existing ? [existing] : [];

      // Suppress a known noisy warning from @mediapipe/tasks-vision where the
      // published package references a missing *.map file.
      list.push({
        message: /Failed to parse source map/i,
      });

      webpackConfig.ignoreWarnings = list;

      // CRA uses source-map-loader in `enforce: 'pre'`. Some third-party packages
      // (notably @mediapipe/tasks-vision) reference sourcemaps that aren't shipped,
      // causing noisy warnings. Exclude that package from source-map-loader.
      const rules = webpackConfig?.module?.rules;
      if (Array.isArray(rules)) {
        const mediapipeExclude = /@mediapipe(?:\/|\\)tasks-vision/;
        for (const rule of rules) {
          if (!rule || typeof rule !== 'object') continue;
          if (rule.enforce !== 'pre') continue;

          const loader = typeof rule.loader === 'string' ? rule.loader : '';
          const usesSourceMapLoader = loader.includes('source-map-loader');
          if (!usesSourceMapLoader) continue;

          if (Array.isArray(rule.exclude)) {
            rule.exclude.push(mediapipeExclude);
          } else if (rule.exclude) {
            rule.exclude = [rule.exclude, mediapipeExclude];
          } else {
            rule.exclude = mediapipeExclude;
          }
        }
      }

      return webpackConfig;
    },
  },
};