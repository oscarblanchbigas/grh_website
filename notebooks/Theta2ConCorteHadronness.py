import pandas as pd
import matplotlib.pyplot as pl
#%matplotlib inline



#Leemos los ficheros y les damos un nombre
cygX1_ON= pd.read_csv('data/EvtList_ON_CygX3_1day.txt', sep=' ')
cygX1_OFF= pd.read_csv('data/EvtList_OFF_CygX3_1day.txt', sep=' ')


def histograma_hadronness(had_cut):
	pl.figure(10, figsize=(10, 5), facecolor='w', edgecolor='k')
	Noff, ThetasOff, _ = pl.hist(cygX1_OFF[cygX1_OFF['had'] < had_cut].theta2, bins=30, histtype='stepfilled', color='red', alpha=0.5, normed=False)
	Non, ThetasOn, _ = pl.hist(cygX1_ON[cygX1_ON['had'] < had_cut].theta2, bins=30, histtype='step', color = 'blue',alpha=0.9, normed=False)
	pl.xlabel('$\Theta^2$ [$grados^2$]')
	pl.ylabel('Numero de Eventos')
	pl.show()
	return Non, Noff


