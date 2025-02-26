export default class Cl_controlador{
    constructor(modelo,vista){
        this.modelo= modelo;
        this.vista= vista;
    }
    procesarEstudiante(){
        this.modelo.procesarEstudiante(this.vista.procesarEstudiante())
        this.vista.reportarEstudiante( 
           this.modelo.porcentajeAprobado(),
           this.modelo.estudianteMejorNota(),
           this.modelo.porcentajeChicasAprobadas(),
        )
    }
    iniciarExamen(valor,minAprueba){
        this.modelo.valor = valor;
        this.modelo.minAprueba = minAprueba;
    }
}