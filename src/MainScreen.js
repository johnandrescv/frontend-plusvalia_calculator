import React, { useEffect, useState } from 'react'
import { useForm } from './hooks/useForm';

export const MainScreen = () => {
    const [plusvalia, setPlusvalia] = useState(0);
    const [alcabalas, setAlcabalas] = useState(0);
    const [concejo, setConcejo] = useState(0);
    const [junta, setJunta] = useState(0);
    const [{venta, costo}, handleInputChange] = useForm({
        venta: 0, costo: 0
    });

    useEffect(() => {
        const ventaFinal = Number(venta);
        const costoFinal = Number(costo);
        let utilidad = ventaFinal-costoFinal;
        const rebajas = utilidad*0.35;
        utilidad = utilidad - rebajas;
        const desvalorizacion = utilidad * 0.1131;
        utilidad = utilidad - desvalorizacion;
        setPlusvalia(utilidad*0.1);
    }, [venta, costo]);

    useEffect(() => {
        const ventaFinal = Number(venta);
        setAlcabalas(ventaFinal*0.01);
        setConcejo(ventaFinal*0.00001);
        setJunta(ventaFinal*0.003);
    }, [venta, costo]);

    return (
        <div className="container">
            <div className="py-5 text-center">
                <img className="d-block mx-auto mb-4" src="./logo192.png" alt="" width="72"
                    height="72" />
                <h2>Calculadora para calcular la plusvalía</h2>
                <p className="lead">Esta aplicación permite calcular el impuesto a la plusvalía en Ecuador. Ingresando el valor de la venta de la casa
                y el valor de costo de la propiedad. Aplicamos la fórmula para obtener el resultado.
                </p>
            </div>

            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h4 className="mb-3">Necesitamos los siguientes datos</h4>
                    <form className="needs-validation">
                        <div className="mb-3">
                            <label>Valor Venta</label>
                            <div className="input-group">
                                <input type="number" className="form-control" onChange={handleInputChange} name="venta" placeholder="Ejemplo: 30000" />
                            </div>
                        </div>

                        <div className="mb-3">
                            <label>Valor Costo</label>
                            <input type="number" className="form-control" onChange={handleInputChange} name="costo" placeholder="Ejemplo: 20000" />
                        </div>

                        <hr className="mb-4" />
                        <div className="mb-3">
                            <label>Impuesto a la Plusvalía</label>
                            <input type="number" className="form-control" value={plusvalia} disabled />
                        </div>
                        <hr className="mb-4" />
                        <div className="mb-3">
                            <label>Alcabalas</label>
                            <input type="number" className="form-control" value={alcabalas} disabled />
                        </div>
                        <div className="mb-3">
                            <label>Consejo Provincial</label>
                            <input type="number" className="form-control" value={concejo} disabled />
                        </div>
                        <div className="mb-3">
                            <label>Junta de Beneficiencia</label>
                            <input type="number" className="form-control" value={junta} disabled />
                        </div>
                    </form>
                </div>
            </div>

            <footer className="my-5 pt-3 text-muted text-center text-small">
                <p className="mb-1">© 2020 OM Bienes Raíces</p>
            </footer>
        </div>
    );
};
