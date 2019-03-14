+++
title = "Night 2 Page 4"
description = ""
weight = 4
type= "night"
right = "notebook"
notebook = "GRH_night_2_2_es.ipynb"
+++

{{< header_night title="Separar el gra de la palla">}}

Arriben les dades i el primer que fem és analitzar-los.

El **Theta Plot** ens ajuda a veure el nombre de raigs gamma que detectem en anells concèntrics al punt al que dirigim el telescopi. Però l'anàlisi no acaba aquí. En realitat hi ha moltes altres coses que hem de fer.

Una cosa importantíssim és seleccionar, en la mesura del possible, les imatges generades per raigs gamma i les generades per un altre tipus de raigs còsmics, com protons o nuclis lleugers.

{{< img name="gamma.png" caption="la llum Cherenkov que detecten els telescopis MAGIC. Així que, com sabem si el que detectem és un raig gamma o un protó?" credit="Heinrich J. Voelk, Konrad Bernloehr">}}

En realitat no sabem del cert si el que detectem és un raig gamma o una altra partícula ... A cada detecció el programari del telescopi li dona una valor que representa com s'assembla a un raig gamma o una altra cosa (protó, muó, nucli d'una àtom lleuger ...). És el que anomenem **hadroness**.

{{< quote
    text="El hadroness és un número entre 0 i 1. Hadroness baix significa que el que hem detectat és probable que sigui un raig gamma. Hadroness alt vol dir que amb més probabilitat es tracta d'un altre tipus de raig còsmic."  >}}

En el moment de fer el thetaplot hem d'assegurar que estem representant els esdeveniments amb hadroness petit, ja que som caçadors de **raigs gamma**, no? Així que ens treiem de sobre els protons.

{{< quote
    text="Us haig de confessar una cosa: les dades que vam fem servir per detectar els raigs gamma de Cas A durant la meva nit ja tenien el tall en hadroness fet. No us ho vaig dir perquè no us arribés tot de cop però ja havíem tret el gra de la palla."
    hunter="daniel"  >}}

Segueix ara la meva llibreta de la dreta per veure com fent un tall en hadroness vam aconseguir veure senyal ... o no?

Heu vist el Theta plot? Amb això ja em posaria a escriure el paper mentre no deixo de pensar en la sort que tinc d'haver caçat a Cyg-X1. Però cada vegada que m'emociono em recordo del que sempre em diu el meu director de tesi:

Això és física experimental, Alba. Necessitem dades, moltes dades, per demostrar alguna cosa.

_-Com saps que això que veus no és soroll? _

_-Com saps que és realment Cyg-X1 i no només les teves ganes d'haver-ho caçat? _

_-Mantingues la calma, espera que arribin més dades i **analitza-les**.
