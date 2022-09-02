import React from "react";

export default function Agendar () {
    return(
        
            <div>
                <div>
                    <h1>DEVsafiamos el sistema</h1>
                    <p>¿Escasez de talento Senior? No te preocupes, en Devsafio encontrarás el talento que necesitas en nuestro programa Mentorías.

                        Completa el formulario y te contactaremos en breve para acompañarte en la búsqueda de Talento TI que necesitas.
                    </p>
                    <img src="../public/assets/images/agendar.png" alt="" />
                    <button> Agendar</button>
                </div>
                <div>
                    <h1>Si eres empresa y buscas talento TI, déjanos tu información en este formulario. En breve te contactaremos:</h1>
                    <form action="">
                        <div>
                            <label htmlFor="">Nombre *</label>
                            <input type="text" />
                        </div>

                        <div>
                            <label htmlFor="">Apellido *</label>
                            <input type="text" />
                        </div>

                        <div>
                            <label htmlFor="">E-mail corporativo *</label>
                            <input type="text" />
                        </div>

                        <div>
                            <label htmlFor="">Numero de telefono</label>
                            <input type="text" />
                        </div>

                        <div>
                            <label htmlFor="">A qué empresa perteneces? *</label>
                            <input type="text" />
                        </div>
                      
                        <div>
                            <h3>Cargo/área de preferencia que buscas contratar:*</h3>
                            <div>
                                <input type="checkbox" />
                                <label htmlFor="">Desarrollador Front End</label>
                            </div>
                            <div>
                                <input type="checkbox" />
                                <label htmlFor="">Desarrollador Full Stack / Backend</label>
                            </div>
                            <div>
                                <input type="checkbox" />
                                <label htmlFor="">Diseñador UX/UI</label>
                            </div>
                                <div>
                            <input type="checkbox" />
                                <label htmlFor="">Analista QA</label>
                            </div>
                            <div>
                                <input type="checkbox" />
                                <label htmlFor="">Desarrollador Mobile</label>
                            </div>
                            <div>
                                <input type="checkbox" />
                                <label htmlFor="">Datos</label>
                            </div>
                            <div>
                                <input type="checkbox" />
                                <label htmlFor="">Otra</label>
                            </div>                            
                            <p>¿Dudas? Déjalas acá!</p>
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                            
                            <div>
                                CAPTCHA
                                <iframe src="" frameborder="1">captcha</iframe>
                            </div>
                        <input type="button" value="Enviar" />
                        </div>
                        </form>
                </div>
            </div>
        
    )
}