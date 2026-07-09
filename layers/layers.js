var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_RTRW_PKP_TM3_1 = new ol.format.GeoJSON();
var features_RTRW_PKP_TM3_1 = format_RTRW_PKP_TM3_1.readFeatures(json_RTRW_PKP_TM3_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RTRW_PKP_TM3_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RTRW_PKP_TM3_1.addFeatures(features_RTRW_PKP_TM3_1);
var lyr_RTRW_PKP_TM3_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RTRW_PKP_TM3_1, 
                style: style_RTRW_PKP_TM3_1,
                popuplayertitle: 'RTRW_PKP_TM3',
                interactive: true,
    title: 'RTRW_PKP_TM3<br />\
    <img src="styles/legend/RTRW_PKP_TM3_1_0.png" /> Kawasan Kesehatan<br />\
    <img src="styles/legend/RTRW_PKP_TM3_1_1.png" /> Kawasan Perdagangan & Jasa<br />\
    <img src="styles/legend/RTRW_PKP_TM3_1_2.png" /> Laut<br />\
    <img src="styles/legend/RTRW_PKP_TM3_1_3.png" /> Sungai<br />\
    <img src="styles/legend/RTRW_PKP_TM3_1_4.png" /> Kolong<br />\
    <img src="styles/legend/RTRW_PKP_TM3_1_5.png" /> Kawasan Resapan Air<br />\
    <img src="styles/legend/RTRW_PKP_TM3_1_6.png" /> Kawasan Pariwisata<br />\
    <img src="styles/legend/RTRW_PKP_TM3_1_7.png" /> Kawasan Pelabuhan<br />\
    <img src="styles/legend/RTRW_PKP_TM3_1_8.png" /> Kawasan Pendidikan<br />\
    <img src="styles/legend/RTRW_PKP_TM3_1_9.png" /> Kawasan Pergudangan<br />\
    <img src="styles/legend/RTRW_PKP_TM3_1_10.png" /> Ruang Terbuka Hijau<br />\
    <img src="styles/legend/RTRW_PKP_TM3_1_11.png" /> Kawasan Perkantoran Pemerintah<br />\
    <img src="styles/legend/RTRW_PKP_TM3_1_12.png" /> Kawasan Perlindungan Setempat<br />\
    <img src="styles/legend/RTRW_PKP_TM3_1_13.png" /> Kawasan Pertahanan dan Keamanan<br />\
    <img src="styles/legend/RTRW_PKP_TM3_1_14.png" /> Kawasan Perumahan Kepadatan Rendah<br />\
    <img src="styles/legend/RTRW_PKP_TM3_1_15.png" /> Kawasan Perumahan Kepadatan Sedang<br />\
    <img src="styles/legend/RTRW_PKP_TM3_1_16.png" /> Kawasan Perumahan Kepadatan Tinggi<br />\
    <img src="styles/legend/RTRW_PKP_TM3_1_17.png" /> Kawasan Peruntukan Industri<br />\
    <img src="styles/legend/RTRW_PKP_TM3_1_18.png" /> Kawasan Waterfront City<br />\
    <img src="styles/legend/RTRW_PKP_TM3_1_19.png" /> Ruang Cagar Budaya<br />\
    <img src="styles/legend/RTRW_PKP_TM3_1_20.png" /> <br />' });
var format_KesesuaianTuplah_RTRW_Kota_Pangkalpinang_2 = new ol.format.GeoJSON();
var features_KesesuaianTuplah_RTRW_Kota_Pangkalpinang_2 = format_KesesuaianTuplah_RTRW_Kota_Pangkalpinang_2.readFeatures(json_KesesuaianTuplah_RTRW_Kota_Pangkalpinang_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KesesuaianTuplah_RTRW_Kota_Pangkalpinang_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KesesuaianTuplah_RTRW_Kota_Pangkalpinang_2.addFeatures(features_KesesuaianTuplah_RTRW_Kota_Pangkalpinang_2);
var lyr_KesesuaianTuplah_RTRW_Kota_Pangkalpinang_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KesesuaianTuplah_RTRW_Kota_Pangkalpinang_2, 
                style: style_KesesuaianTuplah_RTRW_Kota_Pangkalpinang_2,
                popuplayertitle: 'Kesesuaian Tuplah_RTRW_Kota_Pangkalpinang',
                interactive: true,
    title: 'Kesesuaian Tuplah_RTRW_Kota_Pangkalpinang<br />\
    <img src="styles/legend/KesesuaianTuplah_RTRW_Kota_Pangkalpinang_2_0.png" /> Belum Ditentukan<br />\
    <img src="styles/legend/KesesuaianTuplah_RTRW_Kota_Pangkalpinang_2_1.png" /> Sesuai<br />\
    <img src="styles/legend/KesesuaianTuplah_RTRW_Kota_Pangkalpinang_2_2.png" /> Tidak Sesuai<br />\
    <img src="styles/legend/KesesuaianTuplah_RTRW_Kota_Pangkalpinang_2_3.png" /> <br />' });
var format_ADM_KEC_PKPTM3_3 = new ol.format.GeoJSON();
var features_ADM_KEC_PKPTM3_3 = format_ADM_KEC_PKPTM3_3.readFeatures(json_ADM_KEC_PKPTM3_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADM_KEC_PKPTM3_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADM_KEC_PKPTM3_3.addFeatures(features_ADM_KEC_PKPTM3_3);
var lyr_ADM_KEC_PKPTM3_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADM_KEC_PKPTM3_3, 
                style: style_ADM_KEC_PKPTM3_3,
                popuplayertitle: 'ADM_KEC_PKPTM3',
                interactive: false,
                title: '<img src="styles/legend/ADM_KEC_PKPTM3_3.png" /> ADM_KEC_PKPTM3'
            });

lyr_OSMStandard_0.setVisible(true);lyr_RTRW_PKP_TM3_1.setVisible(false);lyr_KesesuaianTuplah_RTRW_Kota_Pangkalpinang_2.setVisible(true);lyr_ADM_KEC_PKPTM3_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_RTRW_PKP_TM3_1,lyr_KesesuaianTuplah_RTRW_Kota_Pangkalpinang_2,lyr_ADM_KEC_PKPTM3_3];
lyr_RTRW_PKP_TM3_1.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Rencana Tata Ruang Wilayah', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Clamped': 'Clamped', 'Extruded': 'Extruded', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Luas Rencana Tata Ruang (Ha)', });
lyr_KesesuaianTuplah_RTRW_Kota_Pangkalpinang_2.set('fieldAliases', {'FID_RTRW_P': 'FID_RTRW_P', 'OID_': 'OID_', 'Name': 'Rencana Tata Ruang', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Clamped': 'Clamped', 'Extruded': 'Extruded', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'FID_Penggu': 'FID_Penggu', 'Q2020': 'Penggunaan Tanah', 'Q_Rek': 'Penggunaan', 'L_Qrek': 'L_Qrek', 'Kesesuaian': 'Kesesuaian Terhadap RTRW', 'Luas_Ha': 'Luas Penggunaan (Ha)', });
lyr_ADM_KEC_PKPTM3_3.set('fieldAliases', {'KECAMATAN': 'KECAMATAN', });
lyr_RTRW_PKP_TM3_1.set('fieldImages', {'OID_': 'Hidden', 'Name': 'TextEdit', 'FolderPath': 'Hidden', 'SymbolID': 'JsonEdit', 'AltMode': 'Hidden', 'Base': 'Hidden', 'Clamped': 'Hidden', 'Extruded': 'Hidden', 'Snippet': 'Hidden', 'PopupInfo': 'Hidden', 'Shape_Leng': 'Hidden', 'Shape_Area': 'TextEdit', });
lyr_KesesuaianTuplah_RTRW_Kota_Pangkalpinang_2.set('fieldImages', {'FID_RTRW_P': 'Hidden', 'OID_': 'Hidden', 'Name': 'TextEdit', 'FolderPath': 'Hidden', 'SymbolID': 'Hidden', 'AltMode': 'Hidden', 'Base': 'Hidden', 'Clamped': 'Hidden', 'Extruded': 'Hidden', 'Snippet': 'Hidden', 'PopupInfo': 'Hidden', 'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', 'FID_Penggu': 'Hidden', 'Q2020': 'TextEdit', 'Q_Rek': 'Hidden', 'L_Qrek': 'Hidden', 'Kesesuaian': 'TextEdit', 'Luas_Ha': 'TextEdit', });
lyr_ADM_KEC_PKPTM3_3.set('fieldImages', {'KECAMATAN': 'TextEdit', });
lyr_RTRW_PKP_TM3_1.set('fieldLabels', {'Name': 'inline label - visible with data', 'SymbolID': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_KesesuaianTuplah_RTRW_Kota_Pangkalpinang_2.set('fieldLabels', {'Name': 'inline label - always visible', 'Q2020': 'inline label - always visible', 'Kesesuaian': 'inline label - always visible', 'Luas_Ha': 'inline label - always visible', });
lyr_ADM_KEC_PKPTM3_3.set('fieldLabels', {'KECAMATAN': 'no label', });
lyr_ADM_KEC_PKPTM3_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});