# La teva llibreta científica

Per fi ha arribat el moment ... ara la llibreta és tota teva.

Només li hem posat la instrucció que es necessita perquè el gràfics que facis es puguin veure (% matplotlib inline) i la instrucció per llegir els fitxers de dades ja que endevinar on estan les dades no és feina d'un científic caçador de gammas sinó de mags!

La resta és cosa teva. Això si, no dubtis a preguntar qualsevol cosa ...

Molta sort i, sobretot, gaudeix!


```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as pl
%matplotlib inline
```


```python
Crab_ON= pd.read_csv("data/EvtList_ON_Crab.txt", sep=' ')
Crab_OFF= pd.read_csv("data/EvtList_OFF_Crab.txt", sep=' ')
```
