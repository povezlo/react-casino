import { FC, useEffect } from 'react';
import GameSceneUI from './GameSceneUI';
import { Stage } from '../../../../app/config/contextBridge';
import BgPX from '../../pixi/bg/bgPX';
import styles from './gameScene.module.css';
import soundBg from '../../../../assets/sounds/roulette/bg.mp3';
import soundBet from '../../../../assets/sounds/roulette/bet.mp3';
import soundNumber from '../../../../assets/sounds/roulette/number.mp3';
import soundRouletteSpin from '../../../../assets/sounds/roulette/spin.mp3';
import { sound } from '@pixi/sound';
import * as PIXI from 'pixi.js';
import { SOUNDS_ROULETTE } from './config';
import GameSceneActionsProvider from './GameSceneActionProvider';
import RouletteSpinPX from '../../pixi/ruletteSpin/RuletteSpinPX';

interface IRouletteGameSceneProps {

};

const [width, height] = [1150, 500];

const RouletteGameScene: FC<IRouletteGameSceneProps> = ({ }) => {
    sound.add(SOUNDS_ROULETTE.BG, soundBg);
    sound.add(SOUNDS_ROULETTE.BET, soundBet);
    sound.add(SOUNDS_ROULETTE.NUMBER, soundNumber);
    sound.add(SOUNDS_ROULETTE.SPIN, soundRouletteSpin);

    useEffect(() => {
        (async () => {
        await PIXI.Assets.load(SOUNDS_ROULETTE.BG)
        sound.volume(SOUNDS_ROULETTE.BG, 0.2);
        sound.play(SOUNDS_ROULETTE.BG)
        })()
    }, [])

    return (
        <div className='flex flex-col items-center'>
        <div>Titlt game</div>
        <div className={styles.table}>
            <GameSceneActionsProvider>
            <GameSceneUI>
                <Stage
                width={width}
                height={height}
                options={{
                    background: 'green'
                }}
                >
                <BgPX />
                <RouletteSpinPX />
                </Stage>
            </GameSceneUI>
            </GameSceneActionsProvider>
        </div>
        </div>
    )
};

export default RouletteGameScene;