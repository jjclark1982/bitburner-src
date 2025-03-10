import React, { useState, useEffect, FormEvent } from "react";
import { Button, TextField, Typography } from "@mui/material";
import { Settings } from "../../Settings/Settings";


// Axiom QuickServe Scripting Reference: https://www.zachtronics.com/quickserve/

// Example backend implementations:
// https://github.com/stellartux/netronics-connect-online
// https://qionglu735.github.io/NETronicsEmulator/

// Example Server Scripts:
// Empty Saloon: https://raw.githubusercontent.com/icegoat9/lastcallbbs/main/emptysaloon.js
// exaDOOM: https://raw.githubusercontent.com/vrman123/LastCallBBS/main/exaDOOM.js
// Flappy Birb: https://gist.githubusercontent.com/micolous/b822a40674e5527aba42f0612a013faf/raw/9c31a8027284bb56b1e2c22e8b711b11f8a44121/flappy.js
// Hanabi Fireworks Screensaver: https://raw.githubusercontent.com/arun867/last-call-bbs-server-hanabi/main/hanabi.js
// Hoos Starzu: https://raw.githubusercontent.com/stellartux/hoos-starzu/master/hoos-starzu.js
// Snake: https://raw.githubusercontent.com/dabjulmaros/last-call-bbs-server-snake/master/dabjulmaros_snake.js
// Monster Maze: https://raw.githubusercontent.com/Zwergesel/last-call-bbs-monster-maze/main/monstermaze.js
// SokoCode: https://raw.githubusercontent.com/Werxzy/SokoCode/master/SokoCode.js
// Deal Wars: https://raw.githubusercontent.com/isakara/connectgames/main/dealwars.js
// Subleq: https://raw.githubusercontent.com/galactical1100/Subleq/main/subleq.js
// Cursed Gems: https://raw.githubusercontent.com/w00tyd00d/Cursed-Gems/main/cursedgems.js
// Breakout: https://bitbucket.org/almostsweet/breakout/raw/main/breakout.js
// Legend of the Red Dragon: https://bitbucket.org/almostsweet/lord/raw/main/LORD.js
// Crossroads: https://bitbucket.org/almostsweet/crossroads/raw/main/crossroads.js
// Trade Wars 2057 v0.36: https://bitbucket.org/almostsweet/tw2057/raw/main/tw.js
// Trade Wars 2057 v0.40: https://bitbucket.org/almostsweet/tw2057/raw/main/tw2.js
// ACID Draw: https://bitbucket.org/almostsweet/aciddraw/raw/main/aciddraw.js
// Life Game: https://raw.githubusercontent.com/sealleci/LcBbsTs/main/dist/life_game.js
// netMAZE: https://raw.githubusercontent.com/JavadocMD/last-call-bbs/main/netmaze.js


const workerScript = `
  const initTerminal = () => {
    const terminal = {
      width: 56,
      height: 20,
      grid: [],
    }
    for (let y = 0; y < terminal.height; y++) {
      let row = [];
      for (let x = 0; x < terminal.width; x++) {
        row.push({char: ' ', color: 0});
      }
      terminal.grid.push(row);
    }
    return terminal;
  };

  const drawChar = (char, color, x, y) => {
    if (x >= 0 && x < terminal.width && y >= 0 && y < terminal.height) {
      terminal.grid[y][x] = {
        char: char.replace('⚉', '💀\ufe0e'),
        color: color
      };
    }
  }

  let terminal = initTerminal();

  const clearScreen = () => {
    fillArea(' ', 0, 0, 0, terminal.width, terminal.height);
  }
    
  // const clearScreen = () => {
  //   postMessage(['clearScreen']);
  // }

  // const drawChar = (char, color, x, y) => {
  //   postMessage(['drawChar', [char, color, x, y]]);
  // }

  const drawText = (text, color, x, y) => {
    text = text.toString();
    color = color < 0 || color > 17 ? 0 : color | 0;
    x = x | 0;
    y = y | 0;
    for (let i = 0; i < text.length; i++) {
      drawChar(text[i], color, x + i, y);
    }
  }

  const drawTextWrapped = (text, color, x, y, width) => {
    color = color < 0 || color > 17 ? 0 : color | 0;
    x = x | 0;
    y = y | 0;
    let offsetX = 0, offsetY = 0;
    const words = text.match(/\s|\S+/g);
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      if (offsetX + word.length > width) {
        offsetY++;
        offsetX = 0;
        if (/\s/.test(word)) continue;
      }
      if (/\S/.test(word)) {
        drawText(word, color, x + offsetX, y + offsetY);
      }
      offsetX += word.length;
    }
  }

  const drawBox = (color, x, y, width, height) => {
    fillArea('═', color, x + 1, y, width - 2, 1);
    fillArea('═', color, x + 1, y + height - 1, width - 2, 1);
    fillArea('║', color, x, y + 1, 1, height - 2);
    fillArea('║', color, x + width - 1, y + 1, 1, height - 2);
    drawChar('╔', color, x, y);
    drawChar('╗', color, x + width - 1, y);
    drawChar('╚', color, x, y + height - 1);
    drawChar('╝', color, x + width - 1, y + height - 1);
  }

  const fillArea = (symbol, color, x, y, width, height) => {
    for (let j = 0; j < height; j++) {
      for (let i = 0; i < width; i++) {
        drawChar(symbol, color, x + i, y + j);
      }
    }
  }

  let storedData = '';

  const saveData = (data) => {
    storedData = data;
    postMessage(['saveData', getName(), data]);
    // localStorage.setItem(getName(), data);
  }

  const loadData = () => {
    return storedData;
    // return localStorage.getItem(getName()) || '';
  }
  
  onmessage = (event) => {
    const [funcName, arg] = event.data;
    if (typeof globalThis[funcName] === 'function') {
      const result = globalThis[funcName](arg);
      if (result) {
      	postMessage([funcName, result]);
       }
    }
    if (funcName === 'onUpdate') {
      postMessage(['updateScreen', terminal]);
    }
  };
`;

interface NetronicsTerminalGrid {
  width: number;
  height: number;
  grid: {char: string, color: number, updated: number}[][];
}

const clearScreen = () => {
  const terminal: NetronicsTerminalGrid = {
    width: 56,
    height: 20,
    grid: [],
  }
  for (let y = 0; y < terminal.height; y++) {
    let row = [] as {char: string, color: number, updated: number}[];
    for (let x = 0; x < terminal.width; x++) {
      row.push({char: '.', color: 0, updated: 0});
    }
    terminal.grid.push(row);
  }
  return terminal;
};

// const drawChar = (terminal: NetronicsTerminalGrid, char: string, color: number, x: number, y: number) => {
//   // console.log("drawing char", char, color);
//   const newGrid = terminal.grid.map((row, tile_y)=>(
//     row.map((tile, tile_x)=>(
//       x == tile_x && y == tile_y ? ({char: char.replace('⚉', '💀\ufe0e'), color: color, updated: performance.now()}) : tile
//     ))
//   ));
//   return {
//     ...terminal,
//     grid: newGrid
//   }
//   // if (x >= 0 && x < terminal.width && y >= 0 && y < terminal.height) {
//   //   terminal.grid[y][x] = {
//   //     char: char.replace('⚉', '💀\ufe0e'),
//   //     color: color
//   //   };
//   // }
//   // return terminal;
// }

const COLORS = ['#192f30', '#2a4546', '#2e4a4b', '#264a4b', '#274e50', '#225a5d', '#1b666a', '#207479', '#27898f', '#2e9ea1', '#37a7aa', '#3fb6ba', '#39c9ce', '#3cd0d5', '#40d7dc', '#46dce1', '#5ce6eb', '#acf6f4'];

interface NetronicsTerminalProps {
  axiomScript: string
}

export function NetronicsTerminal({axiomScript}: NetronicsTerminalProps): React.ReactElement {
  const [serverName, setServerName] = useState(null);
  const [terminal, setTerminal] = useState(clearScreen());
  // const [updated, setUpdated] = useState(performance.now());

  useEffect(() => {
    if (!axiomScript) {
      return;
    }

    const workerSrc = `
      ${workerScript}
      ${axiomScript}
    `;
    const workerBlob = new Blob([workerSrc], { type: "text/javascript" }); // see NetscriptJSEveluator.makeScriptBlob()
    const workerBlobURL = URL.createObjectURL(workerBlob);
    const axiomWorker = new Worker(workerBlobURL);
    axiomWorker.onmessage = (event)=>{
      const [funcName, args] = event.data;
      if (funcName === 'getName') {
        setServerName(args);
        // TODO: load data from this thread and send it to worker
        // axiomWorker.postMessage(['saveData', '']);
      }
      // if (funcName === 'clearScreen') {
      //   setTerminal(clearScreen());
      // }
      // if (funcName === 'drawChar') {
      //   const [char, color, x, y] = args;
      //   setTerminal(drawChar(terminal, char, color, x, y));
      //   // setUpdated(performance.now());
      // }
      if (funcName === 'updateScreen') {
        setTerminal(args);
      }
    };
    axiomWorker.onerror = (event)=>{
      event.stopPropagation();
      console.error("axiomWorker error:", event);
    };
    axiomWorker.onmessageerror = (event)=>{
      console.error("axiomWorker message error:", event);
    };
    axiomWorker.postMessage(['getName']);
    axiomWorker.postMessage(['onConnect']);
    const updateInterval = setInterval(()=>{
      axiomWorker.postMessage(['onUpdate'])
    }, 1000 / 30);
    // Object.assign(globalThis, {axiomWorker: axiomWorker, workerSrc: workerSrc});

    const onInput = (key: number)=>axiomWorker.postMessage(['onInput', key]);

    const onKeyDown = (event: KeyboardEvent)=>{
      const keyMap: {[key: string]: number} = {
        "Backspace": 8,
        "Tab": 9,
        "Enter": 10,
        "Escape": 27,
        "ArrowLeft": 19,
        "ArrowUp": 17,
        "ArrowRight": 20,
        "ArrowDown": 18,
        "Delete": 127
      } as const;
      if (event.ctrlKey || event.altKey) {
        return;
      }
      else if (event.code in keyMap) {
        onInput(keyMap[event.code])
      } else if (event.key.length === 1) {
        onInput(event.key.charCodeAt(0))
      }
      event.preventDefault()
    };

    window.addEventListener('keydown', onKeyDown)

    return ()=>{
      clearInterval(updateInterval);
      axiomWorker.terminate();
      window.removeEventListener('keydown', onKeyDown)
    };
  }, [axiomScript]);
        


  return (<div>
    <Typography>{serverName ? <span>Connected to Axiom Server: <b>{serverName}</b></span> : "Not Connected"}</Typography>
    <Typography component="div" style={{
      "display": "inline-block",
      "margin": "0.5em",
      "border": `2px solid ${Settings.theme.primary}`,
      "padding": "0.5em",
      "textAlign": "left",
      "whiteSpace": "pre"
    }}>{
      terminal.grid.map((row, y)=>(
        <div key={y}>
          {row.map((tile, x)=>(
            <span key={x} style={{"color": COLORS[tile.color]}}>{tile.char}</span>
          ))}
        </div>))
    }</Typography>
  </div>);
}

export function NetronicsCabinetRoot(): React.ReactElement {
  // const [axiomScriptURL, setAxiomScriptURL] = useState('');
  const [axiomScriptData, setAxiomScriptData] = useState('');

  const loadAxiomScript = async (event: FormEvent)=>{
    event.preventDefault();
    event.stopPropagation();
    const formData = new FormData(event.target as HTMLFormElement);
    const axiomScriptURL = formData.get("axiomScriptURL") as string;
    const response = await fetch(axiomScriptURL);  
    if (response.ok && response.body != null) {
      const body = await response.body.getReader().read();
      setAxiomScriptData(new TextDecoder().decode(body.value));
    }
  }

  // prettier-ignore
  const joystick =
    <>
      <Typography sx={{lineHeight: '1em',whiteSpace: 'pre'}}>                                                                      </Typography>
      <Typography sx={{lineHeight: '1em',whiteSpace: 'pre'}}>                     ,'" "',                                  .-.     </Typography>
      <Typography sx={{lineHeight: '1em',whiteSpace: 'pre'}}>                    /       \                                (   )     </Typography>
      <Typography sx={{lineHeight: '1em',whiteSpace: 'pre'}}>                    |       |                            .-.  '-'  .-. </Typography>
      <Typography sx={{lineHeight: '1em',whiteSpace: 'pre'}}>                    \       /                           (   )     (   )</Typography>
      <Typography sx={{lineHeight: '1em',whiteSpace: 'pre'}}>                     '.___.'                             '-'  .-.  '-'</Typography>
      <Typography sx={{lineHeight: '1em',whiteSpace: 'pre'}}>                       |||                                   (   )  </Typography>
      <Typography sx={{lineHeight: '1em',whiteSpace: 'pre'}}>                       |||                                    '-'   </Typography>
    </>;
  return (
    <div style={{"textAlign": "center"}}>
      <form onSubmit={loadAxiomScript}>
        <Typography>
          Enter the URL of an Axiom Server:
        </Typography>
        <TextField name="axiomScriptURL" defaultValue={"https://gist.githubusercontent.com/micolous/b822a40674e5527aba42f0612a013faf/raw/9c31a8027284bb56b1e2c22e8b711b11f8a44121/flappy.js"} />
        <Button sx={{ mx: 2 }} type={"submit"}>
          Connect
        </Button>
      </form>
      <NetronicsTerminal axiomScript={axiomScriptData} />
      <br />
      <div style={{
        width: "1060px",
        borderColor: "white",
        borderStyle: "solid",
        borderWidth: "5px",
        textAlign: "left",
        display: "inline-block"
      }}>
        {joystick}
      </div>
    </div>
  );
}
