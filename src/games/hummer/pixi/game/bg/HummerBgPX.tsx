import { Container, Sprite } from '@pixi/react';
import { FC } from 'react';
import bg from '../../../../../assets/hammer/bg.jpg';

interface IHummerBgPXProps {

}

const HummerBgPX:FC<IHummerBgPXProps> = ({}) => {
    return (
        <Container>
        <Sprite
            x={0}
            y={0}
            image={bg}
        />
        </Container>
    )
};

export default HummerBgPX;