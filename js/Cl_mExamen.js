export default class Cl_mExamen{
    constructor({v,minAprueba}){
        this.valor= 20;
        this.minAprueba= 9.6;
        this.contEstudiantes= 0;
        this.contEstudAprobados= 0;
        this.notaMayor= 0;
        this.nombreMayor= "";
        this.contChicasAprobadas= 0;
        this.contChicas= 0
    }

    procesarEstudante(estudiante){
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