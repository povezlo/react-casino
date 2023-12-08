import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../app/store/hook';
import { selectRouletteSpinCurrentNumber, setRouletteSpinStartSpeed } from '../../slices/rouletteSpinSlice';
import { RouletteLifeCycle, RouletteWinOrLose, selectRouletteLifecycle, selectRouletteWinOrLose, setRouletteLifecycle } from '../../slices/rouletteSlice';
interface IEventPanelProps {}

const EventPanel:FC<IEventPanelProps> = ({}) => {
    const lifecycle = useAppSelector(selectRouletteLifecycle);
    const winOrLose = useAppSelector(selectRouletteWinOrLose);
    const currentNumber = useAppSelector(selectRouletteSpinCurrentNumber);
    const dispatch = useAppDispatch();

    const onStart = () => {
        dispatch(setRouletteSpinStartSpeed());
        dispatch(setRouletteLifecycle(RouletteLifeCycle.PLAY))
    };

    return (
        <div>
        {lifecycle === RouletteLifeCycle.READY_TO_START && (
            <button onClick={onStart}>start</button>
        )}
        {lifecycle === RouletteLifeCycle.PLAY && (
            <div>Play</div>
        )}
        {lifecycle === RouletteLifeCycle.FINISHED && (
            <div>Calcucating</div>
        )}
        {lifecycle === RouletteLifeCycle.INFO && (
            <div className="flex gap-4">
            <div>
                {winOrLose === RouletteWinOrLose.WIN && 'Win!'}
                {winOrLose === RouletteWinOrLose.LOSE && 'Lose'}
            </div>
            <div>{currentNumber}</div>
            </div>
        )}
        </div>
    )
};

export default EventPanel;