import matplotlib.pyplot as pl
from astropy.io import ascii

casa=ascii.read("data/EvtList_ON_CasA_3horas.txt")
off=ascii.read("data/EvtList_OFF_CasA_3horas.txt")

theta2_casa = casa['theta2'].data
theta2_off = off['theta2'].data

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
				pl.hist(theta2_casa, bins=30, histtype='stepfilled',alpha=0.2, normed=False)
				pl.xlabel('$\Theta^2$ [$grados^2$]')
				pl.ylabel('Numero de Eventos')
				pl.show()
			elif tipo1 == "off":
				pl.hist(theta2_off, bins=30, histtype='stepfilled',alpha=0.2, normed=False)
				pl.xlabel('$\Theta^2$ [$grados^2$]')
				pl.ylabel('Numero de Eventos')
				pl.show()
		elif tipo2 == "casa" or tipo2 == "off":
				pl.hist(theta2_off, bins=30, histtype='stepfilled', color='blue', label='OFF', alpha=0.5, normed=False)
				pl.hist(theta2_casa, bins=30, histtype='step', color = 'red',label='ON', alpha=0.9, normed=False)
				pl.xlabel('$\Theta^2$ [$grados^2$]')
				pl.ylabel('Numero de Eventos')
				pl.legend()
				pl.show()
		else: print ("no tenemos esos datos") 
	else: print ("no tenemos esos datos") 

