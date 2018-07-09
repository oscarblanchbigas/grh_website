import numpy as np
import matplotlib.pyplot as pl
from matplotlib.colors import LogNorm
import pandas as pd

def plotSkymap(source, xedge, yedge):
    pl.imshow(source, cmap='hot', interpolation='none', extent=[xedge[0], xedge[-1], yedge[0], yedge[-1]], norm=LogNorm())
    pl.colorbar()
    pl.xlabel('Ascencion Recta [grados]')
    pl.ylabel('Declinacion [grados]')
    pl.show()
    
    
def skymap(source, off='none', bins=51):
    if 'RA' in source.columns:
        data_source, xedge_s, yedge_s = np.histogram2d(source.RA.values, source.DEC.values, bins)
        if isinstance(off, str):
            plotSkymap(data_source, xedge_s, yedge_s)
        elif 'RA' in off.columns:
            data_off, xedge_o, yedge_o = np.histogram2d(off.RA.values, off.DEC.values, bins)
            hist_excess = np.subtract(data_source, data_off)
            hist_excess = np.divide(hist_excess, data_off)
            plotSkymap(hist_excess, xedge_s, yedge_s)
        else:
            print ("el off no tiene datos correctos")               
    else:
        print ("no se puede hacer el skymap. falta de la fuente")