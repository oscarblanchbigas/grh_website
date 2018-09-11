+++
title = "Night 1 Page 2"
description = ""
weight = 2
type= "night"
right = "notebook"
notebook = "GRH_night_1_1_es.ipynb"
+++

{{< header_night title="¿Cómo deshacerse de la Luna?">}}

Los filtros para las cámaras de fotos los puedes comprar en muchas tiendas. Pero los de los telescopios MAGIC no los encuentras ni en internet porque no existen en el mercado. Así que no nos queda otro remedio que ir al taller y diseñarlos nosotros mismos.

Una vez los tenemos hay que probarlos para ver si realmente funcionan. ¿Cómo podemos saber si se deshacen sólo de la Luna y no también de los rayos gamma que queremos cazar? Recordad que, de las imágenes que tomamos, sólo queremos sacar la luz lunar.

{{< img name="moon_filter.png" caption="El filtro se deshace de parte de la Luna y deja pasar parte de los rayos gamma. ¡Pero no es perfecto! Con este esquema podrás calcular si el filtro funciona como esperamos." >}}

En la libreta de la derecha verás cómo hacemos el cálculo. Lo podríamos hacer con lápiz y papel pero, qué pereza ¿no? Con un par de líneas de código lo resolvemos. Usa la libreta sin miedo, no puedes romper nada.

{{< quote
    text="Los cazadores usamos código para trabajar con los datos de los telescopios. No le tengas miedo a la programación, los ordenadores sólo hacen lo que les decimos. Y si los controlas, te ayudan a hacer las cosas más rápidamente." >}}

El filtro absorbe más o menos luz dependiendo de la longitud de onda. Y tanto la luz que viene de la Luna como de los gammas tiene intensidades diferentes también en función de la longitud de onda. Así que tenemos que mirar cuánta luz de los gammas pasa y cuánta de la Luna se absorbe para cada longitud de onda. Para saber el total sumamos todos los valores.

Para saber las cantidades de luz que pasan el filtro multiplicamos la intensidad por F (la fracción de luz que deja pasar el filtro). Si el filtro fuera perfecto muliplicaríamos por 1 el tipo de luz que nos interesa y por 0 la que queremos eliminar. Pero este no es un mundo ideal. No tenemos más remedio que adaptarnos.

{{< img name="filter.png" caption="Las gráficas parecen muy abstractas, pero en realidad nos explican muchas cosas. Fíjate en qué se muestra en cada eje e intenta relacionarlo con el filtro. ¿Qué luz pasa? ¿Qué luz se absorbe?" >}}

¿Has visto que para comparar entre lo que llega y lo que pasa (o se absorbe) dividimos los dos valores de intensidad? Si lo piensas verás que es la mejor manera: si el resultado es cercano a 1 es que los dos valores son parecidos, si no es que son muy diferentes.

Insistimos, los filtros no son pefectos, pero funcionan bien. La intención era que la Luna no fuera un problema, y parece que no lo será. Con estos filtros podremos observar durante más horas sin que la luz que refleja nuestro satélite nos moleste. Sólo queda instalar los filtros para poder usarlos durante las observaciones.
