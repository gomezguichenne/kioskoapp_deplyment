import Image from 'next/image'
import useKiosko from '../hooks/useKiosko'
import Categoria from './Categoria'

const Sidebar = () => {

      const { categorias } = useKiosko()

      return (
            <>
                  <Image
                        width={100}
                        height={50}
                        src="/assets/img/logo.svg"
                        alt="Imagen logotipo"
                  />

                  <nav className='mt-10'>
                        { categorias.map(categoria => (
                              <Categoria
                                    key={categoria.id}
                                    categoria={categoria}
                              />
                        )) }
                  </nav>
            </>
      )
}

export default Sidebar