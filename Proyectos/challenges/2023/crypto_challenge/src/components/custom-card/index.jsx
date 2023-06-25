import { Card } from './styles';

const CustomCard = ({
  cardClass = '',
  children,
  height,
  width,
  alignItems,
  justifyContent,
  deleteMarginX = false,
}) => {
  return (
    <Card
      className={`custom-card ${cardClass}`}
      height={height}
      width={width}
      alignitems={alignItems}
      justifycontent={justifyContent}
      deletemarginx={deleteMarginX.toString()}
    >
      {children}
    </Card>
  );
};
export default CustomCard;
