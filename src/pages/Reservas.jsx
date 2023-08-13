import { useState } from "react"
import { db } from "../firebase/firebase"


export const Reservas = () => {
  const initialReserva = {
    nombre: '',
    comensales: '',
    fecha: '',
    hora:''
  }


  const [reserva, setReserva] = useState(initialReserva)



  const onSubmit = async (e) => {
    e.preventDefault()
    await db.collection("Reservaciones").add(reserva)


    console.log('Formulario Enviado')
    console.log(reserva)
  }


const onChange =(e)=>{
  
  console.log(e.target.name)
  console.log(e.target.value)

  setReserva({...reserva, [e.target.name]: e.target.value})
}



  return (
    <>
      <h1>Reservas Page</h1>
      <form className="form gap-5 p-5" onSubmit={onSubmit}>
        <input type="text" className="form-control mt-3" name="nombre" placeholder="Ingrese su Nombre..." value={reserva.nombre} onChange={onChange}/>
        <input type="number" className="form-control mt-3" name="comensales" placeholder="Cantidad de Comensales..." value={reserva.comensales} onChange={onChange} />
        <input type="date" className="form-control mt-3" name="fecha" placeholder="Fecha de Reserva..." value={reserva.fecha} onChange={onChange}/>
        <input type="time" className="form-control mt-3" name="hora" placeholder="Hora de Reserva" value={reserva.hora} onChange={onChange}/> 
        <button type="submit" className="btn btn-primary mt-3" >Enviar Reserva</button>
      </form>
    </>
  )
}

