/*
LANDSAT 4 can only see T1_SR data over Tenessee (USA) and T2_SR over a small portion of Saskatchewan (Canada).
Hence, this program will be deprecated in favor of a 1994 analysis in LANDSAT 5.
*/

var fostercity_region = /* color: #d63000 */ ee.Geometry.Polygon(
        [[[-122.984, 38.426],
          [-120.816, 38.111],
          [-121.315, 36.516],
          [-123.439, 36.825],
          [-122.984, 38.426]]]);

//bands to be considered
var Landsat_4_BANDS = ['B1','B2','B3','B4','B5','B7'];
var STD_NAMES = ['blue','green','red','nir','swir1','swir2'];

//filtering Foster City Bay-region
var collection = ee.ImageCollection("LANDSAT/LT04/C01/T1_SR") //load collection 1 - LANDSAT7 raws for a single year
	//.filter(ee.Filter.eq('WRS_PATH',44))
	//.filter(ee.Filter.eq('WRS_ROW',34))
	.filterDate("1984-01-01","1986-11-01")
	// Filter cloudy scenes.
  .filter(ee.Filter.lt('CLOUD_COVER_LAND', 0.1))
	.select(Landsat_4_BANDS, STD_NAMES);

print(collection); //date debug

//Display the Composite
Map.addLayer(collection, {'bands':['red','blue','green'],min:0,max:2000}, 'baselayer', 0);

var inputimage = collection.median();

function addNDVI(image) {
  return image
    .addBands(image.normalizedDifference(['nir','red']).rename('ndvi'))
  ;
}

var ndvi = addNDVI(inputimage);

Map.addLayer(ndvi,{bands:['ndvi'],min:0,max:1}, 'ndvilayer', 0);

/*
//predict bands
var predictionBands = ['blue','green','red','nir','swir1','swir2','ndvi'];

var trainingimage = ndvi.select(predictionBands);

var trainingpolygons = ee.FeatureCollection('ft:18GtIidyOfJkJhnsX_-7MWr3b0VH3vZIKrymBsUC5');

var training = trainingimage.sampleRegions({
    collection: trainingpolygons,
    properties: ['class'],
    scale: 170
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
*/