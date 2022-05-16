class Pokemon {
    constructor(name){
      // Al crear este objeto se guardarán estos valores
      this.name = name

      exports.SayHello = () => {
        console.log(`info: ${name}`)
      }

      exports.SayMessage = (name) => {
        console.log(`info: ${name}`)
      }
    }
   
    
  

}


//module.exports = new Pokemon() // Instanciación del objeto y se exporta

module.exports = Pokemon
