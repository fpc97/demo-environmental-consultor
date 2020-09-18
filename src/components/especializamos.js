import React from 'react'
import { Link } from 'gatsby'

import FollowingImage from './following-image'

const Especializamos = () => {
  return (
    <article className="especializamos">
      <div className="especializamos__container container">
        <h3 className="especializamos__titulo">Áreas en las que Nos Especializamos</h3>
        <ul className="especializamos__lista">
          
          <li className="especializamos__item">
            <h4 className="especializamos__h4">Fauna y ambiente</h4>
            <p className="especializamos__descripcion">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl</p>
            <Link to="/servicios" className="especializamos__leer-mas">Leer mas</Link>
          </li>
          
          <li className="especializamos__item">
            <h4 className="especializamos__h4">Fauna y ambiente</h4>
            <p className="especializamos__descripcion">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl</p>
            <Link to="/servicios" className="especializamos__leer-mas">Leer mas</Link>
          </li>
          <li className="especializamos__item">
            <h4 className="especializamos__h4">Fauna y ambiente</h4>
            <p className="especializamos__descripcion">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl</p>
            <Link to="/servicios" className="especializamos__leer-mas">Leer mas</Link>
          </li>
          <li className="especializamos__item">
            <h4 className="especializamos__h4">Fauna y ambiente</h4>
            <p className="especializamos__descripcion">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl</p>
            <Link to="/servicios" className="especializamos__leer-mas">Leer mas</Link>
          </li>
          <li className="especializamos__item">
            <h4 className="especializamos__h4">Fauna y ambiente</h4>
            <p className="especializamos__descripcion">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl</p>
            <Link to="/servicios" className="especializamos__leer-mas">Leer mas</Link>
          </li>

        </ul>

        <div className="especializamos__ilustracion">
          <FollowingImage />
        </div>
      </div>
    </article>
  )
}

export default Especializamos