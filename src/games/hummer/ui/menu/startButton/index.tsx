import { useAppDispatch } from '../../../../../app/store/hook';
import { HummerScenes, setHummerScene } from '../../../slices/HummerCoreSlice';

export const HummerMenuStartButton = ({}) => {
    const dispatch = useAppDispatch();
    const onStart = () => {
        dispatch(setHummerScene(HummerScenes.GAME));
    }
    return (
        <button onClick={onStart}>
        Start game
        </button>
    );
}