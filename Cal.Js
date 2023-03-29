alert("Bienvenido a mi calculadora")
alert("Es increiblemente sencilla y humilde, no esperen mucho")
const operaciones = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
  };
  
  let Pendiente = null;
  let operacion1 = null;
  
  const agregarNumero = (numero) => {
    const resultado = document.getElementById('resultado');
    if (resultado.value === '0') {
      resultado.value = numero;
    } else {
      resultado.value += numero;
    }
  };
  
  const agregarOperacion = (operacion) => {
    const resultado = document.getElementById('resultado');
    const valor = parseFloat(resultado.value);
    if (operacion1 === null) {
      operacion1 = valor;
    } else {
      const resultadoAnterior = operaciones[Pendiente](operacion1, valor);
      operacion1 = resultadoAnterior;
      resultado.value = resultadoAnterior;
    }
    Pendiente = operacion;
    resultado.value = '0';
  };
  
  const calcularResultado = () => {
    const resultado = document.getElementById('resultado');
    const valor = parseFloat(resultado.value);
    const resultadoFinal = operaciones[Pendiente](operacion1, valor);
    resultado.value = resultadoFinal;
    operacion1 = null;
    Pendiente = null;
  };
  const limpiar = () => {
    const resultado = document.getElementById('resultado');
    resultado.value = '0';
    operacion1 = null;
  }
