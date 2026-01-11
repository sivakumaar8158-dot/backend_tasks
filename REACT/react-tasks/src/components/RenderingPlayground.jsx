

const RenderingPlayground = () => {
    const primitiveName = "John Doe";
    const primitiveAge = 30;

    const userObject = {
        name: "Jane Smith",
        city: "New York"
    };

    const skills = ["HTML", "CSS", "JS", "React", "Bootstrap"];

    const products = [
        { id: 1, name: "Laptop", price: 1200 },
        { id: 2, name: "Phone", price: 800 },
        { id: 3, name: "Headphones", price: 150 },
    ];

    return (
        <div className="card border-dashed p-4 my-4 bg-light">
            <div className="card-body">
                <h2 className="card-title h4 mb-4 text-secondary">Rendering Playground</h2>

                {/* Primitive Rendering */}
                <div className="mb-3">
                    <strong className="text-primary">Primitives:</strong> {primitiveName} <span className="text-muted">({primitiveAge})</span>
                </div>

                {/* Object Rendering */}
                <div className="mb-3">
                    <strong className="text-primary">Object:</strong> {userObject.name} from {userObject.city}
                </div>

                {/* Array of Strings */}
                <div className="mb-4">
                    <strong className="text-primary d-block mb-2">Skills (Array Map):</strong>
                    <div>
                        {skills.map((skill, index) => (
                            <span key={index} className="badge bg-success me-2 rounded-pill">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Array of Objects (Table) */}
                <div>
                    <strong className="text-primary d-block mb-2">Products (Table):</strong>
                    <div className="table-responsive">
                        <table className="table table-striped table-hover table-bordered">
                            <thead className="table-light">
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product) => (
                                    <tr key={product.id}>
                                        <td>{product.id}</td>
                                        <td>{product.name}</td>
                                        <td className="text-success fw-bold">${product.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RenderingPlayground;
