import { FC, useEffect, useState } from 'react';
import { planetsApi } from '../api/planetsApi';
import { Planet } from '../interfaces/planet.interface';
import { EditPlanetForm } from './ui/EditPlanetForm';
import { PlanetList } from './ui/PlanetList';

const Planets: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [planets, setPlanets] = useState<Planet[]>([]);

  useEffect(() => {
    planetsApi.get('/').then((res) => {
      setPlanets(res.data);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <h4 className="text-2xl font-thin mb-4">Agregar y mantener planetas</h4>
      <hr className="border-gray-300 mb-4" />
      {/* Formulario para agregar un planeta */}
      <EditPlanetForm />

      {/* Lista de planetas Grid*/}
      {isLoading ? <p>Cargando...</p> : <PlanetList planets={planets} />}
    </>
  );
};

export default Planets;
