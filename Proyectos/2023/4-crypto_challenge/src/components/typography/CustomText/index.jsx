import { Text } from './styles';

const CustomText = ({
  textClass = '',
  text,
  color,
  fontWeight = 'light',
  textalign = 'start',
  title = '',
}) => {
  return (
    <Text
      className={`custom-text ${textClass}`}
      color={color}
      fontWeight={fontWeight}
      textalign={textalign}
      title={title}
    >
      {text}
    </Text>
  );
};
export default CustomText;
