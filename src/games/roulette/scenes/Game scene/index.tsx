import { Stage } from '@pixi/react';
import { FC } from 'react';
import RouletteSpinPX from '../../pixi/ruletteSpin/RuletteSpinPX';
import GameSceneUI from './GameSceneUI';

interface IRouletteGameSceneProps {}

const [width, heigth] = [1100, 500];

const RouletteGameScene:FC<IRouletteGameSceneProps> = ({}) => {
    return (
        <div className='flex flex-col items-center'>
            <div>Title games</div>
            <GameSceneUI>
                <Stage
                    width={width}
                    height={heigth}
                    options={{
                        background: 'green'
                    }}
                >
                    <RouletteSpinPX />
                </Stage>
            </GameSceneUI>
        </div>
    )

}

export default RouletteGameScene;