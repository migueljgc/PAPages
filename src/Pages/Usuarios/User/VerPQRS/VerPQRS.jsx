import { Link } from 'react-router-dom';
import './VerPQRS.css';
import { MenuUser } from '../../../../../componentes/Menu';
import { BackGraund } from '../../../../../componentes/BackGraund';
import { TablaPQRS } from '../../../../../componentes/TablaPQRS';

export const VerPQRS = () => {
    return (
        <div className='VerPQRS'>
            <BackGraund/>
            <MenuUser/>
                <div className="gestion">
                    <p>
                        <TablaPQRS/>
                    </p>

                </div>
            </div>

    );
};



