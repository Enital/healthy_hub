import { Vortex } from 'react-loader-spinner';

import css from './loader.module.css';

function Loader() {
  return (
    <div className={css.loader}>
      <Vortex
        visible={true}
        height="120"
        width="120"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={['#E3FFA8', '#B6B6B6', '#FFF', '#E3FFA8', '#B6B6B6', '#FFF']}
      />
    </div>
  );
}

export default Loader;
