import styled from 'styled-components';
import Color from '../style/color';

const Text = styled.div`
    margin-bottom: 10px;
    margin-top: 10px;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
`;

const TitleText = styled(Text)`
    font-size: 25px;
    color: ${Color.babbelOrange}
`;

export { TitleText };
export default Text;