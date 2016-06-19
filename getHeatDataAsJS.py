import requests
import json
import datetime

heatMapHeader = 'var heatmapData = ['

heatMapLineOfData = '{{location: new google.maps.LatLng({0}, {1}), weight: {2}}}\n'

heatMapFooter = "]; var heatmap = new google.maps.visualization.HeatmapLayer({ \
data: heatmapData \
});\n\
heatmap.setOptions( {radius:50,maxIntensity:20} );\
heatmap.setMap(map);\n\
console.log('Completed');\n"

myScript = []
myScript.append( heatMapHeader )

optusQueryUrl = "http://dartgeo.optuszoo.com.au/geo-service/geo/"
optusQueryHeaders = {'Content-Type':'application/json'}
optusQueryParams = {
	"minWeight":	10,
	"outputSize":	200
}

beachesGeo = {
  "bondi": {
    "boundaries":[
      {"latNW": -33.8900,
       "lonNW": 151.2735,
       "latSE": -33.8940,
       "lonSE": 151.2835}
    ]
  },
  "coogee": {
    "boundaries":[
      {"latNW": -33.919782,
       "lonNW": 151.259585,
       "latSE": -33.923939,
       "lonSE": 151.259585},
      {"latNW": -33.920004,
       "lonNW": 151.258265,
       "latSE": -33.923930,
       "lonSE": 151.258265},
      {"latNW": -33.921616,
       "lonNW": 151.257772,
       "latSE": -33.923832,
       "lonSE": 151.257772}
    ]
  }
}

beachesData = {
  "bondi": {},
  "coogee": {}
}

first = True

for beach in beachesGeo:
    densityCount = 0
    densitySum = 0
    for boundary in beachesGeo[ beach ][ "boundaries" ]:
        params = boundary.copy()
        params.update( optusQueryParams )

        print( params )

        r = requests.post(
            optusQueryUrl,
            data = json.dumps( params ),
            headers = optusQueryHeaders
        )

        print( r.text )

        heatMapJSON = json.loads( r.text )

        
        for entry in heatMapJSON:
            if first:
                first = False
            else:
                myScript.append( ',' )

            myScript.append(
                heatMapLineOfData.format( 
                    entry['lat'],
                    entry['lng'],
                    entry['weight']
                )
            )
            densityCount += 1
            densitySum += entry['weight']

    beachesData[ beach ][ "densityAverage" ] = (densitySum/densityCount)

print( beachesData )

myScript.append( heatMapFooter )
myScript.append( "var beachData = " )
myScript.append( json.dumps( beachesData ) )
myScript.append( ';' );

today = datetime.datetime.today()
print( today.strftime('%Y%m%d%H%M') )



myDataFile = open( 'data.js', 'w' )
myDataFile.write( ''.join(myScript) )
myDataFile.close()
