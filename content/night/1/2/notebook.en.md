# Daniel's scientific notebook
This is my **scientific notebook**. Here I can see the **data** taken with the telescopes, do **calculations** and **annotations**. It is one more tool of the Gamma Ray Hunters. All the Hunters have ours and you have yours in **Your Night**.

It is best to understand how it works with an example. So let's calculate if the filters we have designed are the right ones or not.

We have 3 data sets.

- One has the data for the amount of **moonlight** that reaches the telescopes.
- Another has the data for the **light of the gamma rays** that reaches the telescopes.
- The last one has the information of how much light (of the moon or of the gammas) passes through the filter.

Each file shows us the information by wavelength.

**ATTENTION!** Remember that to execute the code that is in each of the command cells you must press *SHIFT + ENTER*.
And if for any reason you double click on a text cell like this one, you will see the text without formatting. Doing *SHIFT + ENTER* you will see it again.

Let us read for example the data set that tells us the amount of **light from the moon** that reaches the telescopes:


```python
%matplotlib inline
from noche1_2 import *
```


```python
leer("luna")
```

    LongitudOnda  Emision
    ------------ ---------
             270    0.0921
             280  0.077652
             290 0.0042408
             300  0.049055
             310  0.034728
             320   0.33099
             330    0.4941
             340   0.58336
             350   0.59861
             360   0.79136
             ...       ...
             570    5.6372
             580    6.0073
             590    5.8452
             600    6.3041
             610    6.4821
             620    6.7191
             630    6.6753
             640    6.9272
             650    7.3382
             660    7.8201
             670    8.2151
    Length = 41 rows


-----------
This is what each column means
- The first column is the **Wavelength** measured in nanometers.
- The second is the **intensity of the emission of the moon**. The units of the intensity are arbitrary (a.u).

Look at the data and see what format they have, but to get more information from them is much better to represent them graphically.

Be attentive to the axes of the graph. In the X-axis we have the wavelength, and in the Y-axis we have the emission of the Moon. Look also at the scale of the axis of the Y.


```python
grafica("luna")
```


![png](night_1_2_files/night_1_2_4_0.png)

With the graph it is easy to see that the amount of **moonlight** (by the way, you know that it is not really moonlight since the moon only reflects it, right?) increases for longer wavelengths .

----------

Let's look at what happens with the **gamma-ray light** and the filters:


```python
grafica("luna")
grafica("gammas")
grafica("filtro")
```


![png](night_1_2_files/night_1_2_6_0.png)

Now we can compare how much light comes to us from the moon and how much we get from the gammas.

- **Which is more intense? Of the Moon or the Gammas?**
- **Do you know what part of the light lets through the filter and what part absorbs it?**

The light that comes from the gamma rays increases very fast with the wavelength between 250 and 350 nanometers, but then, unlike the one coming from the moon, it decreases for longer wavelengths. Hence, we chose a filter that had a good transmission below 350 nanometers and that would not let light pass over 400 nanometers.

----------

It is time to calculate how much light from the moon and gammas goes through the filter. The goal is for the filter to eliminate the moon but not the gammas. But there is no perfect filter.

The calculation is simple: we must multiply *the intensity of the moon* by *the filter* for each wavelength.


```python
multiplicar("luna","filtro")
```

    totalluna: 144.48
    lunafiltrada:
    [  7.18380000e-02   6.51500280e-02   3.68525520e-03   4.34627300e-02
       3.09773760e-02   2.95574070e-01   4.42713600e-01   5.20357120e-01
       5.29769850e-01   6.87691840e-01   8.37316200e-01   7.43137200e-01
       5.62607500e-01   3.47318400e-01   9.97204000e-02   3.71880000e-02
       1.34568000e-02   1.41795000e-02   1.69920000e-02   2.11032000e-02
       2.16384000e-02   1.72076000e-02   1.34841000e-02   4.39160000e-03
       4.62880000e-03   9.34700000e-04   4.04688000e-04   3.00882000e-04
       3.74871000e-04   2.12456000e-04   0.00000000e+00   0.00000000e+00
       0.00000000e+00   0.00000000e+00   0.00000000e+00   0.00000000e+00
       6.67530000e-05   4.15632000e-04   7.33820000e-04   4.69206000e-02
       4.10755000e-01]
    totallunaFiltrada: 5.91


----------------

And the same for the light from the gamma rays:


```python
multiplicar("gammas", "filtro")
```

    totalgammas: 22.36
    gammasfiltrada
    [  8.22120000e-02   7.50905000e-02   3.28568900e-01   6.22946600e-01
       7.08158800e-01   7.37975200e-01   7.53177600e-01   7.47942000e-01
       7.26408000e-01   7.03021000e-01   6.51714000e-01   5.42575800e-01
       3.39794000e-01   1.34264800e-01   3.71436000e-02   1.24290000e-02
       5.43600000e-03   3.25500000e-03   3.19050000e-03   3.70620000e-03
       3.51840000e-03   2.27640000e-03   1.64160000e-03   5.24400000e-04
       5.19700000e-04   1.01160000e-04   3.89920000e-05   2.83140000e-05
       3.16680000e-05   1.75800000e-05   0.00000000e+00   0.00000000e+00
       0.00000000e+00   0.00000000e+00   0.00000000e+00   0.00000000e+00
       3.51200000e-06   2.05260000e-05   3.33900000e-05   1.91700000e-03
       1.50750000e-02]
    totalgammasFiltrada: 7.24


--------
As you can see, for the moon we went from **totalluna = 144** to **totallunafiltrada = 6**, that is to say that we are left with 4% of the light of the Moon.

On the other hand, for the gammas we went from **totalgammas = 22** to **totalgammasFiltrada = 7**, which is a much smaller reduction.

Let's make the numbers:


```python
totallunaFiltrada/totalluna
```




    0.040883189190507568




```python
totalcherenkovFiltrada/totalcherenkov
```




    0.32407190844270289


What do you think? Do the filters work? Proportionally, do they allow to go through more light from the Moon or more light from the Gammas?

The filters are not perfect, but they work quite well. So now we can observe even with full Moon. This way we will have more hours to continue looking for Gammas. And that, as you will see, is very important.

This is your first scientific notebook, your first step as a Gamma Ray Hunter. Keep going on into the night, many high energy surprises await you.
