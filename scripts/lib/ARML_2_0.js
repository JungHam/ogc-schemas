var ARML_2_0_Module_Factory = function () {
  var ARML_2_0 = {
    n: 'ARML_2_0',
    dens: 'http:\/\/www.opengis.net\/arml\/2.0',
    dans: 'http:\/\/www.w3.org\/1999\/xlink',
    deps: ['GML_3_2_1'],
    tis: [{
        ln: 'ScreenAnchorType.Assets.AssetRef',
        ps: [{
            n: 'href',
            t: 'a'
          }]
      }, {
        ln: 'FeatureType.Anchors.AnchorRef',
        ps: [{
            n: 'href',
            t: 'a'
          }]
      }, {
        ln: 'FillType',
        bti: '.VisualAsset2DType',
        ps: [{
            n: 'style'
          }, {
            n: 'clazz',
            en: 'class'
          }]
      }, {
        ln: 'TrackerType.Src',
        ps: [{
            n: 'href',
            t: 'a'
          }]
      }, {
        ln: 'ARAnchorType.Assets.AssetRef',
        ps: [{
            n: 'href',
            t: 'a'
          }]
      }, {
        ln: 'ArmlType.ARElements',
        ps: [{
            n: 'arElement',
            col: true,
            mx: false,
            dom: false,
            typed: false,
            en: 'ARElement',
            ti: '.ARElementType',
            t: 'er'
          }]
      }, {
        ln: 'DistanceConditionType',
        bti: '.ConditionType',
        ps: [{
            n: 'max',
            ti: 'Double'
          }, {
            n: 'min',
            ti: 'Double'
          }]
      }, {
        ln: 'ArmlType.Style',
        ps: [{
            n: 'value',
            t: 'v'
          }, {
            n: 'type',
            an: {
              lp: 'type'
            },
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }]
      }, {
        ln: 'ConditionType',
        bti: '.ARElementType'
      }, {
        ln: 'VisualAsset2DType',
        bti: '.VisualAssetType',
        ps: [{
            n: 'width'
          }, {
            n: 'height'
          }, {
            n: 'orientationMode'
          }, {
            n: 'backside'
          }]
      }, {
        ln: 'VisualAssetType',
        bti: '.ARElementType',
        ps: [{
            n: 'enabled',
            ti: 'Boolean'
          }, {
            n: 'zOrder',
            ti: 'Int'
          }, {
            n: 'conditions',
            ti: '.VisualAssetType.Conditions'
          }, {
            n: 'orientation',
            en: 'Orientation',
            ti: '.OrientationType'
          }, {
            n: 'scalingMode',
            en: 'ScalingMode',
            ti: '.ScalingModeType'
          }]
      }, {
        ln: 'ARAnchorType',
        bti: '.AnchorType',
        ps: [{
            n: 'assets',
            ti: '.ARAnchorType.Assets'
          }]
      }, {
        ln: 'ARAnchorType.Assets',
        ps: [{
            n: 'visualAsset',
            col: true,
            mx: false,
            dom: false,
            typed: false,
            en: 'VisualAsset',
            ti: '.VisualAssetType',
            t: 'er'
          }, {
            n: 'assetRef',
            col: true,
            ti: '.ARAnchorType.Assets.AssetRef'
          }]
      }, {
        ln: 'TrackableType',
        bti: '.ARAnchorType',
        ps: [{
            n: 'config',
            col: true,
            ti: '.TrackableType.Config'
          }, {
            n: 'size',
            ti: 'Double'
          }]
      }, {
        ln: 'ARElementType',
        ps: [{
            n: 'id',
            ti: 'ID',
            an: {
              lp: 'id'
            },
            t: 'a'
          }]
      }, {
        ln: 'LabelType.Href',
        ps: [{
            n: 'href',
            t: 'a'
          }]
      }, {
        ln: 'ModelType',
        bti: '.VisualAssetType',
        ps: [{
            n: 'href',
            ti: '.ModelType.Href'
          }, {
            n: 'type'
          }, {
            n: 'scale',
            en: 'Scale',
            ti: '.ScaleType'
          }]
      }, {
        ln: 'ScreenAnchorType.Assets',
        ps: [{
            n: 'label',
            col: true,
            en: 'Label',
            ti: '.LabelType'
          }, {
            n: 'assetRef',
            col: true,
            ti: '.ScreenAnchorType.Assets.AssetRef'
          }]
      }, {
        ln: 'ModelType.Href',
        ps: [{
            n: 'href',
            t: 'a'
          }]
      }, {
        ln: 'ImageType.Href',
        ps: [{
            n: 'href',
            t: 'a'
          }]
      }, {
        ln: 'AnchorType',
        bti: '.ARElementType',
        ps: [{
            n: 'enabled',
            ti: 'Boolean'
          }]
      }, {
        ln: 'RelativeToType.Ref',
        ps: [{
            n: 'href',
            t: 'a'
          }]
      }, {
        ln: 'TrackerType',
        bti: '.ARElementType',
        ps: [{
            n: 'uri',
            ti: '.TrackerType.Uri'
          }, {
            n: 'src',
            ti: '.TrackerType.Src'
          }]
      }, {
        ln: 'TrackableType.Config.Tracker',
        ps: [{
            n: 'href',
            t: 'a'
          }]
      }, {
        ln: 'ScreenAnchorType',
        bti: '.AnchorType',
        ps: [{
            n: 'style'
          }, {
            n: 'clazz',
            en: 'class'
          }, {
            n: 'assets',
            ti: '.ScreenAnchorType.Assets'
          }]
      }, {
        ln: 'ArmlType',
        ps: [{
            n: 'arElements',
            en: 'ARElements',
            ti: '.ArmlType.ARElements'
          }, {
            n: 'style',
            col: true,
            ti: '.ArmlType.Style'
          }, {
            n: 'script',
            col: true,
            ti: '.ArmlType.Script'
          }]
      }, {
        ln: 'SelectedConditionType',
        bti: '.ConditionType',
        ps: [{
            n: 'listener'
          }, {
            n: 'selected',
            ti: 'Boolean'
          }]
      }, {
        ln: 'TrackableType.Config',
        ps: [{
            n: 'tracker',
            ti: '.TrackableType.Config.Tracker'
          }, {
            n: 'src'
          }, {
            n: 'order',
            ti: 'Int',
            an: {
              lp: 'order'
            },
            t: 'a'
          }]
      }, {
        ln: 'GeometryType',
        bti: '.ARAnchorType',
        ps: [{
            n: 'point',
            en: {
              lp: 'Point',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            ti: 'GML_3_2_1.PointType'
          }, {
            n: 'lineString',
            en: {
              lp: 'LineString',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            ti: 'GML_3_2_1.LineStringType'
          }, {
            n: 'polygon',
            en: {
              lp: 'Polygon',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            ti: 'GML_3_2_1.PolygonType'
          }]
      }, {
        ln: 'ArmlType.Script',
        ps: [{
            n: 'value',
            t: 'v'
          }, {
            n: 'type',
            an: {
              lp: 'type'
            },
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }]
      }, {
        ln: 'ScalingModeType',
        bti: '.ARElementType',
        ps: [{
            n: 'minScalingDistance',
            ti: 'Double'
          }, {
            n: 'maxScalingDistance',
            ti: 'Double'
          }, {
            n: 'scalingFactor',
            ti: 'Double'
          }, {
            n: 'type',
            an: {
              lp: 'type'
            },
            t: 'a'
          }]
      }, {
        ln: 'OrientationType',
        ps: [{
            n: 'roll',
            ti: 'Double'
          }, {
            n: 'tilt',
            ti: 'Double'
          }, {
            n: 'heading',
            ti: 'Double'
          }]
      }, {
        ln: 'LabelType',
        bti: '.VisualAsset2DType',
        ps: [{
            n: 'href',
            ti: '.LabelType.Href'
          }, {
            n: 'src',
            ti: 'AnyType'
          }, {
            n: 'hyperlinkBehavior'
          }, {
            n: 'viewportWidth',
            ti: 'Integer'
          }]
      }, {
        ln: 'ScaleType',
        ps: [{
            n: 'x',
            ti: 'Double'
          }, {
            n: 'y',
            ti: 'Double'
          }, {
            n: 'z',
            ti: 'Double'
          }]
      }, {
        ln: 'TrackerType.Uri',
        ps: [{
            n: 'href',
            t: 'a'
          }]
      }, {
        ln: 'ImageType',
        bti: '.VisualAsset2DType',
        ps: [{
            n: 'href',
            ti: '.ImageType.Href'
          }]
      }, {
        ln: 'FeatureType',
        bti: '.ARElementType',
        ps: [{
            n: 'name'
          }, {
            n: 'description'
          }, {
            n: 'enabled',
            ti: 'Boolean'
          }, {
            n: 'metadata',
            ti: '.FeatureType.Metadata'
          }, {
            n: 'anchors',
            ti: '.FeatureType.Anchors'
          }]
      }, {
        ln: 'TextType',
        bti: '.VisualAsset2DType',
        ps: [{
            n: 'src'
          }, {
            n: 'style'
          }, {
            n: 'clazz',
            en: 'class'
          }]
      }, {
        ln: 'RelativeToType',
        bti: '.ARAnchorType',
        ps: [{
            n: 'ref',
            ti: '.RelativeToType.Ref'
          }, {
            n: 'point',
            en: {
              lp: 'Point',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            ti: 'GML_3_2_1.PointType'
          }, {
            n: 'lineString',
            en: {
              lp: 'LineString',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            ti: 'GML_3_2_1.LineStringType'
          }, {
            n: 'polygon',
            en: {
              lp: 'Polygon',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            ti: 'GML_3_2_1.PolygonType'
          }]
      }, {
        ln: 'FeatureType.Metadata',
        ps: [{
            n: 'any',
            col: true,
            mx: false,
            t: 'ae'
          }]
      }, {
        ln: 'VisualAssetType.Conditions',
        ps: [{
            n: 'condition',
            col: true,
            mx: false,
            dom: false,
            typed: false,
            en: 'Condition',
            ti: '.ConditionType',
            t: 'er'
          }]
      }, {
        ln: 'FeatureType.Anchors',
        ps: [{
            n: 'anchor',
            col: true,
            mx: false,
            dom: false,
            typed: false,
            en: 'Anchor',
            ti: '.AnchorType',
            t: 'er'
          }, {
            n: 'anchorRef',
            col: true,
            ti: '.FeatureType.Anchors.AnchorRef'
          }]
      }],
    eis: [{
        en: 'Tracker',
        ti: '.TrackerType',
        sh: 'ARElement'
      }, {
        en: 'ScreenAnchor',
        ti: '.ScreenAnchorType',
        sh: 'Anchor'
      }, {
        en: 'VisualAsset',
        ti: '.VisualAssetType',
        sh: 'ARElement'
      }, {
        en: 'ARAnchor',
        ti: '.ARAnchorType',
        sh: 'Anchor'
      }, {
        en: 'VisualAsset2D',
        ti: '.VisualAsset2DType',
        sh: 'VisualAsset'
      }, {
        en: 'Trackable',
        ti: '.TrackableType',
        sh: 'ARAnchor'
      }, {
        en: 'ARElement',
        ti: '.ARElementType'
      }, {
        en: 'Label',
        ti: '.LabelType',
        sh: 'VisualAsset2D'
      }, {
        en: 'Image',
        ti: '.ImageType',
        sh: 'VisualAsset2D'
      }, {
        en: 'Fill',
        ti: '.FillType',
        sh: 'VisualAsset2D'
      }, {
        en: 'Text',
        ti: '.TextType',
        sh: 'VisualAsset2D'
      }, {
        en: 'Anchor',
        ti: '.AnchorType',
        sh: 'ARElement'
      }, {
        en: 'RelativeTo',
        ti: '.RelativeToType',
        sh: 'ARAnchor'
      }, {
        en: 'DistanceCondition',
        ti: '.DistanceConditionType',
        sh: 'Condition'
      }, {
        en: 'arml',
        ti: '.ArmlType'
      }, {
        en: 'SelectedCondition',
        ti: '.SelectedConditionType',
        sh: 'Condition'
      }, {
        en: 'Geometry',
        ti: '.GeometryType',
        sh: 'ARAnchor'
      }, {
        en: 'Condition',
        ti: '.ConditionType',
        sh: 'ARElement'
      }, {
        en: 'Model',
        ti: '.ModelType',
        sh: 'VisualAsset'
      }, {
        en: 'Feature',
        ti: '.FeatureType',
        sh: 'ARElement'
      }]
  };
  return {
    ARML_2_0: ARML_2_0
  };
};
if (typeof define === 'function' && define.amd) {
  define([], ARML_2_0_Module_Factory);
}
else {
  var ARML_2_0_Module = ARML_2_0_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.ARML_2_0 = ARML_2_0_Module.ARML_2_0;
  }
  else {
    var ARML_2_0 = ARML_2_0_Module.ARML_2_0;
  }
}