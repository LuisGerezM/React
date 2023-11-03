import { CustomText } from '../typography';

import { CustomLink } from './styles';

export const LinkReactRouter = ({
  linkClass = '',
  to,
  text = 'Página principal',
  icon,
  wrapLink = '',
  withShadow = true,
  btnstylized = undefined,
  width = undefined,
}) => {
  return (
    <div className={`link-rr-wraplink ${wrapLink}`}>
      <CustomLink
        className={`link-rr-wraplink-customlink ${linkClass}`}
        to={to}
        btnstylized={btnstylized}
        withshadow={withShadow.toString()}
        width={width}
      >
        {icon} <CustomText text={text} />
      </CustomLink>
    </div>
  );
};
