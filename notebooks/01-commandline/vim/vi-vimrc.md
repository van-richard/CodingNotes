# My dotfile 

- Create a `.vimrc` file by `vi ~/.vimrc` 

```bash
" line numbers
set number

" syntax highlight
syntax on

" ignore case in search
set ignorecase
set smartcase
set incsearch
set lazyredraw
set magic
set showmatch
set mat=2

" Disable highlight when <leader><cr> is pressed
" "map <silent> <leader><cr> :noh<cr>
set nohlsearch

""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
"""" file management       
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

" start at last positoin
au BufReadPost * if line("'\"") > 1 && line("'\"") <= line("$") | exe "normal! g'\"" | endif


" text/tab/index
set expandtab           " use spaces
set shiftwidth=4        " 1 tab = 4 spaces
set tabstop=4
set softtabstop=4       " 
set lbr
set tw=500              " line break @ 500 characters
set ai " auto indent 
set si " smart indent
set wrap " wrap lines

" filetype plugins
filetype plugin indent on

" correct backspace
set backspace=eol,start,indent
set whichwrap+=<,>,h,l

" auto update
set autoread
au FocusGained, BufEnter * silent? checktime

" spell check
map <leader>ss :setlocal spell!<cr>

" files/backup/undo
set noswapfile
" set nobackup
set nowb

" auto close 
inoremap " ""<left>
inoremap ' ''<left>
inoremap ( ()<left>
inoremap [ []<left>
inoremap { {}<left>
inoremap {<CR> {<CR>}<ESC>O
inoremap {;<CR> {<CR>};<ESC>O

" turn off sound
set noerrorbells
set novisualbell
set t_vb=
set tm=500
if has("gui_macvim")
        autocmd GUIEnter * set vb t_vb=
endif
