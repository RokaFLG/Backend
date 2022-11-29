class User {
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }
    getFullName(){
        return  `${this.nombre} ${this.apellido} `
    }
    addMascota(mascota) {
        this.mascotas.push(mascota);
    }
    countMascotas(){
        return this.mascotas.length;
    }

    addBook(nombre, autor){
        this.libros.push({nombre: nombre, autor: autor});
    }
    getBookNames(){
        let arr = [];
        for(let i = 0; i < this.libros.length; i++) {
         arr.push(this.libros[i].nombre)
        }
        return arr;
    }
}
let Pio = new User ("Pio", "Caceres",[
    {nombre:"El Principito", autor: "Antoine de Saint-Exupéry"},
    {nombre:"La divina comedia", autor: "Dante Alighieri"}
], ["Hoch","Toro"]);
console.log(Pio.getFullName());
Pio.addMascota("Simon");
console.log(Pio.countMascotas());
Pio.addBook("Tragamundos","Sarinha Luh");
console.log(Pio.getBookNames());