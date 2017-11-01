#Tarjeta de crédito válida

Crear una web que pida, pr medio de prompt(), el número de un tarjeta de credito y confirme su validez según ell algoritmo de Luhn

##Pseudocodigo

1. Solicitar al usuario por un propmt(), el numero de su tarjeta de credito
  1.1 El numero que ingresaron pasarlo a un arreglo
  1.2 Invertir los elemetos del arreglo

2. Recorrer el arreglo invertido

  2.1 El valor que este dentro de el indice par, multiplicarlo por 2
  2.2. Si el resultado de la multiplicación es mayor a 10 ejemplo (7*2=14)
  2.3 El resultado se sumaria hasta obtener un solo dígito (7*2=14 => 1+4 = 5)

3. Cada valor de indice par multiplicado por 2, deben sumarse con lo valores de los indices restantes
4. Al resultado de la suma se le debe sacar el modulo de 10
  4.1 Si es igual a 0
    4.1.1 regresar 'Tarjeta Valida'
  4.2 Si es diferente a 0
    4.2.2 regresar 'Tarjeta inValida'

##Diagrama de flujo

  se incluye Diagrama
  ![ Diagrama_de_flujo](https://www.lucidchart.com/invitations/accept/fe3e3b9c-6459-4849-b8b7-d2c77bce3b22)
  
