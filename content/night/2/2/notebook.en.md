# The scientific notebook of Alba
This is my **scientific notebook**. Here I am pointing everything I do ... it is important to write down everything, at least for me because if not then I do not remember everything I have done.

Now it's time to calculate **HOW MANY MAGIC REMAIN IN HEAVEN**

As always, to start with this **iPython** we have to load the libraries that we will use. It's one of the best things about Python, there are a lot of people creating very useful libraries.

```python
import math
```

The first thing I need to know to calculate how many MAGIC fit in the sky is to know how big the sky is. Yes! The universe is infinite, but when I look at a star, I am also seeing everything behind it and in front of it. Therefore, I want to know the size of the sky in directions, not in m, km, parsecs, light years or anything like that ... and the directions are calculated in **stereoradians**, which are defined as the explored surface divided by square of the distance at which the surface is.


It seems complicated, but let's think about it together ... maybe it is not. For a sphere with radius of 10 Km of which I am in the center, we have:


```python
radio=10000
superficie = 4 * math.pi * (radio*radio)
print ("The surface of the sphere with radius of ",radio, " meters is ", superficie, "square meters")
```

    The surface of the sphere with radius 10000 meters is 1256637061.44 square meters


Now we just need to divide the surface by the radius squared and we will have the stereoradians for a sphere of 10 km of which we are in the center.


```python
stereorradianes = superficie / (radio*radio)
print ("The angular dimension of a sphere of 10 km of which we are in the center is", stereorradianes, "stereoradians")
```

     The angular dimension of a sphere of 10 km of which we are in the center is 12.5663706144 stereoradians


In fact, if you have noticed, that is independent of the size of the sphere ... Therefore the angular size of the sky that we see from the earth is the same.
Yes, yes ... the Earth is at the center of the universe visible from Earth, which does not mean that it is at the center of the universe.

----------

Now I need to calculate the size of the piece of sky that can be watched with MAGIC. I know that in degrees they are 2 degrees by 2 degrees, that is 4 square degrees. But I have to turn it into steradians.

Luckily since high school they explain to me with trigonometry that 180 degrees are Pi radians.


```python
GradoARadian = math.pi / 180.0
GradoCuadradoAStereorradian = GradoARadian * GradoARadian
AreaDeMAGIC = 4 * GradoCuadradoAStereorradian
print ("The area covered by MAGIC are", AreaDeMAGIC, "stereoradianes.")
```

    The area covered by MAGIC is 0.00121846967915 stereoradians.


I only need to divide them
> ** Angular size of the sky / Angular size of MAGIC **


```python
print ("In the sky they fit", stereorradians / AreaDeMAGIC, "MAGICs")
```

In the sky they fit 10313.2403124 MAGICs


But how small is MAGIC ... or how big the sky is!
