import { FC, ReactNode } from 'react';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../app/store/hook';
import { SlotLifecycle, SlotWinOrLose, selectSlotCurrentBet, selectSlotLifecycle, selectSlotWinOrLose } from '../../slices/SlotSlice';
import { setBalance } from '../../../../entities/wallet/slices/walletSlices';

interface IBalanceProviderProps {
    children: ReactNode;
};

const KOEF_WIN = 10;

const BalanceProvider:FC<IBalanceProviderProps> = ({
    children
    }) => {
    const lifecylce = useAppSelector(selectSlotLifecycle);
    const isPlaying = lifecylce === SlotLifecycle.PLAY;
    const win = useAppSelector(selectSlotWinOrLose);
    const currentBet = useAppSelector(selectSlotCurrentBet);

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (isPlaying){
        dispatch(setBalance(win === SlotWinOrLose.WIN ? currentBet * KOEF_WIN : -currentBet));
        }
    }, [lifecylce])
    return (
        <>
        {children}
        </>
    )
};

export default BalanceProvider;