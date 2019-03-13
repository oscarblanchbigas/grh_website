# La llibreta científica d'Alba

Aquesta és la meva **llibreta científica**. Aquí vaig apuntant tot el que faig ... és important apuntar-ho tot, com a mínim per mi ja que si no després no recuedo tot el que he fet.

Ara toca calcular **QUANTS MAGIC CABEN AL CEL** 

Com sempre, per començar amb això del **ipython** hem de carregar les llibreries que farem servir. És una de les millors coses de Python, hi ha un munt de gent creant llibreries molt útils.


```python
import math
```

El primer que necessito saber per calcular quants MAGIC caben al cel és saber com de gran és el cel. Sí! L'univers és infinit, però quan miro cap a una estrella, estic veient també tot el que hi ha darrere i davant de la ella. Per tant, vull saber la mida del cel en direccions, no en m, km, parsecs, anys llum ni res per l'estil ... i les direccions es calculen en **estereoradiants**, que es defineixen com la superfície explorada dividit per la distància a la qual està la superfície al quadrat.Sembla complicat, però pensem-ho junts ... potser no ho és en realitat. 

Per a una esfera amb radi 10 km de la qual jo sóc al centre, tenim:

```python
radio=10000
superficie = 4 * math.pi * (radio*radio)
print ("La superfície de l'esfera de radi", radio, "metres és", superficie, "metres quadrats")
```

    La superfície de l'esfera de radi 10000 metres és 1256637061.44 metres quadrats


Ara només ens fallta dividir la superfície pel radi al quadrat i tindrem els estereoradianes per a un esfera de 10 km de la qual som al centre.


```python
stereorradianes = superficie / (radio*radio)
print ("La dimensió angular d'una esfera de 10 km de la qual som al centre és", stereorradianes, "estereoradiants")
```

     La dimensió angular d'una esfera de 10 km de la qual som al centre és 12.5663706144 estereoradiants


De fet, si us heu fixat, això és independent de la mida de l'esfera ... Per tant la mida angular del cel que veiem des de la terra és el mateix.
Sí, sí ... la Terra és al centre de l'univers visible des de la Terra, que no vol dir que estigui en el centre de l'univers.

----------

Ara em falta calcular la mida del tros de cel que es pot mirar amb MAGIC. Sé que en graus són 2 graus per 2 graus, és a dir 4 graus quadrat. Però he de convertir-lo en estereoradiants.

Per sort des de l'institut que m'expliquen amb la trigonometria que 180 graus són Pi radiants.


```python
GradoARadian = math.pi / 180.0
GradoCuadradoAStereorradian = GradoARadian * GradoARadian
AreaDeMAGIC = 4 * GradoCuadradoAStereorradian
print ("L'àrea coberta per MAGIC són", AreaDeMAGIC, "stereoradianes.")
```

    L'àrea coberta per MAGIC són,00121846967915 stereoradianes.


Ja només em falta dividir-los
> ** Mida angular del cel / Mida angular de MAGIC **

```python
print ("Al cel hi caben", stereorradianes / AreaDeMAGIC, "MAGICs")
```

Al cel hi caben 10313.2403124 Màgics

Però què petit és MAGIC ... o que gran és el cel!
