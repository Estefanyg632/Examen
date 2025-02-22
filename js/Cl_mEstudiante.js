export default class Cl_mEstudiante{
    constructor({n,c,s,nt}){
        this.nombre= n;
        this.cedula= c;
        this.sexo= s;
        this.nota= nt;
    }
    set nombre(n){
        this._nombre=n;
    }
    get nombre(){
       return this._nombre;
    }
    set cedula(c){
        this._cedula=c;
    }
    get cedula(){
       return this._cedula;
    }
    set nota(nt){
        this._nota=nt;
    }
    get nota(){
       return this._nt;
    }
    set nombre(n){
        this._nombre=n;
    }
    get nombre(){
       return this._nombre;
    }
}