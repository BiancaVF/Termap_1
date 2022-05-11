var wms_layers = [];


        var lyr_EsriTopographic_0 = new ol.layer.Tile({
            'title': 'Esri Topographic',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://server.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Tipo_Costas_1 = new ol.format.GeoJSON();
var features_Tipo_Costas_1 = format_Tipo_Costas_1.readFeatures(json_Tipo_Costas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tipo_Costas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tipo_Costas_1.addFeatures(features_Tipo_Costas_1);
var lyr_Tipo_Costas_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tipo_Costas_1, 
                style: style_Tipo_Costas_1,
                interactive: true,
                title: 'Tipo_Costas'
            });
var format_Invertebrados_2 = new ol.format.GeoJSON();
var features_Invertebrados_2 = format_Invertebrados_2.readFeatures(json_Invertebrados_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Invertebrados_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Invertebrados_2.addFeatures(features_Invertebrados_2);
var lyr_Invertebrados_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Invertebrados_2, 
                style: style_Invertebrados_2,
                interactive: true,
                title: '<img src="styles/legend/Invertebrados_2.png" /> Invertebrados'
            });
var format_Usos_Playa_3 = new ol.format.GeoJSON();
var features_Usos_Playa_3 = format_Usos_Playa_3.readFeatures(json_Usos_Playa_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Usos_Playa_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Usos_Playa_3.addFeatures(features_Usos_Playa_3);
var lyr_Usos_Playa_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Usos_Playa_3, 
                style: style_Usos_Playa_3,
                interactive: true,
    title: 'Usos_Playa<br />\
    <img src="styles/legend/Usos_Playa_3_0.png" /> Acceso<br />\
    <img src="styles/legend/Usos_Playa_3_1.png" /> Buceo<br />\
    <img src="styles/legend/Usos_Playa_3_2.png" /> Camping<br />\
    <img src="styles/legend/Usos_Playa_3_3.png" /> Histórico/Arqueológico<br />\
    <img src="styles/legend/Usos_Playa_3_4.png" /> Pesca comercial<br />\
    <img src="styles/legend/Usos_Playa_3_5.png" /> Pesca deportiva<br />\
    <img src="styles/legend/Usos_Playa_3_6.png" /> Playa<br />\
    <img src="styles/legend/Usos_Playa_3_7.png" /> Rampa de botes<br />\
    <img src="styles/legend/Usos_Playa_3_8.png" /> Sitio de desechos peligrosos<br />\
    <img src="styles/legend/Usos_Playa_3_9.png" /> Turismo<br />\
    <img src="styles/legend/Usos_Playa_3_10.png" /> Uso comercial<br />\
    <img src="styles/legend/Usos_Playa_3_11.png" /> <br />'
        });

lyr_EsriTopographic_0.setVisible(true);lyr_Tipo_Costas_1.setVisible(true);lyr_Invertebrados_2.setVisible(true);lyr_Usos_Playa_3.setVisible(true);
var layersList = [lyr_EsriTopographic_0,lyr_Tipo_Costas_1,lyr_Invertebrados_2,lyr_Usos_Playa_3];
lyr_Tipo_Costas_1.set('fieldAliases', {'Name': 'Name', 'Fuente': 'Fuente', 'Autores': 'Autores', 'Fecha': 'Fecha', });
lyr_Invertebrados_2.set('fieldAliases', {'Name': 'Name', 'Fuente': 'Fuente', 'Autores': 'Autores', 'Fecha': 'Fecha', 'Especies': 'Especies', 'RAR#': 'RAR#', 'Densidad': 'Densidad', });
lyr_Usos_Playa_3.set('fieldAliases', {'Name': 'Name', 'Fuente': 'Fuente', 'Autores': 'Autores', 'Fecha': 'Fecha', 'Id': 'Id', });
lyr_Tipo_Costas_1.set('fieldImages', {'Name': 'TextEdit', 'Fuente': 'TextEdit', 'Autores': 'TextEdit', 'Fecha': 'TextEdit', });
lyr_Invertebrados_2.set('fieldImages', {'Name': '', 'Fuente': '', 'Autores': '', 'Fecha': '', 'Especies': '', 'RAR#': '', 'Densidad': '', });
lyr_Usos_Playa_3.set('fieldImages', {'Name': 'TextEdit', 'Fuente': 'TextEdit', 'Autores': 'TextEdit', 'Fecha': 'TextEdit', 'Id': 'Range', });
lyr_Tipo_Costas_1.set('fieldLabels', {'Name': 'no label', 'Fuente': 'no label', 'Autores': 'no label', 'Fecha': 'no label', });
lyr_Invertebrados_2.set('fieldLabels', {'Name': 'no label', 'Fuente': 'no label', 'Autores': 'no label', 'Fecha': 'no label', 'Especies': 'no label', 'RAR#': 'no label', 'Densidad': 'no label', });
lyr_Usos_Playa_3.set('fieldLabels', {'Name': 'inline label', 'Fuente': 'inline label', 'Autores': 'no label', 'Fecha': 'no label', 'Id': 'no label', });
lyr_Usos_Playa_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});