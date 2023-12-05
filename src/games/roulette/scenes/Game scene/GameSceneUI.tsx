import { FC, ReactNode } from 'react';
import RouletteTable from '../../ui/RouletteTable/RouletteTable';
import BetPanel from '../../ui/BetPanel/BetPanel';
import InfoPanel from '../../ui/InfoPanel/InfoPanel';

interface IGameSceneUIProps {
    children: ReactNode;
}

const GameSceneUI: FC<IGameSceneUIProps> = ({children}) => {
    return (
        <div className='relative'>
            <div className="absolute left-0 right-0 top-[5%] text-white">
                <InfoPanel />
            </div>
            <div className='absolute right-[5%] top-[40%] text-white'>
                <RouletteTable />
            </div>
            
            <div className='absolute right-[15%] top-[30%] text-white'>
                <BetPanel />
            </div>
            {children}
        </div>
    )
}

export default GameSceneUI;