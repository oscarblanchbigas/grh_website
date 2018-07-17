
# La libreta científica de Alba
Esta es mi **libreta científica**. Aquí voy apuntando todo lo que hago ... es importante apuntarlo todo, como mínimo para mi ya que si no después no recuedo todo lo que he hecho.

Ahora toca calcular **CUÁNTOS MAGIC CABEN EN EL CIELO **

Como siempre, para empezar con esto del **iPython** tenemos que cargar las librerías que usaremos. Es una de las mejores cosas de Python, hay un montón de gente creando librerías muy útiles.


```python
import math
```

Lo primero que necesito saber para calcular cuantos MAGIC caben en el cielo es saber como de grande es el cielo. ¡Sí! El universo es infinito, pero cuando miro hacia una estrella, estoy viendo también todo lo que hay detrás y delante de la ella. Por tanto, quiero saber el tamaño del cielo en direcciones, no en m, km, parsecs, años luz ni nada por el estilo ... y las direcciones se calculan en **estereorradianes**, que se definen como la superficie explorada dividido por la distancia a la que está la superficie al cuadrado.

Parece complicado, pero pensémoslo juntos ... quizá no lo es en realidad. Para una esfera con radio 10 Km de la cual yo estoy en el centro, tenemos:


```python
radio=10000
superficie = 4 * math.pi * (radio*radio)
print ("La superficie de la esfera de radio ",radio, " metros es ", superficie, "metros cuadrados")
```

    La superficie de la esfera de radio  10000  metros es  1256637061.44 metros cuadrados


Ahora sólo nos fallta dividir la superficie por el radio al cuadrado y tendremos los estereoradianes para un esfera de 10 km de la cual estamos en el centro.


```python
stereorradianes = superficie / (radio*radio)
print ("La dimensión angular de una esfera de 10 Km de la cual estamos en el centro es", stereorradianes, "estereorradianes")
```

     La dimensión angular de una esfera de 10 Km de la cual estamos en el centro es 12.5663706144 estereorradianes


De hecho, si os habéis fijado, eso es independiente del tamaño de la esfera ... Por tanto el tamaño angular del cielo que vemos desde la tierra es el mismo.
Sí, sí ... la Tierra está en el centro del universo visible desde la Tierra, que no quiere decir que esté en el centro del universo.

----------

Ahora me falta calcular el tamaño del trozo de cielo que se puede mirar con MAGIC. Sé que en grados son 2 grados por 2 grados, es decir 4 grados cuadrado. Pero tengo que convertirlo en estereorradianes.

Por suerte desde el instituto que me explican con la trigonometría que 180 grados son Pi radianes. 


```python
GradoARadian = math.pi / 180.0
GradoCuadradoAStereorradian = GradoARadian * GradoARadian
AreaDeMAGIC = 4 * GradoCuadradoAStereorradian
print ("El área cubierta por MAGIC son ", AreaDeMAGIC, "stereoradianes.")
```

    El área cubierta por MAGIC son  0.00121846967915 stereoradianes.


Ya solo me falta dividirlos
> ** Tamaño angular del cielo / Tamaño angular de MAGIC **


```python
print ("En el cielo caben", stereorradianes/AreaDeMAGIC, "MAGICs")
```

    En el cielo caben 10313.2403124 MAGICs


Pero qué pequeño es MAGIC ... o ¡qué grande es el cielo!
