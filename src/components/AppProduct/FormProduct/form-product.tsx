import { Button, Form } from "react-bootstrap";
import { useForm } from "../../../hooks/useForm";
import { Product } from "../../../interfaces/product.interface";

interface IPropsFormProduct {
    handleAddProduct: (product: Product) => void
}
export const FormProduct = ({handleAddProduct} : IPropsFormProduct) => {

    const {handleChange, values, resetForm} = useForm({
        nombre: '',
        imagen: '',
        precio: 0
    });

    const handleSubmitForm = () => {
        handleAddProduct(values);
        resetForm();
    }

    return (
        <>
            <Form className="p-4 rounded bg-dark">
            <h2>Formulario</h2>
            <Form.Group controlId="formNombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control 
                    type="text" 
                    name="nombre" 
                    placeholder="Nombre producto" 
                    value={values.nombre}
                    onChange={handleChange}>
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="formImagen">
                <Form.Label>Imagen</Form.Label>
                <Form.Control 
                    type="text" 
                    name="imagen" 
                    placeholder="Imagen producto" 
                    value={values.imagen}
                    onChange={handleChange}>
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="formPrecio">
                <Form.Label>Precio</Form.Label>
                <Form.Control 
                    type="number" 
                    name="precio" 
                    placeholder="Precio producto" 
                    value={values.precio}
                    onChange={handleChange}>
                </Form.Control>
            </Form.Group>
            <div className="mt-4">
                <Button onClick={handleSubmitForm}>Submit</Button>
            </div>
        </Form>
        </>
    );
}