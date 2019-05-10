[![Repo Size](https://badge-size.herokuapp.com/MadIceTea/LIDA.js/master/strapdown.min.js)](https://github.com/MadIceTea/StrapDown.js/blob/master/strapdown.min.js)
[![Best Practices](https://bestpractices.coreinfrastructure.org/projects/612/badge)](https://bestpractices.coreinfrastructure.org)
[![Code Climate Issues](https://codeclimate.com/github/MadIceTea/LIDA/badges/issue_count.svg)](https://codeclimate.com/github/MadIceTea/LIDA)
[![Pending Pull-Requests](http://githubbadges.herokuapp.com/MadIceTea/LIDA/pulls.svg)](https://github.com/MadIceTea/LIDA/pulls)
[![Github Issues](http://githubbadges.herokuapp.com/MadIceTea/LIDA/issues.svg)](https://github.com/LIDA/balanceic/issues)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/3bedc4b9cf3548689db09f1bfca82414)](https://www.codacy.com/app/MadIceTea/LIDA?utm_source=github.com&utm_medium=referral&utm_content=MadIceTea/LIDA&utm_campaign=badger)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/MadIceTea/LIDA/wiki/)

<h2>LIDA: Land Image-Data Assessment</h2>

Remote Sensing is a developing area of civil engineering that gives an opportunity for meeting envrionmental studies with practical programming skill. This project will make future predictions on urbanization via machine learning from calculations on the delta for tagged images' individual pixels.

Using the Google Cloud Compute servers with Google Earth Engine (online) as an interface, I've programmed server-side javascript code and pre-programmed a KML file (here preserved from the publicly accessible fusion table of the same ID) with data on land-use classification in four categories: water, barren land, green area (presence of plants, e.g. forest), and urbanized area (dense area of homes or business structures).

Once the Javascript has finished creating a classified image over Google Earth Engine, I download this image at 50m resolution to analyse further in QGIS with a plugin written in python, MOLUSCE*, that allows for pixel machine learning to predict future classifications from the delta of a previous image over the same area and an indexing image, such as one showing nighttime lights over the same area.

I have used various Satellites from LANDSAT 5 - LANDSAT 8 (daytime) and NOAA VIRS (nighttime) from 1984-2017 to create images.
[MODERN images are from year 2017, as this was current at the beginning of this project in Winter 2017.]

`*MOLUSCE is a derivative of the pix2pix tensorflow library, and handles the same concept in an intuitive GUI.`

As my [presentation](https://github.com/MadIceTea/LIDA/blob/master/Future-Predictive%20Terrain%20Classification%20of%20California%20Bay%20Area/Presentation.pdf) shows, I stopped here to show a theoretical indexing of what the predicted 2017 in MOLUSCE vs the actual predicted images were, and to give a prediction for 2027.

The same presentation has a couple slides from my professor, written in Japanese, that show a major problem in machine learning neural networks that I encountered - over-training. In my desire to over-engineer, one million iterations had probably worsened my accuracy of the model to some degree. It is introduced as a potential problem to my current data. A side project, with enough time, will inquire on how to seek the number of iterations which give an optimal accuracy.

<h3>Why start this project? What do I hope to see?</h3>

This is a first-step mockup, to show the feasability of the idea that population changes in technology hubs in the United States may have specific and identifiable trends, related to the delta in urban-classification (both in area and in density).

While the first part of this project focuses on the classification, a more important second part should be able to provide some correlation of population delta and urbanization delta. Reasons from new articles and academic journals will be considered.

I'm not sure what to expect, but I am starting with the hypothesis of heavy net inflow movement meaning the area is yet to be a "upcoming startup area" and heavy net outflow movement means the area is "an oversaturated market" (with SF Bay Area being an interesting example). If the area sees little change, it is a "stable hub of IT jobs market".

<h3>Where else will I run simulations on?</h3>

Eventually, this project will also give some views over Dallas-Houston-Austin area, Texas; Raleigh-Durham area, North Carolina; Boston area, Masssachussets; Portland, Oregon and surrounding; and Ann Arbor, Michigan in addition to the greater San Francisco Bay Area.

Given even more time, I'd like to study over Tokyo, Japan; Osaka, Japan; Sendai, Japan; and Fukuoka, Japan for any similarities or differences to their US counterparts.

<h3>Contributions?</h3>

While I'm not sure how much attention this project will draw, anyone is free to contact my University email (listed on my profile) to give contributions. The Git repository also remains open-source and all comments from merge suggestions will be reviewed and given serious consideration.

In the meanwhile, I will be working on updating for more locations, and improving the structure and effectiveness of my code. Thank you in advance.

<h4>Disclaimer</h4>
This work is being assissted by Dr. Wataru Takeuchi of the University of Tokyo. It is not under review by any conference or submitted as a paper for publication, but this README will be updated as appropriate.

<h4>License</h4>
All work here with reserved rights, not to be replicated by others for academic or commercial gain. Personal exploration rights granted conditionally, only when explicitly approved in an email contact first.
Further, due to the nature of the current Google Earth Engine AUP (Acceptable Use Policy), commercial use is absolutely prohibited.
