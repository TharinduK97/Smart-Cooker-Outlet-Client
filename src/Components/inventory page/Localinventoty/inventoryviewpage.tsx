

function Inventoryviewpage() {

    return (
        <div>

            <div className="container mx-auto ">

                <div className="grid grid-cols-7 gap-4">

                    <div className="col-start-3 col-span-3 ...">

                        <div className="card card-bordered">
                            <figure>
                                <img src="https://picsum.photos/id/1005/400/250" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Top image
                                    <div className="badge mx-2 badge-secondary">NEW</div>
                                </h2>
                                <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>
                                <div className="justify-end card-actions">
                                    <button className="btn btn-secondary">More info</button>
                                </div>
                            </div>
                        </div>
                      

                    </div>
                </div>
            </div>


        </div>
    )
}

export default Inventoryviewpage