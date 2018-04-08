import numpy as np
import matplotlib.pyplot as pl
import scipy.ndimage as ndimage

from astropy.io import ascii
from matplotlib.colors import LogNorm
from scipy import stats, special

casa=ascii.read("data/EvtList_ON_CasA_100horas.txt")
off=ascii.read("data/EvtList_OFF_CasA_100horas.txt")

theta2_casa = casa['theta2'].data
theta2_off = off['theta2'].data

ra_casa = casa['RA'].data
dec_casa = casa['DEC'].data
ra_off = off['RA'].data
dec_off = off['DEC'].data

def leer(tipo):
    if tipo == "casa":
        print (casa)
        
    elif tipo == "off":
        print (off)
              
    else: print ("no tenemos esos datos")


def histograma(tipo1, tipo2="none"):
	pl.figure(1, figsize=(10, 5), facecolor='w', edgecolor='k')

	if tipo1 in ["casa", "off"] :
		if  tipo2 == "none":	
			if tipo1 == "casa":
				pl.hist(theta2_casa, bins=50, histtype='stepfilled',alpha=0.2, normed=False)
				pl.xlabel('$\Theta^2$ [$grados^2$]')
				pl.ylabel('Numero de Eventos')
				pl.show()
			elif tipo1 == "off":
				pl.hist(theta2_off, bins=50, histtype='stepfilled',alpha=0.2, normed=False)
				pl.xlabel('$\Theta^2$ [$grados^2$]')
				pl.ylabel('Numero de Eventos')
				pl.show()
		elif tipo2 == "casa" or tipo2 == "off":
			pl.hist(theta2_off, bins=50, histtype='stepfilled', color='blue', label='OFF', alpha=0.5, normed=False)
			pl.hist(theta2_casa, bins=50, histtype='step', color = 'red',label='ON', alpha=0.9, normed=False)
			pl.xlabel('$\Theta^2$ [$grados^2$]')
			pl.ylabel('Numero de Eventos')
			pl.legend()
			pl.show()
		else: print ("no tenemos esos datos")
	else: print ("no tenemos esos datos")




def skymap (tipo1, tipo2="none"):
	if  tipo2 == "none":
		if tipo1 == "casa":
			data_source, xedge_s, yedge_s = np.histogram2d(ra_casa, dec_casa, bins=51)
			pl.imshow(data_source, interpolation='gaussian', extent=[xedge_s[0], xedge_s[-1], yedge_s[0], yedge_s[-1]], aspect="auto")
			pl.xlabel('Ascencion Recta [grados]')
			pl.ylabel('Declinacion [grados]')
			pl.show()
		elif tipo1 == "off":
                        data_off, xedge_o, yedge_o = np.histogram2d(ra_off, dec_off, bins=51)
                        pl.imshow(data_off, interpolation='gaussian', extent=[xedge_o[0], xedge_o[-1], yedge_o[0], yedge_o[-1]], aspect="auto")
			pl.xlabel('Ascencion Recta [grados]')
			pl.ylabel('Declinacion [grados]')
			pl.show()
		else: print ("no tenemos esos datos")
	elif tipo1 == "casa" and tipo2 == "off":
                data_source, xedge_s, yedge_s = np.histogram2d(ra_casa, dec_casa, bins=51)
                data_off, xedge_o, yedge_o = np.histogram2d(ra_off, dec_off, bins=51)
		img1 = ndimage.gaussian_filter(data_off, sigma=(5, 2), order=0)
                img2 = ndimage.gaussian_filter(data_source, sigma=(5, 2), order=0)
                hist_excess = np.subtract(img2, img1)
                hist_excess = np.divide(hist_excess, img1)
                pl.imshow(hist_excess, interpolation='gaussian', extent=[xedge_s[0], xedge_s[-1], yedge_s[0], yedge_s[-1]], aspect="auto")
		pl.colorbar()
                pl.xlabel('Ascencion Recta [grados]')
                pl.ylabel('Declinacion [grados]')
                pl.show()
	else: print ("no tenemos esos datos")


