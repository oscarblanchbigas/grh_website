import numpy as np

def CalcularSignificancia( On,Off ):
    EventosON=np.sum(On[0:2])
    EventosOFF=np.sum(Off[0:2])
    Significancia=(EventosON-EventosOFF)/(EventosON+EventosOFF)**(0.5)
    return Significancia

