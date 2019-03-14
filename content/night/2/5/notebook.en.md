# The curse of the 3 sigmas

Let's see if we can see what the 2.7 sigmas we have achieved mean.

As usual, let's start loading the necessary libraries

```python
import numpy as np
from SimularBackground import *
%matplotlib inline
```

I have created a function that simulates 10000 observations for which there is no signal. The expected number of events for ON and OFF observations are the same. That does not mean that we always have the same number of events for ON and OFF. It's like when you throw two dice, the expected average value of the sum of the two dice is 7, but that does not mean that sometimes they do not add 2 or 12.

For each of these simulated observations (which would take an entire life dedicated only to them to really do them!), I calculate the **Significance** that is given in units of **sigmas**.


```python
grafica("Significancias")
```


![png](night_2_5_files/night_2_5_3_0.png)

The negative part of the distribution is for the cases in which there are more events in the OFF observations than in the ON ones, which does not have much physical sense. It is simply due to what we call statistical fluctuations. The positive part of the distribution in this case are also statistical fluctuations by construction. But in real observations like the one we are analyzing from Cyg-X1, we can not distinguish between a statistical fluctuation or a truth signal.

That is, since more **sigmas** has our **significance** less likely it is a statistical fluctuation. You can see from the graph that the number of times I have a certain value of **sigmas** decreases when **sigma** grows.

In fact, we are going to calculate the probability of having a statistical fluctuation that gives me a greater significance than the one we have with the Cyg-X1 data.


```python

# First I recover from the graph the "Times" that I have each "Significance"
# I do it with a couple of functions that I created
Veces=valores("Numero de Veces")
Significancias=valores("Significancias")

# Now I use a library function that I have loaded numpy that for each bin I add
# the values ​​of all previous bins. For example, step from (3,6,0,4,1) to (3,9,9,13,14)
VecesAcumuladas = np.cumsum(Veces)
# And with this it is easy to calculate the fraction of times that I have a greater significance
# that any value. First I calculate the probability for each of the values
# of sigma in the graph
Probabilidad = 1.0-VecesAcumuladas/(VecesAcumuladas.max())
# And finally I use a loop (for x in range (0.100)) for which x is changing from
# value from 0 to 100 and look when the value of the significance is greater than 2.68
# and there I will have my chance:
for x in range(0,100):
        if Significancias[x] > 2.68 :
                print ("The probability that the noise does not generate a significance of 2.68 or greater is:", Probabilidad[x]*100, "%")
                break
```

    The probability that the noise does not generate a significance of 2.68 or higher is: 0.22%


![png](night_2_5_files/night_2_5_5_1.png)

We agree, a 0.22% probability is quite small. But not enough. Scientists want to make sure that what we are seeing is true. To be sure that statistical fluctuations are not leading to fake discoveries the scientific field normally requires that the **Significance** be **5 sigmas**. That is a probability of 0.000025%

> Note: Defining functions helps us to go step by step, but if you are curious to know what is defined in the functions, do not hesitate to use the forum to ask.

