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
var format_Municipal_Boundary_1 = new ol.format.GeoJSON();
var features_Municipal_Boundary_1 = format_Municipal_Boundary_1.readFeatures(json_Municipal_Boundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipal_Boundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Municipal_Boundary_1.addFeatures(features_Municipal_Boundary_1);
var lyr_Municipal_Boundary_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Municipal_Boundary_1, 
                style: style_Municipal_Boundary_1,
                interactive: true,
                title: '<img src="styles/legend/Municipal_Boundary_1.png" /> Municipal_Boundary'
            });
var format_Zones_2 = new ol.format.GeoJSON();
var features_Zones_2 = format_Zones_2.readFeatures(json_Zones_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zones_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zones_2.addFeatures(features_Zones_2);
var lyr_Zones_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Zones_2, 
                style: style_Zones_2,
                interactive: true,
                title: '<img src="styles/legend/Zones_2.png" /> Zones'
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
var format_Water_Landuse_4 = new ol.format.GeoJSON();
var features_Water_Landuse_4 = format_Water_Landuse_4.readFeatures(json_Water_Landuse_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Water_Landuse_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Water_Landuse_4.addFeatures(features_Water_Landuse_4);
var lyr_Water_Landuse_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Water_Landuse_4, 
                style: style_Water_Landuse_4,
                interactive: true,
                title: '<img src="styles/legend/Water_Landuse_4.png" /> Water_Landuse'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Municipal_Boundary_1.setVisible(true);lyr_Zones_2.setVisible(true);lyr_Water_3.setVisible(true);lyr_Water_Landuse_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Municipal_Boundary_1,lyr_Zones_2,lyr_Water_3,lyr_Water_Landuse_4];
lyr_Municipal_Boundary_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Entity': 'Entity', 'Layer': 'Layer', 'Color': 'Color', 'Linetype': 'Linetype', 'Elevation': 'Elevation', 'LineWt': 'LineWt', 'RefName': 'RefName', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Zones_2.set('fieldAliases', {'id': 'id', 'ZoneNo': 'ZoneNo', });
lyr_Water_3.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID_3': 'OBJECTID_3', 'OBJECTID': 'OBJECTID', 'Layer': 'Layer', 'level_3': 'level_3', 'Category': 'Category', 'Level_1': 'Level_1', 'Level_2': 'Level_2', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Area': 'Shape_Area', });
lyr_Water_Landuse_4.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID_3': 'OBJECTID_3', 'OBJECTID': 'OBJECTID', 'Layer': 'Layer', 'level_3': 'level_3', 'Category': 'Category', 'Level_1': 'Level_1', 'Level_2': 'Level_2', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Area': 'Shape_Area', 'HubName': 'HubName', 'HubDist': 'HubDist', });
lyr_Municipal_Boundary_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'Entity': 'TextEdit', 'Layer': 'TextEdit', 'Color': 'Range', 'Linetype': 'TextEdit', 'Elevation': 'TextEdit', 'LineWt': 'Range', 'RefName': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Zones_2.set('fieldImages', {'id': 'TextEdit', 'ZoneNo': 'TextEdit', });
lyr_Water_3.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID_2': 'TextEdit', 'OBJECTID_3': 'TextEdit', 'OBJECTID': 'TextEdit', 'Layer': 'TextEdit', 'level_3': 'TextEdit', 'Category': 'TextEdit', 'Level_1': 'TextEdit', 'Level_2': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Water_Landuse_4.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID_2': 'TextEdit', 'OBJECTID_3': 'TextEdit', 'OBJECTID': 'TextEdit', 'Layer': 'TextEdit', 'level_3': 'TextEdit', 'Category': 'TextEdit', 'Level_1': 'TextEdit', 'Level_2': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Area': 'TextEdit', 'HubName': 'TextEdit', 'HubDist': 'TextEdit', });
lyr_Municipal_Boundary_1.set('fieldLabels', {'OBJECTID': 'no label', 'Entity': 'no label', 'Layer': 'no label', 'Color': 'no label', 'Linetype': 'no label', 'Elevation': 'no label', 'LineWt': 'no label', 'RefName': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Zones_2.set('fieldLabels', {'id': 'no label', 'ZoneNo': 'no label', });
lyr_Water_3.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID_2': 'no label', 'OBJECTID_3': 'no label', 'OBJECTID': 'no label', 'Layer': 'no label', 'level_3': 'no label', 'Category': 'no label', 'Level_1': 'no label', 'Level_2': 'no label', 'Shape_Le_1': 'no label', 'Shape_Le_2': 'no label', 'Shape_Area': 'no label', });
lyr_Water_Landuse_4.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID_2': 'no label', 'OBJECTID_3': 'no label', 'OBJECTID': 'no label', 'Layer': 'no label', 'level_3': 'no label', 'Category': 'no label', 'Level_1': 'no label', 'Level_2': 'no label', 'Shape_Le_1': 'no label', 'Shape_Le_2': 'no label', 'Shape_Area': 'no label', 'HubName': 'no label', 'HubDist': 'no label', });
lyr_Water_Landuse_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});