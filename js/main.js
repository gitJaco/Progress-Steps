//Obtener los pasos
const steps = document.querySelectorAll(".step")

//Obtener la barra de progreso
const  bar = document.getElementById("bar")

//Obtener la referencia a los botones
const prevButton = document.getElementById("prev")
const nextButton = document.getElementById("next")

//Guardar el paso en el que estamos
let currentStep = 1

//Escuchar el boton siguiente
nextButton.addEventListener("click",  () => {
    //Sumar 1 a los pasos
    
    
    if (currentStep < steps.length) {
        //Sumar 1 a los pasos
        currentStep++
        updateProgress()
    }

    steps.forEach((step, index) => {
        if (index < currentStep) {
            step.classList.add("active")
        } else {
            step.classList.remove("active")
        }
    })

})

//Escuchar el boton anterior
prevButton.addEventListener("click",  () => {
    
    if (currentStep > 1)
    //Restar 1 a los pasos
    currentStep--;
    updateProgress();
})

//Funcion para actualizar el estado de los pasos
function updateProgress() {
    steps.forEach((step, index) => {
        if (index < currentStep) {
            step.classList.add("active")
        } else {
            step.classList.remove("active")
        }
    })

    //Actualizar barra
const progress = (currentStep - 1) / (steps.length - 1) * 100
bar.style.width = progress + "%"

    //Control de los botones
    if (currentStep === steps.length) {
     nextButton.disabled = true
    } else if (currentStep === 1) {
        prevButton.disabled = true
    } else {
        prevButton.disabled = nextButton.disabled = false;
    }
}
