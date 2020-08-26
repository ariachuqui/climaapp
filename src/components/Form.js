import React, { useState } from "react";
import { useForm } from "../hooks/useForm";
import { validacion } from "../helpers/validacion";

export const Form = ({ setState }) => {
    const [warning, setWarning] = useState(false);

    const [values, handleInputChange, reset] = useForm({
        ciudad: "",
        pais: "",
    });

    const { ciudad, pais } = values;

    const handleSubmit = e => {
        e.preventDefault();

        if (validacion([ciudad, pais])) {
            setWarning(false)
            setState({...values, mostrar : true})
            reset()
        } else {
            setWarning(true)
        }
       
    }

    return (
        <div className="form-component">
            {warning && (
                <div className="warning">
                    <p>TODOS LOS CAMPOS SON OBLIGATORIOS</p>
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <p>Ciudad:</p>
                <input
                    className="input"
                    type="text"
                    placeholder="Ej. Las Vegas"
                    name="ciudad"
                    value={ciudad}
                    onChange={handleInputChange}
                />

                <p>Pais</p>
                <select
                    className="input"
                    name="pais"
                    value={pais}
                    onChange={handleInputChange}
                >
                    <option>-- Seleccione --</option>
                    <option>Estados Unidos</option>
                    <option>Mexico</option>
                    <option>Argentina</option>
                    <option>Colombia</option>
                    <option>Costa Rica</option>
                    <option>España</option>
                    <option>Peru</option>
                </select>

                <button type="submit">BUSCAR CLIMA</button>
            </form>
        </div>
    );
};
