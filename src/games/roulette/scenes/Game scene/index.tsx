import { Stage } from '@pixi/react';
import { FC } from 'react';
import RouletteSpinPX from '../../pixi/ruletteSpin/RuletteSpinPX';

interface IRouletteGameSceneProps {}

const [width, heigth] = [1000, 500];

const RouletteGameScene:FC<IRouletteGameSceneProps> = ({}) => {
    return (
        <div className='flex flex-col items-center'>
            <div>Title games</div>
            <Stage
            width={width}
            height={heigth}
            options={{
                background: 'green'
            }}>
                <RouletteSpinPX />
            </Stage>
        </div>
    )

}

export default RouletteGameScene;