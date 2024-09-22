import { useLocation } from "react-router-dom";

function Detail() {
    const location = useLocation();
    const mascota = location.state?.mascota;

    if (!mascota) {
        return <div>No se encontró la mascota.</div>;
    }

    return (
        <div>
            <h2>{mascota.nombre}</h2>

            <img src={mascota.foto} alt={mascota.nombre} />
            <h2>{mascota.raza}</h2>
        </div>
    );
}

export default Detail;