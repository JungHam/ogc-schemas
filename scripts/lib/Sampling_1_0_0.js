var Sampling_1_0_0_Module_Factory = function () {
  var Sampling_1_0_0 = {
    n: 'Sampling_1_0_0',
    dens: 'http:\/\/www.opengis.net\/sampling\/1.0',
    dans: 'http:\/\/www.w3.org\/1999\/xlink',
    deps: ['GML_3_1_1', 'XLink_1_0', 'OM_1_0_0'],
    tis: [{
        ln: 'SamplingFeatureType',
        bti: 'GML_3_1_1.AbstractFeatureType',
        ps: [{
            n: 'sampledFeature',
            rq: true,
            col: true,
            ti: 'GML_3_1_1.FeaturePropertyType'
          }, {
            n: 'relatedObservation',
            mno: 0,
            col: true,
            ti: 'OM_1_0_0.ObservationPropertyType'
          }, {
            n: 'relatedSamplingFeature',
            mno: 0,
            col: true,
            ti: '.SamplingFeatureRelationPropertyType'
          }, {
            n: 'surveyDetails',
            ti: '.SurveyProcedurePropertyType'
          }]
      }, {
        ln: 'SamplingCurveType',
        bti: '.SpatiallyExtensiveSamplingFeatureType',
        ps: [{
            n: 'shape',
            rq: true,
            ti: 'GML_3_1_1.CurvePropertyType'
          }, {
            n: 'length',
            ti: 'GML_3_1_1.MeasureType'
          }]
      }, {
        ln: 'SurveyProcedurePropertyType',
        ps: [{
            n: 'surveyProcedure',
            rq: true,
            en: 'SurveyProcedure',
            ti: '.SurveyProcedureType'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'AnyOrReferenceType',
        ps: [{
            n: 'any',
            rq: true,
            dom: false,
            mx: false,
            t: 'ae'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'SamplingFeaturePropertyType',
        ps: [{
            n: 'samplingFeature',
            rq: true,
            mx: false,
            dom: false,
            en: 'SamplingFeature',
            ti: '.SamplingFeatureType',
            t: 'er'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'SamplingFeatureRelationType',
        ps: [{
            n: 'role',
            rq: true,
            ti: 'GML_3_1_1.CodeType'
          }, {
            n: 'target',
            rq: true,
            ti: '.SamplingFeaturePropertyType'
          }]
      }, {
        ln: 'SamplingCurvePropertyType',
        ps: [{
            n: 'samplingCurve',
            rq: true,
            en: 'SamplingCurve',
            ti: '.SamplingCurveType'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'SamplingSolidPropertyType',
        ps: [{
            n: 'samplingSolid',
            rq: true,
            en: 'SamplingSolid',
            ti: '.SamplingSolidType'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'SurveyProcedureType',
        bti: 'GML_3_1_1.AbstractFeatureType',
        ps: [{
            n: 'operator',
            ti: '.AnyOrReferenceType'
          }, {
            n: 'elevationDatum',
            ti: 'GML_3_1_1.ReferenceType'
          }, {
            n: 'elevationMethod',
            ti: 'OM_1_0_0.ProcessPropertyType'
          }, {
            n: 'elevationAccuracy',
            ti: 'GML_3_1_1.MeasureType'
          }, {
            n: 'geodeticDatum',
            ti: 'GML_3_1_1.ReferenceType'
          }, {
            n: 'positionMethod',
            rq: true,
            ti: 'OM_1_0_0.ProcessPropertyType'
          }, {
            n: 'positionAccuracy',
            ti: 'GML_3_1_1.MeasureType'
          }, {
            n: 'projection',
            ti: 'GML_3_1_1.ReferenceType'
          }, {
            n: 'surveyTime',
            ti: 'GML_3_1_1.TimePrimitivePropertyType'
          }]
      }, {
        ln: 'SamplingFeatureCollectionPropertyType',
        ps: [{
            n: 'samplingFeatureCollection',
            rq: true,
            en: 'SamplingFeatureCollection',
            ti: '.SamplingFeatureCollectionType'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'SpatiallyExtensiveSamplingFeatureType',
        bti: '.SamplingFeatureType'
      }, {
        ln: 'LocatedSpecimenPropertyType',
        ps: [{
            n: 'locatedSpecimen',
            rq: true,
            en: 'LocatedSpecimen',
            ti: '.LocatedSpecimenType'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'SamplingSurfacePropertyType',
        ps: [{
            n: 'samplingSurface',
            rq: true,
            en: 'SamplingSurface',
            ti: '.SamplingSurfaceType'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'SamplingFeatureRelationPropertyType',
        ps: [{
            n: 'samplingFeatureRelation',
            rq: true,
            en: 'SamplingFeatureRelation',
            ti: '.SamplingFeatureRelationType'
          }]
      }, {
        ln: 'LocatedSpecimenType',
        bti: '.SpecimenType',
        ps: [{
            n: 'samplingLocation',
            rq: true,
            ti: 'GML_3_1_1.GeometryPropertyType'
          }]
      }, {
        ln: 'SamplingSurfaceType',
        bti: '.SpatiallyExtensiveSamplingFeatureType',
        ps: [{
            n: 'shape',
            rq: true,
            ti: 'GML_3_1_1.SurfacePropertyType'
          }, {
            n: 'area',
            ti: 'GML_3_1_1.MeasureType'
          }]
      }, {
        ln: 'SamplingPointType',
        bti: '.SamplingFeatureType',
        ps: [{
            n: 'position',
            rq: true,
            ti: 'GML_3_1_1.PointPropertyType'
          }]
      }, {
        ln: 'LocationPropertyType',
        ps: [{
            n: 'geometry',
            rq: true,
            mx: false,
            dom: false,
            en: {
              lp: '_Geometry',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            ti: 'GML_3_1_1.AbstractGeometryType',
            t: 'er'
          }, {
            n: 'exGeographicDescription',
            rq: true,
            en: 'EX_GeographicDescription',
            ti: '.AnyOrReferenceType'
          }, {
            n: 'unionSemantics',
            an: {
              lp: 'unionSemantics'
            },
            t: 'a'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'SpecimenPropertyType',
        ps: [{
            n: 'specimen',
            rq: true,
            mx: false,
            dom: false,
            en: 'Specimen',
            ti: '.SpecimenType',
            t: 'er'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'SamplingSolidType',
        bti: '.SpatiallyExtensiveSamplingFeatureType',
        ps: [{
            n: 'shape',
            rq: true,
            ti: 'GML_3_1_1.SolidPropertyType'
          }, {
            n: 'volume',
            ti: 'GML_3_1_1.MeasureType'
          }]
      }, {
        ln: 'SpatiallyExtensiveSamplingFeaturePropertyType',
        ps: [{
            n: 'spatiallyExtensiveSamplingFeature',
            rq: true,
            mx: false,
            dom: false,
            en: 'SpatiallyExtensiveSamplingFeature',
            ti: '.SpatiallyExtensiveSamplingFeatureType',
            t: 'er'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'SamplingFeatureCollectionType',
        bti: '.SamplingFeatureType',
        ps: [{
            n: 'member',
            rq: true,
            col: true,
            ti: '.SamplingFeaturePropertyType'
          }]
      }, {
        ln: 'SamplingPointPropertyType',
        ps: [{
            n: 'samplingPoint',
            rq: true,
            en: 'SamplingPoint',
            ti: '.SamplingPointType'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'SpecimenType',
        bti: '.SamplingFeatureType',
        ps: [{
            n: 'materialClass',
            rq: true,
            ti: 'GML_3_1_1.CodeType'
          }, {
            n: 'currentLocation',
            ti: '.LocationPropertyType'
          }, {
            n: 'size',
            ti: '.SpecimenType.Size'
          }, {
            n: 'samplingMethod',
            ti: 'GML_3_1_1.ReferenceType'
          }, {
            n: 'samplingTime',
            rq: true,
            ti: 'GML_3_1_1.TimePrimitivePropertyType'
          }, {
            n: 'processingDetails',
            mno: 0,
            col: true,
            ti: 'GML_3_1_1.ReferenceType'
          }]
      }, {
        ln: 'SpecimenType.Size',
        tn: null,
        bti: 'GML_3_1_1.MeasureType',
        ps: [{
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        t: 'enum',
        ln: 'PositionMethodType',
        vs: ['Unknown', 'GPS', 'GPS2', 'GPS3', 'GPS4', 'Astronomical', 'Surveyed from ground control', 'Published report', 'Unpublished report', 'Non-standard topographic map', '25k topo map', '50k topo map', '100k topo map', '250k topo map', '500k topo map', '1M topo map', 'Non-standard geological map', '25k geological map', '50k geological map', '100k geological map', '250k geological map', '500k geological map', '1M geological map', 'Differential GPS - Survey quality', 'Differential GPS', 'Averaged GPS', 'Orthophoto', '25k orthophoto', 'Company supplied location - method unkown', 'State\/NT supplied location - method unkown']
      }],
    eis: [{
        en: 'SamplingFeature',
        ti: '.SamplingFeatureType',
        sh: {
          lp: '_Feature',
          ns: 'http:\/\/www.opengis.net\/gml'
        }
      }, {
        en: 'LocatedSpecimen',
        ti: '.LocatedSpecimenType',
        sh: 'Specimen'
      }, {
        en: 'SamplingSolid',
        ti: '.SamplingSolidType',
        sh: 'SpatiallyExtensiveSamplingFeature'
      }, {
        en: 'SamplingFeatureCollection',
        ti: '.SamplingFeatureCollectionType',
        sh: 'SamplingFeature'
      }, {
        en: 'SpatiallyExtensiveSamplingFeature',
        ti: '.SpatiallyExtensiveSamplingFeatureType',
        sh: 'SamplingFeature'
      }, {
        en: 'SurveyProcedure',
        ti: '.SurveyProcedureType',
        sh: {
          lp: '_Feature',
          ns: 'http:\/\/www.opengis.net\/gml'
        }
      }, {
        en: 'SamplingFeatureRelation',
        ti: '.SamplingFeatureRelationType'
      }, {
        en: 'SamplingSurface',
        ti: '.SamplingSurfaceType',
        sh: 'SpatiallyExtensiveSamplingFeature'
      }, {
        en: 'SamplingCurve',
        ti: '.SamplingCurveType',
        sh: 'SpatiallyExtensiveSamplingFeature'
      }, {
        en: 'Specimen',
        ti: '.SpecimenType',
        sh: 'SamplingFeature'
      }, {
        en: 'SamplingPoint',
        ti: '.SamplingPointType',
        sh: 'SamplingFeature'
      }]
  };
  return {
    Sampling_1_0_0: Sampling_1_0_0
  };
};
if (typeof define === 'function' && define.amd) {
  define([], Sampling_1_0_0_Module_Factory);
}
else {
  var Sampling_1_0_0_Module = Sampling_1_0_0_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.Sampling_1_0_0 = Sampling_1_0_0_Module.Sampling_1_0_0;
  }
  else {
    var Sampling_1_0_0 = Sampling_1_0_0_Module.Sampling_1_0_0;
  }
}