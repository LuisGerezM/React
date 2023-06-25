import { SubTitle } from './styles';

const CustomSubTitle = ({
  subtitleClass = 'custom-subtitle',
  text,
  color,
  fontWeight = 'bold',
}) => {
  return (
    <SubTitle className={subtitleClass} color={color} fontWeight={fontWeight}>
      {text}
    </SubTitle>
  );
};
export default CustomSubTitle;
