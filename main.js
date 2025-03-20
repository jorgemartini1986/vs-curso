function sumarElementos(array) {
    let suma = 0;
    for (let i = 0; i < array.length; i++) { // Error: i <= array.length
      suma += array[i];
    }
    return suma;
  }
  
  const numeros = [1, 2, 3, 4, 5];
  const resultado = sumarElementos(numeros);
  
  console.log("La suma de los elementos es:", resultado);