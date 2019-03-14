
# Tu libreta científica 

Por fin llego el momento ... ahora la libreta es toda tuya.

Solo le hemos puesto la instrucción que se necesita para que lo gráficos que hagas se puedan ver (%matplotlib inline) y la instrucción para leer los ficheros de datos ya que adivinar donde están los datos no es trabajo de un científico cazador de gammas sino de magos!

El resto es cosa tuya. Eso si, no dudes en preguntar cualquier cosa ...

¡Mucha suerte y, sobretodo, disfrúta!


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
