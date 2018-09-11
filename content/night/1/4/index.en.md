+++
title = "Night 1 Page 4"
description = ""
weight = 4
type= "night"
right = "notebook"
notebook = "GRH_night_1_2_es.ipynb"
+++

{{< header_night title="How to get rid of the background">}}

In Greek mythology Cassiopeia was an arrogant and vain woman who boasted of her incomparable beauty. For astronomers Cassiopeia is a constellation that can be seen in the northern hemisphere throughout the year.

{{< img name="casiopea.png" caption="Mythology or astronomy? Better choose the two." credit="Wikimedia Commons" >}}

I, as a gamma-ray hunter, go in search of Cassiopeia A, a remnant of the supernova - what remains of a stellar explosion - which is the brightest the extrasolar radio source radio in the sky. We affectionately call it CasA [KASEIi, not home in Spanish!] And we go in search of the gamma rays that it emits. And, of course, CasA is in the constellation of Cassiopeia.

I point the MAGIC telescopes at CasA and I hope, the night will be long.

{{< quote
    text="When we point to a source like CasA, how do we know that what really comes to us came out of CasA? The Universe is full of backlighting, and we must keep that in mind when we catch gammas" >}}

When a video is recorded in a place where there is noise, the sound technician has a trick to get rid of it in the final assembly. Record the sound when everyone is silent and then subtract it from the sound of the video. What you are doing with this trick is to eliminate the noise.

Something similar we do when we want to subtract the backlight of the universe. We point the telescopes to a place where we know that gamma rays do not reach us and then we subtract it from the data that comes from the place in the sky where we think gamma rays can reach us.

We call the first OFF: we know that gamma rays do not come from there, so what we get will be background noise.

We call the second ON: we think that gamma rays come from there but we are not sure.

The final trick is to subtract: ON-OFF, signal less noise.

{{< img name="histogram.png" caption="Blue for noise, red for the possible signal. Do not forget to get rid of all the light that does not come from gamma rays, or you will not really know what you are seeing." >}}

When I have been observing CasA for 3 hours, I start to analyze the data that comes to us. And that means that I start using code to select and add events that we know are gamma rays detected by our telescopes. And, of course, subtract the background noise that we have detected in a place near CasA.

Again, do not be afraid of the code, it is not a monster, it is a tool.

On the page on the right you will see how I analyze the first data that comes from CasA and I draw my first thetaplot - does it sound strange, but we call these graphs that way.

If you dare, this may also be your first Gamma ray analysis!
