function sent(){

    const w = document.getElementById('weightI') 
    const h = document.getElementById('heightI')
    const res = document.getElementById('result')
    
    const weight = (w.value)
    const height = (h.value)

    const bmi = weight / height**2

    if(weight.length === 0 || height.length === 0){
        res.innerHTML = ('[ERROR] none value found!!')
    }else if(bmi <= 18.5){
        res.innerHTML = (`Your BMI is ${bmi.toFixed(2)} ➙ 'Thinness'`)
    }else if(bmi > 18.5 && bmi < 24.9){
        res.innerHTML = (`Your BMI is ${bmi.toFixed(2)} ➙ 'Normal'`)        
    }else if(bmi > 25 && bmi < 29.9){
        res.innerHTML = (`Your BMI is ${bmi.toFixed(2)} ➙ 'Overweight'`)  
    }else if(bmi > 30 && bmi < 39.9){
        res.innerHTML = (`Your BMI is ${bmi.toFixed(2)} ➙ 'Obrity'`)  
    }else{
        res.innerHTML = (`Your BMI is ${bmi.toFixed(2)} ➙ 'Severe Obrity'`)  
    }
}
