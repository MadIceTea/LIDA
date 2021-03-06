/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var fostercity_region = /* color: #d63000 */ee.Geometry.Polygon(
        [[[-122.984, 38.426],
          [-120.816, 38.111],
          [-121.315, 36.516],
          [-123.439, 36.825],
          [-122.984, 38.426]]]);
/***** End of imports. If edited, may not auto-convert in the playground. *****/
//filtering Foster City Bay-region
/*var geometry = color: #d63000 ee.Geometry.Polygon(
        [[[-122.984, 38.426],
          [-120.816, 38.111],
          [-121.315, 36.516],
          [-123.439, 36.825],
          [-122.984, 38.426]]]);
// (See import record for the final version of the above.)
*/

// Filter dates
    var startyear = 2016,
        endyear = 2017,
        month = 11,
        day = 14,
        startdate = ee.Date.fromYMD(startyear, month, day),
        enddate = ee.Date.fromYMD(endyear, month, day);

var viirs = ee.Image('NOAA/VIIRS/DNB/MONTHLY_V1/VCMCFG/20170901'); //load nightime data

//Map.addLayer(viirs,{bands:[],min:0,max:1}, 'nightmap', 0);
var specific = viirs.select('avg_rad');
Map.addLayer(specific,{bands:['avg_rad'],min:0,max:1},'masked', 1);

print(specific);
print(viirs); //debug steps

Export.image.toDrive({
  image: specific,
  description: 'nightmap_2017',
  scale:50.0,
  region:fostercity_region
});