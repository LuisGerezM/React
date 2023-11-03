import { ElementLoad } from './styles';

export const ElementSpinner = ({ loadClass = '' }) => {
  return (
    <ElementLoad
      className={`element-spinner loadingio-spinner-wedges-ojfw1t9sav ${loadClass}`}
      data-testid='element-spinner'
    >
      <div className='ldio-yqdx3npkn1'>
        <div>
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
        </div>
      </div>
    </ElementLoad>
  );
};
