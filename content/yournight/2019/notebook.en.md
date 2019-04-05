# Your scientific notebook

Finally the moment arrived ... now the notebook is all yours.

We have only put the instruction that is needed so that the graphics you make can be seen (% matplotlib inline) and the instruction to read the data files since guessing where the data is is not the work of a gammas hunter scientist but of magicians!

The rest is up to you. That's right, do not hesitate to ask anything ...

Good luck and, above all, enjoy!


```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as pl
%matplotlib inline
```

```python
TeV_OFF= pd.read_csv('EvtList_OFF_TeV2032.txt', sep=' ')
```

```python
TeV_ON= pd.read_csv('.EvtList_ON_TeV2032.txt', sep=' ')
```

# Enter and start your investigation!
