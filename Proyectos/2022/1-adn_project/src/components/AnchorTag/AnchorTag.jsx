export const AnchorTag = ({ href, text }) => {
  return (
    <a href={href} rel="noopener noreferrer" target="_blank">
      {text}
    </a>
  );
};
