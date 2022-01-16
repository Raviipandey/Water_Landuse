var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_WardBoundary_1 = new ol.format.GeoJSON();
var features_WardBoundary_1 = format_WardBoundary_1.readFeatures(json_WardBoundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WardBoundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WardBoundary_1.addFeatures(features_WardBoundary_1);
var lyr_WardBoundary_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WardBoundary_1, 
                style: style_WardBoundary_1,
                interactive: true,
                title: '<img src="styles/legend/WardBoundary_1.png" /> WardBoundary'
            });
var format_Landuse_2 = new ol.format.GeoJSON();
var features_Landuse_2 = format_Landuse_2.readFeatures(json_Landuse_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Landuse_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Landuse_2.addFeatures(features_Landuse_2);
var lyr_Landuse_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Landuse_2, 
                style: style_Landuse_2,
                interactive: true,
                title: '<img src="styles/legend/Landuse_2.png" /> Landuse'
            });
var format_Water_3 = new ol.format.GeoJSON();
var features_Water_3 = format_Water_3.readFeatures(json_Water_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Water_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Water_3.addFeatures(features_Water_3);
var lyr_Water_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Water_3, 
                style: style_Water_3,
                interactive: true,
                title: '<img src="styles/legend/Water_3.png" /> Water'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_WardBoundary_1.setVisible(true);lyr_Landuse_2.setVisible(true);lyr_Water_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_WardBoundary_1,lyr_Landuse_2,lyr_Water_3];
lyr_WardBoundary_1.set('fieldAliases', {'Name': 'Name', 'WardNumber': 'WardNumber', });
lyr_Landuse_2.set('fieldAliases', {'level_3': 'level_3', 'Facility': 'Facility', 'Level_1': 'Level_1', 'Name_Surve': 'Name_Surve', 'Level_2': 'Level_2', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Water_3.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID_3': 'OBJECTID_3', 'OBJECTID': 'OBJECTID', 'Layer': 'Layer', 'level_3': 'level_3', 'Category': 'Category', 'Level_1': 'Level_1', 'Level_2': 'Level_2', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Area': 'Shape_Area', });
lyr_WardBoundary_1.set('fieldImages', {'Name': 'TextEdit', 'WardNumber': 'TextEdit', });
lyr_Landuse_2.set('fieldImages', {'level_3': 'TextEdit', 'Facility': 'TextEdit', 'Level_1': 'TextEdit', 'Name_Surve': 'TextEdit', 'Level_2': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Water_3.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID_2': 'TextEdit', 'OBJECTID_3': 'TextEdit', 'OBJECTID': 'TextEdit', 'Layer': 'TextEdit', 'level_3': 'TextEdit', 'Category': 'TextEdit', 'Level_1': 'TextEdit', 'Level_2': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_WardBoundary_1.set('fieldLabels', {'Name': 'no label', 'WardNumber': 'no label', });
lyr_Landuse_2.set('fieldLabels', {'level_3': 'no label', 'Facility': 'no label', 'Level_1': 'no label', 'Name_Surve': 'no label', 'Level_2': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Water_3.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID_2': 'no label', 'OBJECTID_3': 'no label', 'OBJECTID': 'no label', 'Layer': 'no label', 'level_3': 'no label', 'Category': 'no label', 'Level_1': 'no label', 'Level_2': 'no label', 'Shape_Le_1': 'no label', 'Shape_Le_2': 'no label', 'Shape_Area': 'no label', });
lyr_Water_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});