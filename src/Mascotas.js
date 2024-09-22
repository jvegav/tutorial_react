import { useNavigate } from "react-router-dom";
import Mascota from "./Mascota";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";



function Mascotas() {
    const navigate = useNavigate();

    const [mascotas, setMascotas] = useState([]);
    useEffect(() => {
        const URL =
            "https://gist.githubusercontent.com/josejbocanegra/829a853c6c68880477697acd0490cecc/raw/99c31372b4d419a855e53f0e891246f313a71b20/mascotas.json";
        fetch(URL)
            .then((data) => data.json())
            .then((data) => {
                setMascotas(data);
            });
    }, []);

    const handleDetailClick = (mascota) => {
        navigate(`/mascotas/${mascota.id}`, { state: { mascota } });
    };

    return (
        <div className="container">
            <h2 className="mt-2">Listado de mascotas</h2>
            <hr></hr>
            <Row>
                {mascotas.map((mascota) => (
                    <Col key={mascota.id}>
                        <Mascota mascota={mascota} onDetailClick={handleDetailClick} />
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default Mascotas;