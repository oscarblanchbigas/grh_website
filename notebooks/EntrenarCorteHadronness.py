from astropy.io import ascii
import numpy as np
import matplotlib.pyplot as pl
import os

#os.chdir("/Users/blanch/IFAE/home/Python/AlbaFernandez")
cygX1_1d=ascii.read("data/EvtList_ON_CygX3_1day.txt")
off_1d=ascii.read("data/EvtList_OFF_CygX3_1day.txt")

theta2_cygX1_1d = cygX1_1d['theta2'].data
theta2_off_1d = off_1d['theta2'].data
hadroness_cygX1_1d = cygX1_1d['had'].data
hadroness_off_1d = off_1d['had'].data
sig = np.zeros(30)
had = np.zeros(30)
for x in range(1, 31):
	CutHadOff = theta2_off_1d * (hadroness_off_1d < x/100.0)
	CutHadOff = np.ma.masked_equal(CutHadOff,0)
	CutHad = theta2_cygX1_1d * (hadroness_cygX1_1d < x/100.0)
	CutHad = np.ma.masked_equal(CutHad,0)
	Noff, ThetasOff, _ = pl.hist(CutHadOff.compressed(), bins=30, histtype='stepfilled', color='red', alpha=0.5, normed=False)
	Non, ThetasOn, _ = pl.hist(CutHad.compressed(), bins=30, histtype='step', color = 'blue',alpha=0.9, normed=False)
	EventosON=np.sum(Non[0:2])
	EventosOFF=np.sum(Noff[0:2])
	sig[x-1] = (EventosON-EventosOFF)/(EventosON+EventosOFF)**(0.5)
	had[x-1] = x/100.0

def MejorCorte():
	pl.figure(10, figsize=(10, 5), facecolor='w', edgecolor='k')
	pl.plot(had,sig)
	pl.xlabel('Corte en Hadronness')
	pl.ylabel('Significancia')
	pl.show()


