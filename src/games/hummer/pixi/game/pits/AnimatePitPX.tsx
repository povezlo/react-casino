import { AnimatedSprite } from '@pixi/react';
import { FC } from 'react';
import * as PIXI from 'pixi.js';
import { HummerPitState, IHummerPit } from '../../../slices/models/Pit';
import { useAppDispatch } from '../../../../../app/store/hook';
import { setHummerPits, setHummerScore } from '../../../slices/HummerCoreSlice';
import { useEffect } from 'react';

interface IHummerAnimatePitPXProps {
    frames?: PIXI.Texture<PIXI.Resource>[];
    position: IHummerPit['position'];
    idx: number;
}

const WIN_SCORE = 100;

const HummerAnimatePitPX: FC<IHummerAnimatePitPXProps> = ({
    frames,
    position,
    idx,
    }) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const hideTimeout = setTimeout(() => {
        dispatch(setHummerPits({
            currentIndex: idx,
            state: HummerPitState.EMPTY,
        }))
        }, 5000);

        return () => clearTimeout(hideTimeout);
    }, [])
    const onClick = () => {
        dispatch(setHummerScore(WIN_SCORE))
        dispatch(setHummerPits({
        currentIndex: idx,
        state: HummerPitState.EMPTY,
        }))
    }
    if (!frames?.length) {
        return <></>
    }
    return (
        <AnimatedSprite
        animationSpeed={0.05}
        isPlaying={true}
        textures={frames}
        anchor={{
            x: 0.5,
            y: 1
        }}
        position={position}
        loop={false}
        interactive={true}
        onmousedown={onClick}
        />
    )
};

export default HummerAnimatePitPX;