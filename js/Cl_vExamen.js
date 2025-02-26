import Cl_vEstudiante from "./Cl_vEstudiante.js";
import Cl_mEstudiante from "./Cl_mEstudiante.js";
export default class Cl_vExamen{
    constructor(){
    this.controlador = null
    this.lblvalor = document.getElementById("mainForm_Valor");
    this.lblminAprueba = document.getElementById("mainForm_MinAprueba");
    this.btIniciar = document.getElementById("mainForm_btIniciar");
    this.lblPorcentajeAprobado = document.getElementById("mainForm_lblPorcentajeAprobados");
    this.lblEstudianteMejorNota = document.getElementById("mainForm_lblEstudianteMejorNota");
    this.lblPorcentejeChicasAprobadas = document.getElementById("mainForm_lblPorcentajeChicasAprobadas");
    this.vEstudiante = new Cl_vEstudiante();
    this.vEstudiante.inbtProcesar.onclick= () => {
        this.controlador.procesarEstudiante();
    }
    this.vEstudiante.inbtProcesar.hidden = true;
    this.btIniciar.onclick = () => {
      this.controlador.iniciarExamen(
        this.lblvalor.value,
        this.lblminAprueba.value
      );
      this.lblvalor.disabled = true;
      this.lblminAprueba.disabled = true;
      this.btIniciar.hidden = true;
      this.vEstudiante.inbtProcesar.hidden = false;
    };
  }
  procesarEstudiante(){
    this.mEstudiante=new Cl_mEstudiante({
        nombre:this.vEstudiante.nombre,
        cedula:this.vEstudiante.cedula,
        sexo:this.vEstudiante.sexo,
        nota:this.vEstudiante.nota,

    })
    return this.mEstudiante
  }
  reportarEstudiante(
    porcentajeAprobados,
    estudianteMejorNota,
    porcentajeChicasAprobadas,
  ){
    this.lblPorcentajeAprobado.innerHTML=porcentajeAprobados
    this.lblEstudianteMejorNota.innerHTML=estudianteMejorNota
    this.lblPorcentejeChicasAprobadas.innerHTML=porcentajeChicasAprobadas
  }
  
}