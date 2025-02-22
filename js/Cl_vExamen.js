import Cl_vEstudiante from "./Cl_vEstudiante.js";
import Cl_mEstudiante from "./Cl_mEstudiante.js";
export default class Cl_vExamen{
    constructor(){
    this.controlador= null
    this.lblPorcentajeAprobado=document.getElementById("mainForm_lblPorcentajeAprobados")
    this.lblEstudianteMejorNota=document.getElementById("mainForm_lblEtudianteMjorNota")
    this.lblPorcentejeChicasAprobadas=document.getElementById("mainForm_lblPorcentajeChicasAprobadas")
    this.vEstudiante=new Cl_vEstudiante()
    this.vEstudiante.inbtProcesar.onclick= () => {
        this.controlador.procesarEstudiante()
    }
  }
  procesarEstudiante(){
    this.mEstudiante=new Cl_mEstudiante({
        nombre:this.vEstudiante.inNombre,
        cedula:this.vEstudiante.inCedula,
        sexo:this.vEstudiante.inSexo,
        nota:this.vEstudiante.inNota,

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