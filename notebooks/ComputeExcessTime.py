import pandas as pd
import numpy as np
import matplotlib.pyplot as pl

def NumeroExcesosTiempo(On,Off,MinT, MaxT):
	mrk421_ON_cut_T = On[(On['Tiempo'] > MinT) & (On['Tiempo'] < MaxT)]
	Noff, ThetasOff, _ = pl.hist(Off.theta2, bins=40, histtype='stepfilled', color='red', alpha=0.5, normed=False)
	Non, ThetasOn, _ = pl.hist(On.theta2, bins=40, histtype='step', color = 'blue',alpha=0.9, normed=False)
	integraloff =  (ThetasOff[27]-ThetasOff[26]) * sum(Noff[26:35])
	integralon = (ThetasOn[27]-ThetasOn[26]) * sum(Non[26:35])
        if ( integralon == 0):
                integralon = (ThetasOn[27]-ThetasOn[26]) * sum(Non[5:39])/34.0
        if ( integralon == 0 ):
            return np.sum(Non[0:2]), (np.sum(Non[0:2]))**(0.5)
	factor = integralon / integraloff
	weights = np.ones_like(Off.theta2)*factor
	Noff, ThetasOff, _ = pl.hist(Off.theta2, bins=40, histtype='stepfilled', color='red', alpha=0.5, normed=False, weights=weights)
	Non, ThetasOn, _ = pl.hist(mrk421_ON_cut_T.theta2, bins=40, histtype='step', color = 'blue',alpha=0.9, normed=False)
	EventosON=np.sum(Non[0:2])
	EventosOFF=np.sum(Noff[0:2])
	Significancia=(EventosON-EventosOFF)/(EventosON+factor*EventosOFF)**(0.5)
        if (Significancia<1 ):
                return EventosON-EventosOFF,EventosON-EventosOFF
        else :
                return EventosON-EventosOFF, (EventosON-EventosOFF)/Significancia


