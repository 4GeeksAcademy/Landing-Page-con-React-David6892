import React from "react";

const Jumbotron = () => {
    return (
        <>
            <div class="container">

                <div className="p-5 mb-4 bg-light rounded-3">
                    <div className="container-fluid py-5 ">
                        <h1 className="display-5 fw-bold ">
                            A Warm Welcome!
                        </h1>

                        <p className="col-md-8 fs-4">
                            Mediante una serie de utilidades, puedes crear este jumbotron,
                            similar al de versiones anteriores de Bootstrap. Consulta los
                            ejemplos a continuación para ver cómo puedes modificarlo y
                            personalizarlo a tu gusto.
                        </p>

                        <button className="btn btn-primary btn-lg" type="button">
                            Call to action!
                        </button>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Jumbotron