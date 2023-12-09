import { FC } from 'react';
import RouletteSpinPX from '../../pixi/ruletteSpin/RuletteSpinPX';
import GameSceneUI from './GameSceneUI';
import { Stage } from '../../../../app/config/contextBridge';
import GameSceneActionsProvider from './GameSceneActionProvider';

interface IRouletteGameSceneProps {}

const [width, heigth] = [1100, 500];

const RouletteGameScene:FC<IRouletteGameSceneProps> = ({}) => {
    return (
        <div className='flex flex-col items-center'>
            <div>Title games</div>
            <GameSceneActionsProvider>
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
            </GameSceneActionsProvider>
        </div>
    )

}

export default RouletteGameScene;