+++
title = "Night 3 Page 4"
description = ""
weight = 4
type= "night"
right = "notebook"
notebook = "GRH_night_3_2_es.ipynb"
+++

{{< header_night title="Models, hipòtesis i dades">}}

Ja fa molts anys que observem l'agrupació de galàxies de Perseus. De fet tenim més dades de Perseus que de CasA.

Perseus té una mida de 65 milions d'anys llum, però com està a 250 milions d'anys llum, la seva mida aparent en el cel és de pocs graus i ens hi cap dins de la càmera dels nostres telescopis.

Analitza les dades que tenim de Perseus. Ara ja coneixes la manera de fer-ho. Busca el Theta2 plot de les dades acumulades de Perseus a la llibreta científica i tracta d'interpretar el resultat.

{{< quote
    text="Som molts científics buscant resoldre el tema de la matèria fosca. I entre tots ens ajudem. Cosmòlegs, teòrics, físics de partícules ... tots aportem per atacar el problema des de diferents fronts." >}}

Els cosmòlegs ens mostren com hauria d'estar distribuïda la matèria fosca en Perseus. Ho han estudiat amb telescopis òptics i poden fer mapes de la matèria fosca de zones de l'Univers.

I els físics teòrics fan servir models per calcular la quantitat de raigs gamma que esperaríem trobar. Amb aquesta informació marxem de cacera .

Tenim hipòtesis i tenim uns telescopis a la nostra disposició: anem a buscar dades per veure si són certes.

La teoria que estic testejant prediu que el nombre de raigs gamma que hauríem d'observar segueix aquesta lògica:

**Ngamma_ray ( r ) = N_0 (si r<0.1 deg)**

**Ngamma_ray ( r ) = N_0/(100* r^2) (si r>= 0.1 deg)**

En el quadern de la dreta, pots veure com a utilitzo això i el fet que no vegi raigs gamma provinents de Perseus per definir el màxim de matèria fosca que hi ha a Perseus.
