import { FC } from 'react';
import { useAppDispatch } from '../../../../app/store/hook';
import { setBalance } from '../../../../entities/wallet/slices/walletSlices';

interface IEventPanelProps {}

const EventPanel: FC<IEventPanelProps> = ({}) => {
    const dispatch = useAppDispatch();
    
    const onClick = () => {
        dispatch(setBalance(200));
    };

    return (
        <div>
            <button onClick={onClick}>start</button>
        </div>
    )
}

export default EventPanel;