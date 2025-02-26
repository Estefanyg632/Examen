export default class Cl_mExamen{
    constructor({valor = 0,minAprueba = 0}){
        this.valor= valor;
        this.minAprueba= minAprueba;
        this.contEstudiantes= 0;
        this.contEstudAprobados= 0;
        this.notaMayor= 0;
        this.nombreMayor= "";
        this.contChicasAprobadas= 0;
        this.contChicas= 0
    }

    procesarEstudiante(estudiante){
        if (estudiante.nota >= this.minAprueba){
            this.contEstudAprobados++;
        }
        if(estudiante.sexo == "f" ){
            this.contChicas++;
            if(estudiante.nota >= this.minAprueba){
                this.contChicasAprobadas++;
            }
        } 
        this.contEstudiantes++
        if (estudiante.nota >= this.notaMayor){
            this.nombreMayor=estudiante.nombre;
            this.notaMayor=estudiante.nota;
        }

    }
    porcentajeAprobado(){
        return (this.contEstudAprobados/this.contEstudiantes)*100;
    }
    estudianteMejorNota(){
        return this.nombreMayor
    }
    porcentajeChicasAprobadas(){
        return (this.contChicasAprobadas/this.contChicas)*100;
    }


}