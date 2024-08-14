# General Aliases
alias ?='cat ~/.bashrcdescription'
alias ??='code ~/.bashrcdescription'
alias !='code ~/.bashrc'
alias c='clear'

alias ..='cd ..'
alias ..1='cd ..'
alias ..2='cd ../..'
alias ..3='cd ../../..'
alias ..l='cd .. && l'
alias ..1l='cd .. && l'
alias ..2l='cd ../.. && l'
alias ..3l='cd ../../.. && l'
alias l='ls -A'
alias lt='ls --human-readable --size -1 -S --classify'
alias doch='sudo "$BASH" -c "$(history -p !!)"'
alias desk='cd ~/Desktop'
alias dir='dir --color=auto'

alias g='git'
alias gs='git status'
alias gf='git fetch --all'
alias gp='git pull'
alias gb='git branch -a'
alias gcm='git checkout main'
alias gl='git log --oneline --graph'

alias ts='bun'
alias i='npm install'
alias ui='npm uninstall'
alias dev='npm run dev'
alias build='npm run build'
alias serve='python3 -m http.server --bind 127.0.0.1 8173'

alias pretty?='npx pretty-quick --check'
alias pretty!='npx pretty-quick'
alias mit='npx mit-license --name "Samuel Braun" --output LICENSE.md'
alias newer='npx npm-upgrade'
alias types='npx typesync'
gen() {
    if [ -z "$1" ] || [ "$1" == "?" ]; then
        echo "Usage: gen [projectname] [template]"
        echo "Examples:"
        echo "  gen ?                   # Help!"
        echo "  gen play                # Open a TS playground"
        echo "  gen test                # ^"
        echo "  gen rm                  # Removes the playground"
        echo "  gen [name]              # Create a Vue & TS project"
        echo "  gen [name] ext          # Create a Chrome Extension"
        echo "  gen [name] [user/temp]  # Create a project with any community template from GitHub (https://github.com/vitejs/awesome-vite#templates)"
    elif [ "$1" == "play" ] || [ "$1" == "test" ]; then
        cd ~/Desktop && mkdir "ts-playground" && cd "ts-playground" && touch index.ts && echo "console.log('Hello, World!');" > index.ts && code .
    elif [ "$1" == "rm" ]; then
        cd ~/Desktop && rm -rf "ts-playground"
    elif [ -z "$2" ]; then
        npm create vite@latest "$1" -- --template vue-ts
    elif [ "$2" == "ext" ]; then
        npx degit mubaidr/vite-vue3-chrome-extension-v3 "$1"
    else
        npx degit "$2" "$1"
    fi
}
alias vite='gen'
alias moon='npx moon'
alias killnode='npx npkill --sort "size"'
alias banger='start "https://www.youtube.com/watch?v=k9ZV9jawS8g"'
alias bm='start "https://webry.com/bm"'