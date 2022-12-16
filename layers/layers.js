var wms_layers = [];

var lyr_Sternnymihranami_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "S terénnymi hranami",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Sternnymihranami_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1992551.172994, 6230886.826952, 1992855.006895, 6231164.545078]
                            })
                        });
var lyr_Bezternnychhrn_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Bez terénnych hrán",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Bezternnychhrn_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1992446.308619, 6230869.084670, 1992902.421782, 6231173.064475]
                            })
                        });
var lyr_ReliefFilter_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Relief Filter",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ReliefFilter_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1992556.567266, 6230913.764559, 1992869.316362, 6231199.118177]
                            })
                        });
var lyr_SteepFilter_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Steep Filter",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/SteepFilter_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1992556.567266, 6230913.764559, 1992869.316362, 6231199.118177]
                            })
                        });
var lyr_DMRzmranabodovReliefFilter_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "DMR z mračna bodov (Relief Filter)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DMRzmranabodovReliefFilter_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1992358.089568, 6230528.723935, 1993033.127060, 6231293.159231]
                            })
                        });
var lyr_DMRzmranabodovSteepFilter_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "DMR z mračna bodov (Steep Filter)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DMRzmranabodovSteepFilter_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1992358.089568, 6230528.723935, 1993033.127060, 6231293.159231]
                            })
                        });
var lyr_DMR50_6 = new ol.layer.Image({
                            opacity: 1,
                            title: "DMR 5.0",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DMR50_6.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1992552.447346, 6230887.032993, 1992854.068041, 6231163.424818]
                            })
                        });
var lyr_DMRzmranabodovGeotronicsReliefFilter_7 = new ol.layer.Image({
                            opacity: 1,
                            title: "DMR z mračna bodov Geotronics (Relief Filter)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DMRzmranabodovGeotronicsReliefFilter_7.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1992556.567266, 6230913.764560, 1992869.316363, 6231199.118178]
                            })
                        });
var lyr_DMRzmranabodovGeotronicsSteepFilter_8 = new ol.layer.Image({
                            opacity: 1,
                            title: "DMR z mračna bodov Geotronics (Steep Filter)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DMRzmranabodovGeotronicsSteepFilter_8.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1992556.567266, 6230913.764560, 1992869.316363, 6231199.118178]
                            })
                        });
var lyr_DMRzmranabodovGKKReliefFilter_9 = new ol.layer.Image({
                            opacity: 1,
                            title: "DMR z mračna bodov ÚGKK (Relief Filter)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DMRzmranabodovGKKReliefFilter_9.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1992556.567266, 6230913.764560, 1992869.316363, 6231199.118178]
                            })
                        });
var lyr_DMRzmranabodovGKKSteepFilter_10 = new ol.layer.Image({
                            opacity: 1,
                            title: "DMR z mračna bodov ÚGKK (Steep Filter)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DMRzmranabodovGKKSteepFilter_10.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1992556.567266, 6230913.764560, 1992869.316363, 6231199.118178]
                            })
                        });
var lyr_DMR50GKK_11 = new ol.layer.Image({
                            opacity: 1,
                            title: "DMR 5.0 (ÚGKK)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DMR50GKK_11.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1992552.447346, 6230887.032993, 1992854.068041, 6231163.424818]
                            })
                        });
var lyr_DMRzmranabodovodGKKReliefFilter_12 = new ol.layer.Image({
                            opacity: 1,
                            title: "DMR z mračna bodov od ÚGKK (Relief Filter)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DMRzmranabodovodGKKReliefFilter_12.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1992446.308619, 6230869.084670, 1992902.421784, 6231173.064475]
                            })
                        });
var lyr_DMRzmranabodovodGKKSteepFilter_13 = new ol.layer.Image({
                            opacity: 1,
                            title: "DMR z mračna bodov od ÚGKK (Steep Filter)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DMRzmranabodovodGKKSteepFilter_13.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1992446.308619, 6230869.084670, 1992902.421784, 6231173.064475]
                            })
                        });
var lyr_DMRzmranabodovGeotronicsReliefFilter_14 = new ol.layer.Image({
                            opacity: 1,
                            title: "DMR z mračna bodov Geotronics (Relief Filter)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DMRzmranabodovGeotronicsReliefFilter_14.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1992446.308619, 6230869.084670, 1992902.421784, 6231173.064475]
                            })
                        });
var lyr_DMRzmranabodovGeotronicsSteepFilter_15 = new ol.layer.Image({
                            opacity: 1,
                            title: "DMR z mračna bodov Geotronics (Steep Filter)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DMRzmranabodovGeotronicsSteepFilter_15.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1992446.308619, 6230869.084670, 1992902.421784, 6231173.064475]
                            })
                        });
var format_Zpornm_16 = new ol.format.GeoJSON();
var features_Zpornm_16 = format_Zpornm_16.readFeatures(json_Zpornm_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zpornm_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zpornm_16.addFeatures(features_Zpornm_16);
var lyr_Zpornm_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Zpornm_16, 
                style: style_Zpornm_16,
                interactive: true,
    title: 'Záporné [m]<br />\
    <img src="styles/legend/Zpornm_16_0.png" /> -5,01 - -4,38<br />\
    <img src="styles/legend/Zpornm_16_1.png" /> -4,38 - -3,76<br />\
    <img src="styles/legend/Zpornm_16_2.png" /> -3,76 - -3,13<br />\
    <img src="styles/legend/Zpornm_16_3.png" /> -3,13 - -2,51<br />\
    <img src="styles/legend/Zpornm_16_4.png" /> -2,51 - -1,88<br />\
    <img src="styles/legend/Zpornm_16_5.png" /> -1,88 - -1,25<br />\
    <img src="styles/legend/Zpornm_16_6.png" /> -1,25 - -0,63<br />\
    <img src="styles/legend/Zpornm_16_7.png" /> -0,63 - 0<br />'
        });
var format_Kladnm_17 = new ol.format.GeoJSON();
var features_Kladnm_17 = format_Kladnm_17.readFeatures(json_Kladnm_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kladnm_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kladnm_17.addFeatures(features_Kladnm_17);
var lyr_Kladnm_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kladnm_17, 
                style: style_Kladnm_17,
                interactive: true,
    title: 'Kladné [m]<br />\
    <img src="styles/legend/Kladnm_17_0.png" /> 0 - 0,59<br />\
    <img src="styles/legend/Kladnm_17_1.png" /> 0,59 - 1,18<br />\
    <img src="styles/legend/Kladnm_17_2.png" /> 1,18 - 1,77<br />\
    <img src="styles/legend/Kladnm_17_3.png" /> 1,77 - 2,36<br />\
    <img src="styles/legend/Kladnm_17_4.png" /> 2,36 - 2,96<br />\
    <img src="styles/legend/Kladnm_17_5.png" /> 2,96 - 3,55<br />\
    <img src="styles/legend/Kladnm_17_6.png" /> 3,55 - 4,14<br />\
    <img src="styles/legend/Kladnm_17_7.png" /> 4,14 - 4,73<br />'
        });
var format_Zpornm_18 = new ol.format.GeoJSON();
var features_Zpornm_18 = format_Zpornm_18.readFeatures(json_Zpornm_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zpornm_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zpornm_18.addFeatures(features_Zpornm_18);
var lyr_Zpornm_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Zpornm_18, 
                style: style_Zpornm_18,
                interactive: true,
    title: 'Záporné [m]<br />\
    <img src="styles/legend/Zpornm_18_0.png" /> -5,01 - -4,38<br />\
    <img src="styles/legend/Zpornm_18_1.png" /> -4,38 - -3,76<br />\
    <img src="styles/legend/Zpornm_18_2.png" /> -3,76 - -3,13<br />\
    <img src="styles/legend/Zpornm_18_3.png" /> -3,13 - -2,51<br />\
    <img src="styles/legend/Zpornm_18_4.png" /> -2,51 - -1,88<br />\
    <img src="styles/legend/Zpornm_18_5.png" /> -1,88 - -1,25<br />\
    <img src="styles/legend/Zpornm_18_6.png" /> -1,25 - -0,63<br />\
    <img src="styles/legend/Zpornm_18_7.png" /> -0,63 - 0<br />'
        });
var format_Kladnm_19 = new ol.format.GeoJSON();
var features_Kladnm_19 = format_Kladnm_19.readFeatures(json_Kladnm_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kladnm_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kladnm_19.addFeatures(features_Kladnm_19);
var lyr_Kladnm_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kladnm_19, 
                style: style_Kladnm_19,
                interactive: true,
    title: 'Kladné [m]<br />\
    <img src="styles/legend/Kladnm_19_0.png" /> 0 - 0,61<br />\
    <img src="styles/legend/Kladnm_19_1.png" /> 0,61 - 1,21<br />\
    <img src="styles/legend/Kladnm_19_2.png" /> 1,21 - 1,82<br />\
    <img src="styles/legend/Kladnm_19_3.png" /> 1,82 - 2,43<br />\
    <img src="styles/legend/Kladnm_19_4.png" /> 2,43 - 3,03<br />\
    <img src="styles/legend/Kladnm_19_5.png" /> 3,03 - 3,64<br />\
    <img src="styles/legend/Kladnm_19_6.png" /> 3,64 - 4,24<br />\
    <img src="styles/legend/Kladnm_19_7.png" /> 4,24 - 4,85<br />'
        });
var format_Zpornm_20 = new ol.format.GeoJSON();
var features_Zpornm_20 = format_Zpornm_20.readFeatures(json_Zpornm_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zpornm_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zpornm_20.addFeatures(features_Zpornm_20);
var lyr_Zpornm_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Zpornm_20, 
                style: style_Zpornm_20,
                interactive: true,
    title: 'Záporné [m]<br />\
    <img src="styles/legend/Zpornm_20_0.png" /> -2,45 - -2,15<br />\
    <img src="styles/legend/Zpornm_20_1.png" /> -2,15 - -1,84<br />\
    <img src="styles/legend/Zpornm_20_2.png" /> -1,84 - -1,53<br />\
    <img src="styles/legend/Zpornm_20_3.png" /> -1,53 - -1,23<br />\
    <img src="styles/legend/Zpornm_20_4.png" /> -1,23 - -0,92<br />\
    <img src="styles/legend/Zpornm_20_5.png" /> -0,92 - -0,61<br />\
    <img src="styles/legend/Zpornm_20_6.png" /> -0,61 - -0,31<br />\
    <img src="styles/legend/Zpornm_20_7.png" /> -0,31 - 0<br />'
        });
var format_Kladnm_21 = new ol.format.GeoJSON();
var features_Kladnm_21 = format_Kladnm_21.readFeatures(json_Kladnm_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kladnm_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kladnm_21.addFeatures(features_Kladnm_21);
var lyr_Kladnm_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kladnm_21, 
                style: style_Kladnm_21,
                interactive: true,
    title: 'Kladné [m]<br />\
    <img src="styles/legend/Kladnm_21_0.png" /> 0 - 0,62<br />\
    <img src="styles/legend/Kladnm_21_1.png" /> 0,62 - 1,24<br />\
    <img src="styles/legend/Kladnm_21_2.png" /> 1,24 - 1,85<br />\
    <img src="styles/legend/Kladnm_21_3.png" /> 1,85 - 2,47<br />\
    <img src="styles/legend/Kladnm_21_4.png" /> 2,47 - 3,09<br />\
    <img src="styles/legend/Kladnm_21_5.png" /> 3,09 - 3,71<br />\
    <img src="styles/legend/Kladnm_21_6.png" /> 3,71 - 4,33<br />\
    <img src="styles/legend/Kladnm_21_7.png" /> 4,33 - 4,95<br />'
        });
var format_Zpornm_22 = new ol.format.GeoJSON();
var features_Zpornm_22 = format_Zpornm_22.readFeatures(json_Zpornm_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zpornm_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zpornm_22.addFeatures(features_Zpornm_22);
var lyr_Zpornm_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Zpornm_22, 
                style: style_Zpornm_22,
                interactive: true,
    title: 'Záporné [m]<br />\
    <img src="styles/legend/Zpornm_22_0.png" /> -2,45 - -2,15<br />\
    <img src="styles/legend/Zpornm_22_1.png" /> -2,15 - -1,84<br />\
    <img src="styles/legend/Zpornm_22_2.png" /> -1,84 - -1,53<br />\
    <img src="styles/legend/Zpornm_22_3.png" /> -1,53 - -1,23<br />\
    <img src="styles/legend/Zpornm_22_4.png" /> -1,23 - -0,92<br />\
    <img src="styles/legend/Zpornm_22_5.png" /> -0,92 - -0,61<br />\
    <img src="styles/legend/Zpornm_22_6.png" /> -0,61 - -0,31<br />\
    <img src="styles/legend/Zpornm_22_7.png" /> -0,31 - 0<br />'
        });
var format_Kladnm_23 = new ol.format.GeoJSON();
var features_Kladnm_23 = format_Kladnm_23.readFeatures(json_Kladnm_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kladnm_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kladnm_23.addFeatures(features_Kladnm_23);
var lyr_Kladnm_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kladnm_23, 
                style: style_Kladnm_23,
                interactive: true,
    title: 'Kladné [m]<br />\
    <img src="styles/legend/Kladnm_23_0.png" /> 0 - 0,62<br />\
    <img src="styles/legend/Kladnm_23_1.png" /> 0,62 - 1,24<br />\
    <img src="styles/legend/Kladnm_23_2.png" /> 1,24 - 1,85<br />\
    <img src="styles/legend/Kladnm_23_3.png" /> 1,85 - 2,47<br />\
    <img src="styles/legend/Kladnm_23_4.png" /> 2,47 - 3,09<br />\
    <img src="styles/legend/Kladnm_23_5.png" /> 3,09 - 3,71<br />\
    <img src="styles/legend/Kladnm_23_6.png" /> 3,71 - 4,33<br />\
    <img src="styles/legend/Kladnm_23_7.png" /> 4,33 - 4,95<br />'
        });
var format_Zpornm_24 = new ol.format.GeoJSON();
var features_Zpornm_24 = format_Zpornm_24.readFeatures(json_Zpornm_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zpornm_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zpornm_24.addFeatures(features_Zpornm_24);
var lyr_Zpornm_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Zpornm_24, 
                style: style_Zpornm_24,
                interactive: true,
    title: 'Záporné [m]<br />\
    <img src="styles/legend/Zpornm_24_0.png" /> -3,67 - -3,21<br />\
    <img src="styles/legend/Zpornm_24_1.png" /> -3,21 - -2,75<br />\
    <img src="styles/legend/Zpornm_24_2.png" /> -2,75 - -2,29<br />\
    <img src="styles/legend/Zpornm_24_3.png" /> -2,29 - -1,83<br />\
    <img src="styles/legend/Zpornm_24_4.png" /> -1,83 - -1,38<br />\
    <img src="styles/legend/Zpornm_24_5.png" /> -1,38 - -0,92<br />\
    <img src="styles/legend/Zpornm_24_6.png" /> -0,92 - -0,46<br />\
    <img src="styles/legend/Zpornm_24_7.png" /> -0,46 - 0<br />'
        });
var format_Kladnm_25 = new ol.format.GeoJSON();
var features_Kladnm_25 = format_Kladnm_25.readFeatures(json_Kladnm_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kladnm_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kladnm_25.addFeatures(features_Kladnm_25);
var lyr_Kladnm_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kladnm_25, 
                style: style_Kladnm_25,
                interactive: true,
    title: 'Kladné [m]<br />\
    <img src="styles/legend/Kladnm_25_0.png" /> 0 - 0,64<br />\
    <img src="styles/legend/Kladnm_25_1.png" /> 0,64 - 1,28<br />\
    <img src="styles/legend/Kladnm_25_2.png" /> 1,28 - 1,93<br />\
    <img src="styles/legend/Kladnm_25_3.png" /> 1,93 - 2,57<br />\
    <img src="styles/legend/Kladnm_25_4.png" /> 2,57 - 3,21<br />\
    <img src="styles/legend/Kladnm_25_5.png" /> 3,21 - 3,85<br />\
    <img src="styles/legend/Kladnm_25_6.png" /> 3,85 - 4,49<br />\
    <img src="styles/legend/Kladnm_25_7.png" /> 4,49 - 5,13<br />'
        });
var group_PointtosurfacerozdielyDMR50 = new ol.layer.Group({
                                layers: [lyr_Zpornm_24,lyr_Kladnm_25,],
                                title: "Point to surface rozdiely (DMR 5.0)"});
var group_PointtosurfacerozdielyDMRzmranabodovGKKSteepFilter = new ol.layer.Group({
                                layers: [lyr_Zpornm_22,lyr_Kladnm_23,],
                                title: "Point to surface rozdiely DMR z mračna bodov ÚGKK (Steep Filter)"});
var group_PointtosurfacerozdielyDMRzmranabodovGKKReliefFilter = new ol.layer.Group({
                                layers: [lyr_Zpornm_20,lyr_Kladnm_21,],
                                title: "Point to surface rozdiely DMR z mračna bodov ÚGKK (Relief Filter)"});
var group_PointtosurfacerozdielyDMRzmranabodovGeotronicsSteepFilter = new ol.layer.Group({
                                layers: [lyr_Zpornm_18,lyr_Kladnm_19,],
                                title: "Point to surface rozdiely DMR z mračna bodov Geotronics (Steep Filter)"});
var group_PointtosurfacerozdielyDMRzmranabodovGeotronicsReliefFilter = new ol.layer.Group({
                                layers: [lyr_Zpornm_16,lyr_Kladnm_17,],
                                title: "Point to surface rozdiely DMR z mračna bodov Geotronics (Relief Filter)"});
var group_SurfacetosurfacerozdielyvztiahnutkuDMRzterestrickhomeraniabezternnychhrn = new ol.layer.Group({
                                layers: [lyr_DMR50GKK_11,lyr_DMRzmranabodovodGKKReliefFilter_12,lyr_DMRzmranabodovodGKKSteepFilter_13,lyr_DMRzmranabodovGeotronicsReliefFilter_14,lyr_DMRzmranabodovGeotronicsSteepFilter_15,],
                                title: "Surface to surface rozdiely vztiahnuté ku DMR z terestrického merania bez terénnych hrán"});
var group_SurfacetosurfacerozdielyvztiahnutkDMRzterestrickhomeraniasternnymihranami = new ol.layer.Group({
                                layers: [lyr_DMRzmranabodovGeotronicsReliefFilter_7,lyr_DMRzmranabodovGeotronicsSteepFilter_8,lyr_DMRzmranabodovGKKReliefFilter_9,lyr_DMRzmranabodovGKKSteepFilter_10,],
                                title: "Surface to surface rozdiely vztiahnuté k DMR z terestrického merania s terénnymi hranami"});
var group_DMRodGKK = new ol.layer.Group({
                                layers: [lyr_DMRzmranabodovReliefFilter_4,lyr_DMRzmranabodovSteepFilter_5,lyr_DMR50_6,],
                                title: "DMR od ÚGKK"});
var group_DMRzmranabodovodGeotronics = new ol.layer.Group({
                                layers: [lyr_ReliefFilter_2,lyr_SteepFilter_3,],
                                title: "DMR z mračna bodov od Geotronics"});
var group_DMRzterestrickchmeran = new ol.layer.Group({
                                layers: [lyr_Sternnymihranami_0,lyr_Bezternnychhrn_1,],
                                title: "DMR z terestrických meraní"});

lyr_Sternnymihranami_0.setVisible(true);lyr_Bezternnychhrn_1.setVisible(true);lyr_ReliefFilter_2.setVisible(true);lyr_SteepFilter_3.setVisible(true);lyr_DMRzmranabodovReliefFilter_4.setVisible(true);lyr_DMRzmranabodovSteepFilter_5.setVisible(true);lyr_DMR50_6.setVisible(true);lyr_DMRzmranabodovGeotronicsReliefFilter_7.setVisible(true);lyr_DMRzmranabodovGeotronicsSteepFilter_8.setVisible(true);lyr_DMRzmranabodovGKKReliefFilter_9.setVisible(true);lyr_DMRzmranabodovGKKSteepFilter_10.setVisible(true);lyr_DMR50GKK_11.setVisible(true);lyr_DMRzmranabodovodGKKReliefFilter_12.setVisible(true);lyr_DMRzmranabodovodGKKSteepFilter_13.setVisible(true);lyr_DMRzmranabodovGeotronicsReliefFilter_14.setVisible(true);lyr_DMRzmranabodovGeotronicsSteepFilter_15.setVisible(true);lyr_Zpornm_16.setVisible(true);lyr_Kladnm_17.setVisible(true);lyr_Zpornm_18.setVisible(true);lyr_Kladnm_19.setVisible(true);lyr_Zpornm_20.setVisible(true);lyr_Kladnm_21.setVisible(true);lyr_Zpornm_22.setVisible(true);lyr_Kladnm_23.setVisible(true);lyr_Zpornm_24.setVisible(true);lyr_Kladnm_25.setVisible(true);
var layersList = [group_DMRzterestrickchmeran,group_DMRzmranabodovodGeotronics,group_DMRodGKK,group_SurfacetosurfacerozdielyvztiahnutkDMRzterestrickhomeraniasternnymihranami,group_SurfacetosurfacerozdielyvztiahnutkuDMRzterestrickhomeraniabezternnychhrn,group_PointtosurfacerozdielyDMRzmranabodovGeotronicsReliefFilter,group_PointtosurfacerozdielyDMRzmranabodovGeotronicsSteepFilter,group_PointtosurfacerozdielyDMRzmranabodovGKKReliefFilter,group_PointtosurfacerozdielyDMRzmranabodovGKKSteepFilter,group_PointtosurfacerozdielyDMR50];
lyr_Zpornm_16.set('fieldAliases', {'fid': 'fid', 'field_1': 'field_1', 'field_2': 'field_2', 'field_3': 'field_3', 'field_4': 'field_4', 'vyska1': 'vyska1', 'rozdiely': 'rozdiely', });
lyr_Kladnm_17.set('fieldAliases', {'fid': 'fid', 'field_1': 'field_1', 'field_2': 'field_2', 'field_3': 'field_3', 'field_4': 'field_4', 'vyska1': 'vyska1', 'rozdiely': 'rozdiely', });
lyr_Zpornm_18.set('fieldAliases', {'fid': 'fid', 'field_1': 'field_1', 'field_2': 'field_2', 'field_3': 'field_3', 'field_4': 'field_4', 'vysky1': 'vysky1', 'rozdiely': 'rozdiely', });
lyr_Kladnm_19.set('fieldAliases', {'fid': 'fid', 'field_1': 'field_1', 'field_2': 'field_2', 'field_3': 'field_3', 'field_4': 'field_4', 'vysky1': 'vysky1', 'rozdiely': 'rozdiely', });
lyr_Zpornm_20.set('fieldAliases', {'fid': 'fid', 'field_1': 'field_1', 'field_2': 'field_2', 'field_3': 'field_3', 'field_4': 'field_4', 'vysky1': 'vysky1', 'rozdiely': 'rozdiely', });
lyr_Kladnm_21.set('fieldAliases', {'fid': 'fid', 'field_1': 'field_1', 'field_2': 'field_2', 'field_3': 'field_3', 'field_4': 'field_4', 'vysky1': 'vysky1', 'rozdiely': 'rozdiely', });
lyr_Zpornm_22.set('fieldAliases', {'fid': 'fid', 'field_1': 'field_1', 'field_2': 'field_2', 'field_3': 'field_3', 'field_4': 'field_4', 'vysky1': 'vysky1', 'rozdiely': 'rozdiely', });
lyr_Kladnm_23.set('fieldAliases', {'fid': 'fid', 'field_1': 'field_1', 'field_2': 'field_2', 'field_3': 'field_3', 'field_4': 'field_4', 'vysky1': 'vysky1', 'rozdiely': 'rozdiely', });
lyr_Zpornm_24.set('fieldAliases', {'fid': 'fid', 'field_1': 'field_1', 'field_2': 'field_2', 'field_3': 'field_3', 'field_4': 'field_4', 'vysky1': 'vysky1', 'rozdiely': 'rozdiely', });
lyr_Kladnm_25.set('fieldAliases', {'fid': 'fid', 'field_1': 'field_1', 'field_2': 'field_2', 'field_3': 'field_3', 'field_4': 'field_4', 'vysky1': 'vysky1', 'rozdiely': 'rozdiely', });
lyr_Zpornm_16.set('fieldImages', {'fid': 'TextEdit', 'field_1': 'TextEdit', 'field_2': 'TextEdit', 'field_3': 'TextEdit', 'field_4': 'TextEdit', 'vyska1': 'TextEdit', 'rozdiely': 'TextEdit', });
lyr_Kladnm_17.set('fieldImages', {'fid': 'TextEdit', 'field_1': 'TextEdit', 'field_2': 'TextEdit', 'field_3': 'TextEdit', 'field_4': 'TextEdit', 'vyska1': 'TextEdit', 'rozdiely': 'TextEdit', });
lyr_Zpornm_18.set('fieldImages', {'fid': 'TextEdit', 'field_1': 'TextEdit', 'field_2': 'TextEdit', 'field_3': 'TextEdit', 'field_4': 'TextEdit', 'vysky1': 'TextEdit', 'rozdiely': 'TextEdit', });
lyr_Kladnm_19.set('fieldImages', {'fid': 'TextEdit', 'field_1': 'TextEdit', 'field_2': 'TextEdit', 'field_3': 'TextEdit', 'field_4': 'TextEdit', 'vysky1': 'TextEdit', 'rozdiely': 'TextEdit', });
lyr_Zpornm_20.set('fieldImages', {'fid': 'TextEdit', 'field_1': 'TextEdit', 'field_2': 'TextEdit', 'field_3': 'TextEdit', 'field_4': 'TextEdit', 'vysky1': 'TextEdit', 'rozdiely': 'TextEdit', });
lyr_Kladnm_21.set('fieldImages', {'fid': 'TextEdit', 'field_1': 'TextEdit', 'field_2': 'TextEdit', 'field_3': 'TextEdit', 'field_4': 'TextEdit', 'vysky1': 'TextEdit', 'rozdiely': 'TextEdit', });
lyr_Zpornm_22.set('fieldImages', {'fid': 'TextEdit', 'field_1': 'TextEdit', 'field_2': 'TextEdit', 'field_3': 'TextEdit', 'field_4': 'TextEdit', 'vysky1': 'TextEdit', 'rozdiely': 'TextEdit', });
lyr_Kladnm_23.set('fieldImages', {'fid': 'TextEdit', 'field_1': 'TextEdit', 'field_2': 'TextEdit', 'field_3': 'TextEdit', 'field_4': 'TextEdit', 'vysky1': 'TextEdit', 'rozdiely': 'TextEdit', });
lyr_Zpornm_24.set('fieldImages', {'fid': 'TextEdit', 'field_1': 'TextEdit', 'field_2': 'TextEdit', 'field_3': 'TextEdit', 'field_4': 'TextEdit', 'vysky1': 'TextEdit', 'rozdiely': 'TextEdit', });
lyr_Kladnm_25.set('fieldImages', {'fid': 'TextEdit', 'field_1': 'TextEdit', 'field_2': 'TextEdit', 'field_3': 'TextEdit', 'field_4': 'TextEdit', 'vysky1': 'TextEdit', 'rozdiely': 'TextEdit', });
lyr_Zpornm_16.set('fieldLabels', {});
lyr_Kladnm_17.set('fieldLabels', {});
lyr_Zpornm_18.set('fieldLabels', {});
lyr_Kladnm_19.set('fieldLabels', {});
lyr_Zpornm_20.set('fieldLabels', {});
lyr_Kladnm_21.set('fieldLabels', {});
lyr_Zpornm_22.set('fieldLabels', {});
lyr_Kladnm_23.set('fieldLabels', {});
lyr_Zpornm_24.set('fieldLabels', {});
lyr_Kladnm_25.set('fieldLabels', {});
lyr_Kladnm_25.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});