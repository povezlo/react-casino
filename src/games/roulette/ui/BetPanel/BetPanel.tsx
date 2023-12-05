import { FC } from 'react';
import { setCurrentBet } from '../../slices/rouletteSlice';
import bet50 from '../../../../assets/roulette/bet-50.png';
import bet100 from '../../../../assets/roulette/bet-100.png';
import bet200 from '../../../../assets/roulette/bet-200.png';
import bet400 from '../../../../assets/roulette/bet-400.png';
import bet800 from '../../../../assets/roulette/bet-800.png';
import { useAppDispatch } from '../../../../app/store/hook';

interface IBetPanelProps {}

const BETS = [
    {
        id: 1,
        value: 50,
        image: bet50,
    }, 
    {
        id: 2,
        value: 100,
        image: bet100,
    },
    {
        id: 3,
        value: 200,
        image: bet200,
    },
    {
        id: 4,
        value: 400,
        image: bet400,
    },
    {
        id: 5,
        value: 800,
        image: bet800,
    }
]

const BetPanel:FC<IBetPanelProps> = ({}) => { 
    const dispatch = useAppDispatch();
    const pickBet = (value: number) => {
        dispatch(setCurrentBet(value));
    }

    return (
        <div>
            <div className='flex gap-4 items-center'>
                {BETS.map(({value, image, id}) => (
                    <div
                        key={id}
                        onClick={() => pickBet(value)}
                        onContextMenu={e => {
                            e.preventDefault();
                            pickBet(-value);
                        }}
                        className='cursor-pointer hover:scale-[1.05] transition-all'
                    >
                        <img src={image} alt={`bet-${value}`} />
                    </div>
                ))}
            </div>
        </div>
    )

}

export default BetPanel;
