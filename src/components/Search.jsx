import React from 'react';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { MdOutlineTravelExplore } from 'react-icons/md';

const Search = () => {
  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
      <div className='lg:col-span-2 flex flex-col justify-evenly'>
        <div>
          <h2>VACACIONES DE LUJO PARA DOS PERSONAS</h2>
          <p className='py-4'>
          Ven a disfrutar unas vacaciones de lujo en el Caribe con todo incluido para parejas en WATA Resorts. 
          Nuestros resorts de playa de lujo, ubicados a lo largo de los escenarios tropicales más hermosos y 
          las playas exquisitas en Santa Lucía, Jamaica, Antigua, Bahamas, Granada, Barbados y Curaçao, cuentan 
          con comidas gourmet ilimitadas, bares exclusivos que sirven licores y vinos de primera calidad. Si está 
          planeando una boda, WATA es el líder en bodas y paquetes de luna de miel en el Caribe.
          </p>
        </div>
        <div className='grid sm:grid-cols-2 gap-8 py-4'>
          <div className='flex flex-col lg:flex-row items-center text-center'>
            <button>
              <RiCustomerService2Fill size={50} />
            </button>
            <div>
                <h3 className='py-2'>ATENCION AL CLIENTE</h3>
                <p className='py-1'>LINEA DE ATENCION AL CLIENTE 24/7 CON COBERTURA MUNDIAL.</p>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row items-center text-center'>
            <button id='search'>
              <MdOutlineTravelExplore size={50} />
            </button>
            <div>
                <h3 className='py-2'>SERVICIO LIDER</h3>
                <p className='py-1'>MAS DE 10.000 CLIENTES CERTIFICAN NUESTRA CALIDAD.</p>
            </div>
          </div>
        </div>
      </div>

      <div>
          <div className='border text-center'>
              <p className='pt-2'>OBTEN UN DESCUENTO DEL 10% OFF</p>
              <p className='py-4'>12 HORAS FALTANTES</p>
              <p className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-2 cursor-pointer'>RESERVA Y AHORRA</p>
          </div>
          <form className='w-full'>
              <div className='flex flex-col my-2'>
                  <label>Destino</label>
                  <select className='border rounded-md p-2'>
                      <option> </option>
                      <option>Bora Bora</option>
                      <option>Islas Maldivias</option>
                      <option>Islas Antiguas</option>
                      <option>Cozumel</option>
                      <option>Jamaica</option>
                      <option>Cayo Hueso</option>
                  </select>
              </div>
              <div className='flex flex-col my-4'>
                  <label>Check-In</label>
                  <input className='border rounded-md p-2' type="date" />
              </div>
              <div className='flex flex-col my-2'>
                  <label>Check-Out</label>
                  <input className='border rounded-md p-2' type="date" />
              </div>
                <button className='w-full my-4'>Tarifas y Disponibilidad</button>
          </form>
      </div>
    </div>
  );
};

export default Search;
