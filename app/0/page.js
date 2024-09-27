'use client'

import '../css.css'
import {useEffect} from 'react';
import {ConfigProvider, notification, theme} from 'antd';

function Spacer() {
    return (
        <>
            <br/>
            <br/>
        </>
    )
}

export default function Fate() {
    useEffect(() => {
        console.log("It works?..");

        function WordShuffler(holder, opt) {
            const that = this;
            const time = 0;
            this.now = Date.now();
            this.then = this.now;

            this.delta = 0;
            this.currentTimeOffset = 0;

            this.word = null;
            this.currentWord = null;
            this.currentCharacter = 0;
            this.currentWordLength = 0;

            const options = {
                fps: 20,
                timeOffset: 5,
                textColor: '#000',
                fontSize: "50px",
                useCanvas: false,
                mixCapital: false,
                mixSpecialCharacters: false,
                needUpdate: true,
                colors: [],
                fonts: ['Arial', 'Courier New', 'Georgia', 'Times New Roman', 'Verdana', 'Comic Sans MS', 'Trebuchet MS', 'Lucida Console', 'Impact'] // List of fonts to shuffle through
            };

            if (typeof opt !== "undefined") {
                for (let key in opt) {
                    options[key] = opt[key];
                }
            }

            this.needUpdate = true;
            this.fps = options.fps;
            this.interval = 1000 / this.fps;
            this.timeOffset = options.timeOffset;
            this.textColor = options.textColor;
            this.fontSize = options.fontSize;
            this.mixCapital = options.mixCapital;
            this.mixSpecialCharacters = options.mixSpecialCharacters;
            this.colors = options.colors;
            this.fonts = options.fonts; // Add fonts from options

            this.useCanvas = options.useCanvas;

            this.chars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
            this.specialCharacters = ['!', '§', '$', '%', '&', '/', '(', ')', '=', '?', '_', '<', '>', '^', '°', '*', '#', '-', ':', ';', '~'];

            if (this.mixSpecialCharacters) {
                this.chars = this.chars.concat(this.specialCharacters);
            }

            this.getRandomColor = function () {
                const randNum = Math.floor(Math.random() * this.colors.length);
                return this.colors[randNum];
            };

            this.getRandomFont = function () {
                const randNum = Math.floor(Math.random() * this.fonts.length);
                return this.fonts[randNum];
            };

            this.position = {
                x: 0, y: 50
            };

            if (typeof holder !== "undefined") {
                this.holder = holder;
            }

            if (!this.useCanvas && typeof this.holder === "undefined") {
                console.warn('Holder must be defined in DOM Mode. Use Canvas or define Holder');
            }

            this.getRandCharacter = function (characterToReplace) {
                if (characterToReplace === " ") {
                    return ' ';
                }
                const randNum = Math.floor(Math.random() * this.chars.length);
                const lowChoice = -.5 + Math.random();
                const picketCharacter = this.chars[randNum];
                let chosen = picketCharacter.toLowerCase();
                if (this.mixCapital) {
                    chosen = lowChoice < 0 ? picketCharacter.toLowerCase() : picketCharacter;
                }
                return chosen;
            };

            this.writeWord = function (word) {
                this.word = word;
                this.currentWord = word.split('');
                this.currentWordLength = this.currentWord.length;
            };

            this.generateSingleCharacter = function (color, character, font) {
                const span = document.createElement('span');
                span.style.color = color;
                span.style.fontFamily = font; // Apply the font
                span.innerHTML = character;
                return span;
            };

            this.updateCharacter = function (time) {
                this.now = Date.now();
                this.delta = this.now - this.then;

                if (this.delta > this.interval) {
                    this.currentTimeOffset++;

                    const word = [];
                    const currentFont = this.getRandomFont(); // Shuffle through fonts

                    if (this.currentTimeOffset === this.timeOffset && this.currentCharacter !== this.currentWordLength) {
                        this.currentCharacter++;
                        this.currentTimeOffset = 0;
                    }
                    for (let k = 0; k < this.currentCharacter; k++) {
                        word.push(this.currentWord[k]);
                    }

                    for (let i = 0; i < this.currentWordLength - this.currentCharacter; i++) {
                        word.push(this.getRandCharacter(this.currentWord[this.currentCharacter + i]));
                    }

                    if (that.useCanvas) {
                        c.clearRect(0, 0, stage.x * stage.dpr, stage.y * stage.dpr);
                        c.font = that.fontSize + " sans-serif";
                        let spacing = 0;
                        word.forEach(function (w, index) {
                            if (index > that.currentCharacter) {
                                c.fillStyle = that.getRandomColor();
                            } else {
                                c.fillStyle = that.textColor;
                            }
                            c.fillText(w, that.position.x + spacing, that.position.y);
                            spacing += c.measureText(w).width;
                        });
                    } else {
                        if (that.currentCharacter === that.currentWordLength) {
                            that.needUpdate = false;
                            // Set final font to Kanit
                            if (this.holder) {
                                this.holder.style.fontFamily = 'Kanit, sans-serif';
                            }
                        }
                        if (this.holder) {
                            this.holder.innerHTML = '';
                            word.forEach(function (w, index) {
                                const color = index > that.currentCharacter ? that.getRandomColor() : that.textColor;
                                const font = index > that.currentCharacter ? that.getRandomFont() : 'Kanit, sans-serif'; // Use random font or final font
                                that.holder.appendChild(that.generateSingleCharacter(color, w, font));
                            });
                        }
                    }
                    this.then = this.now - (this.delta % this.interval);
                }
            };

            this.restart = function () {
                this.currentCharacter = 0;
                this.needUpdate = true;
            };

            function update(time) {
                time++;
                if (that.needUpdate) {
                    that.updateCharacter(time);
                }
                requestAnimationFrame(update);
            }

            if (this.holder) {
                this.writeWord(this.holder.innerHTML);
            }
            update(time);
        }

        function initializeWordShufflers() {
            // const elements = ['headline', 'text', 'text2', 'text3', 'text4', 'text5', 'shuffler'];
            const elements = ['headline', 'text', 'text2', 'text3', 'text4', 'text5'];
            const shufflers = {};

            elements.forEach(id => {
                const element = document.getElementById(id);
                if (element) {
                    shufflers[id] = new WordShuffler(element, {
                        textColor: id === 'shuffler' ? 'tomato' : '#ffffffd9',
                        timeOffset: id === 'headline' ? 5 : id === 'shuffler' ? 10 : 2,
                        mixCapital: id === 'headline',
                        mixSpecialCharacters: id === 'headline'
                    });
                } else {
                    console.warn(`Element with id "${id}" not found`);
                }
            });

            return shufflers;
        }

        const shufflers = initializeWordShufflers();

        if (shufflers.shuffler && shufflers.headline && shufflers.text) {
            const shufflerElement = document.getElementById('shuffler');
            if (shufflerElement) {
                shufflerElement.addEventListener('click', function () {
                    shufflers.headline.restart();
                    shufflers.text.restart();
                    shufflers.shuffler.restart();
                });
            }
        }
    }, []);

    function link(path) {
        window.open(path);
        return false;
    }

    function copy(name, value) {
        navigator.clipboard.writeText(value)
            .then(() =>
                api.success({
                    message: "Copied!",
                    placement: "topRight",
                    description: `My ${name} has been copied to your clipboard. ` +
                        `If you don't know what this is, then you don't need it.\n\n${value}`,
                    showProgress: true,
                    pauseOnHover: true,
                    duration: 10,
                })
            ).catch(() => {
                api.error({
                    message: "Copy Failed!",
                    placement: "topRight",
                    description: `Failed to copy my ${name} to your clipboard.`,
                    duration: 0,
                })});
    }

    const [api, contextHolder] = notification.useNotification();

    return (
        <>
            <div className="main-center lowercase">
                <a href="" id="text" onClick={() => link('https://t.me/btcgoblin')}>telegram</a>
                <Spacer/>

                <a href="" id="text2" onClick={() => link('mailto:hi@xr.ma')}>email</a>
                <Spacer/>

                <a href="" id="text3" onClick={event => {
                    event.preventDefault();
                    copy("XMP address", 'rank@xmpp.jp')
                }}>xmpp</a>
                <Spacer/>

                <a href="" id="text4" onClick={event => {
                    event.preventDefault();
                    const value = '05f3f3d743ebb090c9da4b64e33c89a4a8f25aff946bfc49a1d6bb9e4add83965f';
                    copy('Session ID', value)
                }}>session</a>
                <Spacer/>

                <a href="" id="text5" onClick={() => link('/pgp.txt')}>pgp.txt</a>
                <Spacer/>

                <p id="headline">maneki</p>
            </div>

            <ConfigProvider
                theme={{
                    algorithm: theme.darkAlgorithm,
                }}
            >
                {contextHolder}
            </ConfigProvider>
        </>
    );
}
