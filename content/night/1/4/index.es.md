+++
title = "Night 1 Page 4"
description = ""
weight = 4
type= "night"
right = "notebook"
notebook = "GRH_night_1_2_es.ipynb"
+++

{{< header_night title="Cómo deshacerse del fondo">}}

En la mitología griega Casiopea era una mujer arrogante y vanidosa que se jactaba de su belleza incomparable. Para los astrónomos Casiopea es una constelación que se puede ver en el hemisferio norte durante todo el año.

{{< img name="casiopea.png" caption="¿Mitología o astronomía? Mejor elegir las dos." credit="Wikimedia Commons" >}}

Yo, como soy un cazador de rayos gamma, voy en busca de Cassiopeia A, una remanente de supernova - lo que queda de una explosión estelar - que es la fuente extrasolar de ondas de radio más brillante del cielo. Cariñosamente la llamamos CasA [KASEI!] y vamos en busca de los rayos gamma que emite. Y, claro, CasA está en la constelación de Casiopea.

Apunto los telescopios MAGIC a CasA y espero, la noche va a ser larga.

{{< quote
    text="Cuando apuntamos a una fuente como CasA, ¿cómo sabemos que lo que nos llega realmente salió de CasA? El Universo está lleno de luz de fondo. Y debemos tenerlo en cuenta cuando cazamos gammas" >}}

Cuando se graba un vídeo en un lugar donde hay ruido, el técnico de sonido tiene un truco para deshacerse de él en el montaje final. Graba el sonido cuando todo el mundo está en silencio y luego se lo resta al sonido del vídeo. Lo que está haciendo así es eliminar el ruido.

Algo parecido hacemos nosotros cuando queremos restar la luz de fondo del universo. Apuntamos los telescopios a un lugar de donde sabemos que no nos llegan rayos gamma y luego se lo restamos a los datos que nos llegan del lugar del cielo donde pensamos que nos pueden llegar rayos gamma.

Al primero lo llamamos OFF: sabemos que de ahí no vienen rayos gamma así que lo que nos llegue será ruido de fondo.

Al segundo lo llamamos ON: pensamos que de ahí vienen rayos gamma pero no estamos seguros.

El truco final es restar: ON-OFF, señal menos ruido.

{{< img name="histogram.png" caption="Azul para el ruido, rojo para la posible señal. No olvides deshacerte de toda la luz que no proviene de rayos gamma, lo que nosotros llamamos el night sky background, o no sabrás realmente lo que estás viendo." >}}

Cuando llevo ya 3 horas observando a CasA me pongo a analizar los datos que nos llegan. Y eso significa que me pongo a usar código para seleccionar y sumar eventos que sabemos que son rayos gamma que han detectado nuestros telescopios. Y, claro, restarle el ruido de fondo que hemos detectado en un lugar cercano a CasA.

De nuevo, no le tengas miedo al código, no es un monstruo, es una herramienta.

En la página de la derecha verás cómo analizo los primeros datos que llegan de CasA y dibujo mi primer thetaplot - ¿suena raro no?, pero así llamamos a estos gráficos.

Si te animas, ¡éste también puede ser tu primer análisis de rayos Gamma!
