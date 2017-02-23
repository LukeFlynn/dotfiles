module.exports = {
  config: {
    base16: {
      scheme: 'railscasts'
    },
    hyperBorder: {
      animate: true,
      borderWidth: '3px',
      borderColors: ['#3498db', 'random', '#2ecc71', '#f1c40f', 'random'],
    },
    fontSize: 13,
    fontFamily: '"Meslo LG M DZ for Powerline"',
    cursorColor: 'rgba(248,28,229,0.8)',
    cursorShape: 'BEAM',
    foregroundColor: '#fff',
    backgroundColor: '#000',
    borderColor: '#333',
    css: '',
    termCSS: '',
    windowSize: [873, 678],
    showHamburgerMenu: '',
    showWindowControls: 'true',
    padding: '9px 8px 2px 8px',
    colors: {
      black: '#000000',
      red: '#ff0000',
      green: '#33ff00',
      yellow: '#ffff00',
      blue: '#0066ff',
      magenta: '#cc00ff',
      cyan: '#00ffff',
      white: '#d0d0d0',
      lightBlack: '#808080',
      lightRed: '#ff0000',
      lightGreen: '#33ff00',
      lightYellow: '#ffff00',
      lightBlue: '#0066ff',
      lightMagenta: '#cc00ff',
      lightCyan: '#00ffff',
      lightWhite: '#ffffff'
    },
    shell: '/bin/zsh',
    shellArgs: ['--login'],
    env: {},
    bell: 'false',
    copyOnSelect: true
  },

  plugins: [
    'hypersixteen',
    'hyperborder',
    'hyper-blink',
  ],
  localPlugins: [
    'hyper-baralways',
  ]
};
