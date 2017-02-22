set nocompatible
execute pathogen#infect()
syntax on
let g:airline_powerline_fonts = 1
set guifont=Meslo\ LG\ M\ DZ\ Regular\ for\ Powerline:h13
set nocompatible
set tabstop=2
set shiftwidth=2
set expandtab
filetype plugin indent on
set encoding=utf-8   
let g:airline_theme='bubblegum'
set noshowmode
set laststatus=2
set fillchars+=stl:\ ,stlnc:\
set t_RV=
if !exists('g:airline_symbols')
  let g:airline_symbols = {}
endif
let g:airline_symbols.space = "\ua0"

