# La llibreta científica de Quim
Uff ... ara que sé que algú més va a llegirà aquesta llibreta, hauré d'intentar escriure-de manera que s'entengui. La part bona és que així quan me la miri jo en un parell de setmanes potser entengui alguna cosa.

Vegem si la matèria fosca que hi ha a Perseus ens genera raigs gamma.

```python
import numpy as np
import pandas as pd
import matplotlib.pyplot as pl
%matplotlib inline
```

Ja tenim les llibreries que necessitem, ara a llegir les dades. Us recordeu de com fer-ho? Si no, pregunteu a Alba que quan vol 's'explica molt bé!

```python
#Llegim els fitxers i els hi donem un nom
perseus_ON= pd.read_csv('data/EvtList_ON_Perseus_Other.txt', sep=' ')
perseus_OFF= pd.read_csv('data/EvtList_OFF_Perseus_Other.txt', sep=' ')
#A veure quantes dades estic carregant?
len(perseus_ON)
```




    4111265


4 milions i mig de files !! Això cap Excel ho pot obrir. Per sort Python si ...
I per què cada vegada carreguem més dades? Perquè cada vegada ho compliquem una mica.

L'Alba us va explicar com fer el tall en hadronness. Però ella ja tenia les dades una mica preparades. S'havia quedat amb només els que tenen un **Theta Quadrat** menor que 0.4. No és el meu cas, així que per tenir un **Thetaplot** com el de l'Alba o el Daniel necessito fer també un tall en **Theta Quadrat** a més del de hadronness.


```python
# 1 Definim les variables de tall had_cut i theta_cut 
had_cut = 0.20
theta2_cut = 0.40

# 2 Seleccionem les dades:
perseus_ON_cut = perseus_ON[(perseus_ON['had'] < had_cut) & (perseus_ON['theta2'] < theta2_cut)]
perseus_OFF_cut = perseus_OFF[(perseus_OFF['had'] < had_cut) & (perseus_OFF['theta2'] < theta2_cut)]

# A veure quantes dades em quedo?
len(perseus_ON_cut)
```




    310622



Veieu? Després dels talls ens quedem amb uns tres-cents mil esdeveniments.
I només em queda fer el **ThetaPlot**

```python
pl.figure(1, figsize=(10, 5), facecolor='w', edgecolor='k')
Noff, ThetasOff, _ = pl.hist(perseus_OFF_cut.theta2, bins=40, histtype='stepfilled', color='red', alpha=0.5, normed=False)
Non, ThetasOn, _ = pl.hist(perseus_ON_cut.theta2, bins=40, histtype='step', color = 'blue',alpha=0.9, normed=False)
pl.xlabel('$\Theta^2$ [$grados^2$]')
pl.ylabel('Numero de Eventos')
pl.show()
```


![png](night_3_3_files/night_3_3_7_0.png)


S'assembla al de l'Alba i el Daniel, no? Però en realitat no és igual. Has vist la diferència? El meu està partit en més trossets. Jo en tinc 40 i ells només en tenen 30. Ho he fet amb el "bin = 40" a la instrucció:

> pl.hist(CutHadOff.compressed(), bins=40, histtype='stepfilled', color='red', alpha=0.5, normed=False)

També puc canviar altres coses: el color (color = 'yellow') o com es pinten les barres del gràfic (histtype = 'bar')

```python
pl.figure(1, figsize=(10, 5), facecolor='w', edgecolor='k')
Noff, ThetasOff, _ = pl.hist(perseus_OFF_cut.theta2, bins=40, histtype='stepfilled', color='yellow', alpha=0.5, normed=False)
Non, ThetasOn, _ = pl.hist(perseus_ON_cut.theta2, bins=40, histtype='bar', color = 'magenta',alpha=0.9, normed=False)
pl.xlabel('$\Theta^2$ [$grados^2$]')
pl.ylabel('Numero de Eventos')
pl.show()
```


![png](night_3_3_files/night_3_3_9_0.png)


Quin us agrada més?

---------

Ara només ens falta veure com de significatiu és el que veiem. A simple vista ja sembla que no ho és, però calculem la **siginificança**.

Alba es queixa de Daniel, però ella també fa alguna trapa ... per calcular la **significança** fa servir una funció sense explicar quines instruccions conté. Anem a resoldre-ho!

De fet el càlcul de la significança és molt simple

> S = (N_on - No_off)/sqrt(N_on+N_off)

on sqrt (...) indica l'arrel quadrada del que hi ha dins del parèntesi i que en Python es pot escriure com:

> (N_on+N_off)**(0.5)

Per tenir N_on i N_off simplement estirar els successos que tinc a les dues primeres divisions del gràfic anterior i que m'he guardat en les variables ** Non ** i ** Noff ** per deprés fer l'operació aritmètica.



```python
EventosON=np.sum(Non[0:2])
EventosOFF=np.sum(Noff[0:2])
Significancia=(EventosON-EventosOFF)/(EventosON+EventosOFF)**(0.5)
print ("Eventos ON =", EventosON)
print ("Eventos OFF =", EventosOFF)
print ("Significancia =", Significancia)
```

    ('Eventos ON =', 18111.0)
    ('Eventos OFF =', 18025.0)
    ('Significancia =', 0.45240605872906037)

El que deia **0.45 sigmes** o el que és el mateix, no veiem raigs gamma que ens arribin de la matèria fosca que hi ha a Perseus. Però, ¿vol dir això que no n'hi ha? Ho veurem aviat i per això també m'he apuntat el nombre d'esdeveniments ON i OFF.
