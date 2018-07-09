import numpy as np
import pylab as pl
import random as rnd

rnd.seed(1975)
sig = np.zeros(10000)
for x in range(0, 10000):
      EventosON=rnd.gauss(220, 220**(0.5));
      EventosOFF=rnd.gauss(220, 220**(0.5));
      sig[x] = (EventosON-EventosOFF)/(EventosON+EventosOFF)**(0.5)

def grafica( tipo ):
    sigmas, bins, _ = pl.hist(sig, bins=100, histtype='stepfilled',alpha=0.2, normed=False)
    pl.xlabel('Significancia')
    pl.ylabel('Numero de Veces')
    pl.figure(1, figsize=(20, 10), facecolor='w', edgecolor='k')
    
    if tipo == "Significancias":
        pl.show()

def valores( tipo ):
    sigmas, bins, _ = pl.hist(sig, bins=100, histtype='stepfilled',alpha=0.2, normed=False)
    if tipo == "Numero de Veces":
        return sigmas
    if tipo == "Significancias":
        return bins
