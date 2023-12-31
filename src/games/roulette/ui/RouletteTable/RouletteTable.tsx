import { FC } from 'react';
import { ROULETTE_TABLE_NUMBERS } from './initData';
import { twMerge } from 'tailwind-merge';
import { useAppDispatch, useAppSelector } from '../../../../app/store/hook';
import { selectActiveNumber, setActiveNumber } from '../../slices/rouletteSlice';

interface IRouletteTableProps {}

const RouletteTable: FC<IRouletteTableProps> = ({}) => {
    const activeNumber = useAppSelector(selectActiveNumber);
    const dispatch = useAppDispatch();
    const handleClick = (number: number): void => {
        dispatch(setActiveNumber(number));
    }

    return (
        <div className='flex flex-wrap w-[600px]'>
            {ROULETTE_TABLE_NUMBERS.map(({number, color}) => (
                <div 
                    key={number}
                    onClick={() => handleClick(number)}
                    className={twMerge(
                        "w-[50px] h-[50px] flex flex-center justify-center items-center border border-solid border-white text-xl font-medium cursor-pointer hover:border-yellow",
                        color === 'red' && 'bg-red',
                        color === 'black' && 'bg-black',
                        activeNumber === number && 'border-yellow border-2',
                    )}
                    
                >
                    {number}
                </div>
            ))}
        </div>
    )
};

export default RouletteTable