call pathogen#infect()
call pathogen#helptags()
let g:airline_powerline_fonts = 1
set laststatus=2
let g:airline_theme="bubblegum"
set noshowmode
if !exists('g:airline_symbols')
  let g:airline_symbols = {}
endif
let g:airline_symbols.space = "\ua0"
set backspace=indent,eol,start
fixdel
