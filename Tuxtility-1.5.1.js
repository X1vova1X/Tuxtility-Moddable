/*
    Please read the license before modifying and distributing
    https://tinyurl.com/tuxtility
*/

(function(Scratch) {
    'use strict';
    
    if (!Scratch.extensions.unsandboxed) {
      alert('This Extension must run unsandboxed');
    }
    const vm = Scratch.vm;
    class TuxtiltiyJS {
        getInfo() {
            return {
                id: 'TUXJS',
             name: 'Tuxtility',
            color1: '#f5c211',
            color2: '#e7b400',
            blockIconURI: 'data:image/png;base64,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bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiCiAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICB4bWxuczpHSU1QPSJodHRwOi8vd3d3LmdpbXAub3JnL3htcC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgeG1wTU06RG9jdW1lbnRJRD0iZ2ltcDpkb2NpZDpnaW1wOmU2YjNhZDdkLTJlYzktNDkwMy05MzBmLTljNTZkY2E2YmRjYyIKICAgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpiNGVmMzk1YS1kYWRiLTQ2Y2EtYjkxNy1lMmJjMDZiM2RkZDQiCiAgIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpmM2VlMDJhMC1lYWYyLTRlNGItOWYwNy1kNmIwYzY0MTFlY2YiCiAgIGRjOkZvcm1hdD0iaW1hZ2UvcG5nIgogICBHSU1QOkFQST0iMy4wIgogICBHSU1QOlBsYXRmb3JtPSJMaW51eCIKICAgR0lNUDpUaW1lU3RhbXA9IjE3MzgyOTEzMjA0NTA1NDciCiAgIEdJTVA6VmVyc2lvbj0iMy4wLjAtUkMyIgogICB0aWZmOk9yaWVudGF0aW9uPSIxIgogICB4bXA6Q3JlYXRvclRvb2w9IkdJTVAiCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIwMjU6MDE6MzBUMTk6NDE6NTktMDc6MDAiCiAgIHhtcDpNb2RpZnlEYXRlPSIyMDI1OjAxOjMwVDE5OjQxOjU5LTA3OjAwIj4KICAgPHhtcE1NOkhpc3Rvcnk+CiAgICA8cmRmOlNlcT4KICAgICA8cmRmOmxpCiAgICAgIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiCiAgICAgIHN0RXZ0OmNoYW5nZWQ9Ii8iCiAgICAgIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YzY0MjVmODctZmY3ZC00YmQ3LWE3MWEtYjc4NzRiMzdjMzUyIgogICAgICBzdEV2dDpzb2Z0d2FyZUFnZW50PSJHSU1QIDMuMC4wLVJDMiAoTGludXgpIgogICAgICBzdEV2dDp3aGVuPSIyMDI1LTAxLTMwVDE5OjQyOjAwLTA3OjAwIi8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0idyI/PrwbETsAAAAGYktHRAD/AP8A/6C9p5MAAAAJcEhZcwAALiMAAC4jAXilP3YAAAAHdElNRQfpAR8CKgCkapbVAAAAGXRFWHRDb21tZW50AENyZWF0ZWQgd2l0aCBHSU1QV4EOFwAADURJREFUeNrtm3lUVHeWxz/1imLfZREE9xD0uAaDCaHFJWlNTxx1YiI9mmCM0TTRpHXSnR7PnOksE5Meu9tu9bgrEeMaE+NCcCHRWK5RcMNgEERASqCAKgoKqOXVb/5ASjaBiATI5J7zO1Wv3nu/d+/3d5ffvfcV/EL/v0nxkOdzBsYBvwL6AY5AIXAOOAiU/VyBVAFvAQWAuM8wAH8BPH9uwvsAX7cgeOPxAzD457Ty3/wI4etGERD+cwAg/gGErxtXAJfu7D8lILMd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',
            blocks: [
                {
                    opcode: 'CREDIT',
                    blockType: Scratch.BlockType.BUTTON,
                    text: 'Credit',
                    disableMonitor: true,
                },
                {
                    opcode: 'NOTIFYALLOW',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: 'Is notifications allowed?',
                    disableMonitor: true
                },
                {
                    opcode: 'REQUEST',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'Request Permisission',
                    disableMonitor: true
                },
                {
                    opcode: 'NOTIFY',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'Notify; Icon [ICO] Title [TITLE] Message [MESS]',
                    disableMonitor: true,
                    arguments: {
                        ICO: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'https://i.ibb.co/mTsG0Jg/tuxlogo.png'
                        },
                        TITLE: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'Tuxtility'
                        },
                        MESS: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'Notification!!!'
                        }
                        
                    }
                },
                {
                    opcode: 'ALERT',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'Alert [TEXT]',
                    disableMonitor: true,
                    arguments: {
                        TEXT: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'GNU/Linux'
                        }
                    }
                },
                {
                    opcode: 'PROMPT',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'Prompt [TEXT]',
                    arguments: {
                        TEXT: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'Hello :)'
                        }
                    }
                },
                {
                    opcode: 'CON',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: 'Comfirm [TEXT]',
                    disableMonitor: true,
                    arguments: {
                        TEXT: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'Linux is the best!'
                        }
                    }
                },
                {
                    opcode: 'WEBU',
                    blockType: Scratch.BlockType.LABEL,
                    text: 'Website Utilitys',
                    disableMonitor: true,
                },
                {
                    opcode: 'WEB',
                    blockType: Scratch.BlockType.COMMAND,
                    text: '[REDER] to [LINK]',
                    disableMonitor: true,
                    arguments: {
                        LINK: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'https://google.com'
                        },
                        REDER: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'REDER'
                        }
                    }
                },
                {
                    opcode: 'POPUP',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'Open Pop Up [LINK] Width [WID] Hieght [HIE]',
                    arguments: {
                        LINK: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'https://google.com'
                        },
                        WID: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 900
                        },
                        HIE: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 900
                        }
                    }
                },
                {
                    opcode: 'STORE',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'Set localstorage [VAR] to [STUFF]',
                    disableMonitor: true,
                    arguments: {
                        VAR: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'Terminal'
                        },
                        STUFF: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'sudo dnf install Tuxtility'
                        }
                    }
                 },
                 {
                    opcode: 'DELSTORE',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'Delete [VAR]',
                    disableMonitor: true,
                    arguments: {
                        VAR: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'Terminal'
                        }
                    }
                 },
                 {
                    opcode: 'GET',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'Get [VAR]',
                    disableMonitor: true,
                    arguments : {
                        VAR: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'Terminal'
                        }
                    }
                 },
                 {
                    opcode: 'FETCH',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'Fetch [LINK]',
                    disableMonitor: true,
                    arguments: {
                        LINK: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'https://theoldnet.com'
                        }
                    }
                 },
                 {
                    opcode: 'JS',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'Run [TEXT]',
                    disableMonitor: true,
                    arguments: {
                        TEXT: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'alert("JS is cool!");'
                        }
                    }
                 },
                 {
                    opcode: 'NEXT',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'Go Forward',
                    disableMonitor: true
                 },
                 {
                    opcode: 'BACK',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'Go Back',
                    disableMonitor: true
                 },
                 {
                    opcode: 'CTT',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'Change title to [TEXT]',
                    arguments: {
                        TEXT: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'Tuxtility'
                        }
                    }
                 },
                 {
                    opcode: 'CURTITLE',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'Current Title',
                    disableMonitor: true
                 },
                 {
                    opcode: 'WHATOS',
                    blockType: Scratch.BlockType.REPORTER,
                    text: "User's OS",
                    disableMonitor: true
                 },
                 {
                    opcode: 'WHATWEB',
                    blockType: Scratch.BlockType.REPORTER,
                    text: "User's Web Browser",
                    disableMonitor: true
                 },
                 {
                    opcode: 'DEBUG',
                    blockType: Scratch.BlockType.LABEL,
                    text: 'Debuging Utilitys'
                 },
                 {
                    opcode: 'LOGTX',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'Log [TEXT]',
                    disableMonitor: true,
                    arguments: {
                        TEXT: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'Hello World!'
                        }
                    }
                 },
                 {
                    opcode: 'WARNT',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'Warn [TEXT]',
                    disableMonitor: true,
                    arguments: {
                        TEXT: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'WARNING: To much Tux'
                        }
                    }
                 },
                 {
                    opcode: 'ERRORTX',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'Error [TEXT]',
                    disableMonitor: true,
                    arguments: {
                        TEXT: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'Error: To many Tux :('
                        }
                    }
                 },
                 {
                    opcode: 'TEXTUTIL',
                    blockType: Scratch.BlockType.LABEL,
                    text: 'Text Utilitys'
                 },
                 {
                    opcode: 'LOWER',
                    blockType: Scratch.BlockType.REPORTER,
                    text: '[TEXT] To lowercase',
                    arguments: {
                        TEXT: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'HELLO WORLD'
                        }
                    }
                 },
                 {
                    opcode: 'UPPER',
                    blockType: Scratch.BlockType.REPORTER,
                    text: '[TEXT] to uppercase',
                    arguments: {
                        TEXT: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'hello world'
                        }
                    }
                 },
                 {
                    opcode: 'REPLACE',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'With [OGTEXT] Replace [TEXT] With [RETEXT]',
                    disableMonitor: true,
                    arguments: {
                        OGTEXT: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'Hello World!'
                        },
                        TEXT: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'World'
                        },
                        RETEXT: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'Tux'
                        }
                    }
                 },
                 {
                    opcode: 'EXTEN',
                    blockType: Scratch.BlockType.LABEL,
                    text: 'Extension Stuff'
                 },
                 {
                    opcode: 'LATE',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'Latest Version out',
                    disableMonitor: true
                 },
                 {
                    opcode: 'THIS',
                    blockType: Scratch.BlockType.REPORTER,
                    text: "This Extension's Version",
                    disableMonitor: true
                 },
            ], 
            menus: {
                REDER: {
                    acceptReporters: false,
                    items: ['Redirect', 'New Tab']
                }
            }
        };
    }
    CREDIT() {
        alert('This extention was made by KoffeeJava (Contributed by [Insert name here!])')
    }
    NOTIFYALLOW() {
        if (Notification.permission === "denied") {
            return false;
        }
        if (Notification.permission === "granted") {
            return true;
        }
        if (Notification.permission === "default") {
            return false;
        }
    }
    REQUEST() {
        Notification.requestPermission().then(function (permission) {});
    }
    NOTIFY(args) {
        let title = args.TITLE
        let icon = args.ICO
        let body = args.MESS
        var notification = new Notification(title, { body, icon });
    }
    ALERT(args) {
        alert(args.TEXT)
    }
    PROMPT(args) {
        return prompt(args.TEXT);
    }
    CON(args) {
        return confirm(args.TEXT);
    }
    WEB(args) {
        if (args.REDER === 'Redirect') {
            Scratch.redirect(args.LINK)
        }
        if (args.REDER === 'New Tab') {
            Scratch.openWindow(args.LINK)
        }
    }
    POPUP(args) {
        Scratch.openWindow(args.LINK, `width=${args.WID},height=${args.HIES}`);
    }
    STORE(args) {
        localStorage.setItem(args.VAR, args.STUFF)
    }
    DELSTORE(args) {
        localStorage.removeItem(args.VAR)
    }
    GET(args) {
        return localStorage.getItem(args.VAR)
    }
    async FETCH(args) {
        return Scratch.fetch(args["LINK"]).then(response => response.text()).then(text => text).catch(error => alert('An error has occured! \n ' + error))
    }
    JS(args) {
        eval(args.TEXT);
    }
    NEXT() {
        history.forward();
    }
    BACK() {
        history.back()
    }
    CTT(args) {
        document.title = args.TEXT
    }
    CURTITLE() {
        return document.title;
    }
    WHATOS() {
        return window.navigator.platform
    }
    WHATWEB() {
        return (/firefox|chrome|safari|opera|edg|msie|trident/i.exec(navigator.userAgent) || ["unknown"])[0].toLowerCase();
    }
    LOGTX(args) {
        console.log(args.TEXT)
    }
    WARNT(args) {
        console.warn(args.TEXT)
    }
    ERRORTX(args) {
        console.error(args.TEXT)
    }
    LOWER(args) {
        const text = args.TEXT
        return text.toLowerCase()
    }
    UPPER(args) {
        const text = args.TEXT
        return text.toUpperCase()
    }
    REPLACE(args) {
        let text = args.OGTEXT
        return text.replace(args.TEXT, args.RETEXT)
    }
    LATE() {
       return Scratch.fetch('https://raw.githubusercontent.com/KoffeeJava/Entity-lol/refs/heads/main/secret/Tux.txt').then(response => response.text()).then(text => text).catch(error => alert('An error has occured! \n ' + error)) 
    }
    THIS() {
        return 1.5
    }
}
Scratch.extensions.register(new TuxtiltiyJS());
})(Scratch);
