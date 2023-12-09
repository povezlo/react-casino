import { FC, ReactNode, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../app/store/hook';
import { RouletteLifeCycle, RouletteWinOrLose, clearRoulette, selectActiveNumber, selectCurrentBet, selectRouletteLifecycle, selectRouletteWinBet, setRouletteLifecycle, setRouletteWinOrLose } from '../../slices/rouletteSlice';
import { clearRouletteSpin, selectRouletteSpinCurrentNumber } from '../../slices/rouletteSpinSlice';
import { setBalance } from '../../../../entities/wallet/slices/walletSlices';

interface IGameSceneActionsProviderProps {
    children: ReactNode;
}

const GameSceneActionsProvider: FC<IGameSceneActionsProviderProps> = ({ children }) => {
    const lifecycle = useAppSelector(selectRouletteLifecycle);
    const activeNumber = useAppSelector(selectActiveNumber);
    const currentNumber = useAppSelector(selectRouletteSpinCurrentNumber);
    const currentBet = useAppSelector(selectCurrentBet);
    const winBet = useAppSelector(selectRouletteWinBet);

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (lifecycle === RouletteLifeCycle.FINISHED) {
            if (activeNumber === currentNumber) {
                // win case
                dispatch(setBalance(currentBet * winBet));
                dispatch(setRouletteWinOrLose(RouletteWinOrLose.WIN));
            } else {
                // Lose case
                dispatch(setBalance(-currentBet));
                dispatch(setRouletteWinOrLose(RouletteWinOrLose.LOSE));
            }
            
            dispatch(setRouletteLifecycle(RouletteLifeCycle.INFO));
        }
    }, [lifecycle, currentBet, winBet, dispatch, activeNumber, currentNumber]);

    useEffect(() => {
        if (lifecycle === RouletteLifeCycle.INFO) {
            const lifeTimeout = setTimeout(() => {
                dispatch(setRouletteLifecycle(RouletteLifeCycle.READY_TO_START));
                dispatch(clearRoulette());
                dispatch(clearRouletteSpin());
            }, 3000);

            //return clearTimeout(lifeTimeout);
        }
    })

    return (
        <>
        {children}
        </>
    )
}

export default GameSceneActionsProvider;