---
title: "My VS Code Setup"
description: Walking through and explaining  my configuration files for Visual Studio Code.
publicationDate: 2024/08/06
---

## Extensions

- [Apc Customize UI++](https://marketplace.visualstudio.com/items?itemName=drcika.apc-extension): allows for more customization options like hiding the titlebar.
- [Astro](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode): language support for Astro
- [Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight): highlighted color codes
- [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens): highlight errors and warnings
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint): ESLint JavaScript
- [Git Blame](https://marketplace.visualstudio.com/items?itemName=waderyan.gitblame): see git blame info in the status bar (not inline!)
- [Highlight on Copy](https://marketplace.visualstudio.com/items?itemName=mguellsegarra.highlight-on-copy): briefly flash the copied content
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer): launch a development local server
- [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare): launch a development server accessible on the internet
- [MDX](https://marketplace.visualstudio.com/items?itemName=unifiedjs.vscode-mdx): language support for MDX
- [npm Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense): autocompletes npm imports
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode): code formatter
- [Pretty TypeScript Errors](https://marketplace.visualstudio.com/items?itemName=yoavbls.pretty-ts-errors): makes TypeScript errors more human-friendly
- [Prisma](https://marketplace.visualstudio.com/items?itemName=Prisma.prisma): language support for Prisma
- [Remote - SSH](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh)
- [Remote - SSH: Editing Configuration Files](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh-edit)
- [Remote Explorer](https://marketplace.visualstudio.com/items?itemName=ms-vscode.remote-explorer)
- [Supermaven](https://marketplace.visualstudio.com/items?itemName=supermaven.supermaven): free and fast copilot alternative
- [TabOut](https://marketplace.visualstudio.com/items?itemName=albert.TabOut): tab out of quotes, brackets, etc
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss): language support for Tailwind CSS
- [Thunder Client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client): rest api client
- [ttl-theme](https://marketplace.visualstudio.com/items?itemName=trevortylerlee.ttl-theme): color theme
- [vscode-icons](https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons)

---

```json title="settings.json"
{
  // extensions
  "apc.electron": {
    "titleBarStyle": "customButtonsOnHover"
  },
  "color-highlight.markRuler": false,
  "gitblame.statusBarMessageFormat": "Changed by ${author.name} (${time.ago})",
  "highlightOnCopy.timeout": 50,
  "highlightOnCopy.backgroundColor": "#00ed08",
  "prettier.documentSelectors": ["**/*.astro"],
  // language specific
  "[astro]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  // settings
  "css.lint.unknownAtRules": "ignore",
  "editor.acceptSuggestionOnCommitCharacter": false,
  "editor.accessibilitySupport": "off",
  "editor.autoClosingBrackets": "always",
  "editor.autoClosingQuotes": "never",
  "editor.cursorStyle": "block",
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.fontSize": 18,
  "editor.fontFamily": "IntoneMono NF",
  "editor.formatOnSave": true,
  "editor.guides.bracketPairs": "active",
  "editor.lightbulb.enabled": "off",
  "editor.linkedEditing": true,
  "editor.minimap.enabled": false,
  "editor.quickSuggestions": {
    "other": true,
    "comments": false,
    "strings": false
  },
  "editor.renderLineHighlight": "all",
  "editor.roundedSelection": false,
  "editor.scrollbar.horizontal": "hidden",
  "editor.stickyScroll.enabled": false,
  "editor.snippetSuggestions": "top",
  "explorer.confirmDelete": false,
  "explorer.confirmDragAndDrop": false,
  "git.enableSmartCommit": true,
  "javascript.experimental.updateImportsOnPaste": true,
  "security.workspace.trust.untrustedFiles": "open",
  "telemetry.telemetryLevel": "off",
  "terminal.integrated.cursorBlinking": true,
  "terminal.integrated.fontSize": 18,
  "terminal.integrated.fontFamily": "IntoneMono NF",
  "terminal.integrated.minimumContrastRatio": 1,
  "update.mode": "manual",
  "window.commandCenter": false,
  "window.customTitleBarVisibility": "never",
  "window.restoreWindows": "none",
  "window.titleBarStyle": "native",
  "workbench.activityBar.location": "hidden",
  "workbench.colorTheme": "ttl-theme",
  "workbench.commandPalette.experimental.suggestCommands": true,
  "workbench.editor.decorations.colors": false,
  "workbench.editor.enablePreview": false,
  "workbench.editor.openSideBySideDirection": "down",
  "workbench.editor.pinnedTabSizing": "shrink",
  "workbench.editor.tabActionCloseVisibility": false,
  "workbench.enableExperiments": false,
  "workbench.layoutControl.enabled": false,
  "workbench.settings.editor": "json",
  "workbench.sideBar.location": "right",
  "workbench.startupEditor": "none",
  "workbench.view.alwaysShowHeaderActions": true
}
```

---

```json title="keybindings.json"
[
  {
    "key": "cmd+=",
    "command": "-workbench.action.zoomIn" // Removes the default shortcut of zooming in interface with cmd +
  },
  {
    "key": "cmd+=",
    "command": "editor.action.fontZoomIn" // Adds the shortcut of zooming in editor with cmd +
  },
  {
    "key": "cmd+-",
    "command": "-workbench.action.zoomOut" // Removes the default shortcut of zooming out interface with cmd -
  },
  {
    "key": "cmd+-",
    "command": "editor.action.fontZoomOut" // Adds the shortcut of zooming out editor with cmd -
  },
  {
    "key": "alt+shift+e",
    "command": "workbench.view.explorer" // Show explorer
  },
  {
    "key": "alt+shift+e",
    "command": "workbench.files.action.collapseExplorerFolders", // Collapse folders when explorer is focused
    "when": "explorerViewletVisible && filesExplorerFocus"
  },
  {
    "key": "alt+shift+f",
    "command": "workbench.view.search" // Show search
  },
  {
    "key": "alt+shift+c",
    "command": "workbench.view.extension.codeium" // Show Codeium chat
  },
  {
    "key": "alt+shift+g",
    "command": "workbench.view.scm" // Show SCM
  },
  {
    "key": "alt+shift+d",
    "command": "workbench.view.debug" // Show debug
  },
  {
    "key": "alt+shift+x",
    "command": "workbench.view.extensions" // Show extensions
  },
  {
    "key": "alt+shift+t",
    "command": "workbench.view.extension.thunder-client" // Show Thunder Client
  },
  {
    "key": "cmd+n",
    "command": "explorer.newFile", // Create a new file when explorer is focused
    "when": "explorerViewletVisible && filesExplorerFocus && !inputFocus"
  },
  {
    "key": "cmd+alt+n",
    "command": "explorer.newFolder", // Create a new folder when explorer is focused
    "when": "explorerViewletVisible && filesExplorerFocus && !inputFocus"
  },
  {
    "key": "ctrl+`",
    "command": "workbench.action.terminal.focus", // Focus the terminal
    "when": "terminal.active"
  },
  {
    "key": "alt+cmd+1",
    "command": "workbench.action.editorLayoutSingle"
  },
  {
    "key": "alt+cmd+2",
    "command": "workbench.action.editorLayoutTwoRows"
  },
  {
    "key": "enter",
    "command": "-acceptSelectedSuggestion",
    "when": "acceptSuggestionOnEnter && suggestWidgetHasFocusedSuggestion && suggestWidgetVisible && suggestionMakesTextEdit && textInputFocus"
  },
  {
    "key": "shift+cmd+enter",
    "command": "editor.action.inlineSuggest.commit",
    "when": "inlineSuggestionHasIndentationLessThanTabSize && inlineSuggestionVisible && !editorHoverFocused && !editorTabMovesFocus && !suggestWidgetVisible"
  },
  {
    "key": "tab",
    "command": "-editor.action.inlineSuggest.commit",
    "when": "inlineSuggestionHasIndentationLessThanTabSize && inlineSuggestionVisible && !editorHoverFocused && !editorTabMovesFocus && !suggestWidgetVisible"
  },
  {
    "key": "command+b",
    "command": "workbench.action.toggleSidebarVisibility"
  }
]
```
