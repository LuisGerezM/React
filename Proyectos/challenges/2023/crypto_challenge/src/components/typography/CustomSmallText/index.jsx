import { SmallText } from './styles';

const CustomSmallText = ({ smallTextClass = '', text, color }) => {
  return (
    <SmallText className={`custom-small-text ${smallTextClass}`} color={color}>
      {text}
    </SmallText>
  );
};
export default CustomSmallText;
