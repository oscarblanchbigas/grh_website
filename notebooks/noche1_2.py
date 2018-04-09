import numpy as np
import matplotlib.pyplot as pl

from astropy.io import ascii
from scipy import stats, special

from IPython.display import Image

filtro=ascii.read("data/TransimisionFiltro.txt")
longitudondafiltro = filtro['LongitudOnda'].data
transmisionfiltro =  filtro['Transmision'].data
filtroarray=np.array(transmisionfiltro)


luna=ascii.read("data/EmisionLuna.txt")
longitudondaluna = luna['LongitudOnda'].data
emisionluna = luna['Emision'].data
lunaarray=np.array(emisionluna)

cherenkov=ascii.read("data/EmisionGamma.txt")
longitudondacherenkov = cherenkov['LongitudOnda'].data
emisioncherenkov = cherenkov['Emision'].data
cherenkovarray=np.array(emisioncherenkov)

lunafiltrada =lunaarray * filtroarray

cherenkovfiltrada =cherenkovarray * filtroarray
gammasfiltrada= cherenkovfiltrada

totalluna = np.sum(lunaarray)
totallunaFiltrada = np.sum(lunafiltrada)
totalcherenkov = np.sum(cherenkovarray)
totalcherenkovFiltrada = np.sum(cherenkovfiltrada)


def leer(tipo):
    if tipo == "luna":
        print (luna)

    elif tipo == "gammas":
        print (cherenkov)

    elif tipo == "filtro":
        print (filtro)

    else: print ("no tenemos esos datos")

def grafica(tipo):
    pl.figure(1, figsize=(20, 10), facecolor='w', edgecolor='k')
    if tipo == "luna":
        pl.subplot(131)
        pl.plot(longitudondaluna, emisionluna, 'ro')
        pl.axis([270, 670, 0, 10])
        pl.xlabel('Longitud de Onda [nm]')
        pl.ylabel('Intensidad [a.u.]')
        pl.title('Intensidad de la luz de la Luna')
        pl.grid(True)
    elif tipo == "gammas":
        pl.subplot(132)
        pl.plot(longitudondacherenkov, emisioncherenkov, 'ro')
        pl.axis([270, 670, 0, 1])
        pl.xlabel('Longitud de Onda [nm]')
        pl.ylabel('Intensidad [a.u.]')
        pl.title('Intensidad de la luz Cherenkov')
        pl.grid(True)
    elif tipo == "filtro":
        pl.subplot(133)
        pl.plot(longitudondafiltro, transmisionfiltro, 'ro')
        pl.axis([270, 670, 0, 1.0])
        pl.xlabel('Longitud de Onda [nm]')
        pl.ylabel('Transmision [a.u.]')
        pl.title('Transmision de los filtros')
        pl.grid(True)

    elif tipo == "lunafiltrada":
        pl.subplot(121)
        pl.plot(longitudondaluna, lunafiltrada, 'ro')
        pl.axis([270, 670, 0, 1.0])
        pl.xlabel('Longitud de Onda [nm]')
        pl.ylabel('Transmision [a.u.]')
        pl.title('Transmision de los filtros (Luna)')
        pl.grid(True)

    elif tipo == "gammasfiltrada":
        pl.subplot(122)
        pl.plot(longitudondacherenkov, cherenkovfiltrada, 'ro')
        pl.axis([270, 670, 0, 1.0])
        pl.xlabel('Longitud de Onda [nm]')
        pl.ylabel('Transmision [a.u.]')
        pl.title('Transmision de los filtrosn (Gammas)')
        pl.grid(True)

    else: print ("no tenemos esos datos")

def multiplicar (tipo1,tipo2):

    if tipo1 == "luna" and tipo2 =="filtro":


        print ('totalluna: {0:.2f}'.format(totalluna))
        print ("lunafiltrada:")
        print (lunafiltrada)
        print ('totallunaFiltrada: {0:.2f}'.format(totallunaFiltrada))

    elif tipo1 == "gammas" and tipo2 =="filtro":

        print ('totalgammas: {0:.2f}'.format(totalcherenkov))
        print ("gammasfiltrada")
        print (cherenkovfiltrada)
        print ('totalgammasFiltrada: {0:.2f}'.format(totalcherenkovFiltrada))
    else: print ("no tenemos esos datos")

def fin():
    Image(filename='yougotthis.jpg')
