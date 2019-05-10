/*note -- it seems 2019 is a very cloudy year -- 
2018-11-08 is the last good no-cloud date as of 2019-05-10
*/

var fostercity_region = /* color: #d63000 */ ee.Geometry.Polygon(
        [[[-122.984, 38.426],
          [-120.816, 38.111],
          [-121.315, 36.516],
          [-123.439, 36.825],
          [-122.984, 38.426]]]);

//bands to be considered
var Landsat_8_BANDS = ['B2', 'B3','B4','B5','B6','B7'];
var Landsat_7_BANDS = ['B1','B2','B3','B4','B5','B7'];
var STD_NAMES = ['blue','green','red','nir','swir1','swir2'];

//filtering Foster City Bay-region
var collection = ee.ImageCollection('LANDSAT/LC08/C01/T1_SR') //load collection 1 - LANDSAT8 raws for a single year
	.filter(ee.Filter.eq('WRS_PATH',44))
	.filter(ee.Filter.eq('WRS_ROW',34))
	.filterDate("2019-01-01","2019-05-11")
	// Filter cloudy scenes.
  //.filter(ee.Filter.lt('CLOUD_COVER', 0))
	.select(Landsat_8_BANDS, STD_NAMES);

print(collection); //date debug

//Display the Composite
Map.addLayer(collection, {'bands':['red','blue','green'],min:0,max:2000}, 'baselayer', 1);

var inputimage = collection.median();

function addNDVI(image) {
  return image
    .addBands(image.normalizedDifference(['nir','red']).rename('ndvi'))
  ;
}

var ndvi = addNDVI(inputimage);

Map.addLayer(ndvi,{bands:['ndvi'],min:0,max:1}, 'ndvilayer', 0);

//predict bands
var predictionBands = ['blue','green','red','nir','swir1','swir2','ndvi'];

var trainingimage = ndvi.select(predictionBands);

var trainingpolygons = ee.FeatureCollection('ft:18GtIidyOfJkJhnsX_-7MWr3b0VH3vZIKrymBsUC5');

var training = trainingimage.sampleRegions({
    collection: trainingpolygons,
    properties: ['class'],
    scale: 160
});

//Train the CART classifier (a regular expression, not made up) with default parameters
var trained = ee.Classifier.cart().train(training,'class', predictionBands);

//Classify image with the same bands used for training.
var CARTclassified = trainingimage.select(predictionBands).classify(trained);

//Display the result
Map.addLayer(CARTclassified, {min: 0, max: 3, palette: ['97CAf9','784800', '228B22', 'fff44f']}, 'CARTclassification', 1);

Export.image.toDrive({
  image: CARTclassified,
  description: 'classified_image',
  region:fostercity_region,
  scale:50.0
});