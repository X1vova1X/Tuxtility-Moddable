/*
    This is a nightly version and is not made to be used for regular projects.
    please get the extension via the releases or the discord server, https://discord.gg/JpEQJkyRgX
    
    Please read the license before modifying and distributing
    https://tinyurl.com/tuxtility
*/

(function (Scratch) {
    'use strict';

    if (!Scratch.extensions.unsandboxed) {
        alert('This Extension must run unsandboxed');
    }

    // Listing icons
    var tux = 'data:image/png;base64,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'
    var notif = 'data:image/png;base64,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'
    var tab = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAA6CAYAAAAA0F95AAAACXBIWXMAAAsSAAALEgHS3X78AAAB6UlEQVRo3uWaO04DMRCGx0kA8apQhJDoOAAd4gCIgpaGDipaykjcIEKiQuICcAAKDkGHUCpER4OoKBBvMhmUJVpC1tmH7bE9I/3VKvJ+v/+xHScAflWbhClNgaDCDB1IgD/RGCDCBMwhKyYojwxged9agElpSW2BtFrSDYjOBJRuAko3AaWbgFwmhHYOMM5Tg7gquHaYI+0YagHvvzvsWQD13oRjx9DemPDFDM6yRa57BO08CRiArCThPBB4KyYcBQZvtB0+AoX/l4R6QfBF0nOJz/lWG6Qn0lWRs/Mq6Tqyo/NSXgNWSHcx3sXlMWAi6XmQagBCxKUkw1Od6gxYJt1HboBSgmdf6W6EHiXA69YAlACfZYAY+FEtcBspOGalXQmYfdSsdX8etKXBDycAJfT8uDVA2jF/YMAuwwu+Qf/afJMLfrhXbGvfwfjdKouFDR06HL9bJTKmwdccj18avkHaNth700lve7XVjauOgRm4NADhPPa/q2XV/X8e+jfFVQ1wPvMmzgFbBuC53n2wBpStGdKrz4ccmwZMkj4ZwH96vs4do4VY4MskwNa/yl6SlnIKXzQBTYuzO6t59g2Wf4vMs992HES8MWLcGxerKTJGn73ytMAFRF4PY+IvorLgmyCozlLg71Kge4cVqVchPJOFAAAAAElFTkSuQmCC'
    var store = 'data:image/png;base64,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'
    var inter = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAHeklEQVR4nOWb329URRTHP7vdFmgLoQVbGjAtIFj8gcSgYgr4wIu+EZ4EfcUXeelfIEL6xoM/gxEjEJQQg4lvEBLQQHxACCAWKChSpJVQK8TSX8KW+nBmujOzc/fOtrvbFr/JTfbee86ZM7N3zpxz5kyC4iIFLAFeAFYCzcAioA6YD1QqukGgF+gBuoAO4CLwM/A7kC6yngVFBbAO2AWcQzo3Os5rUMnYpWRWlLAfeWMB0IooPN4Ox13nVBsLStSnINQB24Fu8uvMo4jfIVe3arO+6L3LgTLgHaCT/JQ/C2wBrhnPrqlnZ/OU1al0KCtqTz1YARyNUGoE+AExZu67D4AqJeOS8fySelalaFy+LiVzJKLNo0qnkuAtxFq7SjwEDgNrgDeBIef9TkNGOXDZeHdZPdPY6fAOKZlrVBsPPe33KN2KhiTQhn++ngDWK7p5ZP/7nzuy4gYAxeN+BfPUu/WqTZ9daVO6FhQzgL2eBu8C7yLrvcZnDs0ZoNqRFzIA1YrXlLXbeJ9Sbd/16LVX6VwQzAAOeRo5DTzv0K7E/vSHgVc9MkMGAMU7bNANqTbcNk979DtEAQYhCezzCP8amOuhd7+S3R4aCB8AlAz333UxFzjo0XMfE5wObR6hn2B/8hpLgD6D7i7QFCE3nwFowv7M+1RbLlJKN1fftsjexWAz2QbvUyARQe9a7o9yyM5nAAA+dmTvjKBLKB1dw7g5h2wvliPBiSnoQA76GcBVg3ZAyYhCgmw/IGpgtT4DBv1Vcs/vA47uvTH6WEgBxxwBvwBLgVokinOvTQ79iQg6fTVgD9hV9SwXj7vsbYqgq1W6tjv0x/BMXd+obyV73b6PRGZRLmclmdAW5N8aiqDVqDHkjQD3YuhnkfEiUfoMRtCOKH1mO8+3Al/kauQJ4BbZhuRxuf5AvpIxuEvENiRh8bjiSaSPYzCnQB2ShdEhZho4hfjdubAMWGzctwN3YngSwCtkPukBMs5MLtQDzxn3ncD1GJ4U0EJm/t9BnKcel7AV+3P5JkawhmlxR4DVgXy+aDAOq7Ejwlwrk4nD2H1rdQkqgAsGQRq/C+uiHNvadgFzAvhSZPsBPufKxRzsQKs9kK8F6ZPmu4CTXluL7fScJMyFbAL6Db5jATyQvyNkwlyi+4HGAJ4kMp1N52itfgGwEdsefKWI4tCIvTRdCeCZKMw2qoh2t008QuIXjQTSZ5LIJ7TBeHkfybCEYJlzHzqXJ4LLzv1TgXxHkL5pbABSScSCNxsvziHrZQiWOvdxFrkQ+C1GhyjcRPqm0QwsTgKrgJnGi5N5KLPQ+J0mfvkrBO5gb5QsjCL04JTxeyawKons2pg4m4dAMz9/Hwk6io1e7E+5IQ/eM879yiTwtPHgAZKiDkECCTw0+hCrXGz0q7Y0askdSZq4hvRRozmJ7fr+DdwOFFaGvQKEBEAavhUmZNVBtTFg3FcRvi9wG+mjxqIU4gJr3ENc35A1uRo7AtTRYoj/UI79ryWQ+D7O7da0ZhSoo76Qr+8h0kc9beoSwD9kvLchxL8OQRmSmtKe2CBiaUOQQFYfndT4F7hBfCyg0Uhm8NPIDvJIIG8TEloD9CWQUQlxJx9HpAu+gTDdkEI+3akwBVwHJxcWY0+BXwk3okvITIFBEO/NDEsrESMVd9UgHda8Z5AIK4S3EvHpNe8VpVQq4CrH3jG6iewLhPDOwg7CrqeQxIDOs9eoBqJybSZ0nlCjEjFEIcZIR54ao8j6HMJbRvbq009YGU0V0keNniQSX2vMI9yzGiF7PZ4VQevCZ3tC7ZGbHB0gfAVowHbeupJISlqjgvD8+SiyY6Mxh+xN0GKgGjvponeNQrAcOxHSkUQqsUy8lIcyptc4GyfjWiTMx053h3quAC879xeTSHpo2Hi4Lg+Bfxq/U5SmZmcBtt/SnQev2bdh4EIS8cA6jBcvEpZmgvHH5hPBeHMQjUjfNDqAG0nEeh43XswGXg8U6g7As4F8E8EzMTpE4Q1sG3UcwxP8DtuQvE2YVe7EXglKUahktjFAmOOWRPqkMYr0eQy+tHhLgOAU0zwtrv/lB8B+g6EMz+aBB2ngvHHfQNgyqpXR0IMeh+XYfsr5QL5W7JzBflRiJG5r7MeABpZip6an7dYYSPnpZO/gFvvanmu05iMp8clWsljXLaQEYAyuAekFdgB7nOfFLpBIY7vVUW2Yy9gA9gpkYgSZXq5Bfh/4K6Ydb4lMO8UvkalHgjHfVUt2iczGCNoaJLoNKpGJwlQrkmrGLpLqILpIKoHsA5q651UkpTGVyuTc+r8dEXQJsgsrx1UmpzFVCiXvGbRRhZLlZHd+lAkUSkJ0qexBSlcq6xZff+mhmYu/nnkfBagcz1Us7StcLmSxdAthxdI/efQrSLG0xmSVy7tHaNxy+W2UoFxeo9QHJvY4MswDE68B33v0KNqBCROlODLznsNrHpn5lugjM1sK3NdIrEBKTlwlRskcmvIdows5NPWhh6+b3IemjmBXuZQE/+tjcybqmbyDk+bW/qTjf3t01sW0OjwdWlszXkz54/P/AV4VltRrSuW+AAAAAElFTkSuQmCC'
    var js = 'data:image/png;base64,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'

    const vm = Scratch.vm;
    class TuxtiltiyJS {
        getInfo() {
            return {
                id: 'TUXJS',
                name: 'Tuxtility',
                blockIconURI: tux,
                color1: '#ebba13',
                color2: '#c79c02',
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
                        blockIconURI: notif,
                        text: 'Is notifications allowed?',
                        disableMonitor: true
                    },
                    {
                        opcode: 'REQUEST',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'Request Permisission',
                        blockIconURI: notif,
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
                        blockIconURI: tab,
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
                        blockIconURI: tab,
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
                        blockIconURI: store,
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
                        blockIconURI: store,
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
                        opcode: 'GEN',
                        blockType: Scratch.BlockType.LABEL,
                        text: 'General Website Utilities',
                    },
                    {
                        opcode: 'GET',
                        blockType: Scratch.BlockType.REPORTER,
                        blockIconURI: store,
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
                        blockIconURI: inter,
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
                        blockIconURI: js,
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
                        blockIconURI: inter,
                        text: 'Go Forward',
                        disableMonitor: true
                    },
                    {
                        opcode: 'BACK',
                        blockType: Scratch.BlockType.COMMAND,
                        blockIconURI: inter,
                        text: 'Go Back',
                        disableMonitor: true
                    },
                    {
                        opcode: 'CTT',
                        blockType: Scratch.BlockType.COMMAND,
                        blockIconURI: inter,
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
                        blockIconURI: inter,
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
                        blockIconURI: inter,
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
                        blockIconURI: inter,
                        text: 'Current Title',
                        disableMonitor: true
                    },
                    {
                        opcode: 'WHATOS',
                        blockType: Scratch.BlockType.REPORTER,
                        blockIconURI: inter,
                        text: "User's OS",
                        disableMonitor: true
                    },
                    {
                        opcode: 'WHATWEB',
                        blockType: Scratch.BlockType.REPORTER,
                        blockIconURI: inter,
                        text: "User's Web Browser",
                        disableMonitor: true
                    },
                    {
                        opcode: 'LANG',
                        blockType: Scratch.BlockType.REPORTER,
                        blockIconURI: inter,
                        disableMonitor: true,
                        text: "Browser's Languge"
                    },
                    {
                        opcode: 'ISON',
                        blockType: Scratch.BlockType.BOOLEAN,
                        blockIconURI: inter,
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
                    },
                    LOGTX: {
                        acceptReporters: false,
                        items: ['Log', 'Warn', 'Error']
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
        ENCODEURI(args) {
            var encodedString = btoa(args.TEXT);
            var uri = "data:/application/octet-stream;base64," + encodedString
            return uri
        }
        ENCODEHEX(args) {
            let originalString = args.TEXT
            let hexString = '';
            for (let i = 0; i < originalString.length; i++) {
            hexString += originalString.charCodeAt(i).toString(16);
            }

            return hexString
        }
        LATE() {
            return Scratch.fetch('https://raw.githubusercontent.com/KoffeeJava/Entity-lol/refs/heads/main/secret/Tux.txt').then(response => response.text()).then(text => text).catch(error => alert('An error has occured! \n ' + error, '\n\n Make sure that your internet is on.'))
        }
        THIS() {
            return "Nightly 3.0"
        }
    }
    Scratch.extensions.register(new TuxtiltiyJS());
})(Scratch);
