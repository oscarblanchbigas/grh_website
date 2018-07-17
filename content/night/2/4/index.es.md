+++
title = "Night 2 Page 4"
description = ""
weight = 4
type= "night"
right = "notebook"
notebook = "GRH_night_2_2_es.ipynb"
+++

{{< header_night title="Separar el grano de la paja">}}

Llegan los datos y lo primero que hacemos es analizarlos.

El **Theta Plot** nos ayuda a ver el número de rayos gamma que detectamos en anillos concéntricos al punto al que dirigimos el telescopio. Pero el análisis no acaba ahí. En realidad hay muchas otras cosas que debemos hacer.

Algo importantísimo es seleccionar, en la medida de lo posible, las imágenes generadas por rayos gamma y las generadas por otro tipo de rayos cósmicos, como protones o núcleos ligeros.

{{< img name="gamma.png" caption="la luz cherenkov que detectan los telescopios MAGIC. Así que, ¿cómo sabemos si lo que detectamos es un rayo gamma o un protón? " credit="Heinrich J. Voelk, Konrad Bernloehr">}}

En realidad no sabemos a ciencia cierta si lo que detectamos es un rayo gamma u otra partícula... A cada detección el software del telescopio le da una probabilidad de que sea rayo gamma u otra cosa (protón, muón, núcleo de una átomo ligero...). Es lo que llamamos **hadroness**.

{{< quote
    text="El hadroness es un número entre 0 y 1. Hadroness bajo significa que lo que hemos detectado es probable que sea un rayo gamma. Hadroness alto significa que con mayor probabilidad se trata de otro tipo de rayo cósmico." >}}

En el momento de hacer el thetaplot debemos asegurarnos que estamos representando los eventos con hadroness pequeño, ya que somos cazadores de **rayos gamma**, ¿no? Así que nos quitamos de encima los protones.

{{< quote
    text="Os voy a confesar algo: los datos que usamos al detectar los rayos gamma de Cas A durante mi noche ya tenían el corte en hadroness hecho. No os lo dije para que no os llegara todo de golpe pero ya habíamos sacado el grano de la paja." >}}

Sigue ahora mi libreta de la derecha para ver cómo haciendo un corte en hadroness conseguimos ver señal.... ¿o no?

¿Habéis visto el Theta plot? Con eso ya me pondría a escribir el paper mientras no dejo de pensar en la suerte que tengo de haber cazado a Cyg-X1. Pero cada vez que me emociono me acuerdo de lo que siempre me dice mi director de tesis:

Esto es física experimental, Alba. Necesitamos datos, muchos datos, para demostrar algo.

_-¿Cómo sabes que eso que ves no es ruido?_

_-¿Cómo sabes que es realmente Cyg-X1 y no solo tus ganas de haberlo cazado?_

_-Mantén la calma, espera a que lleguen más datos y **analízalos**._
