+++
title = "Night 1 Page 2"
description = ""
weight = 2
type= "night"
right = "notebook"
notebook = "GRH_night_1_1_es.ipynb"
+++

{{< header_night title="How to get rid of the Moon?">}}

You can buy filters for a camera in many stores. But those of the MAGIC telescopes can not be found on the internet because they do not exist in the market. So we have no choice but to go to the workshop and design them ourselves.

Once we have them, we have to test them to see if they really work. How can we know if they only get rid of the Moon and not also the gamma rays that we want to hunt? Remember that, from the images we take, we only want to take out the moonlight.

{{< img name="moon_filter.png" caption="The filter partially gets rid of the Moon and lets part of the gamma rays pass through. But it is not perfect! With this scheme you can calculate if the filter works as we expect." >}}

In the notebook on the right you will see how we do the calculation. We could do it with pencil and paper but, what laziness right? With a couple of lines of code we solve it. Use the notebook without fear, you can not break anything.

{{< quote
    text="Hunters use code to work with telescope data. Do not be afraid of programming, computers only do what we tell them. And if you control them, they help you do things more quickly." >}}

The filter absorbs more or less light depending on the wavelength. And both the light coming from the Moon and the gammas have different intensities also depending on the wavelength. So we have to look at how much light from the gammas pass and how much of the moonlight is absorbed for each wavelength. To know the total we add all the values.

To know the amounts of light that we have after the filter we need to multiply the intensity by F (the fraction of light that passes through the filter). If the filter was perfect we would multiply by 1 the type of light that interests us and by 0 the one we want to eliminate. But this is not an ideal world. We have no choice but to adapt.

{{< img name="filter.png" caption="The graphics seem very abstract, but in reality they explain many things to us. Look at what is shown on each axis and try to relate it to the filter. Which light goes through? Which light is absorbed?" >}}

Have you seen that to compare between what arrives and what goes though (or is absorbed) we divide the two intensity values? If you think about it, you will see that it is the best way: if the result is close to 1, it is that the two values are similar, if not that they are very different.

We insist, the filters are not perfect, but they work well. The goal was to avoid the moonlinght gving troubles, and it seems that it will not be the case. With these filters we can observe during more hours without the light that reflects our satellite bothering us. It only remains to install the filters, so that we can use them during the observations.


