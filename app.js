//entra como un string 

let nota1=prompt('ingrese la nota 1')
let nota2=prompt('ingrese la nota 2')
let nota3=prompt('ingrese la nota 3')


//lo convierto en entero y lo guardo en la misma variable

nota1=parseInt(nota1)
nota2=parseInt(nota2)
nota3=parseInt(nota3)

let promedio = (nota1 + nota2 + nota3)/3

//estructura condicional anidada

if(promedio >= 7){
    console.log('aprobado')
}else{
    if(promedio >= 4){
        console.log('regular')
    }else{
        console.log('desaprobado')
    }
}

//1- se ingresa por teclado 3 numeros distintos, y debo mostrar el mayor de ellos

//2- Se ingresa un numero entero positivo de hasta 3 cifras y me tienen que mostrar por pantalla si el numero tiene 1, 2 o 3 cifras

//1-

let numero1 = prompt('ingresa un numero')
let numero2 = prompt('ingresa un numero')
let numero3 = prompt('ingresa un numero')

numero1=parseInt(numero1)
numero2=parseInt(numero2)
numero3=parseInt(numero3)

if(numero1>numero2  && numero1 > 3){

    console.log('el numero 1 es el mayor')

}else{

    if(numero2>numero1 && numero2>numero3){

        console.log('numero 2 es el mayor')

    }else{
        console.log('numero 3 es el mayor')
    }

}

//2-

let numero = prompt('ingrese un numero')

numero = parseInt(numero)



if(numero>=100){

    console.log('3')

}else{
    if(numero>=10){
        console.log('2')
    }else{
        if(numero>=1){
            console.log('1')
        }
    }
}

//operadores logicos "y" "and" "&&"

let num1, num2, num3 

num1 = prompt('ingrese primer numero')
num2 = prompt('ingrese un segundo numero')
num3 = prompt('ingrese el tercer numero')

num1 = parseInt(Num1)
num2 = parseInt(Num2)
num3 = parseInt(Num3)

if(num1>num2 && num1>num3){
    console.log('numero 1 es mayor')
}
console-log('salio')

//cortocircuito o circuito corto

console.log(false && 'perro') //mostrara false
console.log(true && 'perro') //mostrara perro porque la condicion es verdadera

// estructura repetitivas (while / mientras)
// contador

let x1=1

while(x1<=100){
    //se ejectura
    console.log(x1)
    x1 = x1 + 1
}
 
//1- se imprima 25 terminos de la serie 11-22-33-44..

//2-mostrar los multiplos de 8 hasta el valor 500

//1-

let numeroserie = 11

numeroserie = parseInt(numeroserie)

let contador = 0
contador = parseInt(contador)

while(contador <=25){

    console.log(numeroserie)

    numeroserie = numeroserie*2

    contador++
}

//2-

let numeromult = 8

numeromult = parseInt (numeromult)

while(numeromult <=500){

    console.log(numeromult)

    numeromult = numeromult + 8

}

//concepto acumulador

let x=1

let suma=0

while(x<=5){ //ingreso 5 veces

    let valor=prompt('ingrese un valor') //pide 5 veces el valor

    valor=parseInt(valor) 

    suma =suma+valor // 

    x =x+1 //condicion del while

}

console.log(suma)  


//1- hacer un programa donde se ingresan 10 notas de alumnos y nos informe cuantos tienen notas mayor o iguales a 7 y cuantos menores



let mayor=0  
let menor=0 
let x3=1

while(x3<=10){

    let notas=prompt('ingrese su nota')
    notas = parseInt(notas)

    if(notas>=7){

        mayor = mayor +1

    }else{
        menor = menor +1
    }

    x3 = x3+1

}

console.log(mayor)
console.log(menor)


//clase date  == fecha

let mivariable = new Date()

console.log(mivariable.getFullYear()) // getFullYear es un tipo de metodo d ela libreria "Date" y se utiliza ----------> .tipodemetodo()

console.log(mivariable.getHours()) // horas

console.log(mivariable.getMinutes()) //minutos

console.log(`La hora es ${mivariable.getHours()}:${mivariable.getMinutes()}`)

//otra manera mas sencilla o "limpia"

let horas=mivariable.getHours()
let minutos=mivariable.getMinutes()

console.log(`La hora es ${horas}:${minutos}`)

//para usar ${} se usa las comillas `` 

let dia=mivariable.getDate()
//let mes=mivariable.getMonth()+1     //js toma a enero como mes 1 y como solucion hay que agregarle +1
let anio=mivariable.getFullYear()

console.log(`la fecha de hoy es ${dia} / ${mes} / ${anio}`)

console.log(mivariable.getDay()) //te muestra el numero de la semana y arranca desde domingo 0

//hacer un programa que me muestre el siguiente formato
// hoy es lunes 17 de octubre 2021

let semana

let mes


if(mivariable.getDay() == 0){

    semana='Domingo'

}else{
    if(mivariable.getDay() == 1){

        semana='Lunes'

    }else{
        if(mivariable.getDay() == 2){

            semana = 'Martes'

        }else{
            if(mivariable.getDay() == 3){

                semana = 'Miercoles'

            }else{
                if(mivariable.getDay() == 4){

                    semana = 'Jueves'

                }else{
                    if(mivariable.getDay() == 5){

                        semana = 'Viernes'

                    }else{

                        semana = 'Sabado'

                    }
                }
            }

        }
    }
}

if(mivariable.getMonth() == 0){

    mes = 'Enero'

}else{
    if(mivariable.getMonth() == 1){

        mes = 'Febrero'

    }else{
        if(mivariable.getMonth() == 2){

            mes = 'Marzo'

        }else{
            if(mivariable.getMonth() == 3){

                mes = 'Abril'

            }else{
                if(mivariable.getMonth() == 4){

                    mes = 'Mayo'

                }else{
                    if(mivariable.getMonth() == 5){

                        mes = 'Junio'

                    }else{
                        if(mivariable.getMonth() == 6){

                            mes = 'Julio'

                        }else{
                            if(mivariable.getMonth() == 7){

                                mes = 'Agosto'

                            }else{
                                if(mivariable.getMonth() == 8){

                                    mes = 'Septiembre'

                                }else{
                                    if(mivariable.getMonth() == 9){

                                        mes = 'Octubre'

                                    }else{
                                        if(mivariable.getMonth() == 10){

                                            mes = 'Noviembre'

                                        }else{
                                            if(mivariable.getMonth() == 11){

                                                mes = 'Diciembre'

                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

            }


        }
    }
}


console.log(`Hoy es ${semana}  ${dia} de ${mes} del ${anio}`)