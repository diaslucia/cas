import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./contacto.scss";

const Contacto = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
      reset();
      axios.post('https://formsubmit.co/emaildelcliente', {
          data
        })
        .then(function (response) {
            console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="contacto">
      <h1>Dejanos tu consulta</h1>
      <div>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="principal">
              <label>
                <div>
                  <span style={{marginRight: "0.2rem"}}>Nombre*</span>
                  {errors.Nombre?.type === "required" && (
                    <FontAwesomeIcon className="iconHamb" icon={faCircleExclamation} style={{color: "D93C40"}}/>
                  )}
                </div>
                <input
                  type="text"
                  className="inputNombre"
                  {...register("Nombre", {
                    required: true,
                    pattern: /^[A-Za-z-ZñÑáéíóúÁÉÍÓÚ\s]+$/i,
                  })}
                />
              </label>
              <label>
              <div>
                <span style={{marginRight: "0.2rem"}}>Apellido*</span>
                {errors.Apellido?.type === "required" && (
                    <FontAwesomeIcon className="iconHamb" icon={faCircleExclamation} style={{color: "D93C40"}}/>
                    )}
                    </div>
                <input
                  type="text"
                  {...register("Apellido", {
                    required: true,
                    pattern: /^[A-Za-z-ZñÑáéíóúÁÉÍÓÚ\s]+$/i,
                  })}
                />
              </label>
            </div>
            <label>
            <div>
              <span style={{marginRight: "0.2rem"}}>Email*</span>
              {errors.Email?.type === "required" && (
                  <FontAwesomeIcon className="iconHamb" icon={faCircleExclamation} style={{color: "D93C40"}}/>
                  )}
                </div>
              <input
                type="email"
                {...register("Email", { required: true, maxLength: 50 })}
              />
            </label>
            <label>
            <div>
              <span style={{marginRight: "0.2rem"}}>Asunto*</span>
              {errors.Asunto?.type === "required" && (
                  <FontAwesomeIcon className="iconHamb" icon={faCircleExclamation} style={{color: "D93C40"}}/>
                  )}
                  </div>
              <select
                {...register("Asunto", { required: true, maxLength: 50 })}
              >
                <option value="">Elige el motivo ▼</option>
                <option value="Seguro de vida">Seguro de vida</option>
                <option value="Seguro de salud">Seguro de salud</option>
                <option value="Seguro de casa">Seguro de casa</option>
                <option value="Seguro de auto">Seguro de auto</option>
                <option value="Seguro de moto">Seguro de moto</option>
                <option value="Seguro de ciclistas">Seguro de ciclistas</option>
                <option value="Seguro de mascotas">Seguro de mascotas</option>
                <option value="RC Independientes">RC Independientes</option>
                <option value="ART">ART</option>
                <option value="AP">AP</option>
              </select>
            </label>
            <label>
            <div>
              <span style={{marginRight: "0.2rem"}}>Mensaje*</span>
              {errors.Mensaje?.type === "required" && (
                  <FontAwesomeIcon className="iconHamb" icon={faCircleExclamation} style={{color: "D93C40"}}/>
                  )}
                  </div>
              <textarea
                type="textarea"
                {...register("Mensaje", {
                  required: true,
                  pattern: /^[0-9-A-Za-z-ZñÑáéíóúÁÉÍÓÚ\s-/-*.,-]+$/i,
                })}
              />
            </label>
            <label>
              <button className="button" type="submit">Enviar</button>
            </label>
          </form>
        </div>
        <div>
          <p className="principal">Comunicate por whatsapp</p>
          <p className="secundario">(+54 11) 4477-9911</p>
          <p className="principal">Consultas generales</p>
          <p className="secundario">casobrino@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
