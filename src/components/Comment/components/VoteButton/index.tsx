
import PlusSvg from '../../../../assets/plus.svg?component';
import MinusSvg from '../../../../assets/minus.svg?component';
import * as SC from './vote-button.styles';

interface VoteButtonProps extends React.HTMLAttributes<HTMLElement> {
    type: 'plus' | 'minus'
};

const VoteButton = ({
    type
}: VoteButtonProps) => {


    return (
        <SC.Container>

            { type === 'minus' ? (
                <MinusSvg />
            ) : (
                <PlusSvg />
            ) }
            
        </SC.Container>
    )
}

export default VoteButton
