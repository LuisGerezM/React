import { Title } from './styles';

const CustomTitle = ({ titleClass = 'custom-title', text, color }) => {
  return (
    <Title className={titleClass} color={color}>
      {text}
    </Title>
  );
};
export default CustomTitle;
