import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../../app/store/hook';
import { HummerScenes, selectHummerGameOver, setHummerScene } from '../../../slices/HummerCoreSlice';

interface ILosePanelProps {}

const LosePanel: FC<ILosePanelProps> = ({}) => {
    const dispatch = useAppDispatch();
    const gameOver = useAppSelector(selectHummerGameOver)

    useEffect(() => {
        if (gameOver) {
            const loseTimeOut = setTimeout(() => {
                dispatch(setHummerScene(HummerScenes.MENU));
            }, 3000);

            return () => clearTimeout(loseTimeOut);
        }
    }, [gameOver]);

    return (
        <>
            {
                gameOver && (
                    <div>
                        Lose!
                    </div>
                )
            }
        </>
    )
}

export default LosePanel;
