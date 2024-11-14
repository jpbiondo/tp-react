import { Card, Container } from "react-bootstrap"
import { Product } from "../../../interfaces/product.interface"

interface IPropsListProducts {
    products: Product[]
}
export const ListProducts = ({products}:IPropsListProducts) => {
    return ( 
        <Container fluid className="bg-dark rounded p-4">
            <h2>Productos</h2>
            {products.length <= 0 && <h4>No hay productos</h4>}
            <div className=" m-2 d-grid gap-2"
            style={{
                gridTemplateColumns:"repeat(2,1fr)",
                justifyItems:"center",
                alignItems:"center"
            }}>
                {products.map((product: Product, index:number) => (
                    <Card key={index} style={{width: "18rem"}} bg="dark" border="primary" className="border-2">
                        <Card.Img variant="top" src={product.imagen} style={{ height: "18rem"}} />
                        <Card.Body>
                            <Card.Title>
                                {product.nombre}
                            </Card.Title>
                            <Card.Text>
                                $ {product.precio}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </Container>
    );
}