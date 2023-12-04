import { FC, ReactNode } from 'react';
import RouletteTable from '../../ui/RouletteTable/RouletteTable';
import BetPanel from '../../ui/RouletteTable/BetPanel/BetPanel';

interface IGameSceneUIProps {
    children: ReactNode;
}

const GameSceneUI: FC<IGameSceneUIProps> = ({children}) => {
    return (
        <div className='relative'>
            <div className='absolute right-[5%] top-[40%] text-white'>
                <RouletteTable />
            </div>
            
            <div className='absolute right-[5%] top-[5%] text-white'>
                <BetPanel />
            </div>
            {children}
        </div>
    )
}

export default GameSceneUI;