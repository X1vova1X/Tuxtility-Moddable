/*
    This is Tuxtility Base and is not for project use only developental use.
    Look at https://github.com/KoffeeJava/Tuxtility to get the latest release.
    
    Please read the license before modifying and distributing
    https://tinyurl.com/tuxtility
*/

(function (Scratch) {
    'use strict';

    if (!Scratch.extensions.unsandboxed) {
        alert('This Extension must run unsandboxed');
    }

    const vm = Scratch.vm;
    class TuxtiltiyJS {
        getInfo() {
            return {
                id: 'TUXJSBASE',
                name: 'Tuxtility Base',
                color1: '#8f8f8fff',
                color2: '#2b2b2bff',
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
                                defaultValue: 'https://tinyurl.com/util-tux'
                            },
                            TITLE: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'Tuxtility'
                            },
                            MESS: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'Hello :)'
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
                                defaultValue: "What's your name?"
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
                                defaultValue: 'https://example.com/'
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
                        text: 'Open Pop Up [LINK] Width [WID] Height [HIE]',
                        arguments: {
                            LINK: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'https://example.com/'
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
                                defaultValue: 'sudo pacman -S Tuxtility'
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
                        arguments: {
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
                        },
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
                        },
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
                        opcode: 'FAVI',
                        blockType: Scratch.BlockType.COMMAND,
                        text: "Set favicon to [FAVI]",
                        disableMonitor: true,
                        arguments: {
                            FAVI: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'https://tinyurl.com/util-tux'
                            }
                        }
                    },
                    {
                        opcode: 'LOGTX',
                        blockType: Scratch.BlockType.COMMAND,
                        text: '[LOGTX] [TEXT]',
                        disableMonitor: true,
                        arguments: {
                            LOGTX: {
                                type: Scratch.ArgumentType.STRING,
                                menu: 'LOGTX'
                            },
                            TEXT: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'Hello World!'
                            }
                        },
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
                        opcode: 'LANG',
                        blockType: Scratch.BlockType.REPORTER,
                        disableMonitor: true,
                        text: "Browser's Languge"
                    },
                    {
                        opcode: 'ISON',
                        blockType: Scratch.BlockType.BOOLEAN,
                        text: "Online?",
                        disableMonitor: true,
                    },
                    {
                        opcode: 'ENCODE',
                        blockType: Scratch.BlockType.LABEL,
                        text: 'Encoding Utilitys'
                    },
                    {
                        opcode: 'ENCODEURI',
                        blockType: Scratch.BlockType.REPORTER,
                        blockIconURI: inter,
                        disableMonitor: true,
                        text: "Encode to data:URI: [TEXT]",
                        arguments: {
                            TEXT: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'Hello World!'
                            },
                        },
                    },
                    {
                        opcode: 'ENCODEHEX',
                        blockType: Scratch.BlockType.REPORTER,
                        blockIconURI: inter,
                        disableMonitor: true,
                        text: "Encode to Hex: [TEXT]",
                        arguments: {
                            TEXT: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'Hello World!'
                            },
                        },
                    }
                ],
                menus: {
                    REDER: {
                        acceptReporters: false,
                        items: ['Redirect', 'New Tab']
                    },
                    LOGTX: {
                        acceptReporters: false,
                        items: ['Log', 'Warn', 'Error']
                    }
                }
            };
        }
        CREDIT() {
            alert("This extension is based On Tuxtility!\nGo to https://github.com/KoffeeJava/Tuxtility for more info")
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
            Notification.requestPermission().then(function (permission) { });
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
            Scratch.openWindow(args.LINK, `width=${args.WID},height=${args.HIE}`);
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
            var conf = confirm(`This site wants to execute javascript code.\n This can allow dangrous code to run on your browser.\n code: ${args.TEXT}\n Allow?`)
            if (conf == true){
                eval(args.TEXT);
            }
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
        FAVI(args) {
            var link = document.querySelector("link[rel~='icon']");
            if (!link) {
                link = document.createElement('link');
                link.rel = 'icon';
                document.head.appendChild(link);
            }
            link.href = args.FAVI;

        }
        CURTITLE() {
            return document.title;
        }
        WHATOS() {
            var conf = confirm("This site wants to view what OS you are using.\nAllow?")
            if (conf == true){
                return window.navigator.platform
            }
            if (conf == false){
                return "Blocked"
            }
        }
        WHATWEB() {
            var conf = confirm("This site wants to view what browser you are using.\nAllow?")
            if(conf == true){
                return (/firefox|chrome|safari|opera|edg|msie|trident/i.exec(navigator.userAgent) || ["unknown"])[0].toLowerCase();
            }
            if (conf == false){
                return "Blocked"
            }
        }
        ISON() {
            return navigator.onLine
        }
        LANG() {
            var conf = confirm("This site wants to view what browser language you are using.\nAllow?")
            if (conf == true) {
                return navigator.language;
            }
            if (conf == false) {
                return "Blocked"
            }
        }
        LOGTX(args) {
            if (args.LOGTX === 'Log') {
                console.log(args.TEXT)
            }
            if (args.LOGTX === 'Warn') {
                console.warn(args.TEXT)
            }
            if (args.LOGTX === 'Error') {
                console.error(args.TEXT)
            }
        }
    }
    Scratch.extensions.register(new TuxtiltiyJS());
})(Scratch);
