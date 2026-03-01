console.log("hola")

// Elementos HTML
const calculateBtn = document.getElementById("btnCalcular");
const txtEdad = document.getElementById("txtAge");
const txtPeso = document.getElementById("txtWeight");
const txtEstatura = document.getElementById("txtHeight");
const results = document.getElementById("results");
const levelActivityQuestion = document.getElementById("levelActivityQuestion"); // accedo al DIV de levelActivityQuestion
const selector = document.getElementById("options");
const activityDescription = document.getElementById("activityDescription");
const btnLose = document.getElementById("btnLose");
const btnGain = document.getElementById("btnGain");


// Agregando funciones al boton
calculateBtn.addEventListener("click",calculateTMB);
btnLose.addEventListener("click", lose);
btnGain.addEventListener("click", gain);

// Agregando funcion al dropbox
selector.addEventListener("change", actualizarActivityDescription);

// variables globales
let TMB;
let kcalDay;

// mapping options
const descriptions = {
  option1: "Poco o ningún ejercicio (trabajo de oficina, actividad física muy baja)",
  option2: "Ejercicio ligero 1–3 días por semana (caminar, tareas del hogar, ciclismo suave)",
  option3: "Ejercicio moderado 3–5 días por semana (gimnasio, deportes recreativos)",
  option4: "Ejercicio intenso 6–7 días por semana (entrenamiento exigente, trabajo físico pesado).",
  option5: "Ejercicio muy intenso o trabajo físico exigente (sesiones de entrenamiento dobles, atletas, trabajos de carga pesada)."
};

const multiplier = {
  option1: 1.2,
  option2: 1.375,
  option3: 1.55,
  option4: 1.725,
  option5: 1.9
  
};

// Funcion calculateTMB
function calculateTMB(){
  const sexSelected = document.querySelector('input[name="sex"]:checked').value; //captura si es hombre o mujer
 
  let edad = txtEdad.value;
  let peso = txtPeso.value;
  let estatura = txtEstatura.value;

  if (sexSelected === "hombre") {
    TMB = (10 * peso) + (6.25 * estatura) - (5 * edad) + 5;
  } else if (sexSelected === "mujer") {
    TMB = (10 * peso) + (6.25 * estatura) - (5 * edad) - 161;
  }

  results.textContent = `TMB = ${TMB}`;
  levelActivityQuestion.style.visibility = "visible";

}

function actualizarActivityDescription(){

  kcalDay = multiplier[selector.value] * TMB;
  activityDescription.textContent = descriptions[selector.value]
  caloriesPerDay.textContent = kcalDay.toFixed(2) + " Kcal/dia";

  // limpia el mensae final cada vez que se cambia de nivel de actividad
  msgFinal.textContent="";
  kcalneeded.textContent ="";
}

function gain(){
  msgFinal.textContent="Calorías necesarias para aumentar de peso (+15%): ";
  kcalneeded.textContent = (kcalDay*1.15).toFixed(2) + " kcal/dia";

}
function lose(){
  msgFinal.textContent="Calorías necesarias para perder peso (-20%): ";
  kcalneeded.textContent = (kcalDay*0.8).toFixed(2) + " kcal/dia";
}