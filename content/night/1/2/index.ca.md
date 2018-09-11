+++
title = "Night 1 Page 2"
description = ""
weight = 2
type= "night"
right = "notebook"
notebook = "GRH_night_1_1_es.ipynb"
+++

{{< header_night title="Com desfer-se de la Lluna?">}}

Els filtres per a les càmeres de fotos els pots comprar a moltes botigues. Però els dels telescopis MAGIC no els trobes ni a internet perquè no n'hi ha al mercat. Així que no ens queda altre remei que anar al taller i dissenyar-los nosaltres mateixos. 

Un cop els tenim cal provar-los per veure si realment funcionen. Com podem saber si es desfan només de la Lluna i no també dels raigs gamma que volem caçar? Recordeu que, de les imatges que prenem, només volem treure la llum lunar.

{{< img name="moon_filter.png" caption="El filtre es desfà de part de la Lluna i deixa passar part dels raigs gamma. Però no és perfecte! Amb aquest esquema podràs calcular si el filtre funciona com esperem." >}}

A la llibreta de la dreta veuràs com fem el càlcul. El podríem fer amb llapis i paper però, quina mandra no? Amb un parell de línies de codi ho resolem. Fes servir la llibreta sense por, no pots trencar res.

{{< quote
    text="Els caçadors fem servir codi per treballar amb les dades dels telescopis. No li tinguis por a la programació, els ordinadors només fan el que els diem. I si els controles, t'ajuden a fer les coses més ràpidament." >}}

El filtre absorbeix més o menys llum depenent de la longitud d'ona. I tant la llum que ve de la Lluna com dels gammas té intensitats diferents també en funció de la longitud d'ona. Així que hem de mirar quanta llum dels gammas passa i quanta de la Lluna s'absorbeix per a cada longitud d'ona. 

Per saber el total sumem tots els valors.Per saber les quantitats de llum que passen el filtre multipliquem la intensitat per F (la fracció de llum que deixa passar el filtre). Si el filtre fos perfecte muliplicariem per 1 el tipus de llum que ens interessa i per 0 la que volem eliminar. Però aquest no és un món ideal. No tenim més remei que adaptar-nos.

{{< img name="filter.png" caption="Les gràfiques semblen molt abstractes, però en realitat ens expliquen moltes coses. Fixa't en què es mostra en cada eix i intenta relacionar-ho amb el filtre. Quina llum passa? Quina llum s'absorbeix?" >}}

Has vist que per comparar entre el que arriba i el que passa (o s'absorbeix) dividim els dos valors d'intensitat? Si ho penses veuràs que és la millor manera: si el resultat és proper a 1 és que els dos valors són semblants, si no és que són molt diferents.

Insistim, els filtres no són pefectes, però funcionen bé. La intenció era que la Lluna no fos un problema, i sembla que no ho serà. Amb aquests filtres podrem observar durant més hores sense que la llum que reflecteix el nostre satèl·lit ens molesti. Només queda instal·lar els filtres per poder utilitzar-los durant les observacions.

