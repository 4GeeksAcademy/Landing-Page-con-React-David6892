import React from "react";

const Card = () => {
    return (
        <>
            <div class="container">

            <div className="row row-cols-4 g-4">
                <div className="col-3">
                    <div className="card h-100">
                        <img src="https://picsum.photos/500/325" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                This is a wider card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </p>
                        </div>
                        <div className="card-footer bg-light text-center">
                            <small className="text-body-secondary">
                                <button type="button" class="btn btn-primary">Find Out More!</button>
                            </small>
                        </div>
                    </div>
                </div>

                <div className="col-3">
                    <div className="card h-100">
                        <img src="https://picsum.photos/500/325" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                This card has supporting text below as a natural lead-in to
                                additional content.
                            </p>
                        </div>
                        <div className="card-footer bg-light text-center">
                            <small className="text-body-secondary">
                                <button type="button" class="btn btn-primary">Find Out More!</button>
                            </small>
                        </div>
                    </div>
                </div>

                <div className="col-3">
                    <div className="card h-100">
                        <img src="https://picsum.photos/500/325" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                This is a wider card with supporting text below as a natural
                                lead-in to additional content. This card has even longer content
                                than the first to show that equal height action.
                            </p>
                        </div>
                        <div className="card-footer bg-light text-center">
                            <small className="text-body-secondary">
                                <button type="button" class="btn btn-primary">Find Out More!</button>
                            </small>
                        </div>
                    </div>
                </div>

                <div className="col-3">
                    <div className="card h-100">
                        <img src="https://picsum.photos/500/325" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                This is a wider card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </p>
                        </div>
                        <div className="card-footer bg-light text-center">
                            <small className="text-body-secondary">
                                <button type="button" class="btn btn-primary">Find Out More!</button>
                            </small>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Card