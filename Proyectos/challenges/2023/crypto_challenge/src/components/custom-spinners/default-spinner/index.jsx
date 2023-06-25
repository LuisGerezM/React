import { DefaultLoad } from './styles';

export const DefaultSpinner = ({ loadClass = '' }) => {
  return (
    <DefaultLoad className={`default-load ${loadClass}`}>
      <div className='lds-spinner '>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </DefaultLoad>
  );
};
