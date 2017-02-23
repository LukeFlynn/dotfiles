exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    css: `
      ${config.css || ''}
      .tabs_title, .tab_active {
        background-color: transparent !important;
      }
    `
  });
}
